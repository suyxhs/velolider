import type { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type LogoProps = {
  iconSize?: number;
  iconRotated?: boolean;
  iconColor?: string;
  textHidden?: boolean;
  textSize?: string;
  textColor?: string;
};

export const Logo: FC<LogoProps> = props => {
  const iconSize = props.iconSize ?? 200;
  const iconColor = props.iconColor ?? '#CEAFFA';

  const textSize = props.textSize ?? 24;

  return (
    <div className="flex items-center justify-start gap-3">
      <Image src="/images/posts/sponsors/velolider2.png" width={iconSize} height={iconSize} alt='persom'/>
      {!props.textHidden && (
        <span
          className="font-accent text-2xl font-bold tracking-wider"
          style={{ fontSize: textSize }}
        >
          Konstantin
        </span>
      )}
    </div>
  );
};
