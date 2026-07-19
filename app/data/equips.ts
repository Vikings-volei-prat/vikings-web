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
  { name: 'Benjamí Mixt Blau', category: 'Benjamí', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Benjamí Mixt Blanc', category: 'Benjamí', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Aleví Femení Blau', category: 'Aleví', competition: 'Competició Femenina FCVB', level: 'tercera' },
  { name: 'Aleví Femení Blanc', category: 'Aleví', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Aleví Masculí', category: 'Aleví', competition: 'Competició Masculina FCVB', level: 'tercera' },
  { name: 'Infantil Femení Blau', category: 'Infantil', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Infantil Femení Blanc', category: 'Infantil', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Infantil Femení Vermell', category: 'Infantil', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Infantil Femení Groc', category: 'Infantil', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Infantil Masculí Blau', category: 'Infantil', competition: 'Primera Divisió Catalana FCVB', level: 'primera' },
  { name: 'Infantil Masculí Blanc', category: 'Infantil', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Cadet Femení Blau', category: 'Cadet', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Cadet Femení Blanc', category: 'Cadet', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Cadet Femení Vermell', category: 'Cadet', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Cadet Femení Groc', category: 'Cadet', competition: 'Consell Esportiu Baix Llobregat', level: 'consell' },
  { name: 'Cadet Masculí Blau', category: 'Cadet', competition: 'Primera Divisió Catalana FCVB', level: 'primera' },
  { name: 'Cadet Masculí Blanc', category: 'Cadet', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Juvenil Femení Blau', category: 'Juvenil', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Juvenil Femení Blanc', category: 'Juvenil', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Juvenil Masculí Blau', category: 'Juvenil', competition: 'Primera Divisió Catalana FCVB', level: 'primera' },
  { name: 'Juvenil Masculí Blanc', category: 'Juvenil', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Júnior Femení', category: 'Júnior', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Júnior Masculí', category: 'Júnior', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Sènior Femení', category: 'Sènior', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Sènior Masculí Blau', category: 'Sènior', competition: 'Segona Divisió Catalana FCVB', level: 'segona' },
  { name: 'Sènior Masculí Blanc', category: 'Sènior', competition: 'Tercera Divisió Catalana FCVB', level: 'tercera' },
  { name: 'Amateur Mixt Blau', category: 'Amateur', competition: 'Lliga Màster Grup A', level: 'tercera' },
  { name: 'Amateur Mixt Blanc', category: 'Amateur', competition: 'Lliga Màster Grup B', level: 'tercera' },
];
