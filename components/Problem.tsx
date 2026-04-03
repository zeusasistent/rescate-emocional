"use client";
import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    text: "Revisas su perfil aunque sabes que te hace daño.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    text: "Justificas su comportamiento una y otra vez.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    text: "Te preguntas qué hiciste mal.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: "Sientes que sin esa persona no eres entera.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    text: "Sabes que debes soltar, pero no puedes.",
  },
];

export default function Problem() {
  return (
    <section style={{ backgroundColor: "#FFF8F7", padding: "88px 24px 96px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(34px, 4vw, 48px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#23191B",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          ¿Te suena familiar?
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                backgroundColor: "#FFF0F2",
                border: "1px solid rgba(213,194,196,0.15)",
                borderRadius: "10px",
                padding: "22px 18px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div style={{ opacity: 0.85 }}>{item.icon}</div>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13.5px",
                  color: "#514345",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}

          {/* Closing italic card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.38 }}
            style={{
              backgroundColor: "#FEF2F2",
              border: "1px solid rgba(212,148,158,0.2)",
              borderRadius: "10px",
              padding: "22px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "15.5px",
                fontStyle: "italic",
                color: "#844F58",
                lineHeight: 1.65,
                textAlign: "center",
              }}
            >
              Te entiendo, yo también estuve ahí.{" "}
              <span style={{ fontWeight: 600 }}>Pero hay una salida.</span>
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
