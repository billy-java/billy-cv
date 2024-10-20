import React from 'react';
import { I_Props_Titel } from '../assets/I_Props_Titel';
import MeineDaten from '../components/MeineDaten';

export default function About({ section }: I_Props_Titel) {
  return (
    <div className="my-10 text-gray-300" id="about">
      <MeineDaten version={2} />
      <div className="flex items-center">
        <div className="lg:w-[60%] xl:w-[50%] w-[90%] mx-auto">
          <h1 className="text-indigo-400 mb-20 text-3xl text-center">
            {section}
          </h1>

          <p className="text-lg mb-5">
            Ursprünglich aus Kamerun, habe ich in der IT mit Computerwartung und
            -reparatur angefangen. Im Laufe der Zeit entdeckte ich dann in
            Deutschland meine Leidenschaft für das Programmieren, was mich dazu
            führte, Webseiten mit <strong>WordPress</strong> zu entwickeln.
          </p>
          <p className="text-lg mb-5">
            Während meines Studiums vertiefte ich meine Kenntnisse in{' '}
            <strong>React</strong>
            und <strong>Next.js</strong>. Heute konzentriere ich mich besonders
            auf die
            <strong>Front-End-Entwicklung</strong>, da ich die Benutzererfahrung
            im Web verbessern möchte.
          </p>
          <p className="text-lg mb-5">
            Jeden Tag arbeite ich leidenschaftlich an Projekten mit{' '}
            <strong>React</strong>, <strong>Next.js</strong> und{' '}
            <strong>React Native</strong>. Dies ermöglicht es mir, meine
            Fähigkeiten kontinuierlich weiterzuentwickeln, während ich aktiv
            nach neuen Herausforderungen suche, die mir helfen, noch besser zu
            werden.
          </p>
        </div>
      </div>
    </div>
  );
}
