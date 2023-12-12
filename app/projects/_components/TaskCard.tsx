import { FC } from 'react';
import clsx from 'clsx';

import { type Markdown } from 'contentlayer/core';

import { Avatar } from '@/components/Avatar';
import { Label } from '@/components/Label';

type TaskCardProps = {
  title: Markdown;
  className?: string;
};

export const TaskCard: FC<TaskCardProps> = ({ title, className }) => {
  const project = deriveProjectFromTitle(title.raw);

  return (
    <div>
      <div
        className={clsx(
          'select-none rounded-xl bg-black-200 px-8 pb-6 pt-8 ring-inset ring-black-300/80 transition-all hover:ring-2 dark:bg-black-900 dark:text-white/95 dark:ring-black-800',
          className
        )}
      >
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: title.html }}
        />
        <div className="mt-4 flex items-center gap-4">
          <Avatar size={28} />
          <div className="flex gap-2">
            {project.map((p, i) => {
              return (
                <Label key={i} color={p.color}>
                  {p.name}
                </Label>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const deriveProjectFromTitle = (
  title: string
): { name: string; color: 'sun' | 'mint' | 'gray' | 'violet' }[] => {
  if (title.toLowerCase().includes('повышаем свой уровень'))
    return [{ name: 'Тренер', color: 'sun' }];

  if (
    title.toLowerCase().includes('горжусь') ||
    title.toLowerCase().includes('состою в команде') ||
    title.toLowerCase().includes('ВелоЛидер')
  )
    return [{ name: 'Спортсмен', color: 'violet' }];

  if (title.toLowerCase().includes('регион'))
    return [
      { name: 'Пользователь', color: 'mint' },
      // { name: 'Родственник ', color: 'sun' },
    ];

  return [{ name: 'Пользователь', color: 'mint' }];
};
