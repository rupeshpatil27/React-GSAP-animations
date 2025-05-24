import { useRef, useState } from "react";
import "./App.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, SteppedEase, TextPlugin } from "gsap/all";

function App() {
  const position = ["Frontend Developer", "Web Developer"];

  gsap.registerPlugin(TextPlugin, SplitText);

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

    var tl = gsap.timeline({ repeat: -1 });
    tl.from(".fading-txt h1", {
      duration: 1,
      x: 100,
      opacity: 0.5,
      repeatDelay: 1,
      ease: "bounce",
    });

    let cursor = document.querySelector("#cursor");
    let text = document.querySelector("#text");

    gsap.fromTo(
      cursor,
      { autoAlpha: 0, x: 2 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
    );

    gsap.fromTo(
      "#text",
      {
        text: {
          value: "",
          delimiter: "",
        },
      },
      {
        text: {
          value: text.innerHTML,
          delimiter: "",
        },
        duration: 5,
        delay: 1,
        ease: "none",
        repeat: -1,
        yoyo: true,
        onUpdate: () => {
          text.appendChild(cursor);
        },
      }
    );

    let split = SplitText.create(".split-txt h1", { type: "words,chars" });

    gsap.from(split.chars, {
      duration: 0.6,
      x: 150,
      autoAlpha: 0,
      stagger: 0.05,
      repeat: -1,
    });

    let cursor2 = document.querySelector("#cursor-2");
    let text2 = document.querySelector(".type-text-2");
    gsap.fromTo(
      cursor2,
      { autoAlpha: 0, x: 2 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
    );

    gsap.fromTo(
      ".type-text-2",
      {
        text: {
          value: "",
          delimiter: "",
        },
      },
      {
        text: {
          value: text2.innerHTML,
          delimiter: "",
        },
        duration: 5,
        delay: 1,
        ease: "none",
        onUpdate: () => {
          text2.appendChild(cursor2);
        },
        onComplete: () => {
          animation.play();
        },
      }
    );

    let repeatText = document.querySelector(".repeat-type-text-2");
    let animation = gsap.timeline({ paused: true, repeat: -1 });

    position.forEach((item) => {

      const childAnimation = gsap.timeline({ yoyo: true, repeat: 1,repeatDelay:1 });
      childAnimation.to(repeatText, {
        text: {
          value: item,
          delimiter: "",
        },
        duration: 1.5,
        ease: "none",
        onUpdate: () => {
          repeatText.appendChild(cursor2);
        },
      });

      animation.add(childAnimation)
    });
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

        <div className="typewriter-txt flex-col flex-center">
          <h1 className="type-text" id="text">
            Welcome! <br /> This is Typewriter text animation <br /> Good luck!
          </h1>
          <span id="cursor">|</span>
        </div>

        <div className="split-txt flex-col flex-center">
          <h1>Welcome!</h1>
          <h1>This is SplitText text animation</h1>
          <h1>Good luck!</h1>
        </div>

        <div className="typewriter-txt2">
          <span className="type-text-2">
            Welcome! <br /> This is new Typewriter text animation <br /> Good
            luck!
          </span>
          <span className="repeat-type-text-2"></span>
          <span id="cursor-2">|</span>
        </div>
      </div>
    </>
  );
}

export default App;
