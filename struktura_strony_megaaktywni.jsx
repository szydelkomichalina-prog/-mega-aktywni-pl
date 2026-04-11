import { useState } from "react";

const COLORS = {
  blue: "#1B4F72",
  blueMed: "#2E86C1",
  blueLight: "#D6EAF8",
  blueBg: "#EBF5FB",
  orange: "#E67E22",
  red: "#C0392B",
  dark: "#2C3E50",
  gray: "#7F8C8D",
  lightGray: "#F8F9FA",
  white: "#FFFFFF",
};

const pages = [
  {
    id: "home",
    name: "Strona Główna",
    icon: "🏠",
    color: COLORS.blue,
    priority: "Krytyczna",
    sections: [
      {
        name: "Hero",
        desc: "Duże zdjęcie/video z zajęć + hasło główne + CTA",
        content: "„Rozwiń supermoce swojego dziecka!" — Zajęcia sportowe, pływanie i obozy żeglarskie dla dzieci w Czersku i okolicach. Przycisk: „Zapisz dziecko"",
      },
      {
        name: "3 Filary oferty",
        desc: "Kafelki z ikonami prowadzące do podstron",
        content: "Zajęcia ogólnorozwojowe (5–10 lat) | Pływanie (6–13 lat) | Obozy żeglarskie (6–17 lat) — każdy z przyciskiem „Dowiedz się więcej"",
      },
      {
        name: "Dlaczego My?",
        desc: "4 wyróżniki marki z ikonami",
        content: "Indywidualne podejście | Kompleksowa oferta | Wykwalifikowani trenerzy | Transport na basen zapewniony",
      },
      {
        name: "Opinie rodziców",
        desc: "Karuzela z rekomendacjami",
        content: "3–5 opinii od rodziców (do zebrania). Placeholder: „Moje dziecko po 3 miesiącach zajęć zaczęło pływać samodzielnie!"",
      },
      {
        name: "Social Media Feed",
        desc: "Dynamiczna galeria z FB/IG",
        content: "Automatycznie pobierane zdjęcia z Facebooka — pokazuje żywe zajęcia i buduje zaufanie",
      },
      {
        name: "CTA końcowe",
        desc: "Formularz zapisu lub przekierowanie",
        content: "„Zapisz dziecko na zajęcia" + formularz kontaktowy lub link do strony Kontakt",
      },
    ],
  },
  {
    id: "about",
    name: "O Nas",
    icon: "👥",
    color: "#27AE60",
    priority: "Wysoka",
    sections: [
      {
        name: "Historia marki",
        desc: "Krótka opowieść o Mega Aktywni",
        content: "Jak powstało Mega Aktywni, co nas napędza, skąd pasja do pracy z dziećmi. Autentyczna historia Filipa.",
      },
      {
        name: "Misja i wartości",
        desc: "Zabawy · Nauka · Rozwój",
        content: "Wierzymy, że każde dziecko zasługuje na radosny, aktywny start w życie. Sport to najlepsza do tego droga.",
      },
      {
        name: "Zespół",
        desc: "Profile trenerów ze zdjęciami",
        content: "Filip Pruszak — właściciel, instruktor pływania/żeglarstwa/windsurfingu, mgr WF, studia dot. spektrum autyzmu. Marek Kostkowski — trener zajęć ogólnorozwojowych.",
      },
      {
        name: "Kwalifikacje",
        desc: "Certyfikaty i doświadczenie",
        content: "Nie eksponujemy osobno, ale wplatamy naturalnie w opisy trenerów — buduje zaufanie bez chwalenia się.",
      },
    ],
  },
  {
    id: "zajecia",
    name: "Zajęcia Ogólnorozwojowe",
    icon: "🤸",
    color: COLORS.orange,
    priority: "Krytyczna",
    sections: [
      {
        name: "Opis zajęć",
        desc: "Co to są zajęcia ogólnorozwojowe?",
        content: "Zajęcia sportowe, które poprzez zabawę rozwijają umiejętności ruchowe i zdolności motoryczne. Dla dzieci 5–10 lat.",
      },
      {
        name: "Grupy i harmonogram",
        desc: "Szczegółowy plan tygodniowy",
        content: "Grupa 5–6 lat: wtorki i piątki 16:30 | Grupa 7–10 lat: wtorki i piątki 17:30 | Lokalizacja: Czersk | Trener: Marek Kostkowski",
      },
      {
        name: "Cennik",
        desc: "Przejrzysty cennik",
        content: "Karnet 4 wejścia: 120 zł. Możliwość wykupienia jednorazowego wejścia.",
      },
      {
        name: "Galeria",
        desc: "Zdjęcia z zajęć",
        content: "6–8 zdjęć z treningów pokazujących radość dzieci i różnorodność ćwiczeń.",
      },
      {
        name: "Formularz zapisu",
        desc: "Zapis online",
        content: "Formularz: imię dziecka, wiek, dane rodzica, telefon, e-mail, wybór grupy. Przycisk „Zapisz dziecko".",
      },
    ],
  },
  {
    id: "plywanie",
    name: "Pływanie",
    icon: "🏊",
    color: "#2980B9",
    priority: "Krytyczna",
    sections: [
      {
        name: "Opis zajęć",
        desc: "Nauka i doskonalenie pływania",
        content: "Zajęcia z pływania dla dzieci 6–13 lat na basenie w Ocyplu. Prowadzący: Filip Pruszak.",
      },
      {
        name: "Indywidualne podejście",
        desc: "Kluczowy wyróżnik!",
        content: "WAŻNE: Nie ma gotowych grup — Filip tworzy grupy indywidualnie, dopasowując je do umiejętności i wieku dziecka. To nasz największy wyróżnik!",
      },
      {
        name: "Transport",
        desc: "Informacja o dojazdach",
        content: "Transport z Czerska do Ocypla zapewniony — rodzic nie musi się martwić o dojazd dziecka na basen.",
      },
      {
        name: "Cennik",
        desc: "Przejrzysty cennik",
        content: "Karnet 4 wejścia: 240 zł.",
      },
      {
        name: "Formularz kontaktowy",
        desc: "Kontakt w sprawie zapisów",
        content: "Nie formularz zapisu do grupy (bo grup nie wybieramy), a formularz kontaktowy — „Napisz do nas, a Filip dobierze idealną grupę dla Twojego dziecka".",
      },
    ],
  },
  {
    id: "obozy",
    name: "Obozy Żeglarskie",
    icon: "⛵",
    color: "#E74C3C",
    priority: "Krytyczna",
    sections: [
      {
        name: "Hero obozowy",
        desc: "Zdjęcie jachtu + hasło",
        content: "„Woda, wiatr i niezapomniana przygoda" — Twoje dziecko pokocha żeglowanie!",
      },
      {
        name: "3 warianty rejsów",
        desc: "Kafelki z cenami i opisami",
        content: "Rejs tygodniowy (9–16 lat) | Rejs 3-dniowy (od 8 lat) | Rejs jednodniowy (od 6 lat). Każdy z pełną listą atrakcji i ceną.",
      },
      {
        name: "Program i atrakcje",
        desc: "Pełna lista aktywności",
        content: "Żeglarstwo, SUP, skimboard, paintball, aquapark, łucznictwo, festiwal kolorów, balloniada, dzień pizzy, survival, escape room...",
      },
      {
        name: "Info praktyczne",
        desc: "Transport, bagaż, odzież, pogoda",
        content: "4 boxy informacyjne w stylu oryginalnej oferty: Transport Czersk–Iława | Bagaż miękki + śpiwór | Odzież na wodę | Pogoda różna",
      },
      {
        name: "Galeria obozowa",
        desc: "Zdjęcia z poprzednich edycji",
        content: "12+ zdjęć z obozów: jacht, dzieci, festiwal kolorów, ognisko, aquapark, łucznictwo...",
      },
      {
        name: "FAQ",
        desc: "Odpowiedzi na pytania rodziców",
        content: "Od jakiego wieku? Czy musi umieć pływać? Gdzie nocują? Co zabrać? Wyżywienie? Transport? Ile miejsc?",
      },
      {
        name: "Formularz rezerwacji",
        desc: "Rezerwacja miejsca online",
        content: "Formularz: dane dziecka, wiek, wybór typu rejsu i terminu, dane rodzica, uwagi. CTA: „Zarezerwuj miejsce".",
      },
    ],
  },
  {
    id: "klub",
    name: "Klub Sportowy",
    icon: "🏀",
    color: "#8E44AD",
    priority: "Planowana",
    sections: [
      {
        name: "Teaser „Wkrótce"",
        desc: "Zapowiedź nowej oferty",
        content: "Klub sportowy dla starszych dzieci i młodzieży — siatkówka, koszykówka, piłka ręczna. Nazwa robocza: Octopus.",
      },
      {
        name: "Formularz zainteresowania",
        desc: "Lista oczekujących",
        content: "„Chcesz wiedzieć pierwszy? Zostaw swój e-mail, a powiadomimy Cię, gdy zapisy będą otwarte."",
      },
    ],
  },
  {
    id: "blog",
    name: "Blog / Poradnik",
    icon: "📝",
    color: "#16A085",
    priority: "Średnia",
    sections: [
      {
        name: "Lista artykułów",
        desc: "Grid z miniaturkami",
        content: "Artykuły kategoryzowane: Rozwój dziecka | Pływanie | Żeglarstwo | Aktywność fizyczna",
      },
      {
        name: "Pierwsze artykuły",
        desc: "5 artykułów na start",
        content: "1. „5 powodów, dla których Twoje dziecko powinno pływać od 6 r.ż." 2. „Zajęcia ogólnorozwojowe — co to jest?" 3. „Pierwszy obóz żeglarski — poradnik" 4. „Jak sport wspiera rozwój emocjonalny?" 5. „Co zapakować na obóz żeglarski?"",
      },
      {
        name: "CTA w artykułach",
        desc: "Linki do oferty w treści",
        content: "Każdy artykuł kończy się CTA do odpowiedniej usługi — np. artykuł o pływaniu → link do strony Pływanie.",
      },
    ],
  },
  {
    id: "kontakt",
    name: "Kontakt",
    icon: "📞",
    color: "#34495E",
    priority: "Krytyczna",
    sections: [
      {
        name: "Dane kontaktowe",
        desc: "Telefon, e-mail, adres",
        content: "📞 +48 791 859 127 | 📧 megaaktywni@gmail.com | 📍 ul. Dworcowa 8A, 89-650 Czersk",
      },
      {
        name: "Formularz zgłoszeniowy",
        desc: "Główny formularz strony",
        content: "Pola: imię rodzica, telefon, e-mail, imię i wiek dziecka, wybór usługi (dropdown), wiadomość. Przycisk „Wyślij".",
      },
      {
        name: "Mapa",
        desc: "Google Maps embed",
        content: "Mapa z pinezką na ul. Dworcowa 8A, Czersk. Ułatwia rodzicom znalezienie lokalizacji.",
      },
      {
        name: "Social Media",
        desc: "Linki do profili",
        content: "Link do Facebooka (fb.com/MegaAktywni) + przycisk Messenger.",
      },
    ],
  },
];

