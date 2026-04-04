"use client";
import { motion } from "framer-motion";

const points = [
  "Estructura diaria paso a paso.",
  "Ejercicios psicológicos prácticos.",
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
            gap: "72px",
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
              position: "relative", // Esto permite encimar una imagen sobre otra
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px", // Ajusta la altura según necesites
              width: "100%", //Que use todo el ancho de su columna
            }}
          >
            {/* Imagen de fondo (El Workbook/Hojas) */}
            <img 
              src="/images/workbook-mockup.png" 
              alt="Workbook"
              style={{
                width: "236px",
                height: "auto",
                transform: "translate(-40px, 0px) rotate(-16deg)", // Le damos esa inclinación coqueta
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
                position: "absolute",
                zIndex: 1,
                left: "o", // la pegamos a la izquierda
                borderRadius: "48px",
              }}
            />

            {/* Imagen de adelante (El iPad) */}
            <img 
              src="/images/ipad-mockup.png" 
              alt="iPad"
              style={{
                width: "236px",
                height: "auto",
                transform: "translate(80px, 20px) rotate(10deg)", // Lo movemos un poco para que se desfase
                boxShadow: "0 25px 55px rgba(0,0,0,0.2)",
                position: "relative",
                zIndex: 2,
                borderRadius: "48px",
              }}
            />
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
                href="https://go.hotmart.com/Q105155672B?dp=1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#D4949E",
                  color: "#5B2D36",
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
