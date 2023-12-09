import type { Post } from 'contentlayer/generated';

export const CategoryColors: Record<
  NonNullable<Post['category']>,
  'mint' | 'violet' | 'sun' | 'gray' | 'green-btn'
> = {
  Лидеры: 'mint',
  Протоколы: 'violet',
  Персонал: 'sun',
  Прочее: 'gray',
  Спонсоры: 'green-btn'
} as const;

export const favorites: Post['slug'][] = [
  'how-to-build-a-text-editor-like-notion',
  'adopting-a-no-code-mindset',
  'why-open-source-projects-are-your-best-marketing',
];
