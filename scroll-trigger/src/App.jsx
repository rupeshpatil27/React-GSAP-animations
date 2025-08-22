import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterExplosion from "./component/LetterExplosion";
import HorizontalCarousel from "./component/HorizontalCarousel";
import ScrollTextSlide from "./component/ScrollTextSlide";
import FeatureGrid from "./component/FeatureGrid";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const ScrollAnimation = () => {

  const homeRef=useRef(null)

  useGSAP(() => {

    const smoother = ScrollSmoother.create({
      smooth: 2, 
      effects: true, 
      content: homeRef.current, 
      smoothTouch: 0.1,
    });

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
    <div className="" ref={homeRef}>
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
      <LetterExplosion text={"This is demo text"} />

      <HorizontalCarousel panels={[
        { title: 'Panel One', content: 'Content 1' },
        { title: 'Panel Two', content: 'Content 2' },
        { title: 'Panel Three', content: 'Content 3' },
      ]} />

      <ScrollTextSlide>scrolling text here</ScrollTextSlide>

      <FeatureGrid features={[
        { title: 'Fast', description: 'Lightning quick performance.' },
        { title: 'Responsive', description: 'Looks great everywhere.' },
        { title: 'Dynamic', description: 'Animations that delight.' },
      ]} />

      <div className="min-h-screen"></div>
    </div>
  );
};

export default ScrollAnimation;
