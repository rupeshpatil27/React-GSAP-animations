// components/HorizontalCarousel.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = ({ panels }) => {
  const carouseContainer = useRef(null);
  const panelsRef = useRef([]);

  useGSAP(() => {
    const totalWidth = carouseContainer.current.scrollWidth;
    gsap.to(panelsRef.current, {
      xPercent: -100 * (panels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: carouseContainer.current,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
      },
    });
  }, [panels.length]);

  return (
    <div
      ref={carouseContainer}
      className="relative overflow-hidden h-screen"
    >
      <div className="flex h-full">
        {panels.map((panel, i) => (
          <div
            key={i}
            ref={el => (panelsRef.current[i] = el)}
            className="w-screen flex-shrink-0 flex items-center justify-center bg-gray-200"
          >
            <div className="p-8 text-center">
              <h2 className="text-4xl font-semibold mb-4">{panel.title}</h2>
              <p className="text-lg">{panel.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
