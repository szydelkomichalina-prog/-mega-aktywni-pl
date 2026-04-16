import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zajęcia Ogólnorozwojowe dla dzieci — Mega Aktywni | Czersk",
  description:
    "Zajęcia sportowe ogólnorozwojowe dla dzieci 5-10 lat w Czersku. Rozwijamy umiejętności ruchowe poprzez zabawę. Trener: Marek Kostkowski.",
};

const schedule = [
  { group: "Grupa 5–6 lat", days: "Wtorki i piątki", time: "16:30", trainer: "Marek Kostkowski" },
  { group: "Grupa 7–10 lat", days: "Wtorki i piątki", time: "17:30", trainer: "Marek Kostkowski" },
];

export default function Zajecia() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 rounded-full px-4 py-1.5 text-sm text-brand-orange font-semibold mb-4">
            <span>🤸</span>
            <span>Dla dzieci 5–10 lat</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Zajęcia Ogólnorozwojowe
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Zajęcia sportowe, które poprzez zabawę rozwijają umiejętności ruchowe
            i zdolności motoryczne Twojego dziecka.
          </p>
        </div>
      </section>

      {/* Harmonogram */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark mb-8 text-center">
            Grupy i harmonogram
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schedule.map((s) => (
              <div key={s.group} className="bg-brand-blue-bg rounded-2xl p-6 border border-brand-blue-light">
                <h3 className="font-display font-bold text-lg text-brand-dark mb-4">{s.group}</h3>
                <ul className="space-y-2 text-sm text-brand-dark/80">
                  <li className="flex items-center gap-2">
                    <span>📅</span> {s.days}
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🕐</span> Godzina {s.time}
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📍</span> Czersk
                  </li>
                  <li className="flex items-center gap-2">
                    <span>👨‍🏫</span> {s.trainer}
                  </li>
                </ul>
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
            <div className="text-4xl font-display font-extrabold text-brand-blue mb-2">120 zł</div>
            <p className="text-brand-gray text-sm mb-4">Karnet — 4 wejścia</p>
            <p className="text-xs text-brand-gray">Możliwość wykupienia jednorazowego wejścia</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-orange to-brand-orange/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Zapisz dziecko na zajęcia</h2>
          <p className="text-white/80 mb-8">Wypełnij formularz, a skontaktujemy się z Tobą.</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-orange text-lg font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
          >
            Zapisz dziecko →
          </Link>
        </div>
      </section>
    </>
  );
}
