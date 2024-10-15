'use client';

import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './sections/About';
import Lebenslauf from './sections/Lebenslauf';
import Portfolio from './sections/Portfolio';
import Laufbahn from './sections/Laufbahn';
import Kenntnisse from './sections/Kenntnisse';
import Navbar from './components/Navbar';
import Head from 'next/head';

export default function Home() {
  const [verstecken, setVerstecken] = useState<boolean>(false);
  const [section, setSection] = useState<string>('Über mich');

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setVerstecken(true);
    } else {
      setVerstecken(false);
    }
  };

  useEffect(() => {
    // Vérifie la taille de l'écran au montage
    checkScreenSize();

    // Ajoute un écouteur pour détecter les changements de taille d'écran
    window.addEventListener('resize', checkScreenSize);

    // Nettoie l'écouteur quand le composant est démonté
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar setSection={setSection} />
      <div className="flex">
        {!verstecken && <Sidebar setSection={setSection} />}
        <div className="p-4 w-full">
          {(() => {
            switch (section) {
              case 'Über mich':
                return <About section={section} />;
              case 'Lebenslauf':
                return <Lebenslauf section={section} />;
              case 'Portfolio':
                return <Portfolio section={section} />;
              case 'Berufliche Laufbahn':
                return <Laufbahn section={section} />;
              case 'Kenntnisse':
                return <Kenntnisse section={section} />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
