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
  'Projectes socials locals i internacionals',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="h-screen bg-vikings-blue flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-3xl mx-auto">
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
            <div key={label} className="bg-vikings-blue rounded-xl p-6 text-center">
              <p className="text-6xl font-bold text-vikings-yellow mb-3">{number}</p>
              <p className="text-sm font-medium uppercase tracking-wide text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre el club */}
      <section className="bg-[#F8F8F8] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-vikings-dark mb-12">
            Un club amb identitat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-gray-600 text-lg leading-relaxed">
              El Club Volei Prat, conegut com Vikings Volei Prat, és una entitat esportiva sense
              ànim de lucre que representa el voleibol al Prat de Llobregat des de l'any 1993.
            </p>
            <ul className="space-y-4">
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

      {/* Instagram */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-vikings-dark mb-2">
              Segueix-nos a Instagram
            </h2>
            <p className="text-gray-400 font-medium">@voleiprat</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-vikings-blue/20 rounded-lg" />
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://instagram.com/voleiprat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-vikings-blue text-white font-semibold rounded-lg hover:bg-vikings-dark transition-colors duration-150"
            >
              Veure perfil
            </a>
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
