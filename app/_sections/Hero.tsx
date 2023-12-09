import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/Button';
import { Hero } from '@/components/Hero';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AvatarBubble } from '@/components/Avatar';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div className="px-container relative mx-auto mb-20 mt-8 p-10 max-w-container ">
      <Hero
        title={HeroTitle}
        description="Официальный сайт лидирующей команды Воронежской области"
        actions={HeroActions}
      />
      <ThemeToggle className="absolute -bottom-10 left-0 md:bottom-0" />
    </div>
  );
};

const HeroTitle = (
  <div className="relative">
    {/* <AvatarBubble className="absolute -right-44 -top-16 hidden lg:block" /> */}
    <span className="block">Команда</span>
    <span className="block">ВелоЛидер</span>
  </div>
);

const HeroActions = (
  <div className="mt-6 flex-col items-center justify-center text-center">
    <Button as="a" href={`${FreshEyesAuditSchedulingLink}?source=Hero`}>
      Консультация
    </Button>
    <div className="mb-12 mt-6 flex gap-4 text-sm opacity-50">
      <span className="flex items-center gap-1">
        <CheckCircle size={18} /> Консультация +-30 мин
      </span>
      <span className="flex items-center gap-1">
        <CheckCircle size={18} />
        Обратная связь с нами
      </span>
    </div>
  </div>
);
