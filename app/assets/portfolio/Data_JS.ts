import { format } from 'date-fns';
import { I_Projekt } from '../I_Projekt';

export const Data_JS: I_Projekt[] = [
  {
    name: 'Responsive Dashboard',
    beschreibung_1:
      'Ein interaktives Dashboard mit responsivem Design für unterschiedliche Bildschirmgrößen.',
    beschreibung_2: 'Verwendet moderne CSS- und JavaScript-Techniken.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 6, 15), 'yyyy-MM-dd'), // 15 juillet 2022
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Responsive-Dashboard.webp'],
    url: 'https://billy-java.github.io/2_Responsive-Dashboard/',
  },
  {
    name: 'Authentification',
    beschreibung_1:
      'Eine einfache Authentifizierungsseite mit Formularvalidierung.',
    beschreibung_2: 'Erfordert E-Mail und Passwort zur Anmeldung.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 3, 10), 'yyyy-MM-dd'), // 10 avril 2022
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Authentification.webp'],
    url: 'https://billy-java.github.io/12.Authentification/',
  },
  {
    name: 'Pomodoro',
    beschreibung_1: 'Ein Pomodoro-Timer zur Steigerung der Produktivität.',
    beschreibung_2:
      'Fokussiert Arbeiten und Pausen in vordefinierten Zeitintervallen.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 2, 20), 'yyyy-MM-dd'), // 20 mars 2022
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Pomodoro.webp'],
    url: 'https://billy-java.github.io/7.Pomodoro/',
  },
  {
    name: 'Farbe - JS',
    beschreibung_1: 'Ein Tool zur Erkundung von Farben und Farbkombinationen.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 1, 5), 'yyyy-MM-dd'), // 5 février 2022
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/FarbenJS.webp'],
    url: 'https://billy-java.github.io/9.FarbenJS/',
  },
  {
    name: 'Bestätigungsform',
    beschreibung_1: 'Ein Formular mit Bestätigungsmechanismus.',
    beschreibung_2:
      'Ermöglicht Nutzern, ihre Eingaben vor dem Absenden zu überprüfen.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2022, 4, 12), 'yyyy-MM-dd'), // 12 mai 2022
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/BestaetigungsForm.webp'],
    url: 'https://billy-java.github.io/8.BestaetigungsForm/',
  },
  {
    name: 'ToDo - JS',
    beschreibung_1: 'Eine To-Do-Liste zur Organisation von Aufgaben.',
    beschreibung_2: 'Nutzer können Aufgaben hinzufügen, abhaken oder löschen.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 11, 20), 'yyyy-MM-dd'), // 20 décembre 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/ToDoJS.webp'],
    url: 'https://billy-java.github.io/6.ToDoJS/',
  },
  {
    name: 'Videoplayer',
    beschreibung_1: 'Ein benutzerdefinierter Videoplayer mit Steuerungen.',
    beschreibung_2: 'Ermöglicht das Abspielen und Anhalten von Videos.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 10, 28), 'yyyy-MM-dd'), // 28 novembre 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/CustomLecteurVidio.webp'],
    url: 'https://billy-java.github.io/14.CustomLecteurVid-o/',
  },
  {
    name: 'Audioplayer',
    beschreibung_1:
      'Ein benutzerdefinierter Audioplayer mit visuellen Effekten.',
    beschreibung_2: 'Ermöglicht das Abspielen und Anhalten von Audiodateien.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 9, 14), 'yyyy-MM-dd'), // 14 octobre 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Visualisateur-Audio.webp'],
    url: 'https://billy-java.github.io/19.Visualisateur-Audio/',
  },
  {
    name: 'Drag and Drop',
    beschreibung_1:
      'Eine Drag-and-Drop-Anwendung, um Elemente visuell zu verschieben.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 8, 22), 'yyyy-MM-dd'), // 22 septembre 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/DragAndDrop.webp'],
    url: 'https://billy-java.github.io/15.DragAndDrop/',
  },
  {
    name: 'Quizz',
    beschreibung_1: 'Ein einfaches Quizspiel, um Wissen zu testen.',
    beschreibung_2: 'Mehrere Wahlmöglichkeiten mit sofortiger Bewertung.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 7, 10), 'yyyy-MM-dd'), // 10 août 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Quizz.webp'],
    url: 'https://billy-java.github.io/5.Quizz/',
  },
  {
    name: 'MemoryCard',
    beschreibung_1: 'Ein Memory-Spiel zur Verbesserung der Konzentration.',
    beschreibung_2: 'Finden Sie die passenden Kartenpaare.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 6, 5), 'yyyy-MM-dd'), // 5 juillet 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/MemoryCard.webp'],
    url: 'https://billy-java.github.io/10.MemoryCard/',
  },
  {
    name: 'Slide',
    beschreibung_1: 'Ein einfacher Bildslider mit Übergangseffekten.',
    beschreibung_2: 'Ermöglicht das Durchblättern von Bildern.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 5, 15), 'yyyy-MM-dd'), // 15 juin 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/Slider.webp'],
    url: 'https://billy-java.github.io/13.Slider/',
  },
  {
    name: 'GitHub users infos',
    beschreibung_1:
      'Zeigt Informationen zu GitHub-Nutzern anhand der GitHub API.',
    beschreibung_2:
      'Geben Sie einen Benutzernamen ein, um seine Profilinformationen abzurufen.',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 4, 30), 'yyyy-MM-dd'), // 30 mai 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/GithubAPI.webp'],
    url: 'https://billy-java.github.io/11.GithubAPI/',
  },
  {
    name: 'Tic-Tac-Toe-Spiel',
    beschreibung_1:
      'Ein klassisches Tic-Tac-Toe-Spiel gegen einen Computer oder einen zweiten Spieler.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 3, 25), 'yyyy-MM-dd'), // 25 avril 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/JeuDuMorpion.webp'],
    url: 'https://billy-java.github.io/18.JeuDuMorpion/',
  },
  {
    name: 'Das Spiel Breakout',
    beschreibung_1:
      'Ein Casse-Briques-Spiel mit verschiedenen Levels und Steuerelementen.',
    beschreibung_2: '',
    beschreibung_3: '',
    erstellungsdatum: format(new Date(2021, 2, 10), 'yyyy-MM-dd'), // 10 mars 2021
    sprache: 'JavaScript',
    stand: 'Fertig',
    gehosted: 'GitHub Pages',
    img: ['/imgs/javascript/CasseBriques.webp'],
    url: 'https://billy-java.github.io/16.CasseBriques/',
  },
];
