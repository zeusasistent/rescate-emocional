"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = ["30 DÍAS DE MÉTODO", "+20 EJERCICIOS", "CONTACTO CERO"];

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: "#FFF8F7" }}>

      {/* MOBILE: imagen arriba */}
      <div className="block md:hidden w-full h-72 relative">
        <Image src="/images/hero.png" alt="Mujer en contemplación" fill className="object-cover object-top" priority />
      </div>

      {/* COLUMNA TEXTO */}
      <motion.div
        className="flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24"
        style={{ maxWidth: "680px" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ backgroundColor: "#FADCAB", color: "#23191B", fontFamily: "var(--font-jakarta)" }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Titular */}
        <h1
          className="mb-6 leading-[1.1]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "clamp(42px, 5vw, 72px)",
            color: "#23191B",
          }}
        >
          Deja de sufrir por quien no te elige y recupera tu poder en 30 días.
        </h1>

        {/* Subtítulo */}
        <p className="mb-10" style={{ fontFamily: "var(--font-jakarta)", fontSize: "18px", color: "#514345", lineHeight: "1.7", maxWidth: "520px" }}>
          +20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconstruir tu amor propio desde cero.
        </p>

        {/* CTA */}
        <div>
          <motion.a
            href="#comprar"
            className="inline-block px-12 py-4 font-semibold text-base"
            style={{
              backgroundColor: "#D4949E",
              color: "#5B2D36",
              borderRadius: "50px",
              fontFamily: "var(--font-jakarta)",
              fontSize: "18px",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Quiero mi Workbook
          </motion.a>
        </div>
      </motion.div>

      {/* DESKTOP: imagen derecha, full height, sin border-radius */}
      <motion.div
        className="hidden md:block relative"
        style={{ width: "42%", minHeight: "100vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/hero.png"
          alt="Mujer en contemplación"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

    </section>
  );
}
