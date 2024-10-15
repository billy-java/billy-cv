import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';



export default function About({ section }: I_Props_Titel) {
  return (
    <div className="flex items-center my-10 text-gray-300" id="about">
      <div className="lg:w-[60%] xl:w-[50%] w-[90%] mx-auto">
        <h1 className="text-indigo-400 mb-20 text-3xl text-center">{section}</h1>
        <p className="text-lg mb-5">
          Geboren in Kamerun, habe ich nach meinem Abitur zunächst in der IT
          gearbeitet, wo ich Computerwartung und -reparatur durchführte. Später
          zog es mich nach Deutschland, wo ich mein Interesse für das
          Programmieren entdeckte. Ich eignete mir Designfähigkeiten an und
          begann, Webseiten mit WordPress zu erstellen, insbesondere für
          afrikanische Unternehmen.
        </p>
        <p className="text-lg mb-5">
          Während meines Studiums an der THM vertiefte ich meine
          Programmierkenntnisse und arbeite kontinuierlich daran, mich zu
          verbessern.
        </p>
        <p className="text-lg mb-5">
          Trotz meiner anstrengenden aktuellen Arbeit strebe ich danach, meine
          Fähigkeiten weiter zu entwickeln, um meine Chancen auf eine
          Werkstudentenstelle zu erhöhen.
        </p>
      </div>
    </div>
  );
}
