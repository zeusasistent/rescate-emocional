"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = ["30 DÍAS DE MÉTODO", "+20 EJERCICIOS", "CONTACTO CERO"];

export default function Hero() {
  return (
    <section style={{ backgroundColor: "#FFF8F7", minHeight: "100vh" }} className="flex items-center">

      {/* MOBILE */}
      <div className="flex flex-col w-full md:hidden">
        <div className="relative w-full" style={{ height: "55vw", minHeight: "280px" }}>
          <Image src="/images/hero.png" alt="Método de Rescate Emocional" fill className="object-cover object-top" priority />
        </div>
        <div className="px-6 py-10 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {badges.map(b => (
              <span key={b} style={{ backgroundColor: "#FADCAB", color: "#23191B", fontFamily: "var(--font-jakarta)", fontSize: "10px", letterSpacing: "0.1em" }} className="px-4 py-1.5 rounded-full font-semibold uppercase">{b}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 600, fontStyle: "normal", color: "#23191B", lineHeight: 1.1 }}>
            Deja de sufrir por quien no te elige y recupera tu poder en 30 días.
          </h1>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "16px", color: "#514345", lineHeight: 1.6 }}>
            +20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconstruir tu amor propio desde cero.
          </p>
          <motion.a href="#comprar" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: "#D4949E", color: "#5B2D36", borderRadius: "50px", fontFamily: "var(--font-jakarta)", fontSize: "16px", fontWeight: 600, textDecoration: "none", display: "inline-block", padding: "14px 36px", alignSelf: "flex-start" }}>
            Quiero mi Workbook
          </motion.a>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex w-full" style={{ maxWidth: "1280px", margin: "0 auto", minHeight: "100vh" }}>

        {/* Columna texto - izquierda */}
        <motion.div
          className="flex flex-col justify-center"
          style={{ flex: "0 0 55%", padding: "80px 80px 80px 100px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map(b => (
              <span key={b} style={{ backgroundColor: "#FADCAB", color: "#23191B", fontFamily: "var(--font-jakarta)", fontSize: "11px", letterSpacing: "0.12em" }} className="px-5 py-2 rounded-full font-semibold uppercase">{b}</span>
            ))}
          </div>

          {/* Titular */}
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "58px", fontWeight: 600, fontStyle: "normal", color: "#23191B", lineHeight: 1.08, marginBottom: "24px", maxWidth: "560px" }}>
            Deja de sufrir por quien no te elige y recupera tu poder en 30 días.
          </h1>

          {/* Subtítulo */}
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "18px", color: "#514345", lineHeight: 1.65, marginBottom: "40px", maxWidth: "480px" }}>
            +20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconstruir tu amor propio desde cero.
          </p>

          {/* CTA */}
          <motion.a
            href="#comprar"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: "#D4949E", color: "#5B2D36", borderRadius: "50px", fontFamily: "var(--font-jakarta)", fontSize: "18px", fontWeight: 600, textDecoration: "none", display: "inline-block", padding: "16px 48px", alignSelf: "flex-start" }}
          >
            Quiero mi Workbook
          </motion.a>
        </motion.div>

        {/* Columna imagen - derecha */}
        <motion.div
          className="relative"
          style={{ flex: "0 0 45%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hero.png"
            alt="Mujer en contemplación"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
