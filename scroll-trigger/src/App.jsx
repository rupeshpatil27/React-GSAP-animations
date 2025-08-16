import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterExplosion from "./component/LetterExplosion";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {

  useGSAP(() => {
    gsap.utils.toArray(".scroll-element").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          markers: false, // for debugging
          toggleActions: "play none none reverse",
        },
      });
    });

  }, []);

  return (
    <>
      <div className="h-[50vh]"></div>
      <div className="space-y-8 p-8">
        <h1 className="text-center text-4xl font-bold">GSAP ScrollTrigger Animation</h1>

        <div className="scroll-element bg-blue-500 text-white p-10 rounded-md shadow-lg">
          <h2 className="text-2xl">Scroll Down to See Animation</h2>
          <p className="mt-4">This is an animated element that fades in and moves up as you scroll.</p>
        </div>

        <div className="scroll-element bg-green-500 text-white p-10 rounded-md shadow-lg">
          <h2 className="text-2xl">Another ScrollTriggered Element</h2>
          <p className="mt-4">This element will also trigger an animation on scroll.</p>
        </div>
      </div>
      <LetterExplosion text={"This is demo text"}/>
      <div className="min-h-screen"></div>
    </>
  );
};

export default ScrollAnimation;
