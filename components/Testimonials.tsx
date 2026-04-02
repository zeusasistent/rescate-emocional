"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    initials: "M",
    text: "Estaba atrapada en un ciclo de idas y vueltas por 2 años. El día 15 del método algo hizo clic. Hoy por fin me siento libre y en paz.",
  },
  {
    initials: "L",
    text: "Los ejercicios son intensos pero valen cada minuto. No es el típico libro de autoayuda, es una guía de acción real.",
  },
  {
    initials: "V",
    text: "Lo que más me sirvió fue la guía de contacto cero. Me dio la fuerza que no tenía para bloquear y sanar.",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl shadow-md flex flex-col gap-4 min-w-[280px] md:min-w-0"
      style={{ backgroundColor: "#FFFFFF" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
        style={{
          backgroundColor: "#D4949E",
          fontFamily: "var(--font-jakarta)",
          fontSize: "16px",
        }}
      >
        {t.initials}
      </div>
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "15px",
          color: "#514345",
          lineHeight: "1.7",
          fontStyle: "italic",
        }}
      >
        "{t.text}"
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#FFF0F2" }}>
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
          Vidas transformadas
        </motion.h2>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0 snap-x snap-mandatory md:snap-none">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start flex-shrink-0 w-[85vw] md:w-auto md:flex-shrink">
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
