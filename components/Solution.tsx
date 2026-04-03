"use client";
import { motion } from "framer-motion";

const points = [
  "Estructura diaria paso a paso.",
  "+20 ejercicios psicológicos prácticos.",
  "Método blindado de 'Contacto Cero'.",
];

export default function Solution() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "88px 24px 96px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(34px, 4vw, 48px)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#23191B",
              marginBottom: "12px",
            }}
          >
            Tu paz no es negociable.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              color: "#514345",
            }}
          >
            Un camino práctico diseñado para tu renacimiento emocional.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left: product mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "320px",
                aspectRatio: "4/3",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #F5EDE8 0%, #E8D5CC 40%, #C9B0A8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(132,79,88,0.15)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Book mockup */}
              <div
                style={{
                  width: "55%",
                  aspectRatio: "3/4",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  boxShadow: "4px 4px 16px rgba(0,0,0,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 12px",
                  transform: "rotate(-3deg)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "9px",
                    fontStyle: "italic",
                    color: "#844F58",
                    textAlign: "center",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                  }}
                >
                  El Método del Rescate Emocional
                </p>
                <div
                  style={{
                    width: "60%",
                    height: "1px",
                    backgroundColor: "#D4949E",
                    marginBottom: "8px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "7px",
                    color: "#514345",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  Workbook 30 días
                </p>
              </div>
              {/* Pen */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18px",
                  left: "18px",
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#8B7355",
                  borderRadius: "3px",
                  transform: "rotate(-30deg)",
                  zIndex: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Right: text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "15px",
                color: "#514345",
                lineHeight: 1.75,
              }}
            >
              Este Workbook de 30 días no es solo lectura. Es una intervención
              directa en tu sistema de apego.
            </p>

            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", listStyle: "none", padding: 0, margin: 0 }}>
              {points.map((p, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14.5px",
                    color: "#23191B",
                    lineHeight: 1.6,
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "7px",
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      backgroundColor: "#D4949E",
                    }}
                  />
                  {p}
                </li>
              ))}
            </ul>

            <div style={{ paddingTop: "8px" }}>
              <motion.a
                href="HOTMART_LINK_PLACEHOLDER"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#D4949E",
                  color: "#fff",
                  borderRadius: "50px",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  padding: "14px 36px",
                }}
              >
                Quiero mi Workbook
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .solution-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
