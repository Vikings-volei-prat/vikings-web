'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Inici' },
  { href: '/equips', label: 'Els nostres equips' },
  { href: '/installacions', label: 'Instal·lacions' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/roba', label: 'Roba del club' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-vikings-blue text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo_color.png"
              alt="Logo Vikings Volei Prat"
              width={200}
              height={200}
              style={{ height: '40px', width: 'auto' }}
            />
            <span className="font-bold text-xl text-vikings-yellow">Vikings</span>
            <span className="font-medium text-white">Volei Prat</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-white hover:text-vikings-yellow transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded focus:outline-none focus:ring-2 focus:ring-vikings-yellow"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Tanca el menú' : 'Obre el menú'}
            aria-expanded={open}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {open && (
          <ul className="md:hidden pb-4 border-t border-white/10 pt-2 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 px-2 text-sm font-medium text-white rounded hover:bg-white/10 hover:text-vikings-yellow transition-colors duration-150"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
