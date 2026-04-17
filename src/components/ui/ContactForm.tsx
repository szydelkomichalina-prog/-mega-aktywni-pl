"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      zajecia: "Zajęcia Ogólnorozwojowe",
      plywanie: "Pływanie",
      obozy: "Obozy Żeglarskie",
      klub: "Klub Sportowy",
      inne: "Inne",
    };

    const subject = `Zgłoszenie ze strony — ${serviceLabels[form.service] || "Kontakt"}`;
    const body = `Dzień dobry,

Chciał(a)bym zapisać dziecko na zajęcia.

Imię rodzica: ${form.parentName}
Telefon: ${form.phone}
E-mail: ${form.email}

Imię dziecka: ${form.childName}
Wiek dziecka: ${form.childAge}

Usługa: ${serviceLabels[form.service] || "—"}

Wiadomość:
${form.message}

Pozdrawiam,
${form.parentName}`;

    const mailto = `mailto:megaaktywni@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const inputClass = "w-full h-11 px-4 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1">Imię rodzica</label>
          <input type="text" name="parentName" value={form.parentName} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1">Telefon</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1">E-mail</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1">Imię dziecka</label>
          <input type="text" name="childName" value={form.childName} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-dark mb-1">Wiek dziecka</label>
          <input type="number" name="childAge" value={form.childAge} onChange={handleChange} min={3} max={17} required className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-dark mb-1">Usługa</label>
        <select name="service" value={form.service} onChange={handleChange} required className={`${inputClass} bg-white`}>
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
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full h-12 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue-med transition-colors shadow-sm text-sm"
      >
        Wyślij wiadomość
      </button>
      <p className="text-xs text-brand-gray text-center">
        Po kliknięciu „Wyślij” otworzy się Twój klient pocztowy z gotową wiadomością do <strong>megaaktywni@gmail.com</strong>
      </p>
    </form>
  );
}
