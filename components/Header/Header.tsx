'use client';

import { ComponentProps, FC, useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

import { navigation } from '@/config/navigation.config';
import { useScrollPosition } from '@/hooks/useScrollPosition';

import { Button } from '../Button';
import { Logo } from '../Logo';
import { ScrollableRelativeToParent } from '../Helpers';
import { SlideOver } from '../Slideover';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MenuDefault } from '../ui/MenuDefault';
import { NotificationsMenu } from '../ui/ClockIcon'
import {
  Tooltip
} from "@material-tailwind/react";


export const Header = () => {
  return (
    <header className="px-container mx-auto flex min-h-[calc(44px+2.5rem)] max-w-container justify-between gap-8 py-5">
      <div className='block md:hidden'>
        <NotificationsMenu />
      </div>
      <Link href="/" className="flex items-center ">
        {/* <Logo textHidden /> */}
        {/* <span className='font-medium text-sm'>команда</span> */}
        <h2 className='font-semibold text-lg'>ВелоЛидер</h2>
      </Link>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <NavigationItems className="flex items-center gap-8 lg:gap-12" />
      </div>
      <FixedCallToActionButton className="hidden md:block" />
      {/* MOBILE */}
      <div className="block md:hidden">
        <SlideOver Icon={Menu}>
          <NavigationItems className="flex flex-col items-start gap-8" />
        </SlideOver>
      </div>

    </header>
  );
};

const NavigationItems: FC<{ className?: string }> = props => {
  return (
    <nav className={props.className}>
      {navigation.map(({ name, href }) => {
        return (
          <Button as="a" variant="text" href={href} key={href}>
            {name}
          </Button>
        );
      })}
      <MenuDefault />
      <CallToActionButton className="mt-4 md:mt-0" />
      <ThemeToggle className="  md:bottom-0" />
    </nav>
  );
};

const FixedCallToActionButton: FC<{ className?: string }> = props => {
  const scrollPos = useScrollPosition();

  const isDisplayBlock = scrollPos > 50;
  const isVisible = scrollPos > 100;

  return (
    <ScrollableRelativeToParent
      className={clsx('z-20 text-right', props.className)}
    >
      <CallToActionButton
        aria-hidden={!isVisible}
        className={clsx(
          'mr-16 transition-all',
          isDisplayBlock ? 'hidden md:inline-block' : 'hidden',
          isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        )}
      />
    </ScrollableRelativeToParent>
  );
};

const CallToActionButton: FC<ComponentProps<'a'>> = props => {
  const [isLinkActive, setIsLinkActive] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getHours();
    setIsLinkActive(currentTime >= 10 && currentTime < 19);
  }, []);

  return (
    <div>
      {isLinkActive ? (
        <Button as="a" href="tel:+79529515034" size="sm" {...props}>
          +79529515034
        </Button>
      ) : (
        <Tooltip content="Кравченко Виктория">
        <Button as="a" size="sm" {...props}>
          Звонок с 10:00 до 19:00
        </Button>
      </Tooltip>
      )}
    </div>

  );
};
