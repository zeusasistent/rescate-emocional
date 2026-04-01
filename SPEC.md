# SPEC — Método de Rescate Emocional: Landing Page de Ventas

## ¿Qué es?

Landing page de ventas para **Método de Rescate Emocional**, un workbook/ebook digital de 30 días diseñado para ayudar a personas a salir de la dependencia emocional y recuperar su amor propio. El objetivo de la página es convertir visitas en compras redirigiendo al checkout de Hotmart. No hay registro, no hay login, no hay suscripción. Solo vender.

**Promesa principal:**
> "Deja de sufrir por quien no te elige y recupera tu poder en 30 días."

El gancho es el dolor (sufrir por quien no te elige). La promesa es la transformación (recuperar tu poder). El marco temporal (30 días) hace la promesa concreta y alcanzable.

## ¿Para quién es?

**Usuario principal:** Personas —principalmente mujeres— de 20-38 años que están atrapadas emocionalmente en una relación donde no son elegidas, o que acaban de salir de una. Sienten el dolor hoy. Han probado ignorar el problema, han leído frases motivacionales, pero no encuentran una salida real y práctica.

**Contexto de uso:** Llegan a la página desde redes sociales o recomendación directa. La ven en el celular, probablemente de noche cuando el dolor es más fuerte. Toman la decisión de compra en minutos si el copy las toca en el lugar correcto.

**Motivación:** No quieren más frases vacías. Quieren un método real, paso a paso, que les diga exactamente qué hacer cada día para dejar de sufrir.

## ¿Qué debe tener?

### Sección 1: Hero (Above the fold)

- **Titular principal:** "Deja de sufrir por quien no te elige y recupera tu poder en 30 días."
- **Subtítulo:** "+20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconstruir tu amor propio desde cero."
- **CTA principal:** Botón "Quiero mi copia" → redirige al link de Hotmart
- **Badges visuales** debajo del CTA: `30 días de método` · `+20 ejercicios` · `Contacto cero`
- Fondo: degradado suave entre `--blanco-calido` y `--rosa-niebla`
- Animación sutil de entrada (fade + slide up, 400ms)

### Sección 2: El problema (Dolor)

- **Titular:** "¿Te suena familiar?"
- Lista de bullets emocionales que nombran el dolor exacto:
  - "Revisas su perfil aunque sabes que te hace daño"
  - "Justificas su comportamiento una y otra vez"
  - "Te preguntas qué hiciste mal"
  - "Sientes que sin esa persona no eres entera"
  - "Sabes que debes soltar, pero no puedes"
- Tono: cercano, sin juicio. Como una amiga que entiende, no como un diagnóstico.
- Animación: cada bullet aparece con stagger (100ms de delay entre cada uno al hacer scroll)

### Sección 3: La solución (Producto)

- **Titular:** "Tu paz no es negociable."
- Descripción del workbook: qué es, cómo funciona, qué van a hacer en 30 días
- Destacar:
  - Estructura día a día
  - +20 ejercicios psicológicos reales
  - Método de contacto cero
  - Reprogramación de hábitos emocionales
- Mockup visual del producto (imagen del ebook/workbook — placeholder hasta tenerla)
- CTA: Botón "Quiero mi copia" → Hotmart

### Sección 4: ¿Qué incluye?

- Grid de tarjetas (2 columnas mobile, 3 desktop):
  - 📅 Programa de 30 días estructurado
  - ✍️ +20 ejercicios psicológicos
  - 🚫 Guía de contacto cero
  - 💪 Técnicas para recuperar tu poder
  - 🔄 Reprogramación de hábitos afectivos
  - 📖 Workbook descargable (PDF)
- Cada tarjeta: ícono, título, descripción corta (1-2 líneas)
- Animación: tarjetas entran con fade al hacer scroll (Intersection Observer)

### Sección 5: Para quién es (y para quién NO)

Dos columnas lado a lado (una columna en mobile, apiladas):

**✅ Sí es para ti si:**
- Sigues pensando en alguien que no te elige
- Quieres dejar de sufrir pero no sabes cómo
- Estás lista para hacer el trabajo real
- Buscas algo práctico, no solo inspiración

**❌ No es para ti si:**
- Buscas que alguien te dé la respuesta mágica
- No estás lista para soltar
- Quieres solo frases bonitas para el Instagram

### Sección 6: Voz de la creadora

- Foto de la creadora (placeholder hasta tenerla)
- **Titular:** "Hola, soy [nombre]"
- Párrafo breve y cercano: quién es, por qué creó esto, desde qué lugar habla
- Tono: como una amiga que ya pasó por esto, no como una gurú distante
- Firmado con su nombre

### Sección 7: Testimonios

- 3-5 testimonios de personas que usaron el método
- Cada uno: avatar/foto, nombre, texto corto (2-4 líneas)
- Si no hay testimonios reales aún: componente listo con placeholder
- Slider horizontal en mobile, grid 3 columnas en desktop

### Sección 8: CTA Final

- **Titular:** "Empieza hoy. Tu paz no puede esperar."
- Repetir badges: `30 días` · `+20 ejercicios` · `Contacto cero`
- Botón grande: "Quiero mi copia" → Hotmart
- Texto debajo: "¿Tienes dudas? Escríbenos por WhatsApp" → link de WhatsApp
- Fondo: degradado `--rosa-niebla` a `--crema-dorado`

