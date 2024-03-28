import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import HistoryBase from '@/components/ui/HistoryBase';



const GalleryPage = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20"
        minHeight={false}
        title={HeroTitle}
        description="Основная информация про спортивную школу"
      />
      <div className="mb-24">
      <HistoryBase />
      </div>
      <CTA variant="sun" />
    </main>
  );
};

const HeroTitle = (
  <>
    <span className="text-violet">История Базы</span>
  </>
);

/** EXPORTS */

export const metadata: Metadata = {
  title: 'История базы',
  description:
    'Блог про наших спортсменов',
  alternates: {
    canonical: `https://velolider/gallery`,
  },
};

export default GalleryPage;
