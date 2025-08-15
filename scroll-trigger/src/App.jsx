import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {

  return (
    <>
    <div className="space-y-8 p-8">
      <h1 className="text-center text-4xl font-bold">GSAP ScrollTrigger Animation</h1>
    
    </div>
    </>
  );
};

export default ScrollAnimation;
