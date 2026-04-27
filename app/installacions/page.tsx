import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Les nostres instal·lacions — Vikings Volei Prat',
  description: 'On entrenen i competeixen els Vikings al Prat de Llobregat.',
};

interface Detail {
  icon: string;
  text: string;
}

interface Venue {
  name: string;
  badge: string;
  badgeStyle: string;
  description: string;
  details: Detail[];
}

const venues: Venue[] = [
  {
    name: 'CEM Julio Méndez',
    badge: 'Instal·lació principal',
    badgeStyle: 'bg-vikings-blue text-white',
    description:
      'El nostre pavelló principal. Cada dissabte al matí s\'omple de famílies i aficionats que creen una atmosfera inigualable.',
    details: [
      { icon: '📍', text: 'El Prat de Llobregat' },
      { icon: '🏐', text: '3 pistes simultànies' },
      { icon: '👥', text: 'Capacitat per a 400+ espectadors' },
    ],
  },
  {
    name: 'Pavelló Xavier Marcilla',
    badge: 'Instal·lació secundària',
    badgeStyle: 'bg-vikings-dark text-white',
    description:
      'Segon pavelló on entrenem i competim, complementant la nostra activitat setmanal.',
    details: [
      { icon: '📍', text: 'El Prat de Llobregat' },
      { icon: '🏐', text: '2 pistes simultànies' },
    ],
  },
];

const extraVenue: Venue = {
  name: 'Pavelló Fundesplai',
  badge: 'Col·laboració',
  badgeStyle: 'bg-gray-100 text-gray-500',
  description:
    'Gràcies a la col·laboració amb l\'Ajuntament, disposem d\'una pista addicional.',
  details: [
    { icon: '📍', text: 'El Prat de Llobregat' },
    { icon: '🏐', text: '1 pista' },
  ],
};

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-[#e8f0fe] h-[200px] flex items-center justify-center text-gray-400 text-sm">
        📷 Foto pendent
      </div>
      <div className="p-6">
        <span className={`inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4 ${venue.badgeStyle}`}>
          {venue.badge}
        </span>
        <h2 className="text-2xl font-bold text-vikings-dark mb-3">{venue.name}</h2>
        <p className="text-gray-600 leading-relaxed mb-5">{venue.description}</p>
        <ul className="space-y-2">
          {venue.details.map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-sm text-gray-600">
              <span>{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function InstallacionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vikings-blue py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Les nostres instal·lacions
        </h1>
        <p className="text-lg text-white/75">On entrenen i competeixen els Vikings</p>
      </section>

      {/* Instal·lacions principals */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {venues.map((venue) => (
              <VenueCard key={venue.name} venue={venue} />
            ))}
          </div>
          <div className="max-w-md mx-auto">
            <VenueCard venue={extraVenue} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vikings-dark py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Vine a veure'ns!</h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Cada dissabte al matí al CEM Julio Méndez.{' '}
            L'entrada és lliure.
          </p>
          <a
            href="https://maps.google.com/?q=CEM+Julio+Mendez+El+Prat+de+Llobregat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-vikings-yellow text-vikings-dark font-semibold text-lg rounded-lg hover:brightness-110 transition-all duration-150"
          >
            Com arribar
          </a>
        </div>
      </section>
    </>
  );
}
