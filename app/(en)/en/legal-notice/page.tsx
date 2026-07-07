import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice — HolaTandem",
  description:
    "Legal notice governing the use of holatandem.com under Spanish law (LSSI-CE).",
  metadataBase: new URL("https://holatandem.com"),
  alternates: {
    canonical: "/en/legal-notice",
    languages: { en: "/en/legal-notice", es: "/aviso-legal" },
  },
};

export default function LegalNoticeEn() {
  return (
    <>
      <header>
        <div className="wrap prose-nav">
          <Link className="prose-nav brand" href="/en">
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
              <Link href="/en/privacy">Privacy Policy</Link>. We use Google
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
          </div>
        </div>
      </main>

      <footer style={{ background: "#0D2B45", color: "#7f93a6", padding: "24px 0", fontSize: ".85rem", textAlign: "center" }}>
        <div className="wrap">
          © HolaTandem · <Link href="/en" style={{ color: "#7f93a6" }}>holatandem.com</Link>
        </div>
      </footer>
    </>
  );
}
