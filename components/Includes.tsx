"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: "📅",
    title: "30 días estructurados",
    desc: "Una hoja de ruta clara para que no te sientas perdida ni un solo día.",
  },
  {
    icon: "✍️",
    title: "+20 ejercicios",
    desc: "Herramientas psicológicas reales para procesar el dolor y soltar.",
  },
  {
    icon: "🚫",
    title: "Guía Contacto Cero",
    desc: "El protocolo exacto para proteger tu paz mental de distracciones.",
  },
  {
    icon: "💪",
    title: "Recupera tu poder",
    desc: "Técnicas de reafirmación para volver a ser el centro de tu vida.",
  },
  {
    icon: "🔄",
    title: "Hábitos Afectivos",
    desc: "Reprograma cómo te vinculas para no repetir patrones del pasado.",
  },
  {
    icon: "📖",
    title: "Workbook PDF",
    desc: "Llévalo en tu móvil o imprímelo para una experiencia táctil.",
  },
];

function IncludeCard({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl flex flex-col gap-3"
      style={{ backgroundColor: "#FFF0F2" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
    >
      <span className="text-3xl">{item.icon}</span>
      <h3
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 600,
          fontSize: "16px",
          color: "#23191B",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "14px",
          color: "#514345",
          lineHeight: "1.6",
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function Includes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFF8F7" }}>
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
          Lo que encontrarás dentro
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <IncludeCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
