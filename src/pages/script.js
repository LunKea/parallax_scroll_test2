import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
  scrollTrigger: {
    trigger: ".c",
    toggleActions: "restart none none none",
  },
  x: 1400,
  rotation: 360,
  duration: 6,
});