function SectionCard({ section, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: open ? "#F0F7FF" : COLORS.white,
        border: `1px solid ${open ? COLORS.blueMed : "#E5E7EB"}`,
        borderRadius: 8,
        padding: "10px 14px",
        marginBottom: 6,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ color: COLORS.gray, fontSize: 12, marginRight: 8 }}>{index + 1}.</span>
          <span style={{ fontWeight: 600, color: COLORS.dark, fontSize: 14 }}>{section.name}</span>
          <span style={{ color: COLORS.gray, fontSize: 12, marginLeft: 8 }}>— {section.desc}</span>
        </div>
        <span style={{ fontSize: 12, color: COLORS.blueMed }}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div
          style={{
            marginTop: 8,
            padding: "8px 12px",
            background: COLORS.white,
            borderRadius: 6,
            fontSize: 13,
            color: COLORS.dark,
            lineHeight: 1.5,
            borderLeft: `3px solid ${COLORS.blueMed}`,
          }}
        >
          {section.content}
        </div>
      )}
    </div>
  );
}

function PageCard({ page, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isSelected ? page.color : COLORS.white,
        color: isSelected ? COLORS.white : COLORS.dark,
        border: `2px solid ${page.color}`,
        borderRadius: 12,
        padding: "12px 16px",
        cursor: "pointer",
        transition: "all 0.2s",
        minWidth: 140,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 24 }}>{page.icon}</div>
      <div style={{ fontWeight: 700, fontSize: 13, marginTop: 4 }}>{page.name}</div>
      <div
        style={{
          fontSize: 10,
          marginTop: 4,
          padding: "2px 8px",
          borderRadius: 10,
          display: "inline-block",
          background: isSelected ? "rgba(255,255,255,0.25)" : page.color + "15",
          color: isSelected ? COLORS.white : page.color,
          fontWeight: 600,
        }}
      >
        {page.priority}
      </div>
    </div>
  );
}

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const activePage = pages.find((p) => p.id === selectedPage);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: 20 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ color: COLORS.blue, fontSize: 28, margin: 0, fontWeight: 800 }}>
          megaaktywni.pl
        </h1>
        <p style={{ color: COLORS.gray, fontSize: 14, margin: "4px 0 0" }}>
          Struktura nowej strony internetowej — kliknij podstronę, aby zobaczyć szczegóły
        </p>
      </div>

      {/* Navigation - Page Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        {pages.map((page) => (
          <PageCard
            key={page.id}
            page={page}
            isSelected={selectedPage === page.id}
            onClick={() => setSelectedPage(page.id)}
          />
        ))}
      </div>

      {/* Selected Page Details */}
      {activePage && (
        <div
          style={{
            background: COLORS.white,
            borderRadius: 16,
            padding: 24,
            maxWidth: 720,
            margin: "0 auto",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            borderTop: `4px solid ${activePage.color}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 32 }}>{activePage.icon}</span>
            <div>
              <h2 style={{ margin: 0, color: activePage.color, fontSize: 22 }}>{activePage.name}</h2>
              <span
                style={{
                  fontSize: 11,
                  padding: "2px 10px",
                  borderRadius: 10,
                  background: activePage.color + "15",
                  color: activePage.color,
                  fontWeight: 600,
                }}
              >
                Priorytet: {activePage.priority}
              </span>
            </div>
          </div>

          <p style={{ color: COLORS.gray, fontSize: 13, marginBottom: 16 }}>
            {activePage.sections.length} sekcji — kliknij sekcję, aby rozwinąć szczegóły treści
          </p>

          {activePage.sections.map((section, i) => (
            <SectionCard key={i} section={section} index={i} />
          ))}
        </div>
      )}

      {/* Footer - Summary */}
      <div
        style={{
          maxWidth: 720,
          margin: "24px auto 0",
          background: COLORS.white,
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        }}
      >
        <h3 style={{ color: COLORS.blue, fontSize: 16, margin: "0 0 12px" }}>Podsumowanie struktury</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div style={{ textAlign: "center", padding: 12, background: COLORS.blueBg, borderRadius: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.blue }}>8</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>podstron</div>
          </div>
          <div style={{ textAlign: "center", padding: 12, background: COLORS.blueBg, borderRadius: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.blue }}>
              {pages.reduce((sum, p) => sum + p.sections.length, 0)}
            </div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>sekcji treści</div>
          </div>
          <div style={{ textAlign: "center", padding: 12, background: COLORS.blueBg, borderRadius: 8 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: COLORS.blue }}>4</div>
            <div style={{ fontSize: 12, color: COLORS.gray }}>formularze</div>
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 13, color: COLORS.dark, lineHeight: 1.6, margin: 0 }}>
            <strong>Nawigacja główna:</strong> Strona Główna | O Nas | Zajęcia Ogólnorozwojowe | Pływanie | Obozy Żeglarskie | Klub Sportowy | Blog | Kontakt
          </p>
          <p style={{ fontSize: 13, color: COLORS.dark, lineHeight: 1.6, margin: "8px 0 0" }}>
            <strong>Stały element:</strong> Sticky header z logo, menu i przyciskiem „Zapisz dziecko". Footer z danymi kontaktowymi, linkami do social media i mapą.
          </p>
          <p style={{ fontSize: 13, color: COLORS.dark, lineHeight: 1.6, margin: "8px 0 0" }}>
            <strong>SEO:</strong> Każda podstrona zoptymalizowana pod lokalne frazy kluczowe (np. „zajęcia sportowe dla dzieci Czersk", „nauka pływania Ocypel", „obozy żeglarskie Iława").
          </p>
        </div>
      </div>
    </div>
  );
}
