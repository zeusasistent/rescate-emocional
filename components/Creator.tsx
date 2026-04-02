"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Creator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFF8F7" }}>
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-8 items-center text-center">
        <motion.h2
          ref={ref}
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
          Hola, soy Natalia
        </motion.h2>

        {/* Avatar */}
        <motion.div
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold"
          style={{
            backgroundColor: "#D4949E",
            color: "#fff",
            fontFamily: "var(--font-cormorant)",
            fontSize: "32px",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          N
        </motion.div>

        {/* Quote card */}
        <motion.div
          className="p-8 rounded-3xl text-left shadow-md"
          style={{ backgroundColor: "#FFFFFF" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              color: "#514345",
              lineHeight: "1.8",
              fontStyle: "italic",
            }}
          >
            "Creé este libro de Rescate Emocional desde mi propia experiencia,
            no como experta en psicología, sino como una mujer que también
            aprendió a sanar, soltar y ponerse en primer lugar. También nace
            de las historias de mis amigas, que pasaron por momentos difíciles
            y, paso a paso, volver a levantarse más fuertes. Este método reúne
            herramientas reales que nos ayudaron a salir adelante, reconstruirnos
            y elegirnos con más amor, fuerza y claridad."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
