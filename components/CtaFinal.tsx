"use client";
import { motion } from "framer-motion";

const badges = ["30 DÍAS", "+20 EJERCICIOS", "AMOR PROPIO"];

export default function CtaFinal() {
  return (
    <section
      id="comprar"
      style={{
        background: "linear-gradient(160deg, #F9EDE8 0%, #FFF8F7 60%, #FDF5EE 100%)",
        padding: "96px 24px 112px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "32px",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#23191B",
            lineHeight: 1.15,
          }}
        >
          Empieza hoy. Tu paz no puede esperar.
        </motion.h2>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {badges.map(b => (
            <span
              key={b}
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#844F58",
                backgroundColor: "rgba(212,148,158,0.12)",
                border: "1px solid rgba(212,148,158,0.3)",
                borderRadius: "50px",
                padding: "6px 18px",
                textTransform: "uppercase",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.a
            href="HOTMART_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: "#844F58",
              color: "#FFFFFF",
              borderRadius: "50px",
              padding: "18px 52px",
              fontSize: "17px",
              fontFamily: "var(--font-jakarta)",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Quiero mi Workbook
          </motion.a>
        </motion.div>

        {/* WhatsApp link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "14px",
            color: "#514345",
          }}
        >
          ¿Tienes dudas?{" "}
          <a
            href="WHATSAPP_LINK_PLACEHOLDER"
            style={{
              color: "#514345",
              textDecoration: "underline",
            }}
          >
            Escríbenos por WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
