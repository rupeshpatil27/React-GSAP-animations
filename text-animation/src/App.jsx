import { useRef, useState } from "react";
import "./App.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".motion-txt-right-left h1",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        repeat: -1,
        repeatDelay: 0.5,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      ".motion-txt-bottom-top h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        repeat: -1,
        repeatDelay: 0.5,
        ease: "power2.inOut",
      }
    );

    var tl = gsap.timeline({repeat:-1});

    tl.from(".fading-txt h1", { duration: 1, x: 100, opacity: 0.5 ,repeatDelay:1,ease:"bounce"});


  });

  return (
    <>
 
      <div className="grid grid-cols-2 gap-4">
        <div className="motion-txt-right-left flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div>

        <div className="motion-txt-bottom-top flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div>
        
        <div className="fading-txt flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div>

     
      </div>
    </>
  );
}

export default App;
