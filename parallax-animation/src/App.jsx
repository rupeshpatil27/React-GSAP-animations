import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      smoothTouch: 0.2,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="relative w-full h-screen overflow-y-hidden overflow-x-hidden pointer-events-none">
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
            className="absolute inset-0 -z-40"
            style={{
              backgroundImage: "url(/parallax/planets.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-35"
            style={{
              backgroundImage: "url(/parallax/stars2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-35"
            style={{
              backgroundImage: "url(/parallax/stars1.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-30 -bottom-1"
            style={{
              backgroundImage: "url(/parallax/mountain2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />
          <div
            className="absolute inset-0 -z-25"
            style={{
              backgroundImage: "url(/parallax/mountain1.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: "url(/parallax/explode2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-20"
            style={{
              backgroundImage: "url(/parallax/surface2.svg)",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          />

          <div
            className="absolute inset-0 -z-10"
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
