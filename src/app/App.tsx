import { Shield, MessageCircle, Phone } from "lucide-react";
import beispiel1 from "../imports/Indikator_BSP_1.jpg";
import beispiel2 from "../imports/BTC-Indikator_BSP2.jpg";
import beispiel3 from "../imports/photo_2026-05-26_23.16.35.jpeg";
import beispiel4 from "../imports/photo_2026-05-26_23.16.21.jpeg";
import erklaervideo from "../imports/Erkla_rvideo_Website.mp4";
import { ContactForm } from "./components/ContactForm";

export default function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,175,55,0.05)] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#141414] border border-[rgba(212,175,55,0.3)] rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37]">WDM-Indikator</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-[#f5f5f0] via-[#d4af37] to-[#f5f5f0] bg-clip-text text-transparent leading-tight">
              Statt viele Indikatoren im Chart – ein Indikator, der dir den Klartext liefert
            </h1>

            <p className="text-xl md:text-2xl text-[#d4af37] mb-8 font-medium">
              85% der angezeigten Zonen sind Winnerzonen
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://t.me/WDMMarketAnalytics?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#d4af37] to-[#b8942f] text-[#0a0a0a] py-4 px-8 rounded-lg hover:from-[#e8c968] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                24/7 Telegram Support
              </a>
              <a
                href="https://wa.me/41765800339?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-4 px-8 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center gap-2 font-medium"
              >
                <Phone className="w-5 h-5" />
                24/7 WhatsApp Support
              </a>
            </div>

            {/* Video */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#141414] border-2 border-[rgba(212,175,55,0.3)] rounded-2xl p-4 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <div className="aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[rgba(212,175,55,0.2)]">
                  <video
                    controls
                    className="w-full h-full"
                    src={erklaervideo}
                  >
                    Dein Browser unterstützt keine Videos.
                  </video>
                </div>
              </div>
            </div>

            {/* CTA Section after Video */}
            <div className="max-w-4xl mx-auto mt-12 text-center">
              {/* Green Buy Button */}
              <div className="mb-8">
                <a
                  href="https://buy.stripe.com/7sY3cvdGq8Ht3MBaLHaZi00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-5 px-12 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] text-xl font-medium"
                >
                  Jetzt Indikator sichern
                </a>
              </div>

              {/* Text and Contact Buttons */}
              <div>
                <p className="text-[#a0a0a0] mb-4">
                  Du hast das Video geschaut und hast Fragen? Schreibe mir auf Telegram oder WhatsApp
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://t.me/WDMMarketAnalytics?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b8942f] text-[#0a0a0a] py-3 px-6 rounded-lg hover:from-[#e8c968] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    24/7 Telegram Support
                  </a>
                  <a
                    href="https://wa.me/41765800339?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-3 px-6 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    24/7 WhatsApp Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-16 text-center text-[#d4af37]">
            So erhältst du vollen Zugriff zum WDM-Indikator
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Schritt 1 */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b8942f] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl text-[#d4af37]">Schritt 1</h3>
              </div>
              <p className="text-[#f5f5f0] text-lg">
                Schau dir das Willkommens Video an
              </p>
            </div>

            {/* Schritt 2 */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b8942f] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl text-[#d4af37]">Schritt 2</h3>
              </div>
              <p className="text-[#f5f5f0] text-lg">
                Erwerbe den Indikator
              </p>
            </div>

            {/* Schritt 3 */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b8942f] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl text-[#d4af37]">Schritt 3</h3>
              </div>
              <p className="text-[#f5f5f0] text-lg mb-4">
                Schreibe unserem 24/7 Support und erhalte das komplette VIP Anleitungsvideo zum Indikator
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://t.me/WDMMarketAnalytics?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b8942f] text-[#0a0a0a] py-2 px-4 rounded-lg hover:from-[#e8c968] hover:to-[#d4af37] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  24/7 Telegram Support
                </a>
                <a
                  href="https://wa.me/41765800339?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-2 px-4 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  24/7 WhatsApp Support
                </a>
              </div>
            </div>

            {/* Schritt 4 */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-8 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#b8942f] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl text-[#d4af37]">Schritt 4</h3>
              </div>
              <p className="text-[#f5f5f0] text-lg">
                Happy Profits
              </p>
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
            {/* Beispiel 1 - Echtes Bild */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[rgba(212,175,55,0.15)]">
                <img src={beispiel1} alt="WDM Indikator Gold Trading" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#d4af37] text-center mt-4 text-lg font-medium">
                Grosse Winns im Goldmarkt mit unserem Indikator
              </p>
            </div>

            {/* Beispiel 2 - BTC Bild */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[rgba(212,175,55,0.15)]">
                <img src={beispiel2} alt="WDM Indikator Bitcoin Trading" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#d4af37] text-center mt-4 text-lg font-medium">
                Was für ein Trade im Bitcoinmarkt mit unserem Indikator
              </p>
            </div>

            {/* Beispiel 3 - Gold Bild */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[rgba(212,175,55,0.15)]">
                <img src={beispiel3} alt="WDM Indikator Gold Trading" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#d4af37] text-center mt-4 text-lg font-medium">
                Unglaubliche Trades im Goldmarkt mit unserem Indikator
              </p>
            </div>

            {/* Beispiel 4 - BTC Bild */}
            <div className="bg-[#141414] border border-[rgba(212,175,55,0.2)] rounded-xl p-6 hover:border-[rgba(212,175,55,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
              <div className="aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden border border-[rgba(212,175,55,0.15)]">
                <img src={beispiel4} alt="WDM Indikator Bitcoin Trading" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#d4af37] text-center mt-4 text-lg font-medium">
                Ein unglaublicher BTC-Trade mit unserem Indikator
              </p>
            </div>
          </div>

          {/* Buy Button */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a3d1a] to-[#0d1f0d] border-2 border-[#22c55e] rounded-2xl p-12 shadow-[0_0_40px_rgba(34,197,94,0.4)] text-center">
              <h2 className="text-3xl md:text-5xl mb-4 text-[#22c55e]">
                Sichere dir jetzt exclusiv den Indikator für nur 99.99 EUR
              </h2>
              <p className="text-xl text-[#4ade80] mb-10 font-medium">
                Nur 99 Plätze für den Indikator frei
              </p>

              <a
                href="https://buy.stripe.com/7sY3cvdGq8Ht3MBaLHaZi00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-5 px-12 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] text-xl font-medium"
              >
                Jetzt Indikator sichern
              </a>

              {/* Additional purchase options */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Jahresabo */}
                <div className="bg-[#0a0a0a] border border-[#22c55e] rounded-xl p-6 text-center">
                  <div className="inline-block bg-[#22c55e] text-[#0a0a0a] px-3 py-1 rounded-full text-sm font-bold mb-3">
                    -10% Rabatt
                  </div>
                  <h3 className="text-xl text-[#22c55e] mb-4 font-medium">Jahresabo</h3>
                  <a
                    href="https://buy.stripe.com/5kQ28r45QcXJcj7f1XaZi01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-3 px-8 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] font-medium"
                  >
                    Jahresabo sichern
                  </a>
                </div>

                {/* Lifetime */}
                <div className="bg-[#0a0a0a] border border-[#22c55e] rounded-xl p-6 text-center">
                  <div className="inline-block bg-[#22c55e] text-[#0a0a0a] px-3 py-1 rounded-full text-sm font-bold mb-3">
                    Limitiertes Angebot
                  </div>
                  <h3 className="text-xl text-[#22c55e] mb-4 font-medium">Lifetime Zugang</h3>
                  <a
                    href="https://buy.stripe.com/bJe9ATaue8Hterff1XaZi02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white py-3 px-8 rounded-lg hover:from-[#4ade80] hover:to-[#22c55e] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] font-medium"
                  >
                    Lifetime sichern
                  </a>
                </div>
              </div>
            </div>
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

          <ContactForm />
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
              <div className="space-y-3">
                <a
                  href="https://t.me/WDMMarketAnalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0a0] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram Support
                </a>
                <a
                  href="https://wa.me/41765800339?text=Servus%20Paul,%20Ich%20habe%20eine%20Frage%20zum%20Indikator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0a0] text-sm hover:text-[#22c55e] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </div>
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
