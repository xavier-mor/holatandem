import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice / Aviso Legal — HolaTandem",
  description:
    "Legal notice governing the use of holatandem.com under Spanish law (LSSI-CE).",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
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
            <h1>Legal Notice</h1>
            <p className="meta">Last updated: 8 June 2026</p>

            <p>
              This legal notice governs the use of the website holatandem.com,
              in accordance with Spanish Law 34/2002 of 11 July on Information
              Society Services and Electronic Commerce (LSSI-CE).
            </p>

            <h2>1. Site owner</h2>
            <p>
              Elena Ignat
              <br />
              {/* TODO (C6): Add your NIF/NIE here before publishing — required by LSSI-CE */}
              NIF: [INSERT YOUR NIF HERE]
              <br />
              Fuengirola, Málaga · Spain
              <br />
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
              <br />
              holatandem.com
            </p>

            <h2>2. Purpose</h2>
            <p>
              This website presents HolaTandem&apos;s services — done-for-you
              WhatsApp AI automation for small businesses on the Costa del Sol —
              and allows visitors to contact us and request a demo.
            </p>

            <h2>3. Terms of use</h2>
            <p>
              By using this site you agree to use it lawfully and not to carry
              out any activity that could damage, overload or impair the site or
              interfere with other users&apos; normal use. The content is
              provided for general information; we may update, change or remove
              it at any time without notice.
            </p>

            <h2>4. Intellectual property</h2>
            <p>
              The HolaTandem name, logo, brand, texts, designs and graphics on
              this site are owned by HolaTandem / Elena Ignat or used under
              licence, and are protected by intellectual and industrial property
              law. You may not reproduce, distribute or modify them without
              prior written permission. &ldquo;WhatsApp&rdquo; is a trademark
              of Meta Platforms, Inc.; HolaTandem is an independent service and
              is not endorsed by or affiliated with Meta.
            </p>

            <h2>5. Liability</h2>
            <p>
              We take reasonable care to keep the information on this site
              accurate and up to date, but we do not warrant that it is free of
              errors or always available. To the extent permitted by law, we are
              not liable for any damage arising from the use of, or inability to
              use, the site.
            </p>

            <h2>6. Links</h2>
            <p>
              This site may link to third-party sites (for example WhatsApp). We
              are not responsible for the content or privacy practices of those
              external sites.
            </p>

            <h2>7. Data protection &amp; local storage</h2>
            <p>
              How we handle personal data is explained in our{" "}
              <Link href="/privacy">Privacy Policy</Link>. We use Google
              Analytics cookies to measure site traffic — only if you accept
              them in the cookie banner; you can decline. We also store your
              chosen language in your browser, which is strictly necessary and
              exempt from consent under art. 22.2 LSSI.
            </p>

            <h2>8. Governing law and jurisdiction</h2>
            <p>
              This legal notice is governed by Spanish law. Any dispute arising
              from the use of the site will be submitted to the courts of
              Málaga, Spain, unless mandatory consumer-protection rules provide
              otherwise.
            </p>

            <hr />

            <h1>Aviso Legal</h1>
            <p className="meta">Última actualización: 8 de junio de 2026</p>

            <p>
              El presente aviso legal regula el uso del sitio web
              holatandem.com, de conformidad con la Ley 34/2002, de 11 de
              julio, de Servicios de la Sociedad de la Información y de
              Comercio Electrónico (LSSI-CE).
            </p>

            <h2>1. Titular del sitio</h2>
            <p>
              Elena Ignat
              <br />
              Fuengirola, Málaga · España
              <br />
              <a href="mailto:info@holatandem.com">info@holatandem.com</a>
              <br />
              holatandem.com
            </p>

            <h2>2. Objeto</h2>
            <p>
              Este sitio web presenta los servicios de HolaTandem —
              automatización de WhatsApp con IA, hecha para ti, para pequeños
              negocios de la Costa del Sol — y permite a los visitantes
              contactarnos y solicitar una demostración.
            </p>

            <h2>3. Condiciones de uso</h2>
            <p>
              Al utilizar este sitio te comprometes a hacerlo de forma lícita y
              a no realizar ninguna actividad que pueda dañar, sobrecargar o
              deteriorar el sitio, ni interferir en su uso normal por otros
              usuarios. El contenido se ofrece a título informativo general;
              podemos actualizarlo, modificarlo o retirarlo en cualquier momento
              sin previo aviso.
            </p>

            <h2>4. Propiedad intelectual</h2>
            <p>
              El nombre, el logotipo, la marca, los textos, los diseños y los
              gráficos de HolaTandem en este sitio son titularidad de
              HolaTandem / Elena Ignat o se utilizan bajo licencia, y están
              protegidos por la normativa de propiedad intelectual e industrial.
              No está permitido reproducirlos, distribuirlos ni modificarlos sin
              autorización previa por escrito. «WhatsApp» es una marca de Meta
              Platforms, Inc.; HolaTandem es un servicio independiente, no
              respaldado ni afiliado a Meta.
            </p>

            <h2>5. Responsabilidad</h2>
            <p>
              Ponemos un cuidado razonable en mantener la información de este
              sitio exacta y actualizada, pero no garantizamos que esté libre de
              errores ni disponible en todo momento. En la medida permitida por
              la ley, no nos hacemos responsables de los daños que puedan
              derivarse del uso o de la imposibilidad de uso del sitio.
            </p>

            <h2>6. Enlaces</h2>
            <p>
              Este sitio puede enlazar a sitios de terceros (por ejemplo,
              WhatsApp). No nos responsabilizamos del contenido ni de las
              prácticas de privacidad de dichos sitios externos.
            </p>

            <h2>7. Protección de datos y almacenamiento local</h2>
            <p>
              El tratamiento de datos personales se explica en nuestra{" "}
              <Link href="/privacy">Política de Privacidad</Link>. Usamos
              cookies de Google Analytics para medir las visitas — solo si las
              aceptas en el aviso de cookies; puedes rechazarlas. También
              guardamos el idioma elegido en tu navegador, estrictamente
              necesario y exento de consentimiento según el art. 22.2 LSSI.
            </p>

            <h2>8. Ley aplicable y jurisdicción</h2>
            <p>
              El presente aviso legal se rige por la legislación española.
              Cualquier controversia derivada del uso del sitio se someterá a
              los juzgados y tribunales de Málaga, España, salvo que la
              normativa imperativa de protección de los consumidores disponga
              otra cosa.
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
