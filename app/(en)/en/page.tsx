import { HeaderControls } from "@/app/components/HeaderControls";
import { PageEffects } from "@/app/components/PageEffects";
import Image from "next/image";

const WA_EN =
  "https://wa.me/34638054941?text=Hi%21%20I%27d%20like%20to%20see%20HolaTandem%20in%20action";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://holatandem.com/#app",
  name: "HolaTandem WhatsApp AI Assistant",
  description:
    "Done-for-you WhatsApp AI assistant for local service businesses on the Costa del Sol. Answers leads instantly, books appointments and follows up in the customer's language, 24/7.",
  url: "https://holatandem.com/",
  image: "https://holatandem.com/assets/og_image.png",
  applicationCategory: "BusinessApplication",
  operatingSystem: "WhatsApp Business Platform",
  inLanguage: ["es", "en", "ru", "de", "fr", "ro"],
  featureList: [
    "Instant WhatsApp replies in any language",
    "Automated appointment booking",
    "Lead qualification",
    "Appointment reminders and no-show reduction",
    "Human handover on demand",
    "Done-for-you setup and ongoing management",
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

const personSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://holatandem.com/#elena-ignat",
    name: "Elena Ignat",
    jobTitle: "Founder",
    image: "https://holatandem.com/assets/founder.jpg",
    worksFor: { "@id": "https://holatandem.com/#organization" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fuengirola",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    url: "https://holatandem.com/",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://holatandem.com/#ana-maria",
    name: "Ana-Maria",
    jobTitle: "Co-founder",
    image: "https://holatandem.com/assets/ana-maria.jpg",
    worksFor: { "@id": "https://holatandem.com/#organization" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fuengirola",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    url: "https://holatandem.com/",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HolaTandem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HolaTandem is a managed WhatsApp AI assistant service for small businesses in Costa del Sol, Spain. Founded by Elena Ignat and based in Fuengirola, it handles incoming WhatsApp enquiries, books appointments and sends reminders automatically — in English, Spanish, Russian, German, French and Romanian — for hair salons, aesthetic clinics and estate agents.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Unlike a basic chatbot, it understands what each customer is asking and replies naturally in their language — and hands the conversation to you whenever a human touch is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Does it use my existing WhatsApp number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — it works on your dedicated business WhatsApp number, the one your customers already message. No new number to learn or share.",
      },
    },
    {
      "@type": "Question",
      name: "What languages does it speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It replies in your customer's language automatically — ideal for the Costa del Sol's mix of locals and international visitors. Supported languages include Spanish, English, Russian, German, French and Romanian.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use GDPR-compliant, EU-based tools and never sell your data. See our Privacy Policy for the details.",
      },
    },
    {
      "@type": "Question",
      name: "How long does setup take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Days, not months. We handle the whole setup for you and you approve everything before it goes live.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a long contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No long lock-in — you can cancel anytime. We'd rather keep you because it works.",
      },
    },
    {
      "@type": "Question",
      name: "Will it replace my booking software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — it works alongside the tools you already use. You don't have to change how you run your business.",
      },
    },
  ],
};

