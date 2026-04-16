import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nauka Pływania dla dzieci — Mega Aktywni | Ocypel",
  description:
    "Nauka i doskonalenie pływania dla dzieci 6-13 lat. Indywidualnie dobrane grupy, transport z Czerska do Ocypla zapewniony.",
};

const highlights = [
  {
    icon: "👤",
    title: "Indywidualne podejście",
    desc: "Nie ma gotowych grup — Filip tworzy grupy indywidualnie, dopasowując je do umiejętności i wieku dziecka. To nasz największy wyróżnik!",
  },
  {
    icon: "🚌",
    title: "Transport zapewniony",
    desc: "Transport z Czerska do Ocypla zapewniony — rodzic nie musi się martwić o dojazd dziecka na basen.",
  },
  {
    icon: "🎓",
    title: "Wykwalifikowany instruktor",
    desc: "Filip Pruszak — magister WF, instruktor pływania z wieloletnim doświadczeniem w pracy z dziećmi.",
  },
];

export default function Plywanie() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-med/10 to-brand-blue-light py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-blue-med/10 rounded-full px-4 py-1.5 text-sm text-brand-blue-med font-semibold mb-4">
            <span>🏊</span>
            <span>Dla dzieci 6–13 lat</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Pływanie
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Nauka i doskonalenie pływania dla dzieci na basenie w Ocyplu.
            Prowadzący: Filip Pruszak.
          </p>
        </div>
      </section>

      {/* Wyróżniki */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-brand-blue-bg rounded-2xl p-6">
                <div className="text-3xl mb-4">{h.icon}</div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">{h.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section className="py-16 sm:py-24 bg-brand-light-gray">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8">Cennik</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl font-display font-extrabold text-brand-blue mb-2">240 zł</div>
            <p className="text-brand-gray text-sm mb-1">Karnet — 4 wejścia</p>
            <p className="text-xs text-brand-gray">W cenie transport z Czerska do Ocypla</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-blue-med to-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Napisz do nas</h2>
          <p className="text-white/80 mb-8">
            Filip dobierze idealną grupę dla Twojego dziecka — skontaktuj się z nami.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl hover:bg-brand-orange/90 transition-colors shadow-lg"
          >
            Skontaktuj się →
          </Link>
        </div>
      </section>
    </>
  );
}
