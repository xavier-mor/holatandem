"use client";

import { useRouter } from "next/navigation";

export function HeaderControls({ locale }: { locale: "en" | "es" }) {
  const router = useRouter();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      <div className="lang" role="group" aria-label="Language">
        <button
          id="en"
          className={locale === "en" ? "active" : ""}
          onClick={() => router.push("/en")}
        >
          EN
        </button>
        <button
          id="es"
          className={locale === "es" ? "active" : ""}
          onClick={() => router.push("/")}
        >
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
  );
}
