import React from 'react';
import ImageSlider from './ImageSlider';
import { I_Projekt } from '../assets/I_Projekt';

interface Props_CardList {
  list: I_Projekt[];
}

const CardList = ({ list }: Props_CardList) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10 gap-6">
      {list.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col border rounded-lg p-5 shadow-indigo-300 shadow-lg mb-6 h-full overflow-hidden">
            {/* Slider d'images */}
            <ImageSlider images={item.img} />

            <h6 className="text-lg text-indigo-200 mb-0">{item.name}</h6>

            <div className="flex-grow mb-4">
              <p className="flex items-center mb-6">
                {item.stand} seit {item.erstellungsdatum}
              </p>
              <p className="flex items-center mb-4">{item.beschreibung_1}</p>
              {item.beschreibung_2 && (
                <p className="flex items-center mb-4">{item.beschreibung_2}</p>
              )}
              {item.beschreibung_3 && (
                <p className="flex items-center mb-4">{item.beschreibung_3}</p>
              )}
            </div>

            {/* Lien en bas de la carte */}
            <a
              className="bg-indigo-600 rounded-lg hover:bg-indigo-400 hover:text-black px-4 py-2 text-center text-white"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer">
              Das Projekt sehen
            </a>
            <p className="text-center mt-5">
              Auf <span className="text-indigo-600">{item.gehosted + ' '}</span>
              gehostet.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
