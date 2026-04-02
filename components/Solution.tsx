"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  "Estructura diaria paso a paso.",
  "+20 ejercicios psicológicos prácticos.",
  "Método blindado de Contacto Cero.",
];

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          ref={ref}
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 700,
              fontSize: "36px",
              color: "#23191B",
            }}
          >
            Tu paz no es negociable.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "18px",
              color: "#514345",
              fontWeight: 500,
            }}
          >
            Un camino práctico diseñado para tu renacimiento emocional.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              color: "#514345",
              lineHeight: "1.7",
            }}
          >
            Este Workbook de 30 días no es solo lectura. Es una intervención
            directa en tu sistema de apego.
          </p>

          <ul className="flex flex-col gap-3">
            {points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.1 }}
              >
                <span
                  className="mt-1 w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center text-xs"
                  style={{ backgroundColor: "#D4949E", color: "#fff" }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "16px",
                    color: "#23191B",
                  }}
                >
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>

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

        {/* Mockup */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <div
            className="w-64 h-80 rounded-2xl flex items-center justify-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #FFF0F2 0%, #D4949E 50%, #844F58 100%)",
            }}
          >
            <div className="text-center px-6">
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: "1.4",
                }}
              >
                Método de Rescate Emocional
              </p>
              <p
                className="mt-2"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  color: "#fde4e8",
                }}
              >
                Workbook 30 días
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
