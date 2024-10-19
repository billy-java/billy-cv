import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';
import { Data_Kenntnisse } from '../assets/Data_Kenntnisse'; // Importer le tableau fusionné

const Kenntnisse = ({ section }: I_Props_Titel) => {
  // Créer un tableau unique des catégories pour les titres
  const uniqueCategories = Array.from(
    new Set(Data_Kenntnisse.map((item) => item.category))
  );

  return (
    <div className="my-10 text-gray-300" id="Lebenslauf">
      <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>

      {/* Grille pour afficher les cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-[90%] mx-auto">
        {uniqueCategories.map((category) => {
          // Filtrer les compétences par catégorie
          const skills = Data_Kenntnisse.filter(
            (item) => item.category === category
          ).map((item) => item.Kenntnis); // On extrait uniquement le nom de la compétence

          return (
            <div
              key={category}
              className="border-[1px] rounded-lg p-5 shadow-indigo-300 shadow-lg h-full">
              {/* Titre de la catégorie */}
              <h2 className="text-xl mb-6 text-indigo-400">{category}</h2>
              {/* Liste des compétences sous la catégorie */}
              <p className="text-lg">{skills.join(', ')}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kenntnisse;
