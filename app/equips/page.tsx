import type { Metadata } from 'next';
import Image from 'next/image';
import EquipsFilter from './EquipsFilter';

export const metadata: Metadata = {
  title: 'Els nostres equips — Vikings Volei Prat',
  description: '29 equips federats. De benjamí fins a Superlliga 2.',
};

export default function EquipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vikings-blue pt-28 pb-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Els nostres equips
        </h1>
        <p className="text-lg text-white/75">
          29 equips federats. De benjamí fins a Superlliga 2.
        </p>
      </section>

      {/* Equip destacat */}
      <section className="bg-white px-4 pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-vikings-dark rounded-xl p-6 flex items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-vikings-red text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                Superlliga 2 · RFEVB
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Sènior Masculí</h2>
              <p className="text-white/70 text-sm">L'equip de màxim nivell del club</p>
            </div>
            <div className="hidden sm:block shrink-0">
              <Image
                src="/images/logo_color.png"
                alt="Logo Vikings Volei Prat"
                width={120}
                height={120}
                className="opacity-20 h-[120px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <EquipsFilter />
    </>
  );
}
