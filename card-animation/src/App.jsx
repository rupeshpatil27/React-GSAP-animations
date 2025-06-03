import './App.css'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import GlowCard from './component/GlowCard'

function App() {

  useGSAP(() => {
    gsap.fromTo(
      ".cl .feature",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.5,
        ease: "power2.inOut",
      }
    );

  })

  return (

    <div className='cl p-20 flex flex-wrap flex-row justify-center items-center gap-5'>

      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />
      <GlowCard text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt veritatis odit rerum a nostrum porro repellat. Quisquam, tenetur neque minus atque vero, magni necessitatibus officia dolorum animi nulla error."} />




    </div>
  )
}

export default App
