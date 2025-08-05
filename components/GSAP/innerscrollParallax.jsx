'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InnerScrollParallax() {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const element = parallaxRef.current;

    if (!container || !element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          scroller: container,
          invalidateOnRefresh: true,
          // markers: true, // para debug
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-auto flex items-center justify-center bg-gray-100">
      <div
        ref={containerRef}
        className="w-[600px] h-[500px] overflow-y-scroll border border-gray-300 rounded-lg relative bg-white"
      >
        <div className="h-[1000px] relative px-6 py-10">
          <div
            ref={parallaxRef}
            className="w-full text-center text-4xl text-blue-600 font-bold mb-10"
          >
            Parallax interno
          </div>

          <div className="space-y-10 text-gray-700">
            {/* <p>Contenido 1</p>
            <p>Contenido 2</p>
            <p>Contenido 3</p>
            <p>Contenido 4</p>
            <p>Contenido 5</p>
            <p>Contenido 6</p>
            <p>Contenido 7</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}