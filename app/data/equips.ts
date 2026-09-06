export type Equip = {
  name: string;
  category: string;
  competition: string;
  level: 'superlliga' | 'primera' | 'segona' | 'tercera' | 'consell';
};

export const CATEGORIES = [
  'Tots', 'Benjamí', 'Aleví', 'Infantil', 'Cadet',
  'Juvenil', 'Júnior', 'Sènior', 'Amateur',
];

export const equips: Equip[] = [
  { name: 'Benjamí', category: 'Benjamí', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Aleví Femení Blau', category: 'Aleví', competition: 'Competició Federada FCVB', level: 'tercera' },
  { name: 'Aleví Femení Blanc', category: 'Aleví', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Aleví Femení Groc', category: 'Aleví', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Aleví Masculí Blau', category: 'Aleví', competition: 'Competició Federada FCVB', level: 'tercera' },
  { name: 'Infantil Femení Blau', category: 'Infantil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Infantil Femení Blanc', category: 'Infantil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Infantil Femení Groc', category: 'Infantil', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Infantil Femení Vermell', category: 'Infantil', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Infantil Masculí Blau', category: 'Infantil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Infantil Masculí Blanc', category: 'Infantil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Cadet Femení Blau', category: 'Cadet', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Cadet Femení Blanc', category: 'Cadet', competition: '4a Divisió Federació Catalana', level: 'tercera' },
  { name: 'Cadet Femení Groc', category: 'Cadet', competition: '4a Divisió Federació Catalana', level: 'tercera' },
  { name: 'Cadet Femení Vermell', category: 'Cadet', competition: 'Competició Escolar Baix Llobregat', level: 'consell' },
  { name: 'Cadet Masculí Blau', category: 'Cadet', competition: '1a Divisió Federació Catalana', level: 'primera' },
  { name: 'Cadet Masculí Blanc', category: 'Cadet', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Juvenil Femení Blau', category: 'Juvenil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Juvenil Femení Blanc', category: 'Juvenil', competition: '4a Divisió Federació Catalana', level: 'tercera' },
  { name: 'Juvenil Femení Groc', category: 'Juvenil', competition: '4a Divisió Federació Catalana', level: 'tercera' },
  { name: 'Juvenil Masculí Blau', category: 'Juvenil', competition: '1a Divisió Federació Catalana', level: 'primera' },
  { name: 'Juvenil Masculí Blanc', category: 'Juvenil', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Júnior Femení', category: 'Júnior', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Júnior Masculí', category: 'Júnior', competition: '1a Divisió Federació Catalana', level: 'primera' },
  { name: 'Sènior Femení Blau', category: 'Sènior', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Sènior Femení Blanc', category: 'Sènior', competition: '3a Divisió Federació Catalana', level: 'tercera' },
  { name: 'Sènior Masculí Blau', category: 'Sènior', competition: '1a Divisió Federació Catalana', level: 'primera' },
  { name: 'Sènior Masculí Blanc', category: 'Sènior', competition: '2a Divisió Federació Catalana', level: 'segona' },
  { name: 'Sènior Masculí 1a Nacional', category: 'Sènior', competition: '1a Divisió Nacional — RFEVB', level: 'primera' },
  { name: 'Amateur Mixt Blau', category: 'Amateur', competition: '1a Divisió Federació Catalana', level: 'primera' },
  { name: 'Amateur Mixt Blanc', category: 'Amateur', competition: '1a Divisió Federació Catalana', level: 'primera' },
];
