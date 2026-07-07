import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — HolaTandem",
  description:
    "How HolaTandem collects, uses and protects your personal data when you contact us through WhatsApp.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <header>
        <div className="wrap prose-nav">
          <Link className="prose-nav brand" href="/">
            <span style={{ color: "#0D2B45" }}>Hola</span>
            <span style={{ color: "#2C94A0" }}>Tandem</span>
          </Link>
        </div>
      </header>

      <main className="prose-page">
        <div className="wrap">
          <div className="prose">
            <h1>Privacy Policy</h1>
            <p className="meta">Last updated: 2 June 2026</p>

            <p>
              This policy explains what personal data HolaTandem collects when
              you contact us through WhatsApp, why we use it, who we share it
              with, and the rights you have under the EU General Data Protection
              Regulation (GDPR).
            </p>

            <h2>1. Who we are (data controller)</h2>
            <p>
              HolaTandem, operated by Elena Ignat, based in Fuengirola, Málaga,
              Spain.
            </p>
            <p>
              Contact for any privacy question or request:{" "}
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
            </p>

            <h2>2. What data we collect</h2>
            <p>
              When you send a message to a WhatsApp business number operated by
              HolaTandem (on our own behalf or on behalf of a client business),
              we may process:
            </p>
            <ul>
              <li>Your name or WhatsApp profile name</li>
              <li>Your WhatsApp phone number</li>
              <li>
                The content of the messages you send and receive in the
                conversation
              </li>
              <li>
                Booking or enquiry details you provide (for example a service,
                date, or time you request)
              </li>
            </ul>
            <p>
              We do not ask for special-category data (health, beliefs, etc.).
              Please do not send it.
            </p>

            <h2>3. How we collect it</h2>
            <p>
              We only collect this data when you choose to message us first. We
              do not buy contact lists or message you without you starting the
              conversation, except where you have separately agreed to receive
              messages.
            </p>

            <h2>4. Why we use it and our legal basis</h2>
            <ul>
              <li>
                To reply to you and handle your enquiry or booking — legal
                basis: performance of a contract or steps taken at your request,
                and our legitimate interest in responding to customers.
              </li>
              <li>
                To pass a genuinely interested enquiry to a human (the business
                owner) so they can follow up — same basis.
              </li>
            </ul>
            <p>We do not use your data for advertising and we do not sell it.</p>

            <h2>5. Automated and AI processing</h2>
            <p>
              Replies are generated with the help of an automated AI assistant.
              This means your messages are processed by software to produce a
              relevant answer. A human (the business owner) can step in at any
              point, and important enquiries are handed to a person. You can ask
              to speak to a human at any time.
            </p>

            <h2>6. Who we share it with (processors)</h2>
            <p>
              We use trusted service providers strictly to deliver the service.
              They act on our instructions:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms / WhatsApp</strong> — delivers the
                messages.
              </li>
              <li>
                <strong>OpenAI</strong> — generates the AI replies.
              </li>
              <li>
                <strong>Supabase</strong> — stores the conversation and contact
                data securely.
              </li>
              <li>
                <strong>n8n</strong> — connects these services to route your
                message.
              </li>
              <li>
                <strong>Google Analytics (Google)</strong> — measures website
                traffic on holatandem.com, only if you accept analytics cookies
                in the banner.
              </li>
            </ul>
            <p>
              We do not share your data with anyone else except where required
              by law.
            </p>

            <h2>7. International transfers</h2>
            <p>
              Some of these providers process data outside the European Economic
              Area (for example in the United States). Where that happens,
              transfers are covered by appropriate safeguards such as the EU
              Standard Contractual Clauses or an equivalent approved mechanism.
            </p>

            <h2>8. How long we keep it</h2>
            <p>
              We keep conversation and contact data only as long as needed to
              handle your enquiry and for a reasonable follow-up period, after
              which it is deleted or anonymised. You can ask us to delete it
              sooner (see your rights below).
            </p>

            <h2>9. Your rights</h2>
            <p>
              Under GDPR you have the right to: access your data; correct it;
              have it deleted; restrict or object to its use; and receive a copy
              in a portable format. To exercise any of these, email{" "}
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>. You
              also have the right to complain to the Spanish data protection
              authority, the Agencia Española de Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aepd.es
              </a>
              ).
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
              If we change this policy we will update the date at the top.
              Please check back from time to time.
            </p>

            <hr />

            <h1>Política de Privacidad</h1>
            <p className="meta">Última actualización: 2 de junio de 2026</p>

            <p>
              Esta política explica qué datos personales recoge HolaTandem
              cuando nos contactas por WhatsApp, por qué los usamos, con quién
              los compartimos y los derechos que tienes según el Reglamento
              General de Protección de Datos de la UE (RGPD).
            </p>

            <h2>1. Quiénes somos (responsable del tratamiento)</h2>
            <p>
              HolaTandem, gestionado por Elena Ignat, con sede en Fuengirola,
              Málaga, España.
            </p>
            <p>
              Contacto para cualquier consulta o solicitud sobre privacidad:{" "}
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
            </p>

            <h2>2. Qué datos recogemos</h2>
            <p>
              Cuando envías un mensaje a un número de WhatsApp Business
              gestionado por HolaTandem (en nuestro nombre o en nombre de un
              negocio cliente), podemos tratar:
            </p>
            <ul>
              <li>Tu nombre o nombre de perfil de WhatsApp</li>
              <li>Tu número de teléfono de WhatsApp</li>
              <li>
                El contenido de los mensajes que envías y recibes en la
                conversación
              </li>
              <li>
                Los datos de reserva o consulta que facilites (por ejemplo, un
                servicio, fecha u hora)
              </li>
            </ul>
            <p>
              No solicitamos categorías especiales de datos (salud, creencias,
              etc.). Por favor, no los envíes.
            </p>

            <h2>3. Cómo los recogemos</h2>
            <p>
              Solo recogemos estos datos cuando decides escribirnos tú primero.
              No compramos listas de contactos ni te escribimos sin que hayas
              iniciado la conversación, salvo que lo hayas aceptado por
              separado.
            </p>

            <h2>4. Por qué los usamos y base jurídica</h2>
            <ul>
              <li>
                Para responderte y gestionar tu consulta o reserva — base
                jurídica: ejecución de un contrato o medidas a petición tuya, y
                nuestro interés legítimo en atender a los clientes.
              </li>
              <li>
                Para pasar una consulta de interés real a una persona (el dueño
                del negocio) para su seguimiento — misma base.
              </li>
            </ul>
            <p>No usamos tus datos para publicidad ni los vendemos.</p>

            <h2>5. Tratamiento automatizado e IA</h2>
            <p>
              Las respuestas se generan con ayuda de un asistente de IA
              automatizado. Esto significa que tus mensajes son procesados por
              software para producir una respuesta relevante. Una persona (el
              dueño del negocio) puede intervenir en cualquier momento, y las
              consultas importantes se derivan a una persona. Puedes pedir
              hablar con una persona cuando quieras.
            </p>

            <h2>6. Con quién los compartimos (encargados del tratamiento)</h2>
            <p>
              Usamos proveedores de confianza únicamente para prestar el
              servicio. Actúan según nuestras instrucciones:
            </p>
            <ul>
              <li>
                <strong>Meta Platforms / WhatsApp</strong> — entrega los
                mensajes.
              </li>
              <li>
                <strong>OpenAI</strong> — genera las respuestas de IA.
              </li>
              <li>
                <strong>Supabase</strong> — almacena de forma segura la
                conversación y los datos de contacto.
              </li>
              <li>
                <strong>n8n</strong> — conecta estos servicios para encaminar
                tu mensaje.
              </li>
              <li>
                <strong>Google Analytics (Google)</strong> — mide el tráfico de
                holatandem.com, solo si aceptas las cookies de analítica en el
                aviso.
              </li>
            </ul>
            <p>
              No compartimos tus datos con nadie más, salvo obligación legal.
            </p>

            <h2>7. Transferencias internacionales</h2>
            <p>
              Algunos de estos proveedores tratan datos fuera del Espacio
              Económico Europeo (por ejemplo, en Estados Unidos). Cuando esto
              ocurre, las transferencias están cubiertas por garantías
              adecuadas, como las Cláusulas Contractuales Tipo de la UE o un
              mecanismo equivalente aprobado.
            </p>

            <h2>8. Cuánto tiempo los conservamos</h2>
            <p>
              Conservamos los datos de conversación y contacto solo el tiempo
              necesario para gestionar tu consulta y durante un periodo
              razonable de seguimiento, tras el cual se eliminan o anonimizan.
              Puedes pedirnos que los eliminemos antes (ver tus derechos).
            </p>

            <h2>9. Tus derechos</h2>
            <p>
              Según el RGPD tienes derecho a: acceder a tus datos;
              rectificarlos; suprimirlos; limitar u oponerte a su uso; y recibir
              una copia en formato portable. Para ejercer cualquiera de ellos,
              escribe a{" "}
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>.
              También tienes derecho a reclamar ante la Agencia Española de
              Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aepd.es
              </a>
              ).
            </p>

            <h2>10. Cambios en esta política</h2>
            <p>
              Si cambiamos esta política, actualizaremos la fecha en la parte
              superior. Te recomendamos revisarla de vez en cuando.
            </p>
          </div>
        </div>
      </main>

      <footer style={{ background: "#0D2B45", color: "#7f93a6", padding: "24px 0", fontSize: ".85rem", textAlign: "center" }}>
        <div className="wrap">
          © HolaTandem · <Link href="/" style={{ color: "#7f93a6" }}>holatandem.com</Link>
        </div>
      </footer>
    </>
  );
}
