'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Inici' },
  { href: '/equips', label: 'Els nostres equips' },
  { href: '/installacions', label: 'Instal·lacions' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/roba', label: 'Roba del club' },
];

function isActive(href: string, pathname: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-vikings-blue text-white shadow-md">
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

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm font-medium transition-colors duration-150 ${
                      isActive(href, pathname)
                        ? 'text-vikings-yellow border-b-2 border-vikings-yellow pb-0.5'
                        : 'text-white hover:text-vikings-yellow'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:cvprat@gmail.com"
              className="px-4 py-1.5 bg-vikings-yellow text-vikings-dark text-sm font-extrabold rounded-lg hover:brightness-110 transition-all duration-150"
            >
              Apunta't
            </a>
          </div>

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
                  className={`block py-2 px-2 text-sm font-medium rounded transition-colors duration-150 ${
                    isActive(href, pathname)
                      ? 'text-vikings-yellow bg-white/10'
                      : 'text-white hover:bg-white/10 hover:text-vikings-yellow'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-2">
              <a
                href="mailto:cvprat@gmail.com"
                className="block py-2.5 bg-vikings-yellow text-vikings-dark text-sm font-extrabold rounded-lg text-center hover:brightness-110 transition-all duration-150"
                onClick={() => setOpen(false)}
              >
                Apunta't
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
