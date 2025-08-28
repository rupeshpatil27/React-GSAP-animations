import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const parallaxRef = useRef(null)
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      smoothTouch: 0.2,
      effects: true,
    });

    gsap.to(".planets", {
      x: "50%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".star2", {
      x: "25%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".star1", {
      x: "35%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });


    gsap.to(".mountain2", {
      y: "15%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".mountain1", {
      y: "10%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".explode2", {
      y: "-10%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".surface2", {
      y: "6%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".surface1", {
      y: "0%",
      ease: "elastic.out(0.01, 2)",  // Spring-like effect
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div ref={parallaxRef} className="relative w-full h-screen overflow-y-hidden overflow-x-hidden pointer-events-none">
          <div
            id="background"
            className="absolute inset-0 w-full h-screen -z-50"
            style={{
              backgroundImage: "url(/parallax/background.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-40 planets"
            style={{
              backgroundImage: "url(/parallax/planets.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-35 star2"
            style={{
              backgroundImage: "url(/parallax/stars2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-35 star1"
            style={{
              backgroundImage: "url(/parallax/stars1.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-30 -bottom-1 mountain2"
            style={{
              backgroundImage: "url(/parallax/mountain2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
          <div
            className="absolute inset-0 -z-25 mountain1"
            style={{
              backgroundImage: "url(/parallax/mountain1.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-20 explode2"
            style={{
              backgroundImage: "url(/parallax/explode2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-20 surface2"
            style={{
              backgroundImage: "url(/parallax/surface2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-10 surface1"
            style={{
              backgroundImage: "url(/parallax/surface1.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
        </div>
        <div className="min-h-screen"></div>
      </div>

    </div>
  );
}

export default App;
