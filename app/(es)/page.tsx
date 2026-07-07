import { HeaderControls } from "@/app/components/HeaderControls";
import { PageEffects } from "@/app/components/PageEffects";
import Image from "next/image";

const WA_ES =
  "https://wa.me/34638054941?text=%C2%A1Hola%21%20Quiero%20ver%20HolaTandem%20en%20acci%C3%B3n";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://holatandem.com/#app",
  name: "HolaTandem — Asistente de WhatsApp con IA",
  description:
    "Asistente de WhatsApp con IA, hecho para ti, para negocios locales de la Costa del Sol. Responde leads al instante, agenda citas y hace seguimiento en el idioma del cliente, 24/7.",
  url: "https://holatandem.com/",
  image: "https://holatandem.com/assets/og_image.png",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WhatsApp Business Platform",
  inLanguage: ["es", "en", "ru", "de", "fr", "ro"],
  featureList: [
    "Respuestas instantáneas por WhatsApp en cualquier idioma",
    "Agenda de citas automática",
    "Calificación de leads",
    "Recordatorios de citas y reducción de ausencias",
    "Traspaso a persona humana bajo demanda",
    "Configuración y gestión hecha para ti",
  ],
  offers: {
    "@type": "Offer",
    url: "https://holatandem.com/#pricing",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: { "@id": "https://holatandem.com/#organization" },
  },
  provider: { "@id": "https://holatandem.com/#organization" },
  areaServed: { "@type": "Place", name: "Costa del Sol, Málaga, Spain" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://holatandem.com/#elena-ignat",
  name: "Elena Ignat",
  jobTitle: "Fundadora",
  image: "https://holatandem.com/assets/founder.jpg",
  worksFor: { "@id": "https://holatandem.com/#organization" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fuengirola",
    addressRegion: "Málaga",
    addressCountry: "ES",
  },
  url: "https://holatandem.com/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es HolaTandem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HolaTandem es un servicio de asistente de WhatsApp con IA, gestionado para pequeños negocios de la Costa del Sol, España. Fundado por Elena Ignat y con sede en Fuengirola, gestiona las consultas entrantes de WhatsApp, agenda citas y envía recordatorios automáticamente — en español, inglés, ruso, alemán, francés y rumano — para peluquerías, salones de belleza, clínicas estéticas e inmobiliarias.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es solo un chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A diferencia de un chatbot básico, entiende lo que pregunta cada cliente y responde con naturalidad en su idioma — y te pasa la conversación cuando hace falta una persona.",
      },
    },
    {
      "@type": "Question",
      name: "¿Usa mi número de WhatsApp actual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí — funciona en tu número de WhatsApp Business, el que tus clientes ya usan. Sin número nuevo que aprender ni repartir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué idiomas habla?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Responde automáticamente en el idioma de tu cliente — ideal para la mezcla de locales e internacionales de la Costa del Sol. Idiomas admitidos: español, inglés, ruso, alemán, francés y rumano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Están seguros mis datos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Usamos herramientas conformes al RGPD y alojadas en la UE, y nunca vendemos tus datos. Consulta nuestra Política de Privacidad para más detalles.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda la configuración?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Días, no meses. Nos encargamos de toda la configuración y tú apruebas todo antes de activarlo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay un contrato largo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sin permanencia larga — puedes cancelar cuando quieras. Preferimos que te quedes porque funciona.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sustituye a mi software de reservas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — funciona junto a las herramientas que ya usas. No tienes que cambiar cómo llevas tu negocio.",
      },
    },
  ],
};

