import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun' | 'gray' 
> = {
  Элита: 'mint',
  Лидеры: 'mint',
  Легионеры: 'mint',
  Протоколы: 'violet',
  Персонал: 'sun',
  Прочее: 'gray',
  Спонсоры: 'gray'
} as const;

export const favorites: Post['slug'][] = [
  'class-schedule',
  'protocols',
  'agapov-oleg',
];
