"use client";
import { motion } from "framer-motion";
import { publicPath } from "@/lib/publicPath";

export default function Creator() {
  return (
    <section style={{ backgroundColor: "#FFF8F7", padding: "88px 24px 96px" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "24px",
        }}
      >
        {/* Circular photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(212,148,158,0.3)",
            background: "linear-gradient(135deg, #2C2440 0%, #1a1a2e 50%, #3d2b1f 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
          src={publicPath("/images/creator.png")}
          alt= "creator"
          style={{
            width: "96px",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(30px, 3.5vw, 40px)",
            fontWeight: 600,
            fontStyle: "italic",
            color: "#23191B",
          }}
        >
          Hola, soy Natalia
        </motion.h2>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "15px",
            fontStyle: "italic",
            color: "#514345",
            lineHeight: 1.85,
          }}
        >
          &ldquo;Creé este libro de Rescate Emocional desde mi propia experiencia, no
          como experta en psicología, sino como una mujer que también aprendió a
          sanar, soltar y ponerse en primer lugar. También nace de las historias
          de mis amigas, que pasaron por momentos difíciles y, paso a paso,
          volver a levantarse más fuertes. Este método reúne herramientas reales
          que nos ayudaron a salir adelante, reconstruirnos y elegirnos con más
          amor, fuerza y claridad.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
