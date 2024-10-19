// app/components/ImageSlider.tsx

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
  format: number; // Ajoutez le paramètre format ici
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, format }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Définir les dimensions selon le format
  const dimensions = format === 2 ? { height: 480, width: 854 } : { height: 648, width: 1152 };

  return (
    <div className="relative w-full" style={{ height: format === 2 ? 'auto' : '16rem' }}>
      <Image
        src={images[currentIndex]}
        alt="Project image"
        height={dimensions.height}
        width={dimensions.width}
        className="rounded-lg object-cover" // Changer à object-cover pour mieux remplir le conteneur
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
