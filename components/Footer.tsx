export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#FBF5F0",
        padding: "64px 24px 72px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "28px",
          textAlign: "center",
        }}
      >
        {/* Brand */}
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontSize: "28px",
            fontStyle: "italic",
            color: "#844F58",
            fontWeight: 400,
          }}
        >
          Método de Rescate Emocional
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
          {["Tàrminos y Condiciones", "Política de Privacidad", "Contacto"].map(link => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "13.5px",
                color: "#514345",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontSize: "14px",
            fontStyle: "italic",
            color: "#844F58",
          }}
        >
          © 2026 Método de Rescate Emocional
        </p>
      </div>
    </footer>
  );
}
