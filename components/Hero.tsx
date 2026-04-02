"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = ["30 DÍAS DE MÉTODO", "+20 EJERCICIOS", "CONTACTO CERO"];

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen flex items-center"
      style={{ backgroundColor: "#FFF8F7" }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Mobile: image on top */}
        <motion.div
          className="block md:hidden w-full max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Mujer en contemplación"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {/* Badges */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  backgroundColor: "#FADCAB",
                  color: "#23191B",
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1
            className="leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#23191B",
            }}
          >
            Deja de sufrir por quien no te elige y recupera tu poder en 30 días.
          </h1>

          {/* Subtitle */}
          <p
            className="max-w-lg mx-auto md:mx-0"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "20px",
              color: "#514345",
              lineHeight: "1.6",
            }}
          >
            +20 ejercicios reales. Sin frases vacías. Un programa paso a paso
            para reconstruir tu amor propio desde cero.
          </p>

          {/* CTA */}
          <div>
            <motion.a
              href="#comprar"
              className="inline-block px-10 py-4 font-semibold text-base"
              style={{
                backgroundColor: "#D4949E",
                color: "#5B2D36",
                borderRadius: "50px",
                fontFamily: "var(--font-jakarta)",
                textDecoration: "none",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Quiero mi Workbook
            </motion.a>
          </div>
        </motion.div>

        {/* Desktop: image on right */}
        <motion.div
          className="hidden md:block flex-1 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Mujer en contemplación"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
