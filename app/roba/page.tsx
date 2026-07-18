import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roba del club — Vikings Volei Prat',
  description: 'Col·lecció oficial de roba dels Vikings Volei Prat.',
};

export default function RobaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: '#1B4FC4' }}>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Roba del club</h1>
        <p className="mt-3 text-lg text-white" style={{ opacity: 0.75 }}>
          Equipació oficial dels Vikings Volei Prat
        </p>
      </section>

      {/* Secció principal */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Columna esquerra */}
          <div>
            <span
              className="inline-block text-white text-sm font-semibold px-3 py-1 rounded-full mb-5"
              style={{ backgroundColor: '#0D2E7A' }}
            >
              Temporada 2026-2027
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              La nostra equipació oficial
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Descobreix la col·lecció oficial dels Vikings Volei Prat. Jerseis, pantalons i
              accessoris amb els colors del club.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                'Qualitat professional',
                'Talles de XS a XXL',
                'Personalització amb nom i dorsal',
                'Enviament a tot Catalunya',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span style={{ color: '#F5C000' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://barcelonasur.erreaclubs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-lg font-semibold text-gray-900 transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#F5C000' }}
            >
              Comprar equipació
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Botiga oficial d&apos;equipació dels Vikings
            </p>
          </div>

          {/* Columna dreta — vídeo */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://www.youtube.com/embed/o0aFrlO1vh0"
              title="Equipació oficial Vikings Volei Prat"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: '#0D2E7A' }}>
        <h2 className="text-3xl font-bold text-white mb-4">
          Tens algun dubte sobre la mida o el disseny?
        </h2>
        <p className="text-white mb-8 max-w-xl mx-auto" style={{ opacity: 0.85 }}>
          Posa&apos;t en contacte amb nosaltres i t&apos;assessorarem sobre talles, dissenys i terminis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:cvprat@gmail.com"
            className="inline-block px-7 py-3 rounded-lg font-semibold text-gray-900 transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#F5C000' }}
          >
            Contacta&apos;ns
          </a>
          <a
            href="https://barcelonasur.erreaclubs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-lg font-semibold text-white border-2 border-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Anar a la botiga
          </a>
        </div>
      </section>
    </>
  );
}
