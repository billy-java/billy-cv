'use client';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { sidebars } from '../assets/sidebars';
import { RootState } from '../assets/redux/redux';
import { updateSection__Hilfe } from '../assets/redux/section_Slice';

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
      <div className="border rounded-r-lg border-indigo-800 p-3 pl-5 leading-4 flex flex-col">
        <h4 className="font-semibold text-gray-200">Billy Meudji, Babou</h4>
        <span className="text-sm mt-2 text-gray-300">Tel: +49 176 34364986</span>
        <span className="text-sm text-gray-300">Email: billy007@gmail.com</span>
        <a
          className="bg-indigo-600 w-fit rounded-lg hover:bg-indigo-400 hover:text-black px-4 py-2 my-2 text-white"
          href="https://github.com/billy-java?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
      </div>
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
