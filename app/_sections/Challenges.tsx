import { IconCard } from '@/components/Card';
import {
  Cycle,
  Growth,
  Money,
  PuzzlePiece,
  ShakeHands,
  SpeedingClock,
} from '@/components/Icon';

export const ChallengesSection = () => {
  return (
    <div className="relative mb-16 md:mb-32">
      <div className="px-container mx-auto max-w-container">
        <h2 className="mb-5 mt-4 text-center font-accent text-4xl font-medium md:text-5xl">
          Кратко о нас
        </h2>
        <div className="grid grid-cols-1 justify-items-start gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-16 lg:grid-cols-3">
          {challenges.map(challenge => {
            return (
              <IconCard
                key={challenge.title}
                Icon={challenge.Icon}
                title={challenge.title}
                className="max-w-[400px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const challenges = [
  {
    Icon: SpeedingClock,
    title:
      'Наша база существует с 1972 года',
  },
  {
    Icon: Cycle,
    title:
      'Велоспорт - это не просто хобби, это образ жизни',
  },
  {
    Icon: ShakeHands,
    title:
      'Главные ценности нашей команды дружелюбная атмосфера и уважение друг к другу',
  },
  {
    Icon: PuzzlePiece,
    title:
      'МБУДО СШОР №8',
  },
  {
    Icon: Money,
    title: 'Занятия на бесплатной основе',
  },
  {
    Icon: Growth,
    title:
      'Воспитанники базы являются призёрами и победителями чемпионатов Европы, России и международных соревнований',
  },
];
