import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import AgapovMaksim from '/public/images/gallery/2.jpg'
import Hatunceva from '/public/images/gallery/3.jpg'
import Shikin from '/public/images/gallery/4.jpg'
import Diblenko from '/public/images/gallery/5.jpg'
import Kolesnikov from '/public/images/gallery/6.jpg'
import Dolzhenko from '/public/images/gallery/7.jpg'
import Kulnev from '/public/images/gallery/8.jpg'
import Ryabov from '/public/images/gallery/9.jpg'
import Kartashov from '/public/images/gallery/10.jpg'
import Trufanova from '/public/images/gallery/11.jpg'
import Kositsyn from '/public/images/gallery/12.jpg'
import Tymchuk from '/public/images/gallery/13.jpg'
import Kartovets from '/public/images/gallery/14.jpg'
import Khatuntseva from '/public/images/gallery/15.jpg'
import Dochkina from '/public/images/gallery/16.jpg'
import Ivanov from '/public/images/gallery/17.jpg'
import Yakovlev from '/public/images/gallery/18.jpg'


import Agapov from '/public/images/gallery/agapov.jpg'
import Kravchenko from '/public/images/reviews/kravchenko.jpg'
import Tonkih from 'public/images/posts/adopting-a-no-code-mindset/t9.jpg'
import AgapovDenis from '/public/images/posts/agapovDenis/staffLogo.jpg'
import { TabsDefault } from '@/components/ui/TabsDefault';



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
              <Image src={AgapovMaksim} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Агапов Максим</p>
            </div>
          </Link>

          <Link href="/blog/dolzhenko-kirill" className="a-reset focus-default">
            <div>
              <Image src={Dolzhenko} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Долженко Кирилл</p>
            </div>
          </Link>

          <Link href="/blog/dochkina-polina" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Dochkina} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Дочкина Полина</p>
            </div>
          </Link>

          <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
            <div>
              <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Дыбленко Артём</p>
            </div>
          </Link>

          <Link href="/blog/ivanov-nikita" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Ivanov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Иванов Никита</p>
            </div>
          </Link>

          <Link href="/blog/kartashov-ivan" className="a-reset focus-default">
            <div>
              <Image src={Kartashov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Карташов Иван</p>
            </div>
          </Link>

          <Link href="/blog/kartovets-daria" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Kartovets} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Картовец Дарья</p>
            </div>
          </Link>

          <Link href="/blog/kolesnikov-ivan" className="a-reset focus-default">
            <div>
              <Image src={Kolesnikov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Колесников Иван</p>
            </div>
          </Link>

          <Link href="/blog/kositsyn-ivan" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Kositsyn} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Косицин Иван</p>
            </div>
          </Link>

          <Link href="/blog/kulnev-konstantn" className="a-reset focus-default">
            <div>
              <Image src={Kulnev} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Кульнев Константин</p>
            </div>
          </Link>

          <Link href="/blog/ryabov-maksim-post" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Ryabov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Рябов Максим</p>
            </div>
          </Link>

          <Link href="/blog/trufanova-anastasia" className="a-reset focus-default">
            <div>
              <Image src={Trufanova} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Труфанова Анастасия</p>
            </div>
          </Link>

          <Link href="/blog/tymchuk-denis" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Tymchuk} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Тымчук Денис</p>
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

          <Link href="/blog/yakovlev-artyom" className="a-reset focus-default">
            <div>
              <Image src={Yakovlev} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Яковлев Артём</p>
            </div>
          </Link>
        </div>

      </div>


      <div className="mb-24">

        <Hero
          className="pb-16 pt-9 md:pb-20 md:pt-1"
          minHeight={false}
          title={HeroTitle2}
          description="Основная информация про спортивную школу"
        />

        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">


          <Link href="/blog/agapov-oleg" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Agapov} className='rounded-[20px] mb-5' alt={'person'} />
              <p className='text-[15px] font-bold '>Агапов Олег</p>
              <span className='text-[0.8em] opacity-80'>Главный тренер</span>
            </div>
          </Link>

          <Link href="/blog/kravchenko-victoria" className="a-reset focus-default">
            <div >
              <Image src={Kravchenko} className='rounded-[20px] mb-5' alt={'person'} />
              <p className='text-[15px] font-bold '>Кравченко Виктория</p>
              <span className='text-[0.8em] opacity-80'>Тренер-стажёр младшей группы</span>
            </div>
          </Link>

          <Link href="/blog/tonkih-post" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Tonkih} className='rounded-[20px] mb-5' alt={'person'} />
              <p className='text-[15px] font-bold '>Тонких Илья</p>
              <span className='text-[0.8em] opacity-80'>Механик</span>
            </div>
          </Link>

          <Link href="/blog/agapov-denis" className="a-reset focus-default">
            <div>
              <Image src={AgapovDenis} className='rounded-[20px] mb-5' alt={'person'} />
              <p className='text-[15px] font-bold '>Агапов Денис</p>
              <span className='text-[0.8em] opacity-80'>Тренер средней группы</span>
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
const HeroTitle2 = (
  <>
    <span className="text-violet text-[50px]">Персонал</span>
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
