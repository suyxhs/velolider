'use client';

import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

export const CompaniesSection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);

  return (
    <div className="relative mb-16 flex min-h-[90px] items-center justify-center bg-violet/40 dark:bg-violet/90 md:mb-32 lg:min-h-[120px]">
      <Transition
        show={mounted}
        className="overflow-hidden"
        enter="transform transition duration-200 origin-bottom"
        enterFrom="opacity-0 scale-80"
        enterTo="opacity-100 scale-100"
      >
        {/* <div className="lg:px-container hidden lg:mx-auto lg:flex lg:max-w-container">
          {companies.map(company => {
            return (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="a-reset flex items-center justify-center px-6 py-8 2xl:px-8"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width * 2 || 140}
                  height={company.height * 2 || 40}
                  style={{
                    width: company.width || 140,
                    height: company.height || 40,
                  }}
                  className="object-contain opacity-80  transition-all hover:opacity-100 dark:opacity-100"
                />
              </a>
            );
          })}
        </div> */}
        <div
          className="flex w-[400%] animate-slide sm:w-[100%] "
          aria-hidden={true}
        >
          {[...companies, ...companies].map((company, key) => {
            return (
              <a
                key={key}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="a-reset flex flex-shrink-0 items-center justify-center px-6 py-2"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width || 140}
                  height={company.height || 40}
                  loading="eager" // Needed for slider on mobile
                  style={{
                    width: company.width * 0.8 || 140,
                    height: company.height * 0.8 || 40,
                  }}
                  className="object-contain opacity-80 grayscale transition-all hover:opacity-100 dark:opacity-100"
                />
              </a>
            );
          })}
        </div>
      </Transition>
    </div>
  );
};

const companies = [
  {
    name: 'Альфа-Банк',
    logo: '/images/posts/sponsors/alfabank.png',
    url: 'https://alfabank.ru',
    width: 140,
    height: 50,
  },
  {
    name: 'Спец-Сити',
    logo: '/images/posts/sponsors/specsiti.svg',
    url: 'https://spec-city.ru',
    width: 140,
    height: 50,
  },
  {
    name: 'Транс-Информ',
    logo: '/images/posts/sponsors/transinform.svg',
    url: 'https://transinform.info',
    width: 140,
    height: 50,
  },
  //   {
  //     name: 'Leadquelle',
  //     logo: '/images/companies/leadquelle.svg',
  //     url: 'https://www.leadquelle.net/',
  //     width: 150,
  //     height: 40,
  //   },
  {
    name: 'ВПЭП',
    logo: '/images/posts/sponsors/vpeplogo.png',
    url: 'https://vpep.pro',
    width: 100,
    height: 70,
  },
  {
    name: 'Antik',
    logo: '/images/posts/sponsors/antic.png',
    url: 'https://zavod-antik.ru',
    width: 100,
    height: 100,
  },
  {
    name: 'VETER',
    logo: '/images/posts/sponsors/veter.svg',
    url: 'https://veter.cc',
    width: 100,
    height: 100,
  },
  {
    name: 'ВелоЛидер',
    logo: '/images/posts/sponsors/velolider.webp',
    url: 'https://www.velolider-vrn.ru',
    width: 190,
    height: 100,
  }
];
