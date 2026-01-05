"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { translations } from "@/lib/translations";
import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";




export default function Home() {
  const [lang, setLang] = useState("es");

useEffect(() => {
  const handler = (e) => {
    console.log("Idioma recibido:", e.detail);
    setLang(e.detail);
  };

  window.addEventListener("language-change", handler);
  return () => window.removeEventListener("language-change", handler);
}, []);



  const t = translations[lang];

  return (
    <main className="flex flex-col min-h-screen bg-black text-white pt-16">

      <Navbar />

      {/* HERO CON VIDEO */}
      <section id="home" className="relative h-screen w-full overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="font-serif text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg max-w-xl opacity-90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button className="px-6 py-3 border border-white uppercase text-sm hover:bg-white hover:text-black transition">
              {t.clases}
            </button>
            <button className="px-6 py-3 bg-white text-black uppercase text-sm hover:opacity-80 transition">
              {t.shows}
            </button>
          </motion.div>
        </motion.div>
      </section>




      {/* PLANES DE ENTRENAMIENTO */}
      <motion.section 
        id="training"
        className="px-6 py-16 md:py-24 bg-neutral-950"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl mb-4 text-center">
          {t.entrenamientoTitle}
        </h2>

        <p className="text-center max-w-2xl mx-auto opacity-80 mb-12">
          {t.entrenamientoDesc}
        </p>

        <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
              {/* PLAN 1 */}
    <motion.div
      className="border border-white/20 p-8 text-center flex flex-col justify-between"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="font-serif text-xl mb-2">
          Clases Regulares
        </h3>
        <p className="opacity-70 text-sm mb-6">
          {t.Plan1_Text1}
        </p>
        <p className="text-3xl mb-6 font-serif">
          1x semana
        </p>
      </div>

      <button className="mt-6 px-6 py-3 border border-white uppercase text-sm hover:bg-white hover:text-black transition">
        Consultar
      </button>
    </motion.div>

    {/* PLAN 2 - DESTACADO */}
    <motion.div
      className="border border-white p-8 text-center flex flex-col justify-between bg-white text-black"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="font-serif text-xl mb-2">
          Personalizados
        </h3>
        <p className="opacity-70 text-sm mb-6">
          Técnica, fuerza y dúos escénicos. Cocheos privados a parejas o grupos de competencia.
        </p>
        <p className="text-3xl mb-6 font-serif">
          2x semana
        </p>
      </div>

      <button className="mt-6 px-6 py-3 bg-black text-white uppercase text-sm hover:opacity-80 transition">
        Consultar
      </button>
    </motion.div>

    {/* PLAN 3 */}
    <motion.div
      className="border border-white/20 p-8 text-center flex flex-col justify-between"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="font-serif text-xl mb-2">
          Corporativos y Productoras
        </h3>
        <p className="opacity-70 text-sm mb-6">
          Coaching escénico intensivo para artistas y producciones profesionales.
        </p>
        <p className="text-3xl mb-6 font-serif">
          Intensivo
        </p>
      </div>

      <button className="mt-6 px-6 py-3 border border-white uppercase text-sm hover:bg-white hover:text-black transition">
        Consultar
      </button>
    </motion.div>

          {/* PLAN 4 */}
              <motion.div
                className="border border-white/20 p-8 text-center flex flex-col justify-between"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h3 className="font-serif text-xl mb-2">
                    Workshops
                  </h3>
                  <p className="opacity-70 text-sm mb-6">
                    Seminarios especiales y entrenamientos por fechas
                  </p>
                  <p className="text-3xl mb-6 font-serif">
                    Fechas especiales
                  </p>
                </div>

                <button className="mt-6 px-6 py-3 border border-white uppercase text-sm hover:bg-white hover:text-black transition">
                  Consultar
                </button>
              </motion.div>

        </div>
      </motion.section>

      {/* SHOWS */}
    <motion.section
      id="shows"
      className="px-6 py-20 md:py-28 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
  <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">
    {t.showsTitle}
  </h2>

  <p className="text-center max-w-2xl mx-auto opacity-80 mb-16">
    {t.showsSubtitle}
  </p>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">

    {/* SHOW 1 */}
    <motion.div
      className="group relative h-[420px] overflow-hidden border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src="/shows/theatre.jpg"
        alt="Show teatral"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <h3 className="font-serif text-xl mb-2">
          {t.showTheatre}
        </h3>
        <p className="text-sm opacity-80">
          {t.showTheatreDesc}
        </p>
      </div>
    </motion.div>

    {/* SHOW 2 */}
    <motion.div
      className="group relative h-[420px] overflow-hidden border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src="/shows/events.jpg"
        alt="Eventos corporativos"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <h3 className="font-serif text-xl mb-2">
          {t.showEvents}
        </h3>
        <p className="text-sm opacity-80">
          {t.showEventsDesc}
        </p>
      </div>
    </motion.div>

    {/* SHOW 3 */}
    <motion.div
      className="group relative h-[420px] overflow-hidden border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src="/shows/corporate.jpg"
        alt="Shows corporativos"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <h3 className="font-serif text-xl mb-2">
          {t.showCorporate}
        </h3>
        <p className="text-sm opacity-80">
          {t.showCorporateDesc}
        </p>
      </div>
    </motion.div>

    {/* SHOW 4 */}
    <motion.div
      className="group relative h-[420px] overflow-hidden border border-white/10"
      whileHover={{ scale: 1.02 }}
    >
      <img
        src="/shows/international.jpg"
        alt="Producciones internacionales"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-6 flex flex-col justify-end h-full">
        <h3 className="font-serif text-xl mb-2">
          {t.showInternational}
        </h3>
        <p className="text-sm opacity-80">
          {t.showInternationalDesc}
        </p>
      </div>
    </motion.div>

  </div>
</motion.section>


      {/* MERCH */}
      <motion.section
        id="merch"
        className="px-6 py-16 md:py-24 bg-neutral-950"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl mb-4 text-center">
          {t.merchTitle}
        </h2>
        <p className="text-center opacity-80">
          {t.merchDesc}
        </p>
      </motion.section>



     {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Dúo Tricks · {t.footer}

        <div className="mt-3 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/duotricksoficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
            aria-label="Instagram Duo Tricks"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://wa.me/5491172003904"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
            aria-label="WhatsApp Duo Tricks"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </footer>



{/* WHATSAPP FLOATING BUTTON */}
<a
  href={`https://wa.me/5491172003904?text=${encodeURIComponent(
    t.whatsappMessage
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
  aria-label="WhatsApp"
>
  <FaWhatsapp className="w-7 h-7" />
</a>

    </main>
  );
}
