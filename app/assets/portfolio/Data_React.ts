import { format } from 'date-fns';
import { I_Projekt } from '../I_Projekt';

export const Data_React: I_Projekt[] = [
  {
    name: 'APP - Devis Webseite',
    beschreibung_1:
      'Wir sind eine Angebotsanwendung. Wenn Sie eine Website erstellen möchten, benötigen wir die folgenden Informationen.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'Nextjs',
    stand: 'Fertig',
    gehosted: 'Vercel',
    img: ['/imgs/next/devis-webseite.webp', '/imgs/next/devis-webseite-1.webp'],
    url: 'https://devis-webseite.vercel.app/',
  },
  {
    name: 'APP - Vintage Car',
    beschreibung_1:
      'Vintage Car ist eine Autovermietungs-App. Benutzer können sich als Lagerhalter registrieren und Lager sowie Dienstleistungen für die gelagerten Autos erstellen und anbieten. Man kann sich auch als Autobesitzer registrieren, um Lager zu suchen, Termine zu vereinbaren und dann den Platz zu reservieren.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'Vercel',
    img: ['/imgs/next/vintage-car.webp', '/imgs/next/vintage-car-1.webp'],
    url: 'https://vintage-car-taupe.vercel.app',
  },
  {
    name: 'APP - Authentification',
    beschreibung_1: 'React Authentification APP mit Firebase.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'react',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/APP-Authentification.webp',
      '/imgs/next/APP-Authentification-1.webp',
    ],
    url: 'https://billy-java.github.io/4_auth-react-lernen/',
  },
  {
    name: 'Multi Step Validation Form',
    beschreibung_1: 'Die Daten sind in der Konsole sichbar.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'react',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/3_multi_step_validation_react.webp',
      '/imgs/next/3_multi_step_validation_react-1.webp',
    ],
    url: 'https://billy-java.github.io/3_multi_step_validation_react/',
  },
  {
    name: 'Multi Sprache App',
    beschreibung_1: 'Multi Sprache React App.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'react',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/2_multi_sprache_react.webp',
      '/imgs/next/2_multi_sprache_react-1.webp',
    ],
    url: 'https://billy-java.github.io/2_multi_sprache_react/',
  },
  {
    name: 'Slide - App',
    beschreibung_1: 'React Slide App mit Firebase.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'react',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: ['/imgs/next/1_slide_react.webp'],
    url: 'https://billy-java.github.io/1_slide_react/',
  },
];
