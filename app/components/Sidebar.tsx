'use client';

import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { sidebars } from '../assets/sidebars';
import { RootState } from '../assets/redux/redux';
import { updateSection__Hilfe } from '../assets/redux/section_Slice';
import Link from 'next/link';
import download from '@/app/assets/icons/download.svg';
import Image from 'next/image';

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
      <div className="border rounded-r-lg  border-indigo-800 p-3 pl-5 leading-4 flex flex-col">
        <h4 className="font-semibold text-lg text-gray-200">
          Billy Meudji, Babou
        </h4>
        <p className="text-sm mt-2 text-gray-300 ">
          <span className="underline">Tel:</span>
          <a
            href="tel:+4917634364986"
            className="hover:underline hover:text-indigo-600">
            {' +49 176 34364986'}
          </a>
        </p>
        <p className="text-sm text-gray-300">
          <span className="underline">Email:</span>
          <a
            href="mailto:billy007@gmail.com"
            className="hover:underline hover:text-indigo-600">
            {' billy007@gmail.com'}
          </a>
        </p>
        <a
          href="/doc/Billy_Meudji_Babou_CV_DE_2024.pdf"
          download="Billy_Meudji_Babou_CV_DE_2024.pdf"
          className="font-semibold bg-green-600 w-fit rounded-lg hover:bg-green-400 hover:text-black px-4 py-2 my-2 text-white flex items-center space-x-2">
          <Image
            src={download}
            height={60}
            width={60}
            alt="Billy_Meudji_Babou_CV_DE_2024.pdf"
          />
          <p>Lebenslauf herunterladen</p>
        </a>
        <Link
          className="bg-indigo-600 w-fit rounded-lg hover:bg-indigo-400 hover:text-black px-4 py-2 my-2 text-white"
          href="https://github.com/billy-java?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </Link>
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
