"use client";

import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/34638054941?text=Hola%20%F0%9F%91%8B%20quiero%20ver%20c%C3%B3mo%20funciona%20HolaTandem";
const PRIVACY_URL =
  "https://docs.google.com/document/d/e/2PACX-1vQVweuZQXTFApFc0LEUduUk6vDyDRgGGsGcuWJ6bSu_FVrecPvAKw3_p-etMzVi9rlXUuVA86tQr3x2/pub";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.02c-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.22-8.23 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export default function Home() {
  const [en, setEn] = useState(false);

  useEffect(() => {
    if ((navigator.language || "").toLowerCase().startsWith("en")) {
      setEn(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = en ? "en" : "es";
  }, [en]);

  return (
    <div className={en ? "en" : ""}>
      <header>
        <nav>
          <a href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="HolaTandem" />
          </a>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Language">
              <button
                className={!en ? "active" : ""}
                onClick={() => setEn(false)}
              >
                ES
              </button>
              <button
                className={en ? "active" : ""}
                onClick={() => setEn(true)}
              >
                EN
              </button>
            </div>
            <a className="btn nav-cta" href={WA_LINK}>
              <WhatsAppIcon />
              <span data-es>Probar</span>
              <span data-en>Try it</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <span className="eyebrow" data-es>
              Tu asistente de WhatsApp
            </span>
            <span className="eyebrow" data-en>
              Your WhatsApp Assistant
            </span>
            <h1 data-es>
              Tu negocio responde en <span className="accent">5 segundos</span>.
            </h1>
            <h1 data-en>
              Your business replies in <span className="accent">5 seconds</span>.
            </h1>
            <div className="sub" data-es>
              Y tú entras cuando de verdad importa.
            </div>
            <div className="sub" data-en>
              And you step in when it really matters.
            </div>
            <p className="lead" data-es>
              HolaTandem es un asistente de inteligencia artificial por WhatsApp
              para pequeños negocios de la Costa del Sol. Contesta a tus clientes
              al instante, agenda citas y te avisa cuando una conversación
              necesita tu toque personal.
            </p>
            <p className="lead" data-en>
              HolaTandem is an AI WhatsApp assistant for small businesses on the
              Costa del Sol. It answers your customers instantly, books
              appointments, and hands the conversation to you when it needs your
              personal touch.
            </p>
            <div className="cta-row">
              <a className="btn coral" href={WA_LINK}>
                <WhatsAppIcon />
                <span data-es>Habla con nosotros por WhatsApp</span>
                <span data-en>Chat with us on WhatsApp</span>
              </a>
            </div>
            <div className="langs" data-es>
              Atiende en el idioma de cada cliente ·{" "}
              <span>ES · EN · RU · DE · FR · RO</span>
            </div>
            <div className="langs" data-en>
              Serves every customer in their own language ·{" "}
              <span>ES · EN · RU · DE · FR · RO</span>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="block">
          <div className="wrap">
            <div className="section-head">
              <h2 data-es>Lo que hace por ti</h2>
              <h2 data-en>What it does for you</h2>
              <p data-es>
                Sin apps nuevas, sin formación. Trabaja en el WhatsApp que ya
                usas.
              </p>
              <p data-en>
                No new apps, no training. It works in the WhatsApp you already
                use.
              </p>
            </div>
            <div className="grid">
              <div className="card">
                <span className="ico">⚡</span>
                <h3 data-es>Responde al instante</h3>
                <h3 data-en>Replies instantly</h3>
                <p data-es>
                  Contesta cada mensaje en segundos, de día y de noche, para que
                  no se te escape ningún cliente.
                </p>
                <p data-en>
                  Answers every message in seconds, day or night, so no customer
                  slips away.
                </p>
              </div>
              <div className="card">
                <span className="ico">📅</span>
                <h3 data-es>Agenda citas</h3>
                <h3 data-en>Books appointments</h3>
                <p data-es>
                  Reserva y confirma citas automáticamente, y reduce las
                  ausencias con recordatorios.
                </p>
                <p data-en>
                  Schedules and confirms appointments automatically, and cuts
                  no-shows with reminders.
                </p>
              </div>
              <div className="card">
                <span className="ico">🌍</span>
                <h3 data-es>Habla su idioma</h3>
                <h3 data-en>Speaks their language</h3>
                <p data-es>
                  Atiende a cada cliente en su idioma: español, inglés, ruso,
                  alemán, francés o rumano.
                </p>
                <p data-en>
                  Helps each customer in their own language: Spanish, English,
                  Russian, German, French or Romanian.
                </p>
              </div>
              <div className="card">
                <span className="ico">🙋</span>
                <h3 data-es>Tú, cuando importa</h3>
                <h3 data-en>You, when it counts</h3>
                <p data-es>
                  Te avisa y te pasa la conversación cuando un cliente está listo
                  para reservar o comprar.
                </p>
                <p data-en>
                  Alerts you and hands over the conversation the moment a
                  customer is ready to book or buy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="block">
          <div className="wrap">
            <div className="who">
              <h2 data-es>Hecho para negocios que viven de WhatsApp</h2>
              <h2 data-en>Built for businesses that live on WhatsApp</h2>
              <div className="pills">
                <span className="pill" data-es>
                  Peluquerías y salones de belleza
                </span>
                <span className="pill" data-en>
                  Hair &amp; beauty salons
                </span>
                <span className="pill" data-es>
                  Clínicas estéticas
                </span>
                <span className="pill" data-en>
                  Aesthetic clinics
                </span>
                <span className="pill" data-es>
                  Agencias inmobiliarias
                </span>
                <span className="pill" data-en>
                  Real estate agencies
                </span>
              </div>
              <p className="note" data-es>
                Pequeños negocios de la Costa del Sol, atendidos de principio a
                fin. Nosotros lo montamos por ti.
              </p>
              <p className="note" data-en>
                Small Costa del Sol businesses, set up end to end. We build it for
                you.
              </p>
            </div>
          </div>
        </section>

        {/* FOUNDER / CTA */}
        <section className="founder">
          <div className="wrap">
            <span className="eyebrow" data-es>
              Cohorte fundadora · plazas limitadas
            </span>
            <span className="eyebrow" data-en>
              Founding cohort · limited spots
            </span>
            <h2 data-es>Estamos eligiendo a los primeros negocios.</h2>
            <h2 data-en>We&apos;re choosing our first businesses.</h2>
            <p data-es>
              Cuéntanos sobre tu negocio y te mostramos en una llamada de 15
              minutos qué encaja contigo. Sin compromiso.
            </p>
            <p data-en>
              Tell us about your business and we&apos;ll show you on a 15-minute
              call what fits. No commitment.
            </p>
            <div className="cta-row">
              <a className="btn" href={WA_LINK}>
                <span data-es>Empieza por WhatsApp</span>
                <span data-en>Start on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-reversed.png" alt="HolaTandem" />
            <p data-es>Asistente de IA por WhatsApp para la Costa del Sol.</p>
            <p data-en>AI WhatsApp assistant for the Costa del Sol.</p>
            <p>Fuengirola, Málaga · España</p>
          </div>
          <div className="col">
            <h4 data-es>Contacto</h4>
            <h4 data-en>Contact</h4>
            <a href={WA_LINK}>WhatsApp · +34 638 054 941</a>
            <a href="mailto:elenateodora.ignat@gmail.com">
              elenateodora.ignat@gmail.com
            </a>
            <a href={PRIVACY_URL} target="_blank" rel="noopener" data-es>
              Política de privacidad
            </a>
            <a href={PRIVACY_URL} target="_blank" rel="noopener" data-en>
              Privacy policy
            </a>
          </div>
        </div>
        <div className="wrap">
          <div className="copyright">© 2026 HolaTandem · holatandem.com</div>
        </div>
      </footer>
    </div>
  );
}
