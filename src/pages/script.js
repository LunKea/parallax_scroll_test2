// import { start } from "alpinejs";
// import { triggerEvent } from "astro/virtual-modules/transitions-events.js";
// import { easeIn, maxGeneratorDuration } from "motion";

// import { gsap } from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.to(".a", {
  x: 400,
  rotation: 360,
  duration: 6,
});

// gsap.to(".c", {
//   ScrollTrigger: {
//     trigger: ".c",
//     start: "top center",
//     markers: true,
//     toggleActions: "play pause resume reset",
//   },
//   x: 400,
//   rotation: 360,
//   duration: 6,
// });

const box = document.querySelector(".a");

box.addEventListener("click", (e) => {
  console.log(e);
});
