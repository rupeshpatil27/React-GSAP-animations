import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FeatureGrid = ({ features }) => {
  const gridRef = useRef(null);

  useGSAP(() => {
    gsap.from(gridRef.current.children, {
      y: 50,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 80%',
        scrub:1,
      },
    });
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8"
    >
      {features.map((feat, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
          <p className="text-gray-600">{feat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
