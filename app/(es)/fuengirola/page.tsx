import type { Metadata } from "next";
import { HeaderControls } from "@/app/components/HeaderControls";
import { PageEffects } from "@/app/components/PageEffects";

export const metadata: Metadata = {
  title: "Asistente de WhatsApp para negocios en Fuengirola | HolaTandem",
  description:
    "Automatiza WhatsApp para tu negocio en Fuengirola. Responde al instante, agenda citas y hace seguimiento en el idioma de tu cliente — en español, inglés, ruso y más. Lo configuramos todo.",
  metadataBase: new URL("https://holatandem.com"),
  alternates: {
    canonical: "/fuengirola",
    languages: { es: "/fuengirola", en: "/en", "x-default": "/fuengirola" },
  },
  openGraph: {
    type: "website",
    siteName: "HolaTandem",
    url: "https://holatandem.com/fuengirola",
    title: "Asistente de WhatsApp para negocios en Fuengirola | HolaTandem",
    description:
      "Automatiza WhatsApp para tu negocio en Fuengirola. Responde al instante, agenda citas y hace seguimiento en el idioma de tu cliente. Lo configuramos todo.",
    images: [
      {
        url: "https://holatandem.com/assets/og_image.png",
        width: 1200,
        height: 630,
        alt: "HolaTandem — Asistente de WhatsApp para negocios en Fuengirola y Costa del Sol",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistente de WhatsApp para negocios en Fuengirola | HolaTandem",
    description:
      "Automatiza WhatsApp para tu negocio en Fuengirola. Responde al instante, agenda citas y hace seguimiento en el idioma de tu cliente. Lo configuramos todo.",
    images: ["https://holatandem.com/assets/og_image.png"],
  },
};

const WA_ES =
  "https://wa.me/34638054941?text=%C2%A1Hola%21%20Quiero%20ver%20HolaTandem%20en%20acci%C3%B3n";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://holatandem.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Asistente de WhatsApp en Fuengirola",
      item: "https://holatandem.com/fuengirola",
    },
  ],
};

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://holatandem.com/fuengirola#service",
  name: "Asistente de WhatsApp con IA para negocios en Fuengirola",
  description:
    "Servicio de asistente de WhatsApp con IA, gestionado para pequeños negocios de Fuengirola y la Costa del Sol. Responde mensajes al instante, agenda citas y hace seguimiento en el idioma del cliente — 24/7.",
  url: "https://holatandem.com/fuengirola",
  provider: { "@id": "https://holatandem.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Fuengirola", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Mijas", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Benalmádena", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Torremolinos", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Marbella", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Estepona", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
    { "@type": "City", name: "Málaga", containedInPlace: { "@type": "AdministrativeArea", name: "Málaga" } },
  ],
  serviceType: "WhatsApp AI Assistant",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de asistente de WhatsApp",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asistente de WhatsApp para salones de belleza en Fuengirola",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asistente de WhatsApp para clínicas estéticas en Fuengirola",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asistente de WhatsApp para inmobiliarias en la Costa del Sol",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un asistente de WhatsApp para negocios en Fuengirola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un asistente con IA que se conecta a tu WhatsApp Business actual y responde a tus clientes al instante — en español, inglés, ruso, alemán, francés o rumano. Ideal para los negocios de Fuengirola y Costa del Sol que atienden a locales e internacionales. Nosotros lo configuramos y gestionamos todo por ti.",
      },
    },
    {
      "@type": "Question",
      name: "¿Funciona para negocios en Fuengirola, Mijas y Benalmádena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Trabajamos con negocios de toda la Costa del Sol: Fuengirola, Mijas, Benalmádena, Torremolinos, Marbella y Estepona. Al estar basados en Fuengirola, conocemos el mercado local — la mezcla de clientes locales, expats y turistas — y configuramos el asistente para ese contexto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Habla inglés con los clientes internacionales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, de forma automática. El asistente detecta el idioma del cliente y responde en el mismo — español, inglés, ruso, alemán, francés o rumano. Perfecto para la clientela internacional de Fuengirola y la Costa del Sol.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que cambiar mi número de WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El asistente funciona en tu número de WhatsApp Business actual, el que tus clientes ya usan. Sin número nuevo que aprender ni repartir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el asistente de WhatsApp para mi negocio en Fuengirola?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio depende del tamaño de tu negocio y el volumen de mensajes. Te lo explicamos en una demo gratuita y sin compromiso. Sin contratos largos — puedes cancelar cuando quieras.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en ponerse en marcha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En días, no semanas. Una llamada corta para conocer tu negocio, y nos encargamos de toda la configuración. Tú apruebas todo antes de activarlo.",
      },
    },
  ],
};

