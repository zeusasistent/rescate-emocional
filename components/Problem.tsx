"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  "Revisas su perfil aunque sabes que te hace daño.",
  "Justificas su comportamiento una y otra vez.",
  "Te preguntas qué hiciste mal.",
  "Sientes que sin esa persona no eres entera.",
  "Sabes que debes soltar, pero no puedes.",
];

function ProblemCard({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="p-6 rounded-2xl"
      style={{ backgroundColor: "#FFF0F2" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
    >
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "16px",
          color: "#23191B",
          lineHeight: "1.6",
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="w-full py-20"
      style={{ backgroundColor: "#FFF8F7" }}
    >
      <div className="max-w-2xl mx-auto px-6 flex flex-col gap-8">
        <motion.h2
          ref={ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "36px",
            color: "#23191B",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          ¿Te suena familiar?
        </motion.h2>

        <div className="flex flex-col gap-4">
          {problems.map((text, i) => (
            <ProblemCard key={i} text={text} index={i} />
          ))}
        </div>

        <p
          className="text-center italic"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "18px",
            color: "#514345",
          }}
        >
          Te entiendo, yo también estuve ahí. Pero hay una salida.
        </p>
      </div>
    </section>
  );
}
