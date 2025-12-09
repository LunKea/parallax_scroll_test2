import { start } from "alpinejs";
import { triggerEvent } from "astro/virtual-modules/transitions-events.js";
import { easeIn, maxGeneratorDuration } from "motion";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    { id: "text-1", endTranslateX: -2000, rotate: 45 },
    { id: "text-2", endTranslateX: -2000, rotate: -35 },
    { id: "text-3", endTranslateX: -2000, rotate: 45 },
  ];

  ScrollTrigger.create({
    trigger: ".wrapper",
    start: "top top",
    end: "+=900vh",
    scrub: 1,
    pin: true,
    onupdate: (self) => {
      gsap.to(".wrapper", {
        x: `${350 * self.progress}vw`,
        durtion: 0.5,
        easeIn: "power3.inOut",
      });
    },
  });

  texts.forEach((text) => {
    ScrollTrigger.create({
      trigger: "text.id",
      start: "top top",
      end: "+=1200vh",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(text.id, {
          x: `${text.endTranslateX * self.progress}px`,
          rotation: `${text.rotate * self.progress * 2}`,
          duration: 0.5,
          easeIn: "power3.out",
        });
      },
    });
  });
});
