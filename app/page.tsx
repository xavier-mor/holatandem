"use client";

import { useEffect } from "react";

const WA_BASE = "https://wa.me/34638054941";
const WA_DEFAULT =
  "https://wa.me/34638054941?text=Hi%20HolaTandem%20%F0%9F%91%8B%20I%20saw%20your%20site";

export default function Home() {
  const setLang = (l: "en" | "es") => {
    document.documentElement.lang = l;
    document.getElementById("en")?.classList.toggle("active", l === "en");
    document.getElementById("es")?.classList.toggle("active", l === "es");
    document.querySelectorAll<HTMLElement>("[data-en]").forEach((el) => {
      const v = el.getAttribute("data-" + l);
      if (v != null) el.innerHTML = v;
    });
    const waMsg =
      l === "es"
        ? "Hola HolaTandem 👋 vi vuestra web"
        : "Hi HolaTandem 👋 I saw your site";
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/34638054941"]')
      .forEach((a) => {
        a.href = WA_BASE + "?text=" + encodeURIComponent(waMsg);
      });
    try {
      localStorage.setItem("ht_lang", l);
    } catch {}
  };

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("ht_lang");
    } catch {}
    const l = (saved ||
      ((navigator.language || "en").toLowerCase().startsWith("es")
        ? "es"
        : "en")) as "en" | "es";
    setLang(l);

    const yr = document.getElementById("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    const navlinks = document.getElementById("navlinks");
    const navClick = () => navlinks?.classList.remove("open");
    const navAnchors = document.querySelectorAll("#navlinks a");
    navAnchors.forEach((a) => a.addEventListener("click", navClick));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".step, .pain .row, .who .w, .price-card, .compare")
      .forEach((el) => {
        el.classList.add("reveal");
        io.observe(el);
      });

    const timers: number[] = [];
    let io2: IntersectionObserver | undefined;
    const body = document.getElementById("chatBody");
    if (body) {
      const bubs = body.querySelectorAll<HTMLElement>(".bub");
      const typing = body.querySelector<HTMLElement>(".typing");
      const scrollBottom = () => {
        body.scrollTop = body.scrollHeight;
      };
      const reveal = (el: HTMLElement) => {
        el.style.display = "block";
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
        el.getBoundingClientRect();
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        scrollBottom();
      };
      const showTyping = (on: boolean) => {
        if (!typing) return;
        typing.style.display = on ? "flex" : "none";
        if (on) scrollBottom();
      };
      const steps = [
        () => reveal(bubs[0]),
        () => showTyping(true),
        () => {
          showTyping(false);
          reveal(bubs[1]);
        },
        () => reveal(bubs[2]),
        () => showTyping(true),
        () => {
          showTyping(false);
          reveal(bubs[3]);
        },
      ];
      const delays = [800, 1300, 600, 1300, 1300, 600];
      const play = () => {
        bubs.forEach((b) => {
          b.style.display = "none";
        });
        showTyping(false);
        let i = 0;
        const next = () => {
          if (i >= steps.length) {
            timers.push(window.setTimeout(play, 4200));
            return;
          }
          steps[i]();
          const d = delays[i];
          i++;
          timers.push(window.setTimeout(next, d));
        };
        next();
      };
      let played = false;
      io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !played) {
              played = true;
              timers.push(window.setTimeout(play, 450));
            }
          });
        },
        { threshold: 0.3 }
      );
      io2.observe(body);
    }

    return () => {
      io.disconnect();
      io2?.disconnect();
      timers.forEach((t) => clearTimeout(t));
      navAnchors.forEach((a) => a.removeEventListener("click", navClick));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="brand" href="#top" aria-label="HolaTandem home">
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
            <a className="link" href="#how" data-en="How it works" data-es="Cómo funciona">
              How it works
            </a>
            <a className="link" href="#why" data-en="Why us" data-es="Por qué nosotros">
              Why us
            </a>
            <a className="link" href="#pricing" data-en="Pricing" data-es="Precios">
              Pricing
            </a>
            <a className="btn btn-navy" href="#demo" data-en="Book a free demo" data-es="Pide una demo">
              Book a free demo
            </a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div className="lang" role="group" aria-label="Language">
              <button id="en" className="active" onClick={() => setLang("en")}>
                EN
              </button>
              <button id="es" onClick={() => setLang("es")}>
                ES
              </button>
            </div>
            <button
              className="burger"
              aria-label="Menu"
              onClick={() =>
                document.getElementById("navlinks")?.classList.toggle("open")
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                <span data-en="Never miss a " data-es="No pierdas otro cliente de ">
                  Never miss a{" "}
                </span>
                <span className="accent" data-en="WhatsApp" data-es="WhatsApp">
                  WhatsApp
                </span>
                <span data-en=" lead again." data-es=".">
                  {" "}
                  lead again.
                </span>
              </h1>
              <p
                className="sub"
                data-en="AI that replies, books appointments and follows up — while you focus on running your business. We set it all up for you."
                data-es="IA que responde, agenda citas y hace seguimiento — mientras tú te centras en tu negocio. Lo configuramos todo por ti."
              >
                AI that replies, books appointments and follows up — while you
                focus on running your business. We set it all up for you.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn-wa"
                  href={WA_DEFAULT}
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
                  <span data-en="Try the live demo" data-es="Prueba la demo">
                    Try the live demo
                  </span>
                </a>
                <a className="btn btn-ghost" href="#demo" data-en="Book a free demo" data-es="Pide una demo">
                  Book a free demo
                </a>
              </div>
              <p
                className="hero-note"
                data-en="Message our own assistant on WhatsApp — it replies <b>instantly, in your customer's language</b>."
                data-es="Escribe a nuestro propio asistente en WhatsApp — responde <b>al instante, en el idioma de tu cliente</b>."
              >
                Message our own assistant on WhatsApp — it replies{" "}
                <b>instantly, in your customer&apos;s language</b>.
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
                    <div
                      className="st"
                      data-en="online · replies instantly"
                      data-es="en línea · responde al instante"
                    >
                      online · replies instantly
                    </div>
                  </div>
                </div>
                <div className="chat-body" id="chatBody">
                  <div
                    className="bub in"
                    data-en="Hi! Do you have any appointments this Saturday for highlights? 💇‍♀️"
                    data-es="¡Hola! ¿Tenéis hueco el sábado para mechas? 💇‍♀️"
                  >
                    Hi! Do you have any appointments this Saturday for
                    highlights? 💇‍♀️
                  </div>
                  <div
                    className="bub out"
                    data-en="Hi Marta! Yes — Saturday we have 11:00 or 16:30 free. Which suits you best? <span class='tick'>✓✓</span>"
                    data-es="¡Hola Marta! Sí — el sábado tenemos libre a las 11:00 o 16:30. ¿Cuál te viene mejor? <span class='tick'>✓✓</span>"
                  >
                    Hi Marta! Yes — Saturday we have 11:00 or 16:30 free. Which
                    suits you best? <span className="tick">✓✓</span>
                  </div>
                  <div
                    className="bub in"
                    data-en="11:00 please 🙌"
                    data-es="A las 11:00 por favor 🙌"
                  >
                    11:00 please 🙌
                  </div>
                  <div
                    className="bub out"
                    data-en="Booked you in for Sat 11:00 ✨ I'll send a reminder the day before. See you then! <span class='tick'>✓✓</span>"
                    data-es="Reservado para el sábado a las 11:00 ✨ Te enviaré un recordatorio el día antes. ¡Hasta entonces! <span class='tick'>✓✓</span>"
                  >
                    Booked you in for Sat 11:00 ✨ I&apos;ll send a reminder the
                    day before. See you then! <span className="tick">✓✓</span>
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
              <div className="fc-label" data-en="Replies instantly" data-es="Responde al instante">
                Replies instantly
              </div>
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
              <div className="fc-label" data-en="Books appointments" data-es="Agenda citas">
                Books appointments
              </div>
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
              <div
                className="fc-label"
                data-en="Speaks your customer's language"
                data-es="Habla el idioma de tu cliente"
              >
                Speaks your customer&apos;s language
              </div>
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
              <div
                className="fc-label"
                data-en="Hands over to humans when needed"
                data-es="Pasa a una persona cuando hace falta"
              >
                Hands over to humans when needed
              </div>
            </div>
          </div>
        </section>

        <section className="dark" id="problem">
          <div className="wrap center">
            <p className="kicker" data-en="The hidden leak" data-es="La fuga invisible">
              The hidden leak
            </p>
            <h2
              className="sec"
              data-en="Every slow reply is a booking you lost"
              data-es="Cada respuesta tardía es una reserva perdida"
            >
              Every slow reply is a booking you lost
            </h2>
            <p
              className="lead"
              data-en="Most customers message on WhatsApp now — and the first business to reply wins. When you're with a client, on holiday, or it's 9pm, those messages wait. And waiting customers go elsewhere."
              data-es="Hoy casi todos escriben por WhatsApp — y gana el primero en responder. Cuando estás con un cliente, de vacaciones o son las 9 de la noche, esos mensajes esperan. Y el cliente que espera, se va a otro sitio."
            >
              Most customers message on WhatsApp now — and the first business to
              reply wins. When you&apos;re with a client, on holiday, or
              it&apos;s 9pm, those messages wait. And waiting customers go
              elsewhere.
            </p>
          </div>
          <div className="wrap">
            <div className="pain">
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b data-en="Leads answered too late" data-es="Clientes contestados tarde">
                    Leads answered too late
                  </b>
                  <p
                    data-en="Replies come hours later, after they've already booked with a competitor."
                    data-es="Las respuestas llegan horas después, cuando ya reservaron con la competencia."
                  >
                    Replies come hours later, after they&apos;ve already booked
                    with a competitor.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b data-en="Drop-off before booking" data-es="Se pierden antes de reservar">
                    Drop-off before booking
                  </b>
                  <p
                    data-en="People ask one question, get no answer, and quietly disappear."
                    data-es="Preguntan algo, no reciben respuesta y desaparecen sin más."
                  >
                    People ask one question, get no answer, and quietly
                    disappear.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b data-en="Manual follow-ups eat your day" data-es="El seguimiento manual te roba el día">
                    Manual follow-ups eat your day
                  </b>
                  <p
                    data-en="Chasing, reminding and rebooking by hand — message by message."
                    data-es="Perseguir, recordar y volver a citar a mano — mensaje a mensaje."
                  >
                    Chasing, reminding and rebooking by hand — message by
                    message.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b data-en="No-shows you never saw coming" data-es="Ausencias que no viste venir">
                    No-shows you never saw coming
                  </b>
                  <p
                    data-en="Without timely reminders, empty chairs and lost revenue pile up."
                    data-es="Sin recordatorios a tiempo, se acumulan los huecos vacíos y los ingresos perdidos."
                  >
                    Without timely reminders, empty chairs and lost revenue pile
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap center">
            <p className="kicker" data-en="How it works" data-es="Cómo funciona">
              How it works
            </p>
            <h2
              className="sec"
              data-en="Live on your WhatsApp in days, not months"
              data-es="En tu WhatsApp en días, no en meses"
            >
              Live on your WhatsApp in days, not months
            </h2>
            <p
              className="lead"
              data-en="No app to learn, no new number to share. It works on the WhatsApp your customers already message."
              data-es="Sin app que aprender, sin número nuevo que repartir. Funciona en el WhatsApp al que tus clientes ya escriben."
            >
              No app to learn, no new number to share. It works on the WhatsApp
              your customers already message.
            </p>
          </div>
          <div className="wrap">
            <div className="steps">
              <div className="step">
                <div className="n"></div>
                <h3 data-en="We learn your business" data-es="Conocemos tu negocio">
                  We learn your business
                </h3>
                <p
                  data-en="A short call about your services, prices, hours and the questions you get most. We handle the whole setup."
                  data-es="Una llamada corta sobre tus servicios, precios, horarios y las preguntas más frecuentes. Nos encargamos de toda la configuración."
                >
                  A short call about your services, prices, hours and the
                  questions you get most. We handle the whole setup.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3 data-en="We build & connect it" data-es="Lo creamos y conectamos">
                  We build &amp; connect it
                </h3>
                <p
                  data-en="Your assistant is trained on your details and connected to your WhatsApp and calendar — done for you, end to end."
                  data-es="Tu asistente se entrena con tus datos y se conecta a tu WhatsApp y calendario — todo hecho por ti, de principio a fin."
                >
                  Your assistant is trained on your details and connected to
                  your WhatsApp and calendar — done for you, end to end.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3 data-en="It answers & books 24/7" data-es="Responde y agenda 24/7">
                  It answers &amp; books 24/7
                </h3>
                <p
                  data-en="Customers get instant answers and book themselves. You step in only when you want to — we keep it running."
                  data-es="Los clientes reciben respuestas al instante y reservan solos. Tú intervienes solo cuando quieres — nosotros lo mantenemos."
                >
                  Customers get instant answers and book themselves. You step in
                  only when you want to — we keep it running.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark" id="why">
          <div className="wrap center">
            <p className="kicker" data-en="Why HolaTandem" data-es="Por qué HolaTandem">
              Why HolaTandem
            </p>
            <h2
              className="sec"
              data-en="Not another chatbot. A done-for-you assistant."
              data-es="No es otro chatbot. Es un asistente hecho para ti."
            >
              Not another chatbot. A done-for-you assistant.
            </h2>
            <p
              className="lead"
              data-en="Generic bots hand you a dashboard and wish you luck. We build, run and tune yours — tailored to the Costa del Sol and your trade."
              data-es="Los bots genéricos te dan un panel y te desean suerte. Nosotros creamos, gestionamos y afinamos el tuyo — adaptado a la Costa del Sol y a tu sector."
            >
              Generic bots hand you a dashboard and wish you luck. We build, run
              and tune yours — tailored to the Costa del Sol and your trade.
            </p>
          </div>
          <div className="wrap">
            <div className="compare">
              <div className="crow chead">
                <div data-en="Feature" data-es="Característica">
                  Feature
                </div>
                <div className="ht">HolaTandem</div>
                <div data-en="Generic chatbot" data-es="Chatbot genérico">
                  Generic chatbot
                </div>
              </div>
              <div className="crow">
                <div
                  className="feat"
                  data-en="Speaks your customer's language"
                  data-es="Habla el idioma de tu cliente"
                >
                  Speaks your customer&apos;s language
                </div>
                <div className="col-ht">
                  <span className="yes" data-en="✓ Automatically" data-es="✓ Automáticamente">
                    ✓ Automatically
                  </span>
                </div>
                <div className="no" data-en="Usually one only" data-es="Normalmente solo uno">
                  Usually one only
                </div>
              </div>
              <div className="crow">
                <div
                  className="feat"
                  data-en="Set up & run for you"
                  data-es="Configurado y gestionado por ti"
                >
                  Set up &amp; run for you
                </div>
                <div className="col-ht">
                  <span className="yes" data-en="✓ Fully white-glove" data-es="✓ Totalmente gestionado">
                    ✓ Fully white-glove
                  </span>
                </div>
                <div className="no" data-en="DIY dashboard" data-es="Panel hazlo-tú-mismo">
                  DIY dashboard
                </div>
              </div>
              <div className="crow">
                <div
                  className="feat"
                  data-en="Local Costa del Sol support"
                  data-es="Soporte local en la Costa del Sol"
                >
                  Local Costa del Sol support
                </div>
                <div className="col-ht">
                  <span className="yes" data-en="✓ Based in Fuengirola" data-es="✓ En Fuengirola">
                    ✓ Based in Fuengirola
                  </span>
                </div>
                <div className="no" data-en="Faceless / overseas" data-es="Sin cara / en el extranjero">
                  Faceless / overseas
                </div>
              </div>
              <div className="crow">
                <div
                  className="feat"
                  data-en="Tuned for salons, clinics & estate agents"
                  data-es="Adaptado a salones, clínicas e inmobiliarias"
                >
                  Tuned for salons, clinics &amp; estate agents
                </div>
                <div className="col-ht">
                  <span className="yes" data-en="✓ Industry-specific" data-es="✓ Específico por sector">
                    ✓ Industry-specific
                  </span>
                </div>
                <div className="no" data-en="One-size-fits-all" data-es="Igual para todos">
                  One-size-fits-all
                </div>
              </div>
              <div className="crow">
                <div
                  className="feat"
                  data-en="Works on your existing number"
                  data-es="Funciona en tu número actual"
                >
                  Works on your existing number
                </div>
                <div className="col-ht">
                  <span className="yes">✓</span>
                </div>
                <div className="no" data-en="Often a new number" data-es="A menudo un número nuevo">
                  Often a new number
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="wrap center">
            <p className="kicker" data-en="Built for" data-es="Pensado para">
              Built for
            </p>
            <h2
              className="sec"
              data-en="Made for Costa del Sol businesses"
              data-es="Hecho para negocios de la Costa del Sol"
            >
              Made for Costa del Sol businesses
            </h2>
            <p
              className="lead"
              data-en="If customers book you over WhatsApp, your assistant pays for itself in saved bookings."
              data-es="Si tus clientes reservan por WhatsApp, tu asistente se paga solo con las reservas que recuperas."
            >
              If customers book you over WhatsApp, your assistant pays for
              itself in saved bookings.
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
                <h3 data-en="Hair & beauty salons" data-es="Salones de belleza">
                  Hair &amp; beauty salons
                </h3>
                <p
                  data-en="Fill the diary, cut no-shows with smart reminders, rebook regulars automatically."
                  data-es="Llena la agenda, reduce ausencias con recordatorios y vuelve a citar a tus clientes automáticamente."
                >
                  Fill the diary, cut no-shows with smart reminders, rebook
                  regulars automatically.
                </p>
              </div>
              <div className="w">
                <div className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2C94A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
                    <path d="M18.5 14l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
                  </svg>
                </div>
                <h3 data-en="Aesthetic clinics" data-es="Clínicas estéticas">
                  Aesthetic clinics
                </h3>
                <p
                  data-en="Answer treatment questions, qualify enquiries and book consultations around the clock."
                  data-es="Responde dudas sobre tratamientos, califica consultas y agenda valoraciones a cualquier hora."
                >
                  Answer treatment questions, qualify enquiries and book
                  consultations around the clock.
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
                <h3 data-en="Estate agents" data-es="Inmobiliarias">
                  Estate agents
                </h3>
                <p
                  data-en="Qualify buyers and renters instantly, capture details and pass on only the serious leads."
                  data-es="Califica compradores e inquilinos al instante, recoge sus datos y pásate solo los contactos serios."
                >
                  Qualify buyers and renters instantly, capture details and pass
                  on only the serious leads.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker" data-en="Simple pricing" data-es="Precios sencillos">
              Simple pricing
            </p>
            <h2
              className="sec"
              data-en="One flat monthly fee. No surprises."
              data-es="Una cuota mensual fija. Sin sorpresas."
            >
              One flat monthly fee. No surprises.
            </h2>
            <p
              className="lead"
              data-en="Plans scale with your needs — from a single salon to a busy multi-language clinic. Setup is included; we don't charge per conversation."
              data-es="Los planes crecen contigo — desde un solo salón hasta una clínica multilingüe con mucho volumen. La configuración va incluida; no cobramos por conversación."
            >
              Plans scale with your needs — from a single salon to a busy
              multi-language clinic. Setup is included; we don&apos;t charge per
              conversation.
            </p>

            <div className="price-card">
              <div className="from" data-en="Plans from" data-es="Planes desde">
                Plans from
              </div>
              <div className="big">
                €99
                <span>
                  {" "}
                  / <span data-en="month" data-es="mes">month</span>
                </span>
              </div>
              <div className="plist">
                <span>
                  <span className="ck">✓</span>{" "}
                  <span data-en="Done-for-you setup" data-es="Configuración hecha por ti">
                    Done-for-you setup
                  </span>
                </span>
                <span>
                  <span className="ck">✓</span>{" "}
                  <span
                    data-en="Speaks your customer's language"
                    data-es="Habla el idioma de tu cliente"
                  >
                    Speaks your customer&apos;s language
                  </span>
                </span>
                <span>
                  <span className="ck">✓</span>{" "}
                  <span data-en="Instant replies, 24/7" data-es="Respuestas al instante, 24/7">
                    Instant replies, 24/7
                  </span>
                </span>
                <span>
                  <span className="ck">✓</span>{" "}
                  <span data-en="Appointment booking" data-es="Reserva de citas">
                    Appointment booking
                  </span>
                </span>
                <span>
                  <span className="ck">✓</span>{" "}
                  <span data-en="Reminders & follow-ups" data-es="Recordatorios y seguimiento">
                    Reminders &amp; follow-ups
                  </span>
                </span>
                <span>
                  <span className="ck">✓</span>{" "}
                  <span data-en="Local support" data-es="Soporte local">
                    Local support
                  </span>
                </span>
              </div>
              <a
                className="btn btn-navy"
                href="#demo"
                data-en="See which plan fits — book a demo"
                data-es="Descubre tu plan — pide una demo"
              >
                See which plan fits — book a demo
              </a>
              <p
                className="fine"
                data-en="The right plan depends on your languages, volume and integrations. We'll recommend one on a free 20-minute demo — no pressure."
                data-es="El plan ideal depende de tus idiomas, volumen e integraciones. Te recomendamos uno en una demo gratuita de 20 minutos — sin compromiso."
              >
                The right plan depends on your languages, volume and
                integrations. We&apos;ll recommend one on a free 20-minute demo
                — no pressure.
              </p>
            </div>
          </div>
        </section>

        <section id="demo">
          <div className="wrap">
            <div className="cta-band">
              <h2 data-en="Ask for a live demo" data-es="Pide una demo en vivo">
                Ask for a live demo
              </h2>
              <p
                data-en="See how HolaTandem works for a business like yours — or message our live assistant on WhatsApp right now."
                data-es="Descubre cómo funciona HolaTandem para un negocio como el tuyo — o escribe a nuestro asistente en WhatsApp ahora mismo."
              >
                See how HolaTandem works for a business like yours — or message
                our live assistant on WhatsApp right now.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  className="btn btn-wa-white"
                  href={WA_DEFAULT}
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
                  <span data-en="Try the live demo" data-es="Prueba la demo">
                    Try the live demo
                  </span>
                </a>
                <a
                  className="btn btn-navy"
                  href="mailto:hola@holatandem.com?subject=Demo%20request"
                  data-en="Book a free demo"
                  data-es="Pide una demo"
                >
                  Book a free demo
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
                  <span
                    className="ft"
                    data-en="Your WhatsApp Assistant"
                    data-es="Tu Asistente de WhatsApp"
                  >
                    Your WhatsApp Assistant
                  </span>
                </span>
              </span>
              <p
                className="tag"
                data-en="Done-for-you WhatsApp AI for Costa del Sol salons, clinics and estate agents."
                data-es="IA por WhatsApp hecha para ti, para salones, clínicas e inmobiliarias de la Costa del Sol."
              >
                Done-for-you WhatsApp AI for Costa del Sol salons, clinics and
                estate agents.
              </p>
            </div>
            <div className="fcol">
              <h4 data-en="Explore" data-es="Explora">
                Explore
              </h4>
              <a href="#how" data-en="How it works" data-es="Cómo funciona">
                How it works
              </a>
              <a href="#why" data-en="Why us" data-es="Por qué nosotros">
                Why us
              </a>
              <a href="#pricing" data-en="Pricing" data-es="Precios">
                Pricing
              </a>
            </div>
            <div className="fcol">
              <h4 data-en="Get in touch" data-es="Contacto">
                Get in touch
              </h4>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener"
                data-en="WhatsApp us"
                data-es="Escríbenos por WhatsApp"
              >
                WhatsApp us
              </a>
              <a href="mailto:hola@holatandem.com">hola@holatandem.com</a>
              <a data-en="Fuengirola, Málaga · Spain" data-es="Fuengirola, Málaga · España">
                Fuengirola, Málaga · Spain
              </a>
            </div>
            <div className="fcol">
              <h4 data-en="Legal" data-es="Legal">
                Legal
              </h4>
              <a href="privacy.html" data-en="Privacy Policy" data-es="Política de privacidad">
                Privacy Policy
              </a>
              <a href="aviso-legal.html" data-en="Legal Notice" data-es="Aviso Legal">
                Legal Notice
              </a>
            </div>
          </div>
          <div className="fbot">
            <span>
              © <span id="yr"></span> HolaTandem · holatandem.com
            </span>
            <span
              data-en="Built on WhatsApp Business Platform"
              data-es="Sobre la plataforma WhatsApp Business"
            >
              Built on WhatsApp Business Platform
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
