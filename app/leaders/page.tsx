import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import { Button } from '@/components/Button';


import AgapovMaksim from '/public/images/posts/agapov/logo3.jpg'
import Hatunceva from '/public/images/posts/khatuntseva/logo2.jpg'
import Shikin from '/public/images/posts/shikin/logo2.jpg'
import Diblenko from '/public/images/posts/dyblenko/logo3.jpg'
import Kolesnikov from '/public/images/posts/kolesnikov/logo2.jpg'
import Dolzhenko from '/public/images/posts/dolzhenko/logo3.jpg'
import Kulnev from '/public/images/posts/kulnev/logo2.jpg'
import Ryabov from '/public/images/posts/ryabov/logo2.jpg'
import Kartashov from '/public/images/posts/kartashov/logo2.jpg'
import Trufanova from '/public/images/posts/trufanova/logo2.jpg'
import Kositsyn from '/public/images/posts/kositsyn/logo2.jpg'
import Tymchuk from '/public/images/posts/tymchuk/logo2.jpg'
import Kartovets from '/public/images/posts/kartovets/logo2.jpg'
import Khatuntseva from '/public/images/gallery/15.jpg'
import Dochkina from '/public/images/posts/dochkina/logo2.jpg'
import Ivanov from '/public/images/posts/ivanov/logo2.jpg'
import Yakovlev from '/public/images/posts/yakovlev/logo2.jpg'


import Agapov from '/public/images/posts/lider/agapovLogo.jpg'
import Kravchenko from '/public/images/reviews/kravchenko.jpg'
import Tonkih from 'public/images/posts/adopting-a-no-code-mindset/t9.jpg'
import AgapovDenis from '/public/images/posts/agapovDenis/staffLogo2.jpg'




const LeadersPage = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20 "
        minHeight={false}
        title={HeroTitle}
        description="Основная информация про спортивную школу"
      />

      <div className="mb-24">

      <h3 className="font-accent text-3xl font-medium md:text-4xl py-10 md:py-10">
            Основной состав
          </h3>

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

          <Link href="/blog/dyblenko-artyom" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Diblenko} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Дыбленко Артём</p>
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

          <Link href="/blog/kulnev-konstantn" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Kulnev} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Кульнев Константин</p>
            </div>
          </Link>

          <Link href="/blog/ryabov-maksim-post" className="a-reset focus-default">
            <div>
              <Image src={Ryabov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Рябов Максим</p>
            </div>
          </Link>

          <Link href="/blog/trufanova-anastasia" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Trufanova} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Труфанова Анастасия</p>
            </div>
          </Link>

          <Link href="/blog/tymchuk-denis" className="a-reset focus-default">
            <div>
              <Image src={Tymchuk} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Тымчук Денис</p>
            </div>
          </Link>

          <Link href="/blog/khatuntseva-alexandra" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Hatunceva} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Хатунцева Александра</p>
            </div>
          </Link>

          <Link href="/blog/shikin-alexander" className="a-reset focus-default">
            <div>
              <Image src={Shikin} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Шикин Александр</p>
            </div>
          </Link>

        </div>

        <h3 className="font-accent text-3xl font-medium md:text-4xl py-10 md:pb-10">
            Состав стажёров основного состава
          </h3>

        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        <Link href="/blog/dochkina-polina" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Dochkina} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Дочкина Полина</p>
            </div>
          </Link>

          <Link href="/blog/ivanov-nikita" className="a-reset focus-default">
            <div>
              <Image src={Ivanov} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Иванов Никита</p>
            </div>
          </Link>

          <Link href="/blog/kositsyn-ivan" className="a-reset focus-default">
            <div className="mt-10">
              <Image src={Kositsyn} className='rounded-[20px] mb-5' alt={'person'} />
              <p>Косицин Иван</p>
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
              <span className='text-[0.8em] opacity-80'>Тренер и механик</span>
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
