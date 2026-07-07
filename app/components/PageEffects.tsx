"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
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
      .querySelectorAll(".step, .pain .row, .who .w, .compare")
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
  }, []);

  return null;
}
