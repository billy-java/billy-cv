import React, { useState } from 'react';
import Image from 'next/image';

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-64 mb-6 overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt="Project image"
        height={648}
        width={1152}
        className="rounded-lg object-contain" // Changer à object-contain
        priority={true}
      />

      {/* Bouton Précédent */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-400 text-white p-2 rounded-r"
        onClick={prevSlide}>
        &#10094;
      </button>

      {/* Bouton Suivant */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-400 text-white p-2 rounded-l"
        onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
