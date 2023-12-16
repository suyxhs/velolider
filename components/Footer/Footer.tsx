import Link from 'next/link';

import { legals, navigation, socials } from '@/config/navigation.config';
import { Logo } from '../Logo';
import Script from "next/script";
import Map from "@/components/Map/Map"

const year = new Date().getFullYear();

export const Footer = () => {
  return (
      <footer className="border-t-2 border-transparent bg-black dark:border-white/50 rounded-t-[20px]">
        <div className="px-container mx-auto flex max-w-container flex-col-reverse items-start justify-between gap-x-12 gap-y-20 pb-20 pt-16 md:flex-row">
          <div className="flex flex-col">
            {/* <Logo iconColor="white" textHidden /> */}
            <h2 className='font-semibold text-white text-lg'>ВелоЛидер</h2>
            <span className="mt-3 block text-sm text-white">
              &copy; {year} ВелоЛидер
            </span>
            <div className="mt-12 rounded-lg border-4 border-violet text-base">
              <div className="not-prose bg-violet px-2 py-1 text-sm font-medium uppercase text-black/75">
                Мы на карте
              </div>
              <Map />
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-x-14 gap-y-10 text-sm text-white">
            <div className="flex min-w-[110px] flex-col gap-3 sm:min-w-[160px] lg:min-w-[200px]">
              <span className="font-medium">Навигация</span>
              <nav className="flex flex-col gap-3">
                {navigation.map(({ name, href }) => {
                  return (
                    <Link
                      key={href}
                      // @ts-expect-error
                      href={href}
                      className="a-reset focus-default"
                    >
                      {name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex min-w-[110px] flex-col gap-3 sm:min-w-[160px] lg:min-w-[200px]">
              <span className="font-medium">Контакты</span>
              <nav className="flex flex-col gap-3">
                {socials.map(({ name, href }) => {
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-reset focus-default"
                    >
                      {name}
                    </a>
                  );
                })}
              </nav>
            </div>
            {/* <div className="flex flex-col gap-3">
            <span className="font-medium">Юридические</span>
            <nav className="flex flex-col gap-3">
              {legals.map(({ name, href }) => {
                return (
                  <Link
                    key={href}
                    // @ts-expect-error
                    href={href}
                    className="a-reset focus-default"
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div> */}
          </div>
        </div>
      </footer>
  );
};

const carbonFootprint = 0.24;
const carbonFootprintUrl =
  'https://www.websitecarbon.com/website/konstantin-digital/';

const CarbonFootprint = () => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={carbonFootprintUrl}>
      {carbonFootprint}g of CO2
    </a>
  );
};
