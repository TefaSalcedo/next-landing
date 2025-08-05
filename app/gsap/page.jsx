// GSAP PAGE
'use client'

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import  GSAPScroll from "../../components/GSAP/scrolltrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  InnerScrollParallax from "../../components/GSAP/innerscrollParallax";

export default function GSAP() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    
  // Registra el plugin
  gsap.registerPlugin(ScrollTrigger);

    // Timeline para secuenciar las animaciones
    const tl = gsap.timeline();
    
    // Animación del título
    tl.from(titleRef.current, {
      duration: 2,
      opacity: 0, 
      y: -50,
      ease: "bounce.out",
    })
        // Animación del botón después del título
        .from(buttonRef.current, {
          duration: 0.8,
          opacity: 0,
          y: 30,
          scale: 0.8,
          ease: 'back.out(1.7)',
        }, "-=0.5"); // empieza 0.5s antes de que termine la anterior

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  // Función para manejar el click del botón
  const handleButtonClick = () => {
    // Animación cuando se hace click
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      // para volver automaticamente al tamaño original
      yoyo: true, 
      // Hace la animación ida y vuelta
      repeat: 1,
      ease: "power2.inOut"
    });

    console.log("¡Botón clickeado!");
    // alert("¡Hola desde BOTON GSAP!");
  };

  return (
    <section className="text-center">
      <h1 ref={titleRef} className="text-4xl font-bold mb-4">
        ¡Hola desde Next.js + GSAP!
      </h1>
      <p className="text-lg mb-4">Aqui el GSAP</p>
      <button 
        ref={buttonRef} 
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200"
      >
        ¡Clic aquí!
      </button>
      {/* <GSAPScroll /> */}
      <InnerScrollParallax />
    </section>
  );
}