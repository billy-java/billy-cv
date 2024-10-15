import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';

const Laufbahn = ({ section }: I_Props_Titel) => {
  return (
    <div className="flex items-center my-10 text-gray-300" id="about">
      <div className="lg:w-[60%] xl:w-[50%] w-[90%] mx-auto">
        <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>
        <p className="text-lg  mb-5 text-indigo-300">
          Webentwickler bei INVIKOM
        </p>
        <p className="mb-5">
          ich arbeite seit 06/2023 bei{' '}
          <a href="https://www.invikom.de">INVIKOM</a> als Webentwickler. Es
          händelt sich um einen Minijob. Wir entwickeln die Webseiten von
          Behörden, Fitnessstudios, Händlern...
        </p>
      </div>
    </div>
  );
};

export default Laufbahn;
