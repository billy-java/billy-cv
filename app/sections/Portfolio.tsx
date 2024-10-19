import React, { useState } from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';
import { Data_React } from '../assets/portfolio/Data_React';
import Navbar_2 from '../components/Navbar_2';
import { Data_Angular } from '../assets/portfolio/Data_Angular';
import { Data_JS } from '../assets/portfolio/Data_JS';
import CardList from '../components/CardList';
import Loader from '../components/Loader';

const Portfolio = ({ section }: I_Props_Titel) => {
  const [currentSection2, setCurrentSection2] =
    useState<string>('NextJS / React');
  const [loading, setLoading] = useState<boolean>(true);

  // Fonction pour changer la section
  const handleSectionChange = (section: string) => {
    setLoading(true); // Réinitialiser le chargement quand la section change
    setCurrentSection2(section);
    setTimeout(() => setLoading(false), 500); // Simuler le temps de chargement
  };

  return (
    <div className="my-10 text-gray-300" id="Lebenslauf">
      <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>
      <Navbar_2 setSection2={handleSectionChange} />{' '}
      {/* Passer la fonction pour changer de section */}
      <div className="p-4 w-full">
        {loading ? (
          <Loader />
        ) : (
          <div>
            {currentSection2 === 'NextJS / React' && (
              <CardList kategorie={'nextjs-react'} list={Data_React} />
            )}
            {currentSection2 === 'Angular' && (
              <CardList kategorie={'angular'} list={Data_Angular} />
            )}
            {currentSection2 === 'JavaScript' && (
              <CardList kategorie={'javascript'} list={Data_JS} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
