import type { Metadata } from 'next';
import EquipsFilter from './EquipsFilter';

export const metadata: Metadata = {
  title: 'Els nostres equips — Vikings Volei Prat',
  description: '32 equips federats. De benjamí fins a Primera Nacional.',
};

export default function EquipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-vikings-blue py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Els nostres equips
        </h1>
        <p className="text-lg text-white/75">
          32 equips federats. De benjamí fins a Primera Nacional.
        </p>
      </section>

      <EquipsFilter />
    </>
  );
}
