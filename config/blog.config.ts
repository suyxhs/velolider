import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun' | 'gray' 
> = {
  Элита: 'mint',
  Легионеры: 'mint',
  Лидеры: 'mint',
  Протоколы: 'violet',
  Персонал: 'sun',
  Прочее: 'gray',
  Спонсоры: 'gray'
} as const;

export const BLOG_CATEGORIES: {
  title: string;
  slug: "Элита" | "Легионеры" | "Лидеры" | "Протоколы" | "Персонал" | "Прочее" | "Спонсоры"
  description: string;
}[] = [
  {
    title: "Элита",
    slug: "Элита",
    description: "Updates and announcements from Dub.",
  },
  {
    title: "Легионеры",
    slug: "Легионеры",
    description: "Educational content about link management.",
  },
  {
    title: "Лидеры",
    slug: "Лидеры",
    description: "Learn how Dub customers use Dub.",
  },
  {
    title: "Протоколы",
    slug: "Протоколы",
    description: "Learn how Dub customers use Dub.",
  },
  {
    title: "Персонал",
    slug: "Персонал",
    description: "Learn how Dub customers use Dub.",
  },
  {
    title: "Прочее",
    slug: "Прочее",
    description: "Learn how Dub customers use Dub.",
  },
  {
    title: "Спонсоры",
    slug: "Спонсоры",
    description: "Learn how Dub customers use Dub.",
  },
];

export const favorites: Post['slug'][] = [
  'class-schedule',
  'protocols',
  'agapov-oleg',
];
