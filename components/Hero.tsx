"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = ["30 DÍAS DE MÉTODO", "+20 EJERCICIOS", "CONTACTO CERO"];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#1a1614", minHeight: "100vh" }}
    >
      {/* Background image fills entire section */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Método de Rescate Emocional"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(15,10,10,0.72) 0%, rgba(15,10,10,0.55) 50%, rgba(15,10,10,0.15) 100%)" }}
        />
      </div>

      {/* Content overlay */}
      <div
        className="relative z-10 flex flex-col items-center justify-center"
        style={{ minHeight: "100vh", padding: "80px 24px" }}
      >
        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badges.map(b => (
            <span
              key={b}
              style={{
                backgroundColor: "rgba(250,220,171,0.18)",
                border: "1px solid rgba(250,220,171,0.5)",
                color: "#FADCAB",
                fontFamily: "var(--font-jakarta)",
                fontSize: "10px",
                letterSpacing: "0.13em",
              }}
              className="px-4 py-1.5 rounded-full font-semibold uppercase"
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(42px, 6vw, 76px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#FFFFFF",
            lineHeight: 1.08,
            textAlign: "center",
            maxWidth: "780px",
            marginBottom: "24px",
          }}
        >
          Déjate guiar por quién no te elige y recupera tu poder en 30 días.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.65,
            textAlign: "center",
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          +20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconectar tu autoestima.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="HOTMART_LINK_PLACEHOLDER"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            backgroundColor: "#D4949E",
            color: "#fff",
            borderRadius: "50px",
            fontFamily: "var(--font-jakarta)",
            fontSize: "17px",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-block",
            padding: "16px 48px",
          }}
        >
          Quiero mi Workbook
        </motion.a>
      </div>
    </section>
  );
}
