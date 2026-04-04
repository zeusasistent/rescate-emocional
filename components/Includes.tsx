"use client";
import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "30 días estructurados",
    desc: "Una hoja de ruta clara para que no te sientas perdida ni un solo día.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    title: "+20 ejercicios",
    desc: "Herramientas psicológicas reales para procesar el dolor y soltar.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    title: "Guía Contacto Cero",
    desc: "El protocolo exacto para proteger tu paz mental de distracciones.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Recupera tu poder",
    desc: "Técnicas de reafirmación para volver a ser el centro de tu vida.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: "Hábitos Afectivos",
    desc: "Reprograma cómo te vinculas para no repetir patrones del pasado.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#844F58" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Workbook PDF",
    desc: "Llévalo en tu móvil o imprímelo para una experiencia táctil.",
  },
];

export default function Includes() {
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
            fontSize: "clamp(32px, 4vw, 46px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#23191B",
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          Lo que encontrarás dentro
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "14px",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(212,148,158,0.15)",
                borderRadius: "10px",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", //Centra el icono 
                textAlign: "center", //Centra el texto
                gap: "10px",
              }}
            >
              <div style={{ opacity: 0.85 }}>{item.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#23191B",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "13px",
                  color: "#514345",
                  lineHeight: 1.65,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
