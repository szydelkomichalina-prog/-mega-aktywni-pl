import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obozy Żeglarskie dla dzieci — Mega Aktywni | Iława",
  description:
    "Obozy żeglarskie dla dzieci 6-17 lat. Żeglarstwo, SUP, paintball, aquapark i dziesiątki atrakcji. Niezapomniana przygoda na wodzie!",
};

const voyages = [
  {
    title: "Rejs tygodniowy",
    age: "9–16 lat",
    desc: "Pełna przygoda żeglarska z noclegami na jachcie, atrakcjami każdego dnia i niezapomnianymi wspomnieniami.",
    color: "bg-brand-red/10 border-brand-red/20",
    accent: "text-brand-red",
  },
  {
    title: "Rejs 3-dniowy",
    age: "od 8 lat",
    desc: "Idealny na pierwszy kontakt z żeglarstwem. Wystarczająco długo, by pokochać wodę.",
    color: "bg-brand-blue-med/10 border-brand-blue-med/20",
    accent: "text-brand-blue-med",
  },
  {
    title: "Rejs jednodniowy",
    age: "od 6 lat",
    desc: "Jedna wspaniała przygoda na wodzie — świetna opcja dla młodszych dzieci.",
    color: "bg-brand-orange/10 border-brand-orange/20",
    accent: "text-brand-orange",
  },
];

const activities = [
  "Żeglarstwo", "SUP", "Skimboard", "Paintball", "Aquapark", "Łucznictwo",
  "Festiwal kolorów", "Balloniada", "Dzień pizzy", "Survival", "Escape room", "Ognisko",
];

const practicalInfo = [
  { icon: "🚌", title: "Transport", desc: "Zapewniamy transport z Czerska do Iławy i z powrotem." },
  { icon: "🎒", title: "Bagaż", desc: "Bagaż miękki (plecak/torba) + śpiwór. Lista rzeczy do zabrania po zapisie." },
  { icon: "🧥", title: "Odzież", desc: "Odzież na wodę — kurtka przeciwdeszczowa, buty na zmianę." },
  { icon: "🌤️", title: "Pogoda", desc: "Pływamy w każdą pogodę! Deszcz to część przygody żeglarskiej." },
];

const faq = [
  { q: "Od jakiego wieku można uczestniczyć?", a: "Rejsy jednodniowe od 6 lat, 3-dniowe od 8 lat, tygodniowe od 9 lat." },
  { q: "Czy dziecko musi umieć pływać?", a: "Nie musi — na jachcie są kamizelki ratunkowe, a instruktorzy dbają o bezpieczeństwo." },
  { q: "Gdzie nocują dzieci?", a: "Na jachcie — to część przygody! Jachty są wyposażone w wygodne koje." },
  { q: "Co zabrać na obóz?", a: "Listę rzeczy do zabrania wysyłamy po zapisie. Najważniejsze: śpiwór, bagaż miękki, kurtka." },
  { q: "Jak wygląda wyżywienie?", a: "Zapewniamy pełne wyżywienie — śniadania, obiady i kolacje." },
  { q: "Ile jest miejsc na rejsie?", a: "Miejsca są limitowane — zalecamy wcześniejszą rezerwację." },
];

export default function Obozy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-red/10 to-brand-orange/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 rounded-full px-4 py-1.5 text-sm text-brand-red font-semibold mb-4">
            <span>⛵</span>
            <span>Obozy dla dzieci 6–17 lat</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Woda, wiatr i niezapomniana przygoda
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Twoje dziecko pokocha żeglowanie! Obozy żeglarskie pełne atrakcji, nauki i radości.
          </p>
        </div>
      </section>

      {/* 3 warianty */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8 text-center">
            Wybierz rejs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voyages.map((v) => (
              <div key={v.title} className={`rounded-2xl p-6 border ${v.color}`}>
                <span className={`text-xs font-semibold ${v.accent} uppercase tracking-wider`}>{v.age}</span>
                <h3 className="font-display font-bold text-xl text-brand-dark mt-2 mb-3">{v.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atrakcje */}
      <section className="py-16 sm:py-24 bg-brand-blue-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8 text-center">
            Program i atrakcje
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {activities.map((a) => (
              <span
                key={a}
                className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-brand-dark shadow-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Info praktyczne */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8 text-center">
            Informacje praktyczne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practicalInfo.map((p) => (
              <div key={p.title} className="bg-brand-light-gray rounded-2xl p-6">
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-brand-dark mb-1">{p.title}</h3>
                <p className="text-sm text-brand-gray">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-brand-light-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8 text-center">
            Najczęściej zadawane pytania
          </h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-brand-dark mb-2">{f.q}</h3>
                <p className="text-sm text-brand-gray">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-red to-brand-orange">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Zarezerwuj miejsce</h2>
          <p className="text-white/80 mb-8">Miejsca na rejsy są limitowane — nie czekaj!</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-red text-lg font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
          >
            Zarezerwuj miejsce →
          </Link>
        </div>
      </section>
    </>
  );
}
