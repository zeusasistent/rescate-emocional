export default function Footer() {
  return (
    <footer
      className="w-full py-10"
      style={{ backgroundColor: "#FFF8F7" }}
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontSize: "30px",
            color: "#844F58",
            fontWeight: 400,
          }}
        >
          Método de Rescate Emocional
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {["Términos y Condiciones", "Política de Privacidad", "Contacto"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "14px",
                color: "#514345",
                textDecoration: "none",
              }}
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontSize: "16px",
            color: "#844F58",
          }}
        >
          © 2026 Método de Rescate Emocional
        </p>
      </div>
    </footer>
  );
}
