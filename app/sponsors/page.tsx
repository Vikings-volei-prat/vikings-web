import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Els nostres sponsors — Vikings Volei Prat',
  description: 'Patrocinadors i col·laboradors del Club Volei Prat.',
};

const sponsors = [
  { src: '/images/sponsors/sponsor_la_brasa.png', name: 'La Brasa' },
  { src: '/images/sponsors/sponsor_prat_actiu_logo.png', name: 'Prat Actiu' },
  { src: '/images/sponsors/sponsor_jotun.png', name: 'Jotun' },
  { src: '/images/sponsors/sponsor_entre_panes.jpg', name: 'Entre Panes' },
  { src: '/images/sponsors/sponsor_asprat.png', name: 'Asprat Ascensors' },
];

const collaborators = [
  { src: '/images/sponsors/colaborator_tr.png', name: 'TR Publicitat' },
  { src: '/images/sponsors/colaborator_team_point.png', name: 'Team Point' },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vikings-blue py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Els nostres sponsors
        </h1>
        <p className="text-lg text-white/75 max-w-2xl mx-auto">
          Gràcies al suport dels nostres patrocinadors i col·laboradors, els Vikings podem seguir creixent.
        </p>
      </section>

      {/* Sponsors principals */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-vikings-blue mb-10">Patrocinadors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map(({ src, name }) => (
              <a
                key={name}
                href="#"
                className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-xl hover:border-vikings-blue hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={src}
                  alt={`Logo ${name}`}
                  width={300}
                  height={120}
                  style={{ objectFit: 'contain', height: '80px', width: 'auto' }}
                />
                <span className="mt-4 text-sm font-medium text-gray-500">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Col·laboradors */}
      <section className="bg-[#F8F8F8] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-vikings-dark mb-10">Col·laboradors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {collaborators.map(({ src, name }) => (
              <a
                key={name}
                href="#"
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:border-vikings-blue hover:shadow-md transition-all duration-200"
              >
                <Image
                  src={src}
                  alt={`Logo ${name}`}
                  width={300}
                  height={120}
                  style={{ objectFit: 'contain', height: '60px', width: 'auto' }}
                />
                <span className="mt-3 text-sm font-medium text-gray-500">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA patrocini */}
      <section className="bg-vikings-dark py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            El teu negoci, part dels Vikings
          </h2>
          <p className="text-white/75 text-lg mb-10 leading-relaxed">
            Si vols que la teva empresa aparegui als jerseis, pavellons i web dels Vikings,
            posa't en contacte amb nosaltres. Oferim diferents nivells de patrocini adaptats
            a cada necessitat.
          </p>
          <ul className="flex flex-col gap-3 mb-10 max-w-sm mx-auto text-left">
            <li className="flex items-center gap-3 text-white">
              <span className="text-vikings-yellow text-xl shrink-0">🏐</span>
              Visibilitat als 340+ jugadors i famílies del club
            </li>
            <li className="flex items-center gap-3 text-white">
              <span className="text-vikings-yellow text-xl shrink-0">📱</span>
              Presència a la web i xarxes socials
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cvprat@gmail.com"
              className="px-8 py-3.5 bg-vikings-yellow text-vikings-dark font-semibold rounded-lg hover:brightness-110 transition-all duration-150"
            >
              Contacta'ns
            </a>
            <a
              href="mailto:cvprat@gmail.com"
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-vikings-dark transition-all duration-150"
            >
              Més informació
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
