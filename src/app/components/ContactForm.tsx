import { useState } from "react";
import { MessageCircle } from "lucide-react";

// Telegram Bot Daten aus Umgebungsvariablen
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || "";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Erstelle die Nachricht für Telegram
    const message = `
🆕 Neue Indikator-Anfrage

👤 Name: ${formData.name}
📧 E-Mail: ${formData.email}
💬 Nachricht: ${formData.message}
    `.trim();

    try {
      // Sende an Telegram Bot API
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        alert("Vielen Dank für deine Anfrage! Wir melden uns in Kürze bei dir.");
        // Formular zurücksetzen
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Fehler beim Senden");
      }
    } catch (error) {
      console.error("Fehler:", error);
      alert("Es gab ein Problem beim Senden der Anfrage. Bitte kontaktiere uns direkt über Telegram.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#f5f5f0] mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg px-4 py-3 text-[#f5f5f0] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.3)] transition-all"
            placeholder="Dein Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-[#f5f5f0] mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg px-4 py-3 text-[#f5f5f0] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.3)] transition-all"
            placeholder="deine@email.de"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-[#f5f5f0] mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg px-4 py-3 text-[#f5f5f0] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.3)] transition-all"
            placeholder="Deine Frage zum Indikator..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8942f] text-[#0a0a0a] py-4 px-6 rounded-lg hover:from-[#e8c968] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </button>
      </form>

      {/* 24/7 Support Button */}
      <div className="text-center mt-10">
        <p className="text-[#a0a0a0] mb-4">
          Oder schreib uns direkt auf Telegram:
        </p>
        <a
          href="https://t.me/WDMMarketAnalytics?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#141414] border-2 border-[#d4af37] text-[#d4af37] py-4 px-8 rounded-lg hover:bg-[#d4af37] hover:text-white transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" />
          24/7 WDM-Community Support
        </a>
      </div>
    </>
  );
}
