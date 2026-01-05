"use client";

import { useEffect, useState } from "react";
import { User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState("es");
  const [open, setOpen] = useState(false);

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

    setOpen(false);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className="font-serif text-xl tracking-wide"
          >
            Duo Tricks
          </button>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-6 text-sm uppercase items-center">
            <button onClick={() => scrollTo("training")}>Entrenamiento</button>
            <button onClick={() => scrollTo("shows")}>Shows</button>
            <button onClick={() => scrollTo("merch")}>Merch</button>

            <div className="flex gap-1 ml-4 border border-white/30 rounded-full p-1 text-xs">
              <button
                onClick={() => changeLang("es")}
                className={`px-3 py-1 rounded-full ${
                  lang === "es" ? "bg-white text-black" : "hover:bg-white/20"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-3 py-1 rounded-full ${
                  lang === "en" ? "bg-white text-black" : "hover:bg-white/20"
                }`}
              >
                EN
              </button>
            </div>

            <div className="ml-3 opacity-60" title="Área alumnos · Próximamente">
              <User size={18} />
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* fondo */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur"
          onClick={() => setOpen(false)}
        />

        {/* MENU */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-black border-l border-white/10 p-8
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-6 text-sm uppercase mt-20">

            <button onClick={() => scrollTo("training")}>Entrenamiento</button>
            <button onClick={() => scrollTo("shows")}>Shows</button>
            <button onClick={() => scrollTo("merch")}>Merch</button>

            <div className="flex gap-2 pt-4">
              <button
                onClick={() => changeLang("es")}
                className={`px-4 py-2 rounded-full border ${
                  lang === "es" ? "bg-white text-black" : "border-white/30"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLang("en")}
                className={`px-4 py-2 rounded-full border ${
                  lang === "en" ? "bg-white text-black" : "border-white/30"
                }`}
              >
                EN
              </button>
            </div>

            <div className="flex items-center gap-2 opacity-60 pt-4">
              <User size={18} />
              <span>Área alumnos (próx.)</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
