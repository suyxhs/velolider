import { ReviewCard } from '@/components/Card';

export const ReviewsSection = () => {
  return (
    <div className="relative mb-16 bg-violet/40 dark:bg-violet/90 md:mb-32">
      <div className="px-container mx-auto max-w-container pb-16 pt-12 md:py-24">
        <h3 className="mb-5 mt-4 text-center font-accent text-4xl font-medium dark:text-black md:text-5xl">
          Слова наших спортсменов
        </h3>
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {reviews.map((review, index) => {
            return <ReviewCard {...review} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: 'Константин Сынков',
    bio: 'Пользователь',
    avatar: '/images/reviews/kostya.jpg',
    text: "“Дружелюбная атмосфера на базе. Спасибо за счастливое детство“",
  },
  {
    name: 'Кравченко Виктория',
    bio: 'Тренер',
    avatar: '/images/reviews/kravchenko.jpg',
    text: "“Как бывший спортсмен и начинающий тренер хочу сказать, для меня команда стала как большая семья”",
  },
  {
    name: 'Рябов Максим',
    bio: 'Спортсмен',
    avatar: '/images/reviews/ryabov.jpg',
    text: "“Справедливый тренерский состав”",
  },
  {
    name: 'Агапов Максим',
    bio: 'Спортсмен',
    avatar: '/images/reviews/agapov.jpg',
    text: '“База привила мне интерес к спорту”',
  },
  {
    name: 'Картовец Дарья',
    bio: 'Спортсмен',
    avatar: '/images/reviews/kortavec.jpg',
    text: '“🔥🔥🔥”',
  },
  {
    name: 'Попов Антон',
    bio: 'Спортсмен',
    avatar: '/images/reviews/popov.jpg',
    text: '“На базе рабочая атмосфера. Каждый раз возвращаешься как домой”',
  },
  {
    name: 'Ушаков Андрей',
    bio: 'Родственник спортсмена',
    avatar: '/images/reviews/ushakov.jpg',
    text: '“Ребёнок ходит с удовольствием”',
  },
  {
    name: 'Яковлев Артём',
    bio: 'Спортсмена',
    avatar: '/images/reviews/yakovlev.jpg',
    text: '”Мне нравится эта команда”',
  },
  {
    name: 'Хатунцева Александра',
    bio: 'Спортсмен',
    avatar: '/images/reviews/hatuncheva.jpg',
    text: '”С приходом на базу появилось много хороших друзей”',
  },
  {
    name: 'Шикин Александр',
    bio: 'Спортсмен',
    avatar: '/images/reviews/shikin.17.jpg',
    text: '”Интересные тренировки. Спасибо Олегу Ивановичу за его работу!”',
  },
  {
    name: 'Кузьмич Руслана',
    bio: 'Пользователь',
    avatar: '/images/reviews/ruslana.jpg',
    text: '”Очень горжусь спортсменами базы, жалею, что в своё время не пошла на велоспорт”',
  },
];
