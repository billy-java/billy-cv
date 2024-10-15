interface Menu {
  activ: boolean;
  titel: string;
  url: string;
}

export const sidebars: Menu[] = [
  {
    activ: true,
    titel: 'Über mich',
    url: '/#uebermich',
  },
  { activ: false, titel: 'Berufliche Laufbahn', url: '/#laufbahn' },
  { activ: false, titel: 'Portfolio', url: '/#portfolio' },
  { activ: false, titel: 'Kenntnisse', url: '/#kenntnisse' },
  { activ: false, titel: 'Lebenslauf', url: '/#lebenslauf' },
];