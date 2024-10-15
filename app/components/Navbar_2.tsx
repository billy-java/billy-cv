'use client';

import React, { useState, useEffect } from 'react';

interface Menu2 {
  activ: boolean;
  titel: string;
}

interface I_Props_Navbar2 {
  setSection2: (wert: string) => void;
}

const Navbar_2 = ({ setSection2 }: I_Props_Navbar2) => {
  const [navbar2, setNavbar2] = useState<Menu2[]>([
    { activ: true, titel: 'NextJS / React' },
    { activ: false, titel: 'Angular' },
    { activ: false, titel: 'JavaScript' },
  ]);

  // Utiliser useEffect seulement lors du montage (sans dépendre de navbar2)
  useEffect(() => {
    const activeItem = navbar2.find((item) => item.activ);
    if (activeItem) {
      setSection2(activeItem.titel); // Sélectionne la section activée par défaut au premier rendu
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSection2]); // Retirer navbar2 des dépendances

  const toggleNavbar2 = (index: number) => {
    setNavbar2(
      navbar2.map((el, i) => ({
        ...el,
        activ: i === index, // Active l'élément au clic
      }))
    );
    setSection2(navbar2[index].titel); // Mettre à jour la section ici
  };

  return (
    <nav className="flex items-center space-x-4">
      <div className="mx-auto">
        <div className="bg-gray-800 rounded-md py-1 flex items-center ">
          {navbar2.map((el, index) => (
            <div
              onClick={() => toggleNavbar2(index)}
              key={index}
              className={
                el.activ
                  ? 'bg-cyan-400 rounded-md mx-1 px-2 py-1 text-sm text-gray-900 cursor-pointer'
                  : 'bg-gray-900 rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
              }>
              <div className="flex items-center space-x-1">
                <p>{el.titel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar_2;
