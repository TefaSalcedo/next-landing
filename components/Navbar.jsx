"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white text-black p-4 flex gap-6">
      <Link href="/">Inicio</Link>
      <Link href="/about">Sobre mí</Link>
      <Link href="/contact">Contacto</Link>
      <Link href="/gsap">GSAP</Link>
    </nav>
  );
}
