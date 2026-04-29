import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-vikings-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/logo_color.png"
                alt="Logo Vikings Volei Prat"
                width={200}
                height={200}
                style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
              <p className="font-bold text-lg text-vikings-yellow">Vikings Volei Prat</p>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Club de voleibol del Prat de Llobregat.<br />
              Formació, competició i esport en valors.
            </p>
          </div>

          <div>
            <p className="font-semibold text-xs uppercase tracking-wider text-white/50 mb-4">Navegació</p>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/equips" className="hover:text-vikings-yellow transition-colors duration-150">
                  Els nostres equips
                </Link>
              </li>
              <li>
                <Link href="/installacions" className="hover:text-vikings-yellow transition-colors duration-150">
                  Instal·lacions
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-vikings-yellow transition-colors duration-150">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/roba" className="hover:text-vikings-yellow transition-colors duration-150">
                  Roba del club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-xs uppercase tracking-wider text-white/50 mb-4">Contacte</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>El Prat de Llobregat, Barcelona</li>
              <li>
                <a
                  href="mailto:cvprat@gmail.com"
                  className="text-white hover:text-vikings-yellow transition-colors duration-150"
                >
                  cvprat@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com/voleiprat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-vikings-yellow transition-colors duration-150"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-vikings-yellow transition-colors duration-150"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Vikings Volei Prat. Tots els drets reservats.
        </div>
      </div>
    </footer>
  );
}
