"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const handler = (e) => setLang(e.detail);
    window.addEventListener("language-change", handler);
    return () => window.removeEventListener("language-change", handler);
  }, []);

 const changeLang = (newLang) => {
  setLang(newLang);

  const url = new URL(window.location);
  url.searchParams.set("lang", newLang);
  window.history.replaceState({}, "", url);

  window.dispatchEvent(
    new CustomEvent("language-change", { detail: newLang })
  );
};


  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="font-serif text-xl tracking-wide"
        >
          Duo Tricks
        </button>

        {/* LINKS */}
        <div className="hidden md:flex gap-6 text-sm uppercase items-center">
          <button onClick={() => scrollTo("training")} className="hover:opacity-70">
            Entrenamiento
          </button>
          <button onClick={() => scrollTo("shows")} className="hover:opacity-70">
            Shows
          </button>
          <button onClick={() => scrollTo("merch")} className="hover:opacity-70">
            Merch
          </button>

          {/* IDIOMA */}
          <div className="flex gap-1 ml-4 border border-white/30 rounded-full p-1 text-xs">
            <button
              onClick={() => changeLang("es")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "es"
                  ? "bg-white text-black"
                  : "hover:bg-white/20"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLang("en")}
              className={`px-3 py-1 rounded-full transition ${
                lang === "en"
                  ? "bg-white text-black"
                  : "hover:bg-white/20"
              }`}
            >
              EN
            </button>
          </div>

          {/* ICONO ALUMNOS (PROXIMAMENTE) */}
          <div
            className="ml-3 opacity-60 hover:opacity-100 transition cursor-default"
            title="Área alumnos · Próximamente"
          >
            <User size={18} />
          </div>
        </div>
      </nav>
    </header>
  );
}
