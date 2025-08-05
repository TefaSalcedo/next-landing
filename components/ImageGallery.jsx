// components/ImageGallery.js
import Image from "next/image";

const ImageGallery = () => {
  const images = [
    {
      src: "/images/foto1.avif",
      alt: "Foto 1",
    },
    {
      src: "/images/foto2.avif",
      alt: "Foto 2",
    },
    {
      src: "/images/foto3.avif",
      alt: "Foto 3",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {images.map((img, index) => (
        <div key={index} style={{ width: "300px", height: "200px", position: "relative" }}>
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
