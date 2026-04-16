import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klub Sportowy — Mega Aktywni | Wkrótce",
  description: "Klub sportowy dla starszych dzieci i młodzieży — siatkówka, koszykówka, piłka ręczna. Wkrótce w Mega Aktywni!",
};

export default function Klub() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-brand-purple/5 to-brand-blue-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-purple/10 rounded-full px-4 py-1.5 text-sm text-brand-purple font-semibold mb-6">
          <span>🏀</span>
          <span>Wkrótce</span>
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
          Klub Sportowy
        </h1>
        <p className="text-lg text-brand-gray leading-relaxed mb-8">
          Klub sportowy dla starszych dzieci i młodzieży — siatkówka, koszykówka, piłka ręczna.
          Pracujemy nad tym, żeby ruszyć jak najszybciej!
        </p>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
            Chcesz wiedzieć pierwszy?
          </h3>
          <p className="text-sm text-brand-gray mb-6">
            Zostaw swój e-mail, a powiadomimy Cię, gdy zapisy będą otwarte.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój e-mail"
              className="flex-1 h-12 px-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-purple/90 transition-colors text-sm"
            >
              Powiadom mnie
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