export default function FuengirolaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header>
        <div className="wrap nav">
          <a className="brand" href="/" aria-label="HolaTandem inicio">
            <svg
              className="logo-mark"
              viewBox="64 74 432 404"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="HolaTandem"
            >
              <defs>
                <linearGradient
                  id="lk0"
                  x1="219"
                  y1="156.02"
                  x2="481.3"
                  y2="405.42"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5AC8AE" />
                  <stop offset="1" stopColor="#2DA5AE" />
                </linearGradient>
              </defs>
              <path
                d="M200.08 355.54C181.733 394.527 171.413 422.62 169.12 439.82C202.373 423.767 232.187 402.553 258.56 376.18L200.08 355.54Z"
                fill="#0D2B45"
              />
              <path
                d="M219 405.42C300.694 405.42 366.92 339.194 366.92 257.5C366.92 175.806 300.694 109.58 219 109.58C137.306 109.58 71.08 175.806 71.08 257.5C71.08 339.194 137.306 405.42 219 405.42Z"
                fill="#0D2B45"
              />
              <circle cx="348" cy="278" r="149" fill="#FAF8F5" />
              <path
                d="M348 388.22C354.88 424.913 369.213 451.287 391 467.34C397.88 437.527 404.187 411.153 409.92 388.22H348Z"
                fill="url(#lk0)"
              />
              <path
                d="M348 417.46C424.944 417.46 487.32 355.084 487.32 278.14C487.32 201.196 424.944 138.82 348 138.82C271.056 138.82 208.68 201.196 208.68 278.14C208.68 355.084 271.056 417.46 348 417.46Z"
                fill="url(#lk0)"
              />
              <circle cx="440.29" cy="118.24" r="34.92" fill="#E26031" />
            </svg>
            <span className="logo-word">
              <span className="h">Hola</span>
              <span className="t">Tandem</span>
            </span>
          </a>
          <nav className="nav-links" id="navlinks">
            <a className="link" href="/#how">Cómo funciona</a>
            <a className="link" href="/#why">Por qué nosotros</a>
            <a className="link" href="/#pricing">Precios</a>
            <a
              className="btn btn-navy"
              href="https://calendly.com/elena-holatandem"
              target="_blank"
              rel="noopener"
            >
              Pide una demo
            </a>
          </nav>
          <HeaderControls locale="es" />
        </div>
      </header>

      <main id="top">
        {/* Breadcrumb */}
        <div className="wrap" style={{ paddingTop: "16px", paddingBottom: "0" }}>
          <nav aria-label="breadcrumb" style={{ fontSize: "13px", color: "#6b7280" }}>
            <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>Inicio</a>
            <span style={{ margin: "0 6px" }}>›</span>
            <span>Asistente de WhatsApp en Fuengirola</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                <span>Asistente de </span>
                <span className="accent">WhatsApp</span>
                <span> para negocios en Fuengirola</span>
              </h1>
              <p className="sub">
                Fuengirola tiene clientes de docenas de países —
                y todos escriben por WhatsApp. Nuestro asistente responde
                en su idioma al instante, agenda citas y hace seguimiento.
                Tú solo intervienes cuando quieres.{" "}
                <b>Lo configuramos y gestionamos todo.</b>
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn-wa"
                  href={WA_ES}
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    className="wa-ico"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Prueba la demo</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://calendly.com/elena-holatandem"
                  target="_blank"
                  rel="noopener"
                >
                  Pide una demo gratuita
                </a>
              </div>
              <p className="hero-note">
                Escribe a nuestro propio asistente en WhatsApp — responde{" "}
                <b>al instante, en el idioma de tu cliente</b>.
              </p>
            </div>

            <div className="phone" aria-hidden="true">
              <span className="side s-pwr"></span>
              <span className="side s-v1"></span>
              <span className="side s-v2"></span>
              <div className="island"></div>
              <div className="screen">
                <div className="chat-top">
                  <div className="av">
                    <svg
                      viewBox="51 59 456 456"
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <defs>
                        <clipPath id="klB" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 0H1860V620H0Z M199 278 a149 149 0 1 0 298 0 a149 149 0 1 0 -298 0 Z"
                            clipRule="evenodd"
                          />
                        </clipPath>
                        <linearGradient
                          id="gB"
                          x1="219"
                          y1="156.02"
                          x2="481.3"
                          y2="405.42"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5AC8AE" />
                          <stop offset="1" stopColor="#2DA5AE" />
                        </linearGradient>
                      </defs>
                      <g clipPath="url(#klB)">
                        <path
                          d="M200.08 355.54C181.733 394.527 171.413 422.62 169.12 439.82C202.373 423.767 232.187 402.553 258.56 376.18L200.08 355.54Z"
                          fill="#0D2B45"
                        />
                        <path
                          d="M219 405.42C300.694 405.42 366.92 339.194 366.92 257.5C366.92 175.806 300.694 109.58 219 109.58C137.306 109.58 71.08 175.806 71.08 257.5C71.08 339.194 137.306 405.42 219 405.42Z"
                          fill="#0D2B45"
                        />
                      </g>
                      <path
                        d="M348 388.22C354.88 424.913 369.213 451.287 391 467.34C397.88 437.527 404.187 411.153 409.92 388.22H348Z"
                        fill="url(#gB)"
                      />
                      <path
                        d="M348 417.46C424.944 417.46 487.32 355.084 487.32 278.14C487.32 201.196 424.944 138.82 348 138.82C271.056 138.82 208.68 201.196 208.68 278.14C208.68 355.084 271.056 417.46 348 417.46Z"
                        fill="url(#gB)"
                      />
                      <circle cx="440.29" cy="118.24" r="34.92" fill="#E26031" />
                    </svg>
                  </div>
                  <div>
                    <div className="nm">HolaTandem</div>
                    <div className="st">en línea · responde al instante</div>
                  </div>
                </div>
                <div className="chat-body" id="chatBody">
                  <div className="bub in">
                    Hi! Do you have availability for a facial on Friday?
                  </div>
                  <div className="bub out">
                    Hello! Yes — Friday we have 10:00 or 15:30 free. Which works best for you?{" "}
                    <span className="tick">✓✓</span>
                  </div>
                  <div className="bub in">15:30 please! 🙌</div>
                  <div className="bub out">
                    Booked for Friday at 15:30 ✨ I&apos;ll send you a reminder the day before. See you then!{" "}
                    <span className="tick">✓✓</span>
                  </div>
                  <div className="typing">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature chips */}
        <section className="features">
          <div className="wrap feat-grid">
            <div className="feat-chip">
              <div className="fc-ico">
                <svg viewBox="-36 -38 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#2C94A0" strokeWidth="4.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M-22 -18 h44 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-30 l-12 11 v-11 h-2 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8 z" />
                  </g>
                  <g fill="#2C94A0">
                    <circle cx="-12" cy="1" r="2.8" />
                    <circle cx="0" cy="1" r="2.8" />
                    <circle cx="12" cy="1" r="2.8" />
                  </g>
                </svg>
              </div>
              <div className="fc-label">Responde al instante</div>
            </div>
            <div className="feat-chip">
              <div className="fc-ico">
                <svg viewBox="-36 -38 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#2C94A0" strokeWidth="4.2" fill="none" strokeLinecap="round">
                    <rect x="-26" y="-22" width="52" height="48" rx="7" />
                    <line x1="-26" y1="-8" x2="26" y2="-8" />
                    <line x1="-13" y1="-30" x2="-13" y2="-18" />
                    <line x1="13" y1="-30" x2="13" y2="-18" />
                  </g>
                  <g fill="#2C94A0">
                    <circle cx="-13" cy="3" r="2.6" />
                    <circle cx="-13" cy="14" r="2.6" />
                    <circle cx="0" cy="3" r="2.6" />
                    <circle cx="0" cy="14" r="2.6" />
                    <circle cx="13" cy="3" r="2.6" />
                    <circle cx="13" cy="14" r="2.6" />
                  </g>
                </svg>
              </div>
              <div className="fc-label">Agenda citas</div>
            </div>
            <div className="feat-chip">
              <div className="fc-ico">
                <svg viewBox="-36 -38 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#2C94A0" strokeWidth="4.2" fill="none" strokeLinecap="round">
                    <circle cx="0" cy="0" r="28" />
                    <ellipse cx="0" cy="0" rx="12.5" ry="28" />
                    <path d="M-25.8 -11 Q0 -16 25.8 -11" />
                    <path d="M-25.8 11 Q0 16 25.8 11" />
                  </g>
                </svg>
              </div>
              <div className="fc-label">Habla el idioma de tu cliente</div>
            </div>
            <div className="feat-chip">
              <div className="fc-ico">
                <svg viewBox="-36 -38 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#2C94A0" strokeWidth="4.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="-9" cy="-13" r="11" />
                    <path d="M-27 26 v-4 a18 18 0 0 1 36 0 v4" />
                    <circle cx="17" cy="-5" r="8" />
                    <path d="M3 26 v-2 a13 13 0 0 1 26 0 v2" />
                  </g>
                </svg>
              </div>
              <div className="fc-label">Pasa a una persona cuando hace falta</div>
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="dark" id="local">
          <div className="wrap center">
            <p className="kicker">El mercado de Fuengirola</p>
            <h2 className="sec">Un negocio en Fuengirola atiende a clientes de toda Europa — a la vez</h2>
            <p className="lead">
              Fuengirola tiene una de las comunidades de residentes internacionales más grandes
              de la Costa del Sol — británicos, escandinavos, centroeuropeos y comunidades rusas
              que llevan décadas aquí, más una oleada de turistas de junio a septiembre.
              Para un negocio local, eso significa mensajes en cuatro idiomas distintos,
              el mismo día, muchos de ellos fuera del horario de apertura.
              El negocio que responde primero — en su idioma — se lleva la reserva.
            </p>
          </div>
          <div className="wrap">
            <div className="pain">
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Un expat escribe en inglés un domingo — y no recibe respuesta</b>
                  <p>
                    Para el lunes ya reservó en otro sitio. Sin asistente, ese cliente
                    no espera hasta que abras.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>En agosto los mensajes se triplican pero el equipo no</b>
                  <p>
                    La temporada alta es exactamente cuando más te cuesta contestar a tiempo
                    — y cuando más caro te sale perder una reserva.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Una clienta rusa pregunta algo sencillo — nadie en el equipo habla ruso</b>
                  <p>
                    No hace falta que tú hables todos los idiomas. Tu asistente los habla por ti,
                    de forma automática, sin que tengas que hacer nada.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Un cliente se cancela a última hora porque no recibió recordatorio</b>
                  <p>
                    Un hueco vacío en la agenda es ingreso directo perdido. Los recordatorios
                    automáticos reducen las ausencias sin que tengas que perseguir a nadie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section id="who">
          <div className="wrap center">
            <p className="kicker">Pensado para</p>
            <h2 className="sec">Los sectores que más WhatsApp reciben en Fuengirola</h2>
            <p className="lead">
              En la Costa del Sol, los clientes no llaman — escriben.
              Estos son los negocios donde el asistente marca más la diferencia.
            </p>
          </div>
          <div className="wrap">
            <div className="who">
              <div className="w">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2C94A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <line x1="20" y1="4" x2="8.12" y2="15.88" />
                    <line x1="14.47" y1="14.48" x2="20" y2="20" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Salones de belleza en Fuengirola</h3>
                <p>
                  Una clienta habitual escribe en español. La de al lado escribe en inglés.
                  La siguiente en ruso. El asistente responde a las tres al instante,
                  llena huecos de última hora y manda recordatorios para que nadie
                  se olvide de su cita — sin que tú toques el teléfono.
                </p>
              </div>
              <div className="w">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2C94A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
                    <path d="M18.5 14l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
                  </svg>
                </div>
                <h3>Clínicas estéticas en la Costa del Sol</h3>
                <p>
                  La Costa del Sol atrae a muchos clientes que combinan sus vacaciones
                  con tratamientos estéticos. Suelen preguntar precios y disponibilidad
                  desde el hotel, de noche o el fin de semana. El asistente responde,
                  califica si la consulta encaja y agenda la valoración — sin esperas.
                </p>
              </div>
              <div className="w">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2C94A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10.5L12 3l9 7.5" />
                    <path d="M5 9.5V21h14V9.5" />
                    <path d="M9.5 21v-6h5v6" />
                  </svg>
                </div>
                <h3>Inmobiliarias en Fuengirola y Marbella</h3>
                <p>
                  Compradores belgas, británicos y alemanes buscan propiedades en la Costa
                  del Sol y preguntan por WhatsApp antes de llamar. El asistente
                  recoge presupuesto, zona y tipo de propiedad en su idioma — y tú
                  recibes solo los leads que ya están listos para hablar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage area */}
        <section style={{ background: "#fbf9f6" }} id="coverage">
          <div className="wrap center">
            <p className="kicker">Zona de cobertura</p>
            <h2 className="sec">Basados en Fuengirola, trabajamos en toda la Costa del Sol</h2>
            <p className="lead">
              Atendemos a negocios de toda la franja costera — desde Estepona hasta Torremolinos.
              Si tu negocio está en la Costa del Sol, podemos ayudarte.
            </p>
          </div>
          <div className="wrap">
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "12px",
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}>
              {[
                { town: "Fuengirola", note: "Sede central" },
                { town: "Mijas", note: "Costa y pueblo" },
                { town: "Benalmádena", note: "" },
                { town: "Torremolinos", note: "" },
                { town: "Marbella", note: "" },
                { town: "Estepona", note: "" },
                { town: "Málaga", note: "" },
              ].map(({ town, note }) => (
                <div
                  key={town}
                  style={{
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "10px",
                    padding: "14px 10px",
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#0D2B45", fontSize: "15px" }}>{town}</div>
                  {note && <div style={{ fontSize: "12px", color: "#2C94A0", marginTop: "3px" }}>{note}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker">Preguntas</p>
            <h2 className="sec">Preguntas frecuentes sobre el asistente de WhatsApp en Fuengirola</h2>
          </div>
          <div className="wrap">
            <div className="faq-list">
              <details>
                <summary>¿Qué es un asistente de WhatsApp para negocios en Fuengirola?</summary>
                <div className="faq-a">
                  Es un asistente con IA que se conecta a tu WhatsApp Business y responde
                  a tus clientes al instante — en español, inglés, ruso, alemán, francés o rumano.
                  Ideal para los negocios de Fuengirola y Costa del Sol que atienden a locales
                  e internacionales. Nosotros lo configuramos y gestionamos todo por ti.
                </div>
              </details>
              <details>
                <summary>¿Funciona para negocios en Mijas, Benalmádena y Marbella también?</summary>
                <div className="faq-a">
                  Sí. Trabajamos con negocios de toda la Costa del Sol: Fuengirola, Mijas,
                  Benalmádena, Torremolinos, Marbella y Estepona. Al estar basados en Fuengirola,
                  conocemos el mercado local.
                </div>
              </details>
              <details>
                <summary>¿Habla inglés con los clientes internacionales?</summary>
                <div className="faq-a">
                  Sí, de forma automática. El asistente detecta el idioma del cliente y responde
                  en el mismo — español, inglés, ruso, alemán, francés o rumano. Perfecto para
                  la clientela internacional de Fuengirola y la Costa del Sol.
                </div>
              </details>
              <details>
                <summary>¿Tengo que cambiar mi número de WhatsApp?</summary>
                <div className="faq-a">
                  No. El asistente funciona en tu número de WhatsApp Business actual, el que
                  tus clientes ya usan. Sin número nuevo que aprender ni repartir.
                </div>
              </details>
              <details>
                <summary>¿Cuánto cuesta el asistente de WhatsApp para mi negocio en Fuengirola?</summary>
                <div className="faq-a">
                  El precio depende del tamaño de tu negocio y el volumen de mensajes. Te lo
                  explicamos en una demo gratuita y sin compromiso. Sin contratos largos.
                </div>
              </details>
              <details>
                <summary>¿Cuánto tarda en ponerse en marcha?</summary>
                <div className="faq-a">
                  En días, no semanas. Una llamada corta para conocer tu negocio, y nos encargamos
                  de toda la configuración. Tú apruebas todo antes de activarlo.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demo">
          <div className="wrap">
            <div className="cta-band">
              <h2>Pide una demo gratuita para tu negocio en Fuengirola</h2>
              <p>
                Cuéntanos cómo funciona tu negocio y te mostramos cómo el asistente
                de WhatsApp puede recuperar reservas perdidas — o escríbenos ahora mismo.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="btn btn-wa-white"
                  href={WA_ES}
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    className="wa-ico"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.15-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Escríbenos por WhatsApp</span>
                </a>
                <a
                  className="btn btn-navy"
                  href="https://calendly.com/elena-holatandem"
                  target="_blank"
                  rel="noopener"
                >
                  Pide una demo gratuita
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="ftop">
            <div style={{ maxWidth: "320px" }}>
              <span className="logo-brand-foot">
                <svg
                  className="logo-mark-foot"
                  viewBox="64 74 432 404"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="HolaTandem"
                >
                  <defs>
                    <linearGradient
                      id="lkf1"
                      x1="219"
                      y1="156.02"
                      x2="481.3"
                      y2="405.42"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5AC8AE" />
                      <stop offset="1" stopColor="#2DA5AE" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M200.08 355.54C181.733 394.527 171.413 422.62 169.12 439.82C202.373 423.767 232.187 402.553 258.56 376.18L200.08 355.54Z"
                    fill="#FAF8F5"
                  />
                  <path
                    d="M219 405.42C300.694 405.42 366.92 339.194 366.92 257.5C366.92 175.806 300.694 109.58 219 109.58C137.306 109.58 71.08 175.806 71.08 257.5C71.08 339.194 137.306 405.42 219 405.42Z"
                    fill="#FAF8F5"
                  />
                  <circle cx="348" cy="278" r="149" fill="#0D2B45" />
                  <path
                    d="M348 388.22C354.88 424.913 369.213 451.287 391 467.34C397.88 437.527 404.187 411.153 409.92 388.22H348Z"
                    fill="url(#lkf1)"
                  />
                  <path
                    d="M348 417.46C424.944 417.46 487.32 355.084 487.32 278.14C487.32 201.196 424.944 138.82 348 138.82C271.056 138.82 208.68 201.196 208.68 278.14C208.68 355.084 271.056 417.46 348 417.46Z"
                    fill="url(#lkf1)"
                  />
                  <circle cx="440.29" cy="118.24" r="34.92" fill="#E26031" />
                </svg>
                <span className="logo-text-foot">
                  <span className="fw">
                    <span className="h">Hola</span>
                    <span className="t">Tandem</span>
                  </span>
                  <span className="ft">Tu Asistente de WhatsApp</span>
                </span>
              </span>
              <p className="tag">
                IA por WhatsApp hecha para ti, para salones, clínicas e
                inmobiliarias de Fuengirola y la Costa del Sol.
              </p>
            </div>
            <div className="fcol">
              <h4>Explora</h4>
              <a href="/#how">Cómo funciona</a>
              <a href="/#why">Por qué nosotros</a>
              <a href="/#pricing">Precios</a>
            </div>
            <div className="fcol">
              <h4>Zona</h4>
              <a href="/fuengirola">Fuengirola</a>
              <a href="/">Costa del Sol</a>
            </div>
            <div className="fcol">
              <h4>Contacto</h4>
              <a href={WA_ES} target="_blank" rel="noopener">
                Escríbenos por WhatsApp
              </a>
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
              <span>Fuengirola, Málaga · España</span>
            </div>
            <div className="fcol">
              <h4>Legal</h4>
              <a href="/privacy">Política de privacidad</a>
              <a href="/aviso-legal">Aviso Legal</a>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} HolaTandem · holatandem.com</span>
            <span>Sobre la plataforma WhatsApp Business</span>
          </div>
        </div>
      </footer>
      <PageEffects />
    </>
  );
}
