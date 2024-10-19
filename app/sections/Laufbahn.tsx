import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';

const Laufbahn = ({ section }: I_Props_Titel) => {
  return (
    <div className="flex items-center my-10 text-gray-300" id="about">
      <div className="lg:w-[60%] xl:w-[50%] w-[90%] mx-auto">
        <h1 className="text-indigo-400 mb-20 text-3xl text-center">
          {section}
        </h1>
        <p className="text-lg mb-5 text-indigo-300">
          Webentwickler bei INVIKOM (seit 06/2023)
        </p>
        <p className="mb-5">
          Seit Juni 2023 arbeite ich bei{' '}
          <a
            href="https://www.invikom.de"
            className="text-indigo-400 hover:underline">
            INVIKOM
          </a>{' '}
          als Webentwickler. Ich entwickle und pflege Webseiten für Behörden,
          Fitnessstudios und Einzelhändler. Mit Content Management Systemen
          (CMS) wie Typo3 und WordPress gestalte ich benutzerfreundliche und
          responsive Websites, die auf die Bedürfnisse meiner Kunden
          zugeschnitten sind.
        </p>

        <h2 className="text-indigo-300 text-xl mb-3">Projekte:</h2>
        <ul className="list-disc ml-5 mb-5">
          <li>
            <strong>Behördenwebseite: </strong>
            Entwicklung einer Plattform für Bürgerdienste mit Suchfunktionen und
            interaktiven Formularen, die den Zugang zu Informationen
            erleichtern.
          </li>
          <li>
            <strong>Fitnessstudio-Website: </strong>
            Gestaltung einer Webseite für Kursbuchungen und sichere
            Online-Zahlungen, um die Nutzererfahrung zu optimieren.
          </li>
          <li>
            <strong>E-Commerce-Seite: </strong>
            Mitarbeit an einer E-Commerce-Plattform zur Verwaltung von Produkten
            und Bestellungen, optimiert für Benutzer und Betreiber.
          </li>
          <li>und noch mehr...</li>
        </ul>

        <h2 className="text-indigo-300 text-xl mb-3">
          Erworbene Schlüsselkompetenzen:
        </h2>
        <ul className="list-disc ml-5 mb-5">
          <li>
            <strong>Problemlösungsfähigkeit: </strong>
            Ich arbeite eng mit meinem Vorgesetzten und Kollegen zusammen, um
            Aufgaben klar zu priorisieren und Lösungen für technische
            Herausforderungen zu entwickeln.
          </li>
          <li>
            <strong>SEO-Praktiken: </strong>
            Auch bei hoher Arbeitsbelastung bleibe ich konzentriert und
            produktiv, was sich in meiner Problemlösungsfähigkeit widerspiegelt.{' '}
          </li>
          <li>
            <strong>Belastbarkeit : </strong>
            Auch bei hoher Arbeitsbelastung bleibe ich konzentriert und
            produktiv, was sich in meiner Belastbarkeit widerspiegelt.
          </li>
        </ul>

        <h2 className="text-indigo-300 text-xl mb-3">
          Technologien und Methoden:
        </h2>
        <ul className="list-disc ml-5 mb-5">
          <li>
            <strong>Technologien: </strong>
            Verwendung von HTML, CSS, JavaScript und PHP zur Anpassung und
            Optimierung der Webanwendungen.
          </li>
          <li>
            <strong>SEO-Praktiken: </strong>
            Einsatz von Suchmaschinenoptimierung (SEO), um die Sichtbarkeit der
            Websites zu erhöhen und das Ranking in Suchmaschinen zu verbessern.{' '}
          </li>
          <li>
            <strong>Projektmanagement: </strong>
            Arbeit mit Scrum und Kanban zur effizienten Aufgabenplanung und
            Zielverfolgung im Team.{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Laufbahn;
