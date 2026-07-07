"use client";

import { useEffect } from "react";

const WA_BASE = "https://wa.me/34638054941";

function setLang(l: "en" | "es") {
  // Respond to the interaction immediately (keeps INP fast)
  document.getElementById("en")?.classList.toggle("active", l === "en");
  document.getElementById("es")?.classList.toggle("active", l === "es");

  // Defer the 100+ DOM mutations until after the click is committed
  requestAnimationFrame(() => {
    document.documentElement.lang = l;
    document.querySelectorAll<HTMLElement>("[data-en]").forEach((el) => {
      const v = el.getAttribute("data-" + l);
      if (v != null) el.innerHTML = v;
    });
    const waMsg =
      l === "es"
        ? "¡Hola! Quiero ver HolaTandem en acción"
        : "Hi! I'd like to see HolaTandem in action";
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/34638054941"]')
      .forEach((a) => {
        a.href = WA_BASE + "?text=" + encodeURIComponent(waMsg);
      });
    try {
      localStorage.setItem("ht_lang", l);
    } catch {}
  });
}

export function HeaderControls() {
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
  }, []);

  return (
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
  );
}
