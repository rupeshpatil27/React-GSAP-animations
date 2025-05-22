import { useState } from "react";
import "./App.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".motion-txt h1:nth-child(1),.motion-txt h1:nth-child(3)",
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut'
      }
    );
    gsap.fromTo(
      ".motion-txt h1:nth-child(2)",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    );
  });

  return (
    <>
      {/* <div className="h-100 flex-col flex-center">
        <h1>This is demo text</h1>
        <h1>Practice Animation</h1>
        <h1>Good luck!</h1>
      </div> */}

      <div className="grid grid-cols-2 gap-4">
        <div className="motion-txt flex-col flex-center">

          {/* <span className="red-200">motion from left right</span> */}

          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div>
        <div className="typewriter-txt flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div>
        {/* <div className="motion-txt flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is motion text animation</h1>
          <h1>Good luck!</h1>
        </div> */}
      </div>
    </>
  );
}

export default App;
