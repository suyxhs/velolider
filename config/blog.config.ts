import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun' | 'gray' 
> = {
  Элита: 'mint',
  Лидеры: 'mint',
  Протоколы: 'violet',
  Персонал: 'sun',
  Прочее: 'gray',
  Спонсоры: 'gray'
} as const;

export const favorites: Post['slug'][] = [
  'generating-dynamic-og-images-with-vercel-og',
  'adopting-a-no-code-mindset',
  'why-open-source-projects-are-your-best-marketing',
];
