"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = ["30 DÍAS", "+20 EJERCICIOS", "AMOR PROPIO"];

export default function CtaFinal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="comprar"
      className="w-full py-24"
      style={{
        background: "linear-gradient(180deg, #FFF0F2 0%, #FFFAF8 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
        <motion.h2
          ref={ref}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "#23191B",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Empieza hoy. Tu paz no puede esperar.
        </motion.h2>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#D4949E",
                color: "#844F58",
                fontFamily: "var(--font-jakarta)",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <motion.a
            href="HOTMART_LINK_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold"
            style={{
              backgroundColor: "#844F58",
              color: "#FFFFFF",
              borderRadius: "50px",
              padding: "16px 48px",
              fontSize: "20px",
              fontFamily: "var(--font-jakarta)",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Quiero mi Workbook
          </motion.a>
        </motion.div>

        {/* WhatsApp link */}
        <motion.p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "15px",
            color: "#514345",
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          ¿Tienes dudas?{" "}
          <a
            href="WHATSAPP_LINK_PLACEHOLDER"
            style={{
              color: "#844F58",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            Escríbenos por WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
