import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ScrollTextSlide = ({ children }) => {
    const wrapper = useRef(null);
    const text = useRef(null);

    useGSAP(() => {

        const tween = gsap.fromTo(
            text.current,
            { xPercent: 100 },
            {
                xPercent: -100,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: wrapper.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            }
        );

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };

    }, []);

    return (
        <div
            ref={wrapper}
            className="min-h-[150vh] relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        >
            <h1 ref={text} className="scrolling_text text-white text-8xl font-black absolute top-[30%] whitespace-nowrap">
                {children}
            </h1>
        </div>
    );
};

export default ScrollTextSlide;
