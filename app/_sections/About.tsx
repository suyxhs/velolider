import { Label } from '@/components/Label';
import Image from 'next/image';

import Gallery from '@/components/Gallery/Gallery'
import Staff from '@/components/Gallery/Staff'



export const AboutSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto flex max-w-xl flex-col-reverse items-center gap-8 py-8 md:gap-16 lg:max-w-container lg:flex-row">
        <div>
          <h3 className="font-accent text-3xl font-medium md:text-4xl">
            Команда ВелоЛидер
          </h3>
          <p className="my-5 text-xl md:text-2xl">
            Спорт - это, прежде всего, особая система воспитания человека. Наша команда делает всё возможное для совершенствования личности, даёт шанс реализовать свои возможности в сфере велоспорта в Воронежской области
          </p>
          <p className="my-5 opacity-90">
            Мы ждём именно тебя
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Label color="gray">Победа будет за нами</Label>
            <Label color="gray">Быстрее. Выносливее. Сильнее</Label>
          </div>
        </div>
        <div className="max-w-[580px] flex-shrink-0 rounded-md">
          <Image
            src="/images/portraits/velo.jpg"
            alt="Team VeloLider"
            width={480 * 2}
            height={324 * 2}
            sizes="(max-width: 768px) 100vw, 760px"
            className="h-full w-full rounded-md object-cover"
          />
          <span className="mt-2 hidden text-center text-xs opacity-50 md:block">
            Выезд команды ВелоЛидер в город Выкса
          </span>
        </div>
      </div>
      <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          Наша команда
        </h2>
      <Gallery />

      <h2 className="mb-5 mt-20 text-center font-accent text-4xl font-medium md:text-5xl">
          Персонал
        </h2>
      <Staff />


    </div>
  );
};
