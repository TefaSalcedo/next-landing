

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar el plugin una vez
gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollSimple() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    gsap.fromTo(
      element,
      {
        // Estado inicial de la animación
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        // Estado final
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // empieza cuando el top del elemento entra al 80% del viewport
          toggleActions: "play none none reverse", // reproducir al entrar, revertir al salir
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-[300vh] bg-gray-100">
      {/* Sección inicial para generar scroll */}
      <section className="h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-800">
          {/* 👇 Baja para ver la animación 👇 */}
        </h1>
      </section>

      {/* Sección animada */}
      <section
        ref={sectionRef}
        className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg text-center"
      >
        <h2 className="text-3xl font-bold text-purple-600 mb-4">
          🎉 ¡Animación con GSAP + Tailwind!
        </h2>
        <p className="text-gray-700 mb-6">
          Esta sección aparece con una animación suave cuando haces scroll hacia ella.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
          ¡Probar!
        </button>
      </section>

      {/* Más contenido para seguir haciendo scroll */}
      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h3 className="text-2xl font-medium text-gray-800">
          {/* Aquí hay más contenido debajo. */}
        </h3>
      </section>
    </main>
  );
}
