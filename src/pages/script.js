import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".c", {
//   scrollTrigger: {
//     trigger: ".c",
//     toggleActions: "restart pause reverse pause",
//   },
//   x: 1400,
//   rotation: 360,
//   duration: 6,
// });

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    toggleActions: "restart none reverse none",
  },
  y: -50,
  autoAlpha: 1,
  duration: 3,
});

gsap.to(".b", {
  scrollTrigger: {
    trigger: ".b",
    toggleActions: "restart none reverse none",
  },
  y: -50,
  autoAlpha: 1,
  duration: 3,
  delay: 0.3,
  });

gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    toggleActions: "restart none reverse none",
  },
  y: -50,
  autoAlpha: 1,
  duration: 3,
  delay: 0.6,

  });