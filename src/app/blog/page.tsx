import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Mega Aktywni",
  description: "Poradnik dla rodziców: rozwój dziecka, pływanie, żeglarstwo, aktywność fizyczna. Artykuły od zespołu Mega Aktywni.",
};

const articles = [
  {
    title: "5 powodów, dla których Twoje dziecko powinno pływać od 6 roku życia",
    category: "Pływanie",
    excerpt: "Pływanie to nie tylko sport — to umiejętność, która może uratować życie. Dowiedz się, dlaczego warto zacząć wcześnie.",
    color: "bg-brand-blue-med/10 text-brand-blue-med",
    link: "/plywanie",
  },
  {
    title: "Zajęcia ogólnorozwojowe — co to jest i dlaczego warto?",
    category: "Rozwój dziecka",
    excerpt: "Czym różnią się od zwykłego WF-u? Jak wpływają na koordynację, pewność siebie i zdrowe nawyki?",
    color: "bg-brand-orange/10 text-brand-orange",
    link: "/zajecia",
  },
  {
    title: "Pierwszy obóz żeglarski — poradnik dla rodziców",
    category: "Żeglarstwo",
    excerpt: "Wszystko, co musisz wiedzieć przed pierwszym obozem: co zabrać, czego się spodziewać, jak przygotować dziecko.",
    color: "bg-brand-red/10 text-brand-red",
    link: "/obozy",
  },
  {
    title: "Jak sport wspiera rozwój emocjonalny dziecka?",
    category: "Rozwój dziecka",
    excerpt: "Regularna aktywność fizyczna buduje pewność siebie, uczy współpracy i pomaga radzić sobie z emocjami.",
    color: "bg-brand-green/10 text-brand-green",
    link: "/o-nas",
  },
  {
    title: "Co zapakować na obóz żeglarski? Kompletna lista",
    category: "Żeglarstwo",
    excerpt: "Praktyczna lista rzeczy do zabrania na rejs — nic nie zapomnisz!",
    color: "bg-brand-red/10 text-brand-red",
    link: "/obozy",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal/10 to-brand-blue-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider mb-2">Blog</p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-dark mb-6">
            Poradnik dla rodziców
          </h1>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Artykuły o rozwoju dziecka, sporcie, pływaniu i żeglarstwie.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Link
                key={a.title}
                href={a.link}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${a.color}`}>
                  {a.category}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2 group-hover:text-brand-blue-med transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">{a.excerpt}</p>
                <div className="mt-4 text-brand-blue-med text-sm font-semibold">
                  Czytaj więcej →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
