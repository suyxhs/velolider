import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import { MasonryGridGallery } from '@/components/ui/MasonryGridGallery';
import TestGallery from '@/components/ui/TestGallery';



const KartovetsRofl = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20"
        minHeight={false}
        title={HeroTitle}
        description="Чупапи"
      />
      <div className="mb-24">
      <TestGallery />
      </div>
      <CTA variant="sun" />
    </main>
  );
};

const HeroTitle = (
  <>
    <span className="text-violet">Даша Картовец</span>
  </>
);

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Картовец',
  description:
    'Специально для Даши (Вика)',
  alternates: {
    canonical: `https://velolider/gallery`,
  },
};

export default KartovetsRofl;