### Sección 9: Footer

- Nombre del producto: Método de Rescate Emocional
- Links: Términos y condiciones · Política de privacidad
- Sin redes sociales, sin menú, sin links externos
- Botón flotante de WhatsApp: visible en toda la página, esquina inferior derecha

---

## Colores

```css
--rosa-petalo: #D4949E;       /* Acento principal — botones, highlights */
--rosa-durazno: #E8B4BC;      /* Acento secundario — hover */
--rosa-suspiro: #F2C6CC;      /* Bordes suaves, detalles */
--rosa-niebla: #FFF0F2;       /* Fondos de sección */
--oro-miel: #D4B88A;          /* Dorado principal — badges, detalles dorados */
--oro-atardecer: #E4C28C;     /* Dorado secundario */
--oro-claro: #EDD5A6;         /* Dorado suave */
--arena-dorada: #F5E6C4;      /* Fondos alternos cálidos */
--crema-dorado: #FEF6E8;      /* Fondo base alterno */
--durazno-claro: #FDE8E0;     /* Fondo suave */
--blanco-calido: #FFFAF8;     /* Fondo principal */
--noche-rosada: #3D3234;      /* Texto principal */
```

**Uso de color:**
- Fondo principal: `--blanco-calido`
- Secciones alternas: `--rosa-niebla` y `--crema-dorado`
- Botones CTA: fondo `--rosa-petalo`, texto blanco
- Badges/pills: fondo `--arena-dorada`, borde `--oro-miel`, texto `--noche-rosada`
- Texto principal: `--noche-rosada`
- Botón WhatsApp flotante: #25D366

## Tipografía

- **Títulos y frases de impacto:** `Cormorant Garamond`, serif, peso 600-700 — elegante, femenino, emocional
- **Cuerpo y UI:** `DM Sans`, sans-serif, peso 400 regular — legible, moderno, cercano
- **Badges y etiquetas:** DM Sans, peso 500, tamaño pequeño (12-13px)
- **Números grandes o frases cortas de marca:** Cormorant Garamond, peso 700, tamaño grande (destacar)
- Fuentes: cargar desde Google Fonts

## Elementos visuales clave

- **Vibe general:** Minimalista pero cálido. Espacioso. Emocional sin ser cursi. Más "carta de una amiga" que "landing corporativa".
- **Espaciado:** Generoso. Mínimo 80px de padding vertical entre secciones. Los elementos nunca se sienten apretados.
- **Bordes:** Redondeados en todo — tarjetas, botones, inputs, badges. Nada cuadrado.
- **Botones CTA:** Border-radius 50px (pill shape), padding generoso. Hover: escala 1.02 + cambio de color, 150ms.
- **Badges/pills:** Fondo arena-dorada con borde dorado sutil. Sensación premium y delicada.
- **Mockup del producto:** Sombra suave, ligeramente inclinado (3-5°), sobre fondo claro.
- **Animaciones al scroll:** Fade-in + translateY(20px → 0), 400ms ease-out. Stagger en listas (100ms entre ítems). Nunca lentas ni excesivas.
- **Botón flotante WhatsApp:** 56px de diámetro, siempre visible, esquina inferior derecha, sombra suave.
- **Estados vacíos/placeholder:** Ilustraciones flat en tonos de la paleta (no imágenes de stock genéricas).

---

## Responsive — Mobile First

- Diseñar primero para 375px (iPhone estándar)
- Breakpoint desktop: 768px+
- En desktop: max-width 680px centrado (sensación de app móvil dentro del navegador)
- Sin navbar. La página es scroll lineal de arriba a abajo.
- La navegación no existe — el único camino es leer y comprar.

---

## Lo que NO debe tener

- ❌ Precio visible (el precio está en Hotmart)
- ❌ Login ni registro de usuarios
- ❌ Newsletter ni captura de emails
- ❌ Redes sociales (ni íconos ni links)
- ❌ Navbar ni menú de navegación
- ❌ Modo oscuro
- ❌ Integración de pagos directa (todo va a Hotmart)
- ❌ Chat en vivo (solo WhatsApp)
- ❌ Contador regresivo ni urgencia artificial
- ❌ Fotos de stock genéricas
- ❌ Blog ni páginas internas (solo landing + T&C + privacidad)

---

## Datos técnicos

- **Tipo:** Página estática (HTML/CSS/JS) o Next.js
- **No necesita backend**
- **CTA principal:** Link de Hotmart (pendiente)
- **WhatsApp:** `https://wa.me/[número]` (pendiente)
- **Analytics:** Espacio reservado para Google Analytics (activar después)
- **Hosting sugerido:** Vercel o Netlify

---

## Textos clave (copy)

| Elemento | Texto |
|---|---|
| Titular hero | "Deja de sufrir por quien no te elige y recupera tu poder en 30 días." |
| Subtítulo hero | "+20 ejercicios reales. Sin frases vacías. Un programa paso a paso para reconstruir tu amor propio desde cero." |
| CTA principal | "Quiero mi copia" |
| Badge 1 | "30 días de método" |
| Badge 2 | "+20 ejercicios" |
| Badge 3 | "Contacto cero" |
| Frase de marca | "Tu paz no es negociable." |
| CTA final | "Empieza hoy. Tu paz no puede esperar." |
| Link WhatsApp | "¿Tienes dudas? Escríbenos por WhatsApp" |
