import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Mega Aktywni — Zajęcia sportowe dla dzieci | Czersk",
  description:
    "Zajęcia ogólnorozwojowe, nauka pływania i obozy żeglarskie dla dzieci w Czersku i okolicach. Rozwiń supermoce swojego dziecka!",
  keywords: [
    "zajęcia sportowe dla dzieci Czersk",
    "nauka pływania Ocypel",
    "obozy żeglarskie Iława",
    "zajęcia ogólnorozwojowe",
    "Mega Aktywni",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
