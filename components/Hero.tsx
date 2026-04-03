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
          style={{ background: "rgba(255, 255, 255, 0.65)" }}
        />
      </div>

      {/* Content overlay */}
      <div
        className="relative z-10 flex flex-col items-center justify-center"
        style={{ minHeight: "100vh", padding: "80px 24px" }}
      >
        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-32"
          style={{marginBottom: "32px !important"}}
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
                color: "#715B35",
                fontFamily: "var(--font-jakarta)",
                fontSize: "10px",
                letterSpacing: "0.13em",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "8px",
                paddingBottom: "8px",
                display: "inline-block"
              }}
              className="px-8 py-16 rounded-full font-semibold uppercase"
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
            color: "23191B",
            lineHeight: 1.08,
            textAlign: "center",
            maxWidth: "780px",
            marginBottom: "24px",
          }}
        >
          Deja de sufrir por quien no te elige y recupera tu poder en 30 días.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(81,67,69,1)",
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
          href="https://go.hotmart.com/Q105155672B?dp=1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            backgroundColor: "#D4949E",
            color: "#5B2D36",
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
