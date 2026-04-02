"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const yes = [
  "Estás pensando en alguien que no te elige ni te valora.",
  "Estás lista para hacer el trabajo real (y a veces incómodo).",
  "Buscas algo práctico, no solo teoría motivacional.",
];

const no = [
  "Buscas soluciones mágicas de la noche a la mañana.",
  "No estás dispuesta a dejar ir a esa persona.",
  "Solo quieres leer frases bonitas sin actuar.",
];

export default function ForWhom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10">
        <motion.h2
          ref={ref}
          className="text-center"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "36px",
            color: "#23191B",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          ¿Para quién es?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Yes column */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: "18px",
                color: "#23191B",
              }}
            >
              ✅ Sí es para ti si...
            </h3>
            <ul className="flex flex-col gap-3">
              {yes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ backgroundColor: "#FFF0F2" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "15px",
                      color: "#23191B",
                      lineHeight: "1.6",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* No column */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-jakarta)",
                fontWeight: 600,
                fontSize: "18px",
                color: "#23191B",
              }}
            >
              ❌ No es para ti si...
            </h3>
            <ul className="flex flex-col gap-3">
              {no.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jakarta)",
                      fontSize: "15px",
                      color: "#514345",
                      lineHeight: "1.6",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
