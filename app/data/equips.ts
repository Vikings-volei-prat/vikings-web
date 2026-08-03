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
  { name: 'Benjamí', category: 'Benjamí', competition: 'Pendent', level: 'consell' },
  { name: 'Aleví Femení Blau', category: 'Aleví', competition: 'Pendent', level: 'tercera' },
  { name: 'Aleví Femení Blanc', category: 'Aleví', competition: 'Pendent', level: 'tercera' },
  { name: 'Aleví Femení Groc', category: 'Aleví', competition: 'Pendent', level: 'tercera' },
  { name: 'Aleví Masculí Blau', category: 'Aleví', competition: 'Pendent', level: 'tercera' },
  { name: 'Aleví Masculí Blanc', category: 'Aleví', competition: 'Pendent', level: 'tercera' },
  { name: 'Infantil Femení Blau', category: 'Infantil', competition: 'Pendent', level: 'tercera' },
  { name: 'Infantil Femení Blanc', category: 'Infantil', competition: 'Pendent', level: 'tercera' },
  { name: 'Infantil Femení Groc', category: 'Infantil', competition: 'Pendent', level: 'tercera' },
  { name: 'Infantil Femení Vermell', category: 'Infantil', competition: 'Pendent', level: 'consell' },
  { name: 'Infantil Masculí Blau', category: 'Infantil', competition: 'Pendent', level: 'primera' },
  { name: 'Infantil Masculí Blanc', category: 'Infantil', competition: 'Pendent', level: 'segona' },
  { name: 'Cadet Femení Blau', category: 'Cadet', competition: 'Pendent', level: 'tercera' },
  { name: 'Cadet Femení Blanc', category: 'Cadet', competition: 'Pendent', level: 'tercera' },
  { name: 'Cadet Femení Groc', category: 'Cadet', competition: 'Pendent', level: 'consell' },
  { name: 'Cadet Femení Vermell', category: 'Cadet', competition: 'Pendent', level: 'consell' },
  { name: 'Cadet Masculí Blau', category: 'Cadet', competition: 'Pendent', level: 'primera' },
  { name: 'Cadet Masculí Blanc', category: 'Cadet', competition: 'Pendent', level: 'segona' },
  { name: 'Juvenil Femení Blau', category: 'Juvenil', competition: 'Pendent', level: 'tercera' },
  { name: 'Juvenil Femení Blanc', category: 'Juvenil', competition: 'Pendent', level: 'tercera' },
  { name: 'Juvenil Femení Groc', category: 'Juvenil', competition: 'Pendent', level: 'tercera' },
  { name: 'Juvenil Masculí Blau', category: 'Juvenil', competition: 'Pendent', level: 'primera' },
  { name: 'Juvenil Masculí Blanc', category: 'Juvenil', competition: 'Pendent', level: 'segona' },
  { name: 'Júnior Femení', category: 'Júnior', competition: 'Pendent', level: 'segona' },
  { name: 'Júnior Masculí', category: 'Júnior', competition: 'Pendent', level: 'segona' },
  { name: 'Sènior Femení Blau', category: 'Sènior', competition: 'Pendent', level: 'segona' },
  { name: 'Sènior Femení Blanc', category: 'Sènior', competition: 'Pendent', level: 'tercera' },
  { name: 'Sènior Masculí Blau', category: 'Sènior', competition: 'Pendent', level: 'segona' },
  { name: 'Sènior Masculí Blanc', category: 'Sènior', competition: 'Pendent', level: 'tercera' },
  { name: 'Sènior Masculí 1a Nacional', category: 'Sènior', competition: 'Primera Nacional', level: 'primera' },
  { name: 'Amateur Mixt Blau', category: 'Amateur', competition: 'Pendent', level: 'consell' },
  { name: 'Amateur Mixt Blanc', category: 'Amateur', competition: 'Pendent', level: 'consell' },
];
