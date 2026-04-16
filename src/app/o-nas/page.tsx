import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Nas — Mega Aktywni",
  description: "Poznaj zespół Mega Aktywni. Historia marki, misja, wartości i nasi wykwalifikowani trenerzy.",
};

const team = [
  {
    name: "Filip Pruszak",
    role: "Właściciel, instruktor pływania, żeglarstwa i windsurfingu",
    bio: "Magister wychowania fizycznego z dodatkowymi studiami dotyczącymi pracy z dziećmi w spektrum autyzmu. Pasjonat sportów wodnych z wieloletnim doświadczeniem w pracy z dziećmi.",
    icon: "🏊",
  },
  {
    name: "Marek Kostkowski",
    role: "Trener zajęć ogólnorozwojowych",
    bio: "Doświadczony trener, który poprzez zabawę rozwija u dzieci koordynację, siłę i pewność siebie. Uwielbiany przez swoich podopiecznych.",
    icon: "🤸",
  },
];

export default function ONas() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-green/10 to-brand-blue-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-2">O Nas</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Jak powstało Mega Aktywni
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Mega Aktywni to pasja do sportu i pracy z dziećmi zamieniona w działanie.
            Wierzymy, że każde dziecko zasługuje na radosny, aktywny start w życie.
          </p>
        </div>
      </section>

      {/* Misja */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🎮", label: "Zabawa", desc: "Bo dzieci uczą się najlepiej przez radość i ruch." },
              { icon: "📚", label: "Nauka", desc: "Nowe umiejętności budowane krok po kroku, bez presji." },
              { icon: "🌱", label: "Rozwój", desc: "Pewność siebie, dyscyplina i zdrowe nawyki na całe życie." },
            ].map((v) => (
              <div key={v.label} className="bg-brand-blue-bg rounded-2xl p-8">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-2">{v.label}</h3>
                <p className="text-sm text-brand-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zespół */}
      <section className="py-16 sm:py-24 bg-brand-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-blue-med uppercase tracking-wider mb-2">Zespół</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
              Nasi trenerzy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-brand-blue-bg flex items-center justify-center text-3xl mb-5">
                  {t.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-1">{t.name}</h3>
                <p className="text-sm font-semibold text-brand-blue-med mb-3">{t.role}</p>
                <p className="text-sm text-brand-gray leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
