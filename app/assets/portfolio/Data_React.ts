import { format } from 'date-fns';
import { I_Projekt } from '../I_Projekt';

export const Data_React: I_Projekt[] = [
  {
    name: 'APP - Devis Webseite',
    beschreibung_1:
      'Das eine Angebotsanwendung. Wenn Sie eine Website erstellen möchten, benötigen wir die folgenden Informationen.',
    beschreibung_2:
      'Next.js, Redux/Toolkit, Tailwind CSS, TypeScript, Node.js, Git, Vercel.',
    beschreibung_3:
      'CRUD-Operationen, Datenübertragung und -management in der gesamten App, Deployment und Hosting, Frontend- und Backend-Entwicklung, Testing und Debugging, Performance-Optimierung.',
    beschreibung_4:
      'Diese App hilft den Benutzern, ihre individuelle Website zu erstellen. Um dies zu erreichen, benötigen wir einige wichtige Informationen: Ihre Bilder, den gewünschten Domainnamen, den Inhalt Ihrer Seiten, Ihre Öffnungszeiten und Kontaktdaten. Sobald Sie uns diese Informationen bereitgestellt haben, können wir mit der Erstellung Ihrer Website beginnen.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'Nextjs',
    stand: 'Fertig',
    gehosted: 'Vercel',
    img: ['/imgs/next/devis-webseite.webp', '/imgs/next/devis-webseite-1.webp'],
    url: 'https://devis-webseite.vercel.app/',
    path: 'devis-webseite',
  },
  {
    name: 'APP - Vintage Car',
    beschreibung_1:
      'Vintage Car ist eine Autovermietungs-App. Benutzer können sich als Lagerhalter registrieren und Lager sowie Dienstleistungen für die gelagerten Autos erstellen und anbieten. Man kann sich auch als Autobesitzer registrieren, um Lager zu suchen, Termine zu vereinbaren und dann den Platz zu reservieren.',
    beschreibung_2: 'React, Redux, Node.js, Express, Firebase, Git, Vercel.',
    beschreibung_3:
      'Benutzerverwaltung, CRUD-Operationen für Autos und Lager, Authentifizierung, Datenbankanbindung, Datenbankmanagement, Responsive Design.',
    beschreibung_4:
      'Diese App ermöglicht es Nutzern, Autos zu mieten und Lager für ihre Fahrzeuge zu verwalten. Benutzer können sich registrieren, ihre Autos hinzufügen und Dienstleistungen anbieten oder anfragen.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'Vercel',
    img: ['/imgs/next/vintage-car.webp', '/imgs/next/vintage-car-1.webp'],
    url: 'https://vintage-car-taupe.vercel.app',
    path: 'vintage-car',
  },
  {
    name: 'Billy-Shop - E-Commerce',
    beschreibung_1:
      'Billy-Shop ist eine E-Commerce Webseite.',
    beschreibung_2: 'React, Redux, Node.js, Express, Firebase, Git, Vercel.',
    beschreibung_3:
      'Benutzerverwaltung, CRUD-Operationen für Autos und Lager, Authentifizierung, Datenbankanbindung, Datenbankmanagement, Responsive Design.',
    beschreibung_4:
      'Benutzer können Kleidungen für Männer, Frauen und Kinder kaufen.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'NextJS',
    stand: 'Ich arbeite an der Website',
    gehosted: 'Vercel',
    img: ['/imgs/next/billy-shop.webp'],
    url: 'https://billy-shop.vercel.app',
    path: 'billy-shop',
  },
  /* Ab hier neue Projekte hinfügen */
  {
    name: 'APP - Authentifikation',
    beschreibung_1: 'React Authentifikation APP mit Firebase.',
    beschreibung_2: 'React, Firebase, Redux, Git.',
    beschreibung_3:
      'Sicherheit, Benutzerregistrierung und -anmeldung, Authentifizierung mit Firebase, Zustandverwaltung mit Redux, Echtzeit-Datenbankanbindung.',
    beschreibung_4:
      'Diese App ermöglicht Benutzern die Registrierung und Authentifizierung über Firebase. Es bietet eine einfache Möglichkeit, Benutzer zu verwalten und ihre Daten zu speichern.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/APP-Authentification.webp',
      '/imgs/next/APP-Authentifikation-1.webp',
    ],
    url: 'https://billy-java.github.io/4_auth-react-lernen/',
    path: 'auth-app',
  },
  {
    name: 'Multi Step Validation Form',
    beschreibung_1: 'Die Daten sind in der Konsole sichtbar.',
    beschreibung_2: 'React, Git.',
    beschreibung_3:
      'Multi-Step-Formularvalidierung, Zustandverwaltung, benutzerdefinierte Validierungslogik.',
    beschreibung_4:
      'Diese App zeigt, wie man ein mehrstufiges Formular mit Validierung erstellt. Die Daten werden in der Konsole angezeigt, um die Funktionsweise zu demonstrieren.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/3_multi_step_validation_react.webp',
      '/imgs/next/3_multi_step_validation_react-1.webp',
    ],
    url: 'https://billy-java.github.io/3_multi_step_validation_react/',
    path: 'formular',
  },
  {
    name: 'Multi Sprache App',
    beschreibung_1: 'Multi Sprache React App.',
    beschreibung_2: 'React, Git.',
    beschreibung_3:
      'Internationale Unterstützung, mehrsprachige Benutzeroberfläche, Zustandverwaltung.',
    beschreibung_4:
      'Diese App ermöglicht die Verwendung mehrerer Sprachen und bietet eine benutzerfreundliche Oberfläche für internationale Benutzer.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/next/2_multi_sprache_react.webp',
      '/imgs/next/2_multi_sprache_react-1.webp',
    ],
    url: 'https://billy-java.github.io/2_multi_sprache_react/',
    path: 'multi-sprache',
  },
  {
    name: 'Slide - App',
    beschreibung_1: 'React Slide App mit Firebase.',
    beschreibung_2: 'React,  Git.',
    beschreibung_3:
      'Meine erste React-App, ich hatte useState, useEffect gelernt.',
    beschreibung_4:
      'Diese App ermöglicht das Hochladen und Anzeigen von Bildern in Echtzeit mit Firebase-Integration.',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'),
    sprache: 'React',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: ['/imgs/next/1_slide_react.webp'],
    url: 'https://billy-java.github.io/1_slide_react/',
    path: 'slide',
  },
];
