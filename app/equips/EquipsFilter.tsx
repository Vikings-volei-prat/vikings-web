'use client';

import { useState } from 'react';
import { equips, CATEGORIES, type Equip } from '../data/equips';

type Level = Equip['level'];

const badgeClasses: Record<Level, string> = {
  superlliga: 'bg-vikings-red text-white',
  primera: 'bg-vikings-dark text-white',
  segona: 'bg-vikings-blue text-white',
  tercera: 'bg-[#e8f0fe] text-vikings-blue',
  consell: 'bg-gray-100 text-gray-500',
};

export default function EquipsFilter() {
  const [active, setActive] = useState('Tots');
  const filtered = active === 'Tots' ? equips : equips.filter((t) => t.category === active);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
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
