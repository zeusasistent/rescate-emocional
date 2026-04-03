"use client";
import { motion } from "framer-motion";

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
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px 96px" }}>
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Yes column */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
            <span
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#844F58",
                fontStyle: "italic",
              }}
            >
              Sí es para ti si...
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {yes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  backgroundColor: "#FFF8F7",
                  border: "1px solid rgba(212,148,158,0.15)",
                  borderRadius: "10px",
                  padding: "16px 18px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "13.5px",
                    color: "#514345",
                    lineHeight: 1.65,
                  }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No column */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#514345" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            <span
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#514345",
                fontStyle: "italic",
              }}
            >
              No es para ti si...
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", paddingTop: "4px" }}>
            {no.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13.5px",
                  color: "#514345",
                  lineHeight: 1.65,
                  paddingLeft: "4px",
                }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
