/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export const AudienceSection = () => {
  const titles = audiences.map(audience => audience.title);
  const [active, setActive] = useState(0);
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          Как менялся наш транспорт
        </h2>
        <div className="my-12 grid md:my-24 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_1.5fr]">
          <div className="mb-6 flex flex-row gap-8 md:mb-0 md:flex-col md:px-6 lg:px-12 overflow-x-auto py-4 pl-1">
            {titles.map((title, i) => {
              return (
                <button
                  key={title}
                  onClick={() => setActive(i)}
                  className={clsx(
                    'flex gap-4 font-accent text-3xl font-medium md:text-4xl lg:text-5xl',
                    active === i
                      ? 'text-violet'
                      : 'opacity-50 transition-all hover:opacity-75 dark:opacity-60 dark:hover:opacity-80'
                  )}
                >
                  {title}
                </button>
              );
            })}
          </div>
          <div className="min-h-[280px] max-w-xl">
            <p className="mb-2 text-xl font-medium lg:text-2xl">
              {audiences[active].subtitle}
            </p>
            <p className="text-lg opacity-90">
              {audiences[active].description}
            </p>
            <Image src={audiences[active].img} width={500} height={500} className='rounded-[20px] mt-8' alt='att'/>
          </div>
        </div>
      </div>
    </div>
  );
};

const audiences = [
  {
    title: '2000',
    subtitle:
      '*Пример текста*',
    description:
      '*Пример текста*',
      img: "/images/projects/preparingForTheSeason/logo.jpg",
  },
  {
    title: '2020',
    subtitle:
      '*Пример текста*',
    description:
      '*Пример текста*',
      img: "/images/posts/schedule.png",
  },
  {
    title: '2020',
    subtitle:
      '*Пример текста*',
    description:
      '*Пример текста*',
      img: "/images/posts/schedule.png",
  },
  {
    title: '2020',
    subtitle:
      '*Пример текста*',
    description:
      '*Пример текста*',
      img: "/images/posts/schedule.png",
  },
  {
    title: '2020',
    subtitle:
      '*Пример текста*',
    description:
      '*Пример текста*',
      img: "/images/posts/testStaffLogo/1.jpg",
  },
];
