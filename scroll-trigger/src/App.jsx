import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LetterExplosion from "./component/LetterExplosion";
import HorizontalCarousel from "./component/HorizontalCarousel";
import ScrollTextSlide from "./component/ScrollTextSlide";
import FeatureGrid from "./component/FeatureGrid";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother,ScrollToPlugin);

const ScrollAnimation = () => {

  const homeRef = useRef(null)
  const bottomRef = useRef(null)

  useGSAP(() => {

    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      content: "#scroll-container",
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
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-4 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
            onClick={() => gsap.to(window, { scrollTo: homeRef.current, duration: 2 })}
          >
            Scroll to top
          </button>
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded"
            onClick={() => gsap.to(window, { scrollTo: bottomRef.current, duration: 2})}
          >
            Scroll to bottom
          </button>
        </div>
      </nav>

      <div className="min-h-screen" id="scroll-container" ref={homeRef}>
    
        <div className="space-y-8 p-8">
          <div className="h-[50vh]"/>
          <h1 className="text-center text-4xl font-bold">GSAP ScrollTrigger Animation</h1>

          <div className="scroll-element el1 bg-blue-500 text-white p-10 rounded-md shadow-lg">
            <h2 className="text-2xl">Scroll Down to See Animation</h2>
            <p className="mt-4">This is an animated element that fades in and moves up as you scroll.</p>
          </div>

          <div className="scroll-element el2 bg-green-500 text-white p-10 rounded-md shadow-lg">
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

        <div className="min-h-screen" ref={bottomRef}></div>

        </div>
    </>
  );
};

export default ScrollAnimation;