export default function HomeEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {personSchema.map((s) => (
        <script
          key={s["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <header>
        <div className="wrap nav">
          <a className="brand" href="/en" aria-label="HolaTandem home">
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
            <a className="link" href="#how">How it works</a>
            <a className="link" href="#why">Why us</a>
            <a className="link" href="#pricing">Pricing</a>
            <a
              className="btn btn-navy"
              href="https://calendly.com/elena-holatandem"
              target="_blank"
              rel="noopener"
            >
              Book a free demo
            </a>
          </nav>
          <HeaderControls locale="en" />
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>
                <span>Never miss a </span>
                <span className="accent">WhatsApp</span>
                <span> lead again.</span>
              </h1>
              <p className="sub">
                AI that replies, books appointments and follows up — while you
                focus on running your business. We set it all up for you.
              </p>
              <div className="hero-cta">
                <a
                  className="btn btn-wa"
                  href={WA_EN}
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
                  <span>Try the live demo</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://calendly.com/elena-holatandem"
                  target="_blank"
                  rel="noopener"
                >
                  Book a free demo
                </a>
              </div>
              <p className="hero-note">
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
                    <div className="st">online · replies instantly</div>
                  </div>
                </div>
                <div className="chat-body" id="chatBody">
                  <div className="bub in">
                    Hi! Do you have any appointments this Saturday for
                    highlights? 💇‍♀️
                  </div>
                  <div className="bub out">
                    Hi Marta! Yes — Saturday we have 11:00 or 16:30 free. Which
                    suits you best? <span className="tick">✓✓</span>
                  </div>
                  <div className="bub in">11:00 please 🙌</div>
                  <div className="bub out">
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
              <div className="fc-label">Replies instantly</div>
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
              <div className="fc-label">Books appointments</div>
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
              <div className="fc-label">Speaks your customer&apos;s language</div>
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
              <div className="fc-label">Hands over to humans when needed</div>
            </div>
          </div>
        </section>

        <section className="dark" id="problem">
          <div className="wrap center">
            <p className="kicker">The hidden leak</p>
            <h2 className="sec">Every slow reply is a booking you lost</h2>
            <p className="lead">
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
                  <b>Leads answered too late</b>
                  <p>
                    Replies come hours later, after they&apos;ve already booked
                    with a competitor.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Drop-off before booking</b>
                  <p>
                    People ask one question, get no answer, and quietly
                    disappear.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>Manual follow-ups eat your day</b>
                  <p>
                    Chasing, reminding and rebooking by hand — message by
                    message.
                  </p>
                </div>
              </div>
              <div className="row">
                <span className="x">✕</span>
                <div>
                  <b>No-shows you never saw coming</b>
                  <p>
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
            <p className="kicker">How it works</p>
            <h2 className="sec">Live on your WhatsApp in days, not months</h2>
            <p className="lead">
              No app to learn, no new number to share. It works on the WhatsApp
              your customers already message.
            </p>
          </div>
          <div className="wrap">
            <div className="steps">
              <div className="step">
                <div className="n"></div>
                <h3>We learn your business</h3>
                <p>
                  A short call about your services, prices, hours and the
                  questions you get most. We handle the whole setup.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3>We build &amp; connect it</h3>
                <p>
                  Your assistant is trained on your details and connected to
                  your WhatsApp — done for you, end to end.
                </p>
              </div>
              <div className="step">
                <div className="n"></div>
                <h3>It answers &amp; books 24/7</h3>
                <p>
                  Customers get instant answers and book themselves. You step in
                  only when you want to — we keep it running.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dark" id="why">
          <div className="wrap center">
            <p className="kicker">Why HolaTandem</p>
            <h2 className="sec">Not another chatbot. A done-for-you assistant.</h2>
            <p className="lead">
              Generic bots hand you a dashboard and wish you luck. We build, run
              and tune yours — tailored to the Costa del Sol and your trade.
            </p>
          </div>
          <div className="wrap">
            <div className="compare">
              <div className="crow chead">
                <div>Feature</div>
                <div className="ht">HolaTandem</div>
                <div>Generic chatbot</div>
              </div>
              <div className="crow">
                <div className="feat">Speaks your customer&apos;s language</div>
                <div className="col-ht">
                  <span className="yes">✓ Automatically</span>
                </div>
                <div className="no">Usually one only</div>
              </div>
              <div className="crow">
                <div className="feat">Set up &amp; run for you</div>
                <div className="col-ht">
                  <span className="yes">✓ Fully white-glove</span>
                </div>
                <div className="no">DIY dashboard</div>
              </div>
              <div className="crow">
                <div className="feat">Local Costa del Sol support</div>
                <div className="col-ht">
                  <span className="yes">✓ Based in Fuengirola</span>
                </div>
                <div className="no">Faceless / overseas</div>
              </div>
              <div className="crow">
                <div className="feat">
                  Tuned for salons, clinics &amp; estate agents
                </div>
                <div className="col-ht">
                  <span className="yes">✓ Industry-specific</span>
                </div>
                <div className="no">One-size-fits-all</div>
              </div>
              <div className="crow">
                <div className="feat">Works on your existing number</div>
                <div className="col-ht">
                  <span className="yes">✓ Keep your own number</span>
                </div>
                <div className="no">Often a new number</div>
              </div>
              <div className="crow">
                <div className="feat">Hands over to a real person</div>
                <div className="col-ht">
                  <span className="yes">✓ Anytime</span>
                </div>
                <div className="no">Often dead-ends</div>
              </div>
            </div>
          </div>
        </section>

        <section id="who">
          <div className="wrap center">
            <p className="kicker">Built for</p>
            <h2 className="sec">Made for Costa del Sol businesses</h2>
            <p className="lead">
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
                <h3>Hair &amp; beauty salons</h3>
                <p>
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
                <h3>Aesthetic clinics</h3>
                <p>
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
                <h3>Estate agents</h3>
                <p>
                  Qualify buyers and renters instantly, capture details and pass
                  on only the serious leads.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="founder">
          <div className="wrap center">
            <p className="kicker">Who&apos;s behind it</p>
            <h2 className="sec">Real people, not a faceless bot vendor</h2>
          </div>
          <div className="wrap">
            <div className="founders-grid">
              <div className="founder-card">
                <div className="founder-header">
                  <div className="avatar">
                    <Image
                      src="/assets/founder2.jpg"
                      alt="Elena Ignat, co-founder of HolaTandem"
                      width={104}
                      height={104}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3>Elena Ignat</h3>
                    <div className="role">Founder · AI &amp; Process Transformation</div>
                    <a href="https://www.linkedin.com/in/elenaignat/" target="_blank" rel="noopener" className="li-link" aria-label="Elena Ignat on LinkedIn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
                <p>
                  Elena Ignat is an engineer by training with over 15 years of
                  experience leading transformation and process improvement across
                  banking, fintech and B2B SaaS.
                </p>
                <p>
                  A PMP-certified Project Manager and Lean Six Sigma Black Belt,
                  she has spent her career redesigning how businesses work—not
                  simply adding technology, but improving processes before
                  automating them.
                </p>
                <p>
                  She founded HolaTandem with one belief: the advantages of AI
                  shouldn&apos;t be reserved for large organisations. Today, she
                  helps small and medium-sized businesses adopt practical AI that
                  saves time, improves customer service and creates opportunities
                  for growth.
                </p>
                <div className="founder-points">
                  <span>
                    <span className="ck">✓</span> Based in Fuengirola
                  </span>
                  <span>
                    <span className="ck">✓</span> Designed with you, end to end
                  </span>
                  <span>
                    <span className="ck">✓</span> Work directly with the founder
                  </span>
                </div>
              </div>

              <div className="founder-card">
                <div className="founder-header">
                  <div className="avatar">
                    <Image
                      src="/assets/ana-maria.jpg"
                      alt="Ana-Maria, co-founder of HolaTandem"
                      width={104}
                      height={104}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3>Ana-Maria</h3>
                    <div className="role">Co-founder · Sales &amp; Growth</div>
                    <a href="https://www.linkedin.com/in/ana-maria-ignat-berget/" target="_blank" rel="noopener" className="li-link" aria-label="Ana-Maria on LinkedIn">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
                <p>
                  With decades of experience in B2B sales, commercial strategy
                  and marketing across corporate environments and startups,
                  Ana-Maria has built her career helping businesses grow through
                  strong relationships and practical solutions.
                </p>
                <p>
                  She believes technology only creates value when it solves real
                  business problems and is easy for people to adopt. Her ability
                  to connect with people from all backgrounds helps every
                  HolaTandem client feel understood, supported and confident
                  throughout their AI journey.
                </p>
                <div className="founder-points">
                  <span>
                    <span className="ck">✓</span> B2B sales expert
                  </span>
                  <span>
                    <span className="ck">✓</span> Long-term client relationships
                  </span>
                  <span>
                    <span className="ck">✓</span> Practical business solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker">Plans</p>
            <h2 className="sec">Your plan and price, on a free demo</h2>
            <p className="lead">
              Tell us about your business on a free demo and we&apos;ll
              recommend the plan and price that fit.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                className="btn btn-navy"
                href="https://calendly.com/elena-holatandem"
                target="_blank"
                rel="noopener"
              >
                Book a free demo
              </a>
            </div>
            <p className="compare-note">
              No long contract, and you approve everything before it goes live.
            </p>
          </div>
        </section>

        <section id="faq" style={{ background: "#fbf9f6" }}>
          <div className="wrap center">
            <p className="kicker">FAQ</p>
            <h2 className="sec">Questions, answered</h2>
          </div>
          <div className="wrap">
            <div className="faq-list">
              <details>
                <summary>Is this just a chatbot?</summary>
                <div className="faq-a">
                  No. Unlike a basic chatbot, it understands what each customer
                  is asking and replies naturally in their language — and hands
                  the conversation to you whenever a human touch is needed.
                </div>
              </details>
              <details>
                <summary>Does it use my existing WhatsApp number?</summary>
                <div className="faq-a">
                  Yes — it works on your dedicated business WhatsApp number, the
                  one your customers already message. No new number to learn or
                  share.
                </div>
              </details>
              <details>
                <summary>What languages does it speak?</summary>
                <div className="faq-a">
                  It replies in your customer&apos;s language automatically —
                  ideal for the Costa del Sol&apos;s mix of locals and
                  international visitors.
                </div>
              </details>
              <details>
                <summary>Is my data safe?</summary>
                <div className="faq-a">
                  Yes. We use GDPR-compliant, EU-based tools and never sell your
                  data. See our{" "}
                  <a href="/en/privacy">Privacy Policy</a> for the details.
                </div>
              </details>
              <details>
                <summary>How long does setup take?</summary>
                <div className="faq-a">
                  Days, not months. We handle the whole setup for you and you
                  approve everything before it goes live.
                </div>
              </details>
              <details>
                <summary>Is there a long contract?</summary>
                <div className="faq-a">
                  No long lock-in — you can cancel anytime. We&apos;d rather
                  keep you because it works.
                </div>
              </details>
              <details>
                <summary>Will it replace my booking software?</summary>
                <div className="faq-a">
                  No — it works alongside the tools you already use. You
                  don&apos;t have to change how you run your business.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section id="demo">
          <div className="wrap">
            <div className="cta-band">
              <h2>Ask for a live demo</h2>
              <p>
                See how HolaTandem works for a business like yours — or message
                our live assistant on WhatsApp right now.
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
                  href={WA_EN}
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
                  <span>Try the live demo</span>
                </a>
                <a
                  className="btn btn-navy"
                  href="https://calendly.com/elena-holatandem"
                  target="_blank"
                  rel="noopener"
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
                  <span className="ft">Your WhatsApp Assistant</span>
                </span>
              </span>
              <p className="tag">
                Done-for-you WhatsApp AI for Costa del Sol salons, clinics and
                estate agents.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/holatandem/" target="_blank" rel="noopener" aria-label="HolaTandem on Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="https://www.facebook.com/share/1J4ap9PgpL/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="HolaTandem on Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                </a>
              </div>
            </div>
            <div className="fcol">
              <h4>Explore</h4>
              <a href="#how">How it works</a>
              <a href="#why">Why us</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className="fcol">
              <h4>Get in touch</h4>
              <a href={WA_EN} target="_blank" rel="noopener">
                WhatsApp us
              </a>
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
              <a>Fuengirola, Málaga · Spain</a>
            </div>
            <div className="fcol">
              <h4>Legal</h4>
              <a href="/en/privacy">Privacy Policy</a>
              <a href="/en/legal-notice">Legal Notice</a>
            </div>
          </div>
          <div className="fbot">
            <span>© {new Date().getFullYear()} HolaTandem · holatandem.com</span>
            <span>Built on WhatsApp Business Platform</span>
          </div>
        </div>
      </footer>
      <PageEffects />
    </>
  );
}
