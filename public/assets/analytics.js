/* HolaTandem — Google Analytics 4 with EU/Spain cookie consent (Consent Mode v2).
   STEP TO GO LIVE: paste your GA4 Measurement ID below (looks like G-XXXXXXXXXX).
   Until a real ID is set, NOTHING runs — no banner, no analytics, no cookies. */
(function () {
  var GA_ID = 'G-LKWQHXTZ9P'; // HolaTandem GA4 Measurement ID

  // Not configured yet → do nothing (safe to ship).
  if (!GA_ID || GA_ID.indexOf('XXXX') > -1) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  var choice = null;
  try { choice = localStorage.getItem('ht_consent'); } catch (e) {}

  // Consent Mode v2 — deny by default until the visitor accepts.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: (choice === 'granted') ? 'granted' : 'denied',
    wait_for_update: 500
  });

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  // Load the GA library.
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  // Already chose → no banner.
  if (choice === 'granted' || choice === 'denied') return;

  // ---- Cookie consent banner ----
  var lang = 'en';
  try { lang = (localStorage.getItem('ht_lang') || (navigator.language || 'en')).toLowerCase().indexOf('es') === 0 ? 'es' : 'en'; } catch (e) {}

  var T = {
    en: { txt: 'We use Google Analytics cookies to understand how the site is used. You can accept or decline.', more: 'Privacy', acc: 'Accept', dec: 'Decline' },
    es: { txt: 'Usamos cookies de Google Analytics para entender cómo se usa el sitio. Puedes aceptar o rechazar.', more: 'Privacidad', acc: 'Aceptar', dec: 'Rechazar' }
  }[lang];

  var bar = document.createElement('div');
  bar.id = 'ht-cookie';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Cookies');
  bar.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;background:#0D2B45;color:#e9eef3;border-radius:16px;padding:16px 18px;box-shadow:0 16px 40px rgba(13,43,69,.35);font-family:Manrope,system-ui,sans-serif;font-size:.92rem;display:flex;flex-wrap:wrap;align-items:center;gap:12px';
  bar.innerHTML =
    '<span style="flex:1;min-width:200px;line-height:1.45">' + T.txt +
    ' <a href="/privacy" style="color:#7fd3c4;text-decoration:underline">' + T.more + '</a></span>' +
    '<span style="display:flex;gap:8px">' +
    '<button id="ht-cdecline" style="cursor:pointer;border:1px solid rgba(255,255,255,.4);background:transparent;color:#fff;font-weight:700;font-family:inherit;font-size:.88rem;padding:9px 16px;border-radius:999px">' + T.dec + '</button>' +
    '<button id="ht-caccept" style="cursor:pointer;border:none;background:#2C94A0;color:#fff;font-weight:700;font-family:inherit;font-size:.88rem;padding:9px 18px;border-radius:999px">' + T.acc + '</button>' +
    '</span>';

  function close() { if (bar.parentNode) bar.parentNode.removeChild(bar); }

  function init() {
    document.body.appendChild(bar);
    document.getElementById('ht-caccept').onclick = function () {
      gtag('consent', 'update', { analytics_storage: 'granted' });
      try { localStorage.setItem('ht_consent', 'granted'); } catch (e) {}
      close();
    };
    document.getElementById('ht-cdecline').onclick = function () {
      try { localStorage.setItem('ht_consent', 'denied'); } catch (e) {}
      close();
    };
  }

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init);
})();
