import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import Agapov from '/public/images/gallery/2.jpg'
import Hatunceva from '/public/images/gallery/3.jpg'
import Shikin from '/public/images/gallery/4.jpg'
import Diblenko from '/public/images/gallery/5.jpg'



const LeadersPage = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20"
        minHeight={false}
        title={HeroTitle}
        description="Основная информация про спортивную школу"
      />
      <div className="mb-24">

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">


                <Link href="/blog/agapov-maksim-post" className="a-reset focus-default">
                    <div className="mt-10">
                        <Image src={Agapov} className='rounded-[20px] mb-5' alt={'person'} />
                        <p>Агапов Максим</p>
                    </div>
                </Link>

                <Link href="/blog/khatuntseva-alexandra" className="a-reset focus-default">
                <div >
                    <Image src={Hatunceva} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Хатунцева Александра</p>
                </div>
                </Link>

                <Link href="/blog/shikin-alexander" className="a-reset focus-default">
                <div className="mt-10">
                    <Image src={Shikin} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Шикин Александр</p>
                </div>
                </Link>

                <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
                <div>
                <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Дыбленко Артём</p>
                </div>
                </Link>

                <Link href="/blog/shikin-alexander" className="a-reset focus-default">
                <div className="mt-10">
                    <Image src={Shikin} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Шикин Александр</p>
                </div>
                </Link>

                <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
                <div>
                <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Дыбленко Артём</p>
                </div>
                </Link>
                
                <Link href="/blog/shikin-alexander" className="a-reset focus-default">
                <div className="mt-10">
                    <Image src={Shikin} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Шикин Александр</p>
                </div>
                </Link>

                <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
                <div>
                <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
                    <p>Дыбленко Артём</p>
                </div>
                </Link>
            </div>

      </div>
      <CTA variant="sun" />
    </main>
  );
};

const HeroTitle = (
  <>
    <span className="text-violet text-[50px]">Наши спортсмены</span>
  </>
);

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Лидеры',
  description:
    'Блог про наших спортсменов',
  alternates: {
    canonical: `https://velolider/gallery`,
  },
};

export default LeadersPage;
