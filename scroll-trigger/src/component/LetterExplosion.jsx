import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LetterExplosion = ({ text }) => {
  const container = useRef(null);

  useGSAP(() => {
    const letters = container.current.querySelectorAll(".letter");
    letters.forEach((letter) => {
      const rotation = Math.random() * 60 - 30;
      gsap.to(letter, {
        y: () => Math.random() * 200 - 100,
        rotation,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
          markers: true,
          invalidateOnRefresh: true,
        },
      });
    });
  }, []);

  return (
    <div ref={container} className="flex flex-wrap justify-center mt-20">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter text-5xl font-bold"
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default LetterExplosion;
