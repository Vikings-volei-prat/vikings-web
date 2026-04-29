import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { number: '340+', label: 'Jugadors i jugadores' },
  { number: '30', label: 'Equips federats' },
  { number: '+30', label: "Anys d'història" },
];

const highlights = [
  'Benjamí fins a Superlliga 2',
  'Volei platja i pista',
  'Escoles i instituts del municipi',
  'Tecnificacions de Nadal i Setmana Santa',
  'Vikings Open Calamar',
  'Projectes socials a Uganda i altres',
];

const values = [
  { emoji: '🏐', title: 'Tecnificacions', text: 'Nadal i Setmana Santa' },
  { emoji: '🤝', title: 'Torneigs benèfics', text: 'Per a hospitals infantils' },
  { emoji: '☀️', title: 'Casals d\'estiu', text: 'Multiesportius' },
  { emoji: '🌍', title: 'Projectes socials', text: 'Local i internacional' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center text-center px-4 pt-20"
        style={{
          backgroundImage: 'url(/images/hero-team.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#1B4FC4] opacity-80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Image
            src="/images/logo_color.png"
            alt="Logo Vikings Volei Prat"
            width={280}
            height={280}
            className="h-[160px] sm:h-[280px] w-auto mx-auto mb-10"
            priority
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-vikings-yellow">Vikings</span> Volei Prat
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Més de 30 anys formant esportistes i persones al Prat de Llobregat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/equips"
              className="px-8 py-3.5 bg-vikings-yellow text-vikings-dark font-semibold rounded-lg hover:brightness-110 transition-all duration-150"
            >
              Els nostres equips
            </Link>
            <a
              href="mailto:cvprat@gmail.com"
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vikings-blue transition-all duration-150"
            >
              Contacta'ns
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ number, label }) => (
            <div key={label} className="bg-vikings-blue rounded-xl text-center" style={{ padding: '32px' }}>
              <p className="text-vikings-yellow mb-3" style={{ fontSize: '3rem', fontWeight: 800 }}>{number}</p>
              <p className="text-white/75" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre el club */}
      <section className="bg-[#F8F8F8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-vikings-dark mb-6">
                Un projecte en creixement
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                El Club Volei Prat, conegut com Vikings Volei Prat, és una entitat esportiva sense
                ànim de lucre que representa el voleibol al Prat de Llobregat des de l'any 1993.
                Amb més de 30 anys d'història, el club s'ha convertit en un referent esportiu a
                Catalunya, especialment al Baix Llobregat.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Actualment comptem amb més de 340 jugadors i jugadores, repartits en 30 equips
                federats i escolars, des de benjamí fins a sènior, tant en pista com en vòlei platja.
              </p>
            </div>
            <ul className="space-y-4 md:pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-vikings-yellow text-2xl leading-none mt-0.5" aria-hidden>●</span>
                  <span className="text-gray-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formació i valors */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-vikings-dark mb-10">
            Formació i valors
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ emoji, title, text }) => (
              <div
                key={title}
                className="bg-[#F8F8F8] rounded-lg p-6"
                style={{ borderTop: '3px solid #1B4FC4' }}
              >
                <span className="text-3xl mb-4 block">{emoji}</span>
                <p className="font-bold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto mb-6"
            style={{ width: '48px', height: '48px', color: '#E1306C' }}
            aria-hidden
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>

          <h2 className="text-3xl sm:text-4xl font-bold text-vikings-dark mb-3">
            Segueix-nos a Instagram
          </h2>
          <p className="text-vikings-blue font-extrabold mb-4" style={{ fontSize: '2rem' }}>
            @voleiprat
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Totes les novetats, entrenaments i moments del club, cada dia a Instagram.
          </p>

          <a
            href="https://www.instagram.com/voleiprat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            Segueix @voleiprat
          </a>

          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {['Actualitzat diàriament', 'Entrenaments i partits', 'Moments del club'].map((stat, i) => (
              <span key={stat} className="flex items-center gap-3">
                {i > 0 && <span className="text-gray-300">|</span>}
                <span style={{ fontSize: '13px', color: '#9ca3af' }}>{stat}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-vikings-blue py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Vols formar part dels Vikings?
          </h2>
          <p className="text-white/80 text-lg mb-12 leading-relaxed">
            Tenim equips per a totes les edats i nivells.{' '}
            Vine a entrenar amb nosaltres.
          </p>
          <a
            href="mailto:cvprat@gmail.com"
            className="inline-block px-10 py-4 bg-vikings-yellow text-vikings-dark font-semibold text-lg rounded-lg hover:brightness-110 transition-all duration-150"
          >
            Contacta'ns
          </a>
        </div>
      </section>
    </>
  );
}
