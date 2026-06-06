// Netlify Function: proxy contact-form submissions to Telegram.
// Bot token stays in env vars (never exposed to the client).
export const config = { path: "/api/contact" };

export default async (req) => {
  if (req.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return json({ ok: false, error: "bad_json" }, 400);
  }

  const name = str(data.name, 200);
  const email = str(data.email, 200);
  const message = str(data.message, 2000);

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }

  const token =
    process.env.VITE_TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId =
    process.env.VITE_TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return json({ ok: false, error: "server_not_configured" }, 500);
  }

  const text =
    `🆕 Neue Indikator-Anfrage\n\n` +
    `👤 Name: ${name}\n` +
    `📧 E-Mail: ${email}\n` +
    `💬 Nachricht: ${message}`;

  try {
    const tg = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
      }
    );
    if (!tg.ok) {
      return json({ ok: false, error: "telegram_failed" }, 502);
    }
  } catch {
    return json({ ok: false, error: "telegram_unreachable" }, 502);
  }

  return json({ ok: true }, 200);
};

function str(v, max) {
  return (v == null ? "" : String(v)).trim().slice(0, max);
}
function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
