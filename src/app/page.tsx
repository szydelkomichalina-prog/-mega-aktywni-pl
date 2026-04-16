import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/ui/HeroSlider";

const pillars = [
  {
    icon: "🤸",
    title: "Zajęcia Ogólnorozwojowe",
    age: "5–10 lat",
    desc: "Poprzez zabawę rozwijamy umiejętności ruchowe i zdolności motoryczne Twojego dziecka.",
    href: "/zajecia",
    color: "bg-brand-orange/10 text-brand-orange",
    image: "/images/kids-campfire-forest.jpg",
  },
  {
    icon: "🏊",
    title: "Pływanie",
    age: "6–13 lat",
    desc: "Nauka i doskonalenie pływania z indywidualnie dobranymi grupami. Transport zapewniony!",
    href: "/plywanie",
    color: "bg-brand-blue-med/10 text-brand-blue-med",
    image: "/images/kids-swimming-lake-group.jpg",
  },
  {
    icon: "⛵",
    title: "Obozy Żeglarskie",
    age: "6–17 lat",
    desc: "Niezapomniana przygoda na wodzie — żeglarstwo, SUP, paintball i dziesiątki atrakcji.",
    href: "/obozy",
    color: "bg-brand-red/10 text-brand-red",
    image: "/images/sailboat-full-sail-blue-sky.jpg",
  },
];

const reasons = [
  { icon: "👤", title: "Indywidualne podejście", desc: "Grupy dobierane do umiejętności i wieku dziecka." },
  { icon: "🎯", title: "Kompleksowa oferta", desc: "Sport, pływanie i obozy — wszystko w jednym miejscu." },
  { icon: "🎓", title: "Wykwalifikowani trenerzy", desc: "Doświadczeni instruktorzy z odpowiednimi kwalifikacjami." },
  { icon: "🚌", title: "Transport na basen", desc: "Zapewniamy dojazd z Czerska do Ocypla — zero stresu dla rodziców." },
];

const testimonials = [
  {
    text: "Moje dziecko po 3 miesiącach zajęć zaczęło pływać samodzielnie! Filip ma niesamowite podejście do dzieci.",
    author: "Anna K.",
    role: "mama 8-latka",
  },
  {
    text: "Syn nie mógł się doczekać każdych zajęć. Widać, że trenerzy naprawdę kochają to, co robią.",
    author: "Tomek M.",
    role: "tata 6-latki",
  },
  {
    text: "Obóz żeglarski to było najlepsze, co mogłam dać córce na wakacje. Wróciła pełna energii i nowych umiejętności!",
    author: "Marta S.",
    role: "mama 12-latki",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero with Slider */}
      <section className="relative min-h-[600px] sm:min-h-[700px] overflow-hidden flex items-center">
        <HeroSlider />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-1.5 text-sm text-white/90 mb-6">
            <span>🏅</span>
            <span>Zajęcia sportowe dla dzieci w Czersku</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Rozwiń supermoce<br />swojego dziecka!
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Zajęcia sportowe, pływanie i obozy żeglarskie dla dzieci w Czersku i okolicach.
            Dajemy dzieciom radość ruchu i pewność siebie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl hover:bg-brand-orange/90 transition-colors shadow-lg"
            >
              Zapisz dziecko →
            </Link>
            <Link
              href="#oferta"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/15 backdrop-blur text-white text-lg font-semibold rounded-xl hover:bg-white/25 transition-colors"
            >
              Zobacz ofertę
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Filary oferty */}
      <section id="oferta" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-blue-med uppercase tracking-wider mb-2">Nasza oferta</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
              Trzy filary aktywności
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-8">
                <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center text-2xl mb-5`}>
                  {p.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-brand-dark mb-1">{p.title}</h3>
                <span className="inline-block text-xs font-semibold text-brand-blue-med bg-brand-blue-bg px-2.5 py-0.5 rounded-full mb-3">
                  {p.age}
                </span>
                <p className="text-sm text-brand-gray leading-relaxed">{p.desc}</p>
                <div className="mt-5 text-brand-blue-med text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Dowiedz się więcej →
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego My? */}
      <section className="py-16 sm:py-24 bg-brand-blue-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-blue-med uppercase tracking-wider mb-2">Wyróżniki</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
              Dlaczego Mega Aktywni?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-semibold text-brand-dark mb-2">{r.title}</h3>
                <p className="text-sm text-brand-gray">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opinie rodziców */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-blue-med uppercase tracking-wider mb-2">Opinie</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-dark">
              Co mówią rodzice?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-brand-light-gray rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-brand-orange text-lg mb-3">★★★★★</div>
                <p className="text-sm text-brand-dark/80 leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">{t.author}</p>
                  <p className="text-xs text-brand-gray">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-brand-blue to-brand-blue-med">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Zapisz dziecko na zajęcia
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Skontaktuj się z nami — pomożemy dobrać idealne zajęcia dla Twojego dziecka.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white text-lg font-bold rounded-xl hover:bg-brand-orange/90 transition-colors shadow-lg"
          >
            Zapisz dziecko →
          </Link>
        </div>
      </section>
    </>
  );
}
