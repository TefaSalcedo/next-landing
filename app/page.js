import ImageGallery from "@/components/ImageGallery";
export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Hola, soy Tefa 👋</h1>
      <p className="text-lg mb-4">Bienvenida a mi landing page hecha con Next.js</p>
      <ImageGallery />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5TcVFjPc_Z0ZdLUAA2Df6uTrJL1C5Al4-w&s" alt="Foto de Tefa" className="w-48 mx-auto rounded-full shadow-lg" />
    </section>
  );
}
