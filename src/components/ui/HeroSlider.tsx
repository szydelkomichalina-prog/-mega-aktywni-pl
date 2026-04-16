"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/sailboat-full-sail-blue-sky.jpg", alt: "Jacht pod żaglem na jeziorze" },
  { src: "/images/kids-swimming-lake-group.jpg", alt: "Dzieci pływające w jeziorze" },
  { src: "/images/kids-group-dock-sunset.jpg", alt: "Grupa dzieci na pomoście o zachodzie słońca" },
  { src: "/images/kids-sup-board-lake.jpg", alt: "Dzieci na SUP-ie na jeziorze" },
  { src: "/images/kid-jumping-dock-holi.jpg", alt: "Dziecko skaczące do wody" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-brand-blue/60" />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/40"
            }`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
