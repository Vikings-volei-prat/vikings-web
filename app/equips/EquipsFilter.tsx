'use client';

import { useState } from 'react';

type Level = 'superlliga2' | 'primera' | 'segona' | 'tercera' | 'consell';

interface Team {
  name: string;
  category: string;
  competition: string;
  level: Level;
}

const teams: Team[] = [
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

const categories = ['Tots', 'Benjamí', 'Aleví', 'Infantil', 'Cadet', 'Juvenil', 'Júnior', 'Sènior', 'Amateur'];

const badgeClasses: Record<Level, string> = {
  superlliga2: 'bg-vikings-red text-white',
  primera: 'bg-vikings-dark text-white',
  segona: 'bg-vikings-blue text-white',
  tercera: 'bg-[#e8f0fe] text-vikings-blue',
  consell: 'bg-gray-100 text-gray-500',
};

export default function EquipsFilter() {
  const [active, setActive] = useState('Tots');
  const filtered = active === 'Tots' ? teams : teams.filter((t) => t.category === active);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm font-medium rounded-[20px] border transition-colors duration-150 ${
                active === cat
                  ? 'bg-vikings-blue text-vikings-yellow border-vikings-blue'
                  : 'bg-white text-vikings-blue border-vikings-blue hover:bg-vikings-blue/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((team) => (
            <div
              key={team.name}
              className="border border-gray-100 rounded-xl p-5 flex flex-col gap-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-150"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-vikings-blue">
                {team.category}
              </span>
              <p className="font-bold text-gray-900 text-lg leading-snug">{team.name}</p>
              <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClasses[team.level]}`}>
                {team.competition}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
