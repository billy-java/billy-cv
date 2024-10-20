'use client';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { sidebars } from '../assets/sidebars';
import { RootState } from '../assets/redux/redux';
import { updateSection__Hilfe } from '../assets/redux/section_Slice';
import MeineDaten from './MeineDaten';

interface I_Props_Sidebar {
  setSection: (wert: string) => void;
}

const Sidebar = ({ setSection }: I_Props_Sidebar) => {
  const currentSection = useSelector((state: RootState) => state.section);
  const dispatch = useDispatch();

  // Mettre à jour la section active lors du premier rendu
  useEffect(() => {
    const activeItem = sidebars.find((item) => item.activ);
    if (activeItem) {
      setSection(activeItem.titel); // Sélectionne la section activée par défaut
    }
  }, [setSection]);

  // Créez une version mise à jour de la liste des barres latérales
  const getUpdatedSidebar = () => {
    return sidebars.map((el) => ({
      ...el,
      activ: el.url === currentSection, // Activer l'élément en fonction de `currentSection`
    }));
  };

  const toggleSidebar = (index: number) => {
    const selectedSidebar = sidebars[index];
    dispatch(updateSection__Hilfe(selectedSidebar.url));
    setSection(selectedSidebar.titel); // Mettre à jour la section
  };

  return (
    <aside className="h-screen w-72">
      <MeineDaten version={1}/>
      <nav className="h-full flex flex-col border rounded-r-lg shadow-sm border-gray-900 border-t-gray-900">
        <div className="p-4 pb-2 flex flex-col">
          {getUpdatedSidebar().map((el, index) => (
            <div
              onClick={() => {
                toggleSidebar(index);
                setSection(el.titel);
              }}
              key={index}
              className={`${
                el.activ
                  ? 'cursor-pointer flex items-center my-2 space-x-4 p-2 rounded-lg bg-indigo-400 text-black'
                  : 'cursor-pointer flex items-center my-2 space-x-4 p-2 rounded-lg hover:text-black hover:bg-indigo-400'
              }`}>
              <p className="text-lg">{el.titel}</p>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
