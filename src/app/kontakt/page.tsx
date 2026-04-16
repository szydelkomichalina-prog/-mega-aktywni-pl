import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Mega Aktywni | Czersk",
  description: "Skontaktuj się z Mega Aktywni. Telefon: +48 791 859 127. Adres: ul. Dworcowa 8A, 89-650 Czersk.",
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark/5 to-brand-blue-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-brand-blue-med uppercase tracking-wider mb-2">Kontakt</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Skontaktuj się z nami
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Masz pytania? Chcesz zapisać dziecko na zajęcia? Napisz lub zadzwoń!
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formularz */}
            <div>
              <h2 className="font-display font-bold text-2xl text-brand-dark mb-6">Formularz zgłoszeniowy</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Imię rodzica</label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Telefon</label>
                    <input
                      type="tel"
                      className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">E-mail</label>
                  <input
                    type="email"
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Imię dziecka</label>
                    <input
                      type="text"
                      className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Wiek dziecka</label>
                    <input
                      type="number"
                      min={3}
                      max={17}
                      className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Usługa</label>
                  <select className="w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 bg-white">
                    <option value="">Wybierz usługę...</option>
                    <option value="zajecia">Zajęcia Ogólnorozwojowe</option>
                    <option value="plywanie">Pływanie</option>
                    <option value="obozy">Obozy Żeglarskie</option>
                    <option value="klub">Klub Sportowy</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Wiadomość</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-med transition-colors shadow-sm text-sm"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>

            {/* Dane kontaktowe */}
            <div>
              <h2 className="font-display font-bold text-2xl text-brand-dark mb-6">Dane kontaktowe</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 bg-brand-light-gray rounded-xl p-4">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Telefon</p>
                    <a href="tel:+48791859127" className="text-sm text-brand-blue-med hover:underline">
                      +48 791 859 127
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-brand-light-gray rounded-xl p-4">
                  <span className="text-xl mt-0.5">📧</span>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">E-mail</p>
                    <a href="mailto:megaaktywni@gmail.com" className="text-sm text-brand-blue-med hover:underline">
                      megaaktywni@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-brand-light-gray rounded-xl p-4">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Adres</p>
                    <p className="text-sm text-brand-gray">ul. Dworcowa 8A, 89-650 Czersk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-brand-light-gray rounded-xl p-4">
                  <span className="text-xl mt-0.5">💬</span>
                  <div>
                    <p className="font-semibold text-sm text-brand-dark">Social Media</p>
                    <a
                      href="https://fb.com/MegaAktywni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-blue-med hover:underline"
                    >
                      Facebook — Mega Aktywni
                    </a>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.2!2d17.9845!3d53.7932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDQ3JzM1LjUiTiAxN8KwNTknMDQuMiJF!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mega Aktywni — lokalizacja"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
