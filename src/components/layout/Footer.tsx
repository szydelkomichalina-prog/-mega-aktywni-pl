import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏅</span>
              <span className="font-display font-bold text-xl text-white">Mega Aktywni</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Zajęcia sportowe, pływanie i obozy żeglarskie dla dzieci w Czersku i okolicach.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Oferta</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zajecia" className="hover:text-white transition-colors">Zajęcia Ogólnorozwojowe</Link></li>
              <li><Link href="/plywanie" className="hover:text-white transition-colors">Pływanie</Link></li>
              <li><Link href="/obozy" className="hover:text-white transition-colors">Obozy Żeglarskie</Link></li>
              <li><Link href="/klub" className="hover:text-white transition-colors">Klub Sportowy</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+48791859127" className="hover:text-white transition-colors">+48 791 859 127</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:megaaktywni@gmail.com" className="hover:text-white transition-colors">megaaktywni@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>ul. Dworcowa 8A, 89-650 Czersk</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://fb.com/MegaAktywni"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
              >
                f
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Mega Aktywni. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
