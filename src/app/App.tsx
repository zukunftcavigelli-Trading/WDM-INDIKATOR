import { Shield, MessageCircle, Play } from "lucide-react";

export default function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#141414] border border-[rgba(212,175,55,0.3)] rounded-full px-6 py-2 mb-8">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37]">WDM-Indikator</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#f5f5f0] via-[#d4af37] to-[#f5f5f0] bg-clip-text text-transparent leading-tight">
              Statt zig Indikatoren im Chart – ein Indikator, der dir den Klartext liefert
            </h1>

            <p className="text-2xl md:text-3xl text-[#d4af37] mb-12 font-medium">
              85% der angezeigten Zonen sind Winnerzonen
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="https://t.me/WDMMarketAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141414] border-2 border-[#d4af37] text-[#d4af37] py-4 px-8 rounded-lg hover:bg-[#d4af37] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram Support - Paul WDM-Community
              </a>
            </div>

            {/* Video Placeholder */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#141414] border-2 border-[rgba(212,175,55,0.3)] rounded-2xl p-4 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <div className="aspect-video bg-[#0a0a0a] rounded-lg flex items-center justify-center border border-[rgba(212,175,55,0.2)]">
                  <div className="text-center">
                    <Play className="w-20 h-20 text-[#d4af37] mx-auto mb-4" />
                    <p className="text-[#a0a0a0] text-lg">
                      Erklärvideo Platzhalter
                    </p>
                    <p className="text-[#6a6a6a] text-sm mt-2">
                      Hier wird später dein Video eingebettet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Images Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-12 text-center">
            Der <span className="text-[#d4af37]">Indikator</span> in Aktion
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <div className="aspect-video bg-[#0a0a0a] rounded-lg flex items-center justify-center border border-[rgba(212,175,55,0.15)]">
                  <div className="text-center">
                    <p className="text-[#d4af37] text-lg font-medium">Beispielbild {num}</p>
                    <p className="text-[#6a6a6a] text-sm mt-2">
                      Hier kommt dein Screenshot
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buy Button */}
          <div className="text-center">
            <a
              href="https://buy.stripe.com/7sY3cvdGq8Ht3MBaLHaZi00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-5 px-12 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] text-xl font-medium"
            >
              Jetzt Indikator für 99.99 EUR sichern
            </a>
            <p className="text-[#4ade80] text-sm mt-4">
              Nur 99 Plätze verfügbar
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4 text-center text-[#d4af37]">
            Noch Fragen zum Indikator?
          </h2>
          <p className="text-[#a0a0a0] text-center mb-10">
            Schreib uns und wir helfen dir gerne weiter!
          </p>

          <form className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#f5f5f0] mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
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
                className="w-full bg-[#1a1a1a] border border-[rgba(212,175,55,0.2)] rounded-lg px-4 py-3 text-[#f5f5f0] focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,0.3)] transition-all"
                placeholder="Deine Frage zum Indikator..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#16a34a] text-white py-4 px-6 rounded-lg hover:from-[#4ade80] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(212,175,55,0.2)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-[#d4af37] mb-4">WDM-Indikator</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Der Trading-Indikator, der dir klare Signale liefert.
              </p>
            </div>

            <div>
              <h3 className="text-[#d4af37] mb-4">Rechtliches</h3>
              <ul className="space-y-2 text-[#a0a0a0] text-sm">
                <li>Impressum</li>
                <li>Datenschutz</li>
                <li>AGB</li>
                <li>Risikohinweis</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#d4af37] mb-4">Kontakt</h3>
              <a
                href="https://t.me/WDMMarketAnalytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram Support
              </a>
            </div>
          </div>

          <div className="border-t border-[rgba(212,175,55,0.1)] pt-8 text-center">
            <p className="text-[#a0a0a0] text-sm">
              © 2026 WDM-Indikator. Alle Rechte vorbehalten.
            </p>
            <p className="text-[#6a6a6a] text-xs mt-2">
              Risikohinweis: Trading birgt erhebliche Verlustrisiken. Investieren Sie nur Kapital, dessen Verlust Sie sich leisten können.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
