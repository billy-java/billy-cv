import { format } from 'date-fns';
import { I_Projekt } from '../I_Projekt';

export const Data_Angular: I_Projekt[] = [
  {
    name: 'Hotel - App',
    beschreibung_1:
      '1- Sie können ein neues Hotel hinfügen, Sie können ein Hotel löschen oder bearbeiten.',
    beschreibung_2: '2- Sie können ein Hotel löschen oder bearbeiten.',
    beschreibung_3: '',
    beschreibung_4: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'Angular',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/angular/hotel-angular.webp',
      '/imgs/angular/hotel-angular-1.webp',
    ],
    url: 'https://billy-java.github.io/hotel-angular/',
  },
  {
    name: 'SuperHero - App',
    //https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/
    beschreibung_1:
      'Öffnen Sie bitte das folgende Link, um die Api-Daten zu aktivieren.',
    beschreibung_2:
      'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/',
    beschreibung_3:
      'Schreiben Sie den Namen eines Superhelden. Sie können einen Superhelden zu den Favoriten hinzufügen',
   
      beschreibung_4: '', erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'Angular',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/angular/SuperHero-Angular-1.webp',
      '/imgs/angular/SuperHero-Angular.webp',
    ],
    url: 'https://billy-java.github.io/SuperHero-Angular/',
  },
  {
    name: 'Filmdetail',
    beschreibung_1: '1- Sie können einen Film zu den Favoriten hinfügen.',
    beschreibung_2: '2- Sie können auch einen Film bewerten.',
    beschreibung_3: '',
    beschreibung_4: '',
    erstellungsdatum: format(new Date(2022, 8, 2), 'yyyy-MM-dd'), // 2 octobre 1995,
    sprache: 'Angular',
    stand: 'Fertig',
    gehosted: 'GitHub',
    img: [
      '/imgs/angular/Filmen-Angular-1.webp',
      '/imgs/angular/Filmen-Angular.webp',
    ],
    url: 'https://billy-java.github.io/Filmen-Angular/',
  },
];
