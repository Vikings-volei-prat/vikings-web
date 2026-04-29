import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roba del club — Vikings Volei Prat',
  description: 'Col·lecció oficial de roba dels Vikings Volei Prat.',
};

export default function RobaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vikings-blue py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Roba del club</h1>
      </section>

      {/* Contingut */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-lg mx-auto text-center">
          <span className="text-7xl mb-8 block">👕</span>
          <h2 className="text-3xl font-bold text-vikings-dark mb-5">Pròximament</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Estem preparant la nova col·lecció de roba oficial dels Vikings.
            Aviat podràs consultar tots els articles aquí.
          </p>
          <a
            href="mailto:cvprat@gmail.com"
            className="inline-block px-8 py-3.5 border-2 border-vikings-blue text-vikings-blue font-semibold rounded-lg hover:bg-vikings-blue hover:text-white transition-all duration-150"
          >
            Contacta'ns per a comandes
          </a>
        </div>
      </section>
    </>
  );
}