export default function HomeEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
            <a className="link" href="#how">Cómo funciona</a>
            <a className="link" href="#why">Por qué nosotros</a>
            <a className="link" href="#pricing">Precios</a>
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
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                <span>No pierdas otro cliente de </span>
                <span className="accent">WhatsApp</span>
                <span>.</span>
              </h1>
              <p className="sub">
                IA que responde, agenda citas y hace seguimiento — mientras tú
                te centras en tu negocio. Lo configuramos todo por ti.
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
                  Pide una demo
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
                        <clipPath id="klA" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 0H1860V620H0Z M199 278 a149 149 0 1 0 298 0 a149 149 0 1 0 -298 0 Z"
                            clipRule="evenodd"
                          />
                        </clipPath>
                        <linearGradient
                          id="gA"
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
                      <g clipPath="url(#klA)">
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
                        fill="url(#gA)"
                      />
                      <path
                        d="M348 417.46C424.944 417.46 487.32 355.084 487.32 278.14C487.32 201.196 424.944 138.82 348 138.82C271.056 138.82 208.68 201.196 208.68 278.14C208.68 355.084 271.056 417.46 348 417.46Z"
                        fill="url(#gA)"
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
                    ¡Hola! ¿Tenéis hueco el sábado para mechas? 💇‍♀️
                  </div>
                  <div className="bub out">
                    ¡Hola Marta! Sí — el sábado tenemos libre a las 11:00 o
                    16:30. ¿Cuál te viene mejor?{" "}
                    <span className="tick">✓✓</span>
                  </div>
                  <div className="bub in">A las 11:00 por favor 🙌</div>
                  <div className="bub out">
                    Reservado para el sábado a las 11:00 ✨ Te enviaré un
                    recordatorio el día antes. ¡Hasta entonces!{" "}
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

        <section className="dark" id="problem">
          <div className="wrap center">
            <p className="kicker">La fuga invisible</p>
            <h2 className="sec">Cada respuesta tardía es una reserva perdida</h2>
            <p className="lead">
              Hoy casi todos escriben por WhatsApp — y gana el primero en
              responder. Cuando estás con un cliente, de vacaciones o son las 9
              de la noche, esos mensajes esperan. Y el cliente que espera, se va
              a otro sitio.
            </p>
          </div>
          <div className="wrap">
            <div className="pain">
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Clientes contestados tarde</b>
                  <p>
                    Las respuestas llegan horas después, cuando ya reservaron
                    con la competencia.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Se pierden antes de reservar</b>
                  <p>
                    Preguntan algo, no reciben respuesta y desaparecen sin más.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>El seguimiento manual te roba el día</b>
                  <p>
                    Perseguir, recordar y volver a citar a mano — mensaje a
                    mensaje.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Ausencias que no viste venir</b>
                  <p>
                    Sin recordatorios a tiempo, se acumulan los huecos vacíos y
                    los ingresos perdidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap center">
            <p className="kicker">Cómo funciona</p>
            <h2 className="sec">En tu WhatsApp en días, no en meses</h2>
            <p className="lead">
              Sin app que aprender, sin número nuevo que repartir. Funciona en
              el WhatsApp al que tus clientes ya escriben.
            </p>
          </div>
          <div className="wrap">
            <div className="steps">
              <div className="step">
                <div className="n"></div>
                <h3>Conocemos tu negocio</h3>
                <p>
                  Una llamada corta sobre tus servicios, precios, horarios y las
                  preguntas más frecuentes. Nos encargamos de toda la
                  configuración.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3>Lo creamos y conectamos</h3>
                <p>
                  Tu asistente se entrena con tus datos y se conecta a tu
                  WhatsApp — todo hecho por ti, de principio a fin.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3>Responde y agenda 24/7</h3>
                <p>
                  Los clientes reciben respuestas al instante y reservan solos.
                  Tú intervienes solo cuando quieres — nosotros lo mantenemos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark" id="why">
          <div className="wrap center">
            <p className="kicker">Por qué HolaTandem</p>
            <h2 className="sec">
              No es otro chatbot. Es un asistente hecho para ti.
            </h2>
            <p className="lead">
              Los bots genéricos te dan un panel y te desean suerte. Nosotros
              creamos, gestionamos y afinamos el tuyo — adaptado a la Costa del
              Sol y a tu sector.
            </p>
          </div>
          <div className="wrap">
            <div className="compare">
              <div className="crow chead">
                <div>Característica</div>
                <div className="ht">HolaTandem</div>
                <div>Chatbot genérico</div>
              </div>
              <div className="crow">
                <div className="feat">Habla el idioma de tu cliente</div>
                <div className="col-ht">
                  <span className="yes">✓ Automáticamente</span>
                </div>
                <div className="no">Normalmente solo uno</div>
              </div>
              <div className="crow">
                <div className="feat">Configurado y gestionado por ti</div>
                <div className="col-ht">
                  <span className="yes">✓ Totalmente gestionado</span>
                </div>
                <div className="no">Panel hazlo-tú-mismo</div>
              </div>
              <div className="crow">
                <div className="feat">Soporte local en la Costa del Sol</div>
                <div className="col-ht">
                  <span className="yes">✓ En Fuengirola</span>
                </div>
                <div className="no">Sin cara / en el extranjero</div>
              </div>
              <div className="crow">
                <div className="feat">
                  Adaptado a salones, clínicas e inmobiliarias
                </div>
                <div className="col-ht">
                  <span className="yes">✓ Específico por sector</span>
                </div>
                <div className="no">Igual para todos</div>
              </div>
              <div className="crow">
                <div className="feat">Funciona en tu número actual</div>
                <div className="col-ht">
                  <span className="yes">✓ Mantén tu número</span>
                </div>
                <div className="no">A menudo un número nuevo</div>
              </div>
              <div className="crow">
                <div className="feat">Pasa a una persona real</div>
                <div className="col-ht">
                  <span className="yes">✓ Cuando quieras</span>
                </div>
                <div className="no">A menudo sin salida</div>
              </div>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="wrap center">
            <p className="kicker">Pensado para</p>
            <h2 className="sec">Hecho para negocios de la Costa del Sol</h2>
            <p className="lead">
              Si tus clientes reservan por WhatsApp, tu asistente se paga solo
              con las reservas que recuperas.
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
                <h3>Salones de belleza</h3>
                <p>
                  Llena la agenda, reduce ausencias con recordatorios y vuelve a
                  citar a tus clientes automáticamente.
                </p>
              </div>
              <div className="w">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2C94A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
                    <path d="M18.5 14l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
                  </svg>
                </div>
                <h3>Clínicas estéticas</h3>
                <p>
                  Responde dudas sobre tratamientos, califica consultas y agenda
                  valoraciones a cualquier hora.
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
                <h3>Inmobiliarias</h3>
                <p>
                  Califica compradores e inquilinos al instante, recoge sus
                  datos y pásate solo los contactos serios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="founder">
          <div className="wrap center">
            <p className="kicker">Quién hay detrás</p>
            <h2 className="sec">
              Una persona real, no un proveedor de bots sin cara
            </h2>
          </div>
          <div className="wrap">
            <div className="founder-card">
              <div className="avatar">
                <Image
                  src="/assets/founder2.jpg"
                  alt="Elena Ignat, fundadora de HolaTandem"
                  width={104}
                  height={104}
                  loading="lazy"
                />
              </div>
              <div>
                <h3>Elena Ignat</h3>
                <div className="role">Fundadora · Costa del Sol</div>
                <p>
                  Elena es ingeniera de formación con más de 15 años de
                  experiencia liderando transformación y mejora de procesos en
                  banca, fintech y SaaS B2B.
                </p>
                <p>
                  Directora de proyectos certificada PMP y Lean Six Sigma Black
                  Belt, ha dedicado su carrera a rediseñar cómo funcionan las
                  empresas — no simplemente añadiendo tecnología, sino mejorando
                  cómo fluye el trabajo antes de automatizarlo.
                </p>
                <p>
                  Fundó HolaTandem con una convicción sencilla: las ventajas de
                  la IA no deberían estar reservadas a las grandes
                  organizaciones. Hoy ayuda a pequeñas y medianas empresas a
                  poner la IA práctica a trabajar — ahorrando tiempo, mejorando
                  el servicio al cliente y creando nuevas oportunidades de
                  crecimiento.
                </p>
                <div className="founder-points">
                  <span>
                    <span className="ck">✓</span> Local, en Fuengirola
                  </span>
                  <span>
                    <span className="ck">✓</span> Hecho por ti, de principio a
                    fin
                  </span>
                  <span>
                    <span className="ck">✓</span> Tratas conmigo directamente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker">Planes</p>
            <h2 className="sec">Tu plan y precio, en una demo gratuita</h2>
            <p className="lead">
              Cuéntanos sobre tu negocio en una demo gratuita y te recomendamos
              el plan y el precio que encajan.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                className="btn btn-navy"
                href="https://calendly.com/elena-holatandem"
                target="_blank"
                rel="noopener"
              >
                Pide una demo
              </a>
            </div>
            <p className="compare-note">
              Sin contratos largos, y tú apruebas todo antes de activarlo.
            </p>
          </div>
        </section>

        <section id="faq" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker">Preguntas</p>
            <h2 className="sec">Preguntas, respondidas</h2>
          </div>
          <div className="wrap">
            <div className="faq-list">
              <details>
                <summary>¿Es solo un chatbot?</summary>
                <div className="faq-a">
                  No. A diferencia de un chatbot básico, entiende lo que
                  pregunta cada cliente y responde con naturalidad en su idioma
                  — y te pasa la conversación cuando hace falta una persona.
                </div>
              </details>
              <details>
                <summary>¿Usa mi número de WhatsApp actual?</summary>
                <div className="faq-a">
                  Sí — funciona en tu número de WhatsApp Business, el que tus
                  clientes ya usan. Sin número nuevo que aprender ni repartir.
                </div>
              </details>
              <details>
                <summary>¿Qué idiomas habla?</summary>
                <div className="faq-a">
                  Responde automáticamente en el idioma de tu cliente — ideal
                  para la mezcla de locales e internacionales de la Costa del
                  Sol.
                </div>
              </details>
              <details>
                <summary>¿Están seguros mis datos?</summary>
                <div className="faq-a">
                  Sí. Usamos herramientas conformes al RGPD y alojadas en la
                  UE, y nunca vendemos tus datos. Consulta nuestra{" "}
                  <a href="/privacy">Política de Privacidad</a> para más
                  detalles.
                </div>
              </details>
              <details>
                <summary>¿Cuánto tarda la configuración?</summary>
                <div className="faq-a">
                  Días, no meses. Nos encargamos de toda la configuración y tú
                  apruebas todo antes de activarlo.
                </div>
              </details>
              <details>
                <summary>¿Hay un contrato largo?</summary>
                <div className="faq-a">
                  Sin permanencia larga — puedes cancelar cuando quieras.
                  Preferimos que te quedes porque funciona.
                </div>
              </details>
              <details>
                <summary>¿Sustituye a mi software de reservas?</summary>
                <div className="faq-a">
                  No — funciona junto a las herramientas que ya usas. No tienes
                  que cambiar cómo llevas tu negocio.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="demo">
          <div className="wrap">
            <div className="cta-band">
              <h2>Pide una demo en vivo</h2>
              <p>
                Descubre cómo funciona HolaTandem para un negocio como el tuyo
                — o escribe a nuestro asistente en WhatsApp ahora mismo.
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
                  <span>Prueba la demo</span>
                </a>
                <a
                  className="btn btn-navy"
                  href="https://calendly.com/elena-holatandem"
                  target="_blank"
                  rel="noopener"
                >
                  Pide una demo
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
                      id="lkf0"
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
                    fill="url(#lkf0)"
                  />
                  <path
                    d="M348 417.46C424.944 417.46 487.32 355.084 487.32 278.14C487.32 201.196 424.944 138.82 348 138.82C271.056 138.82 208.68 201.196 208.68 278.14C208.68 355.084 271.056 417.46 348 417.46Z"
                    fill="url(#lkf0)"
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
                inmobiliarias de la Costa del Sol.
              </p>
            </div>
            <div className="fcol">
              <h4>Explora</h4>
              <a href="#how">Cómo funciona</a>
              <a href="#why">Por qué nosotros</a>
              <a href="#pricing">Precios</a>
            </div>
            <div className="fcol">
              <h4>Contacto</h4>
              <a href={WA_ES} target="_blank" rel="noopener">
                Escríbenos por WhatsApp
              </a>
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
              <a>Fuengirola, Málaga · España</a>
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
