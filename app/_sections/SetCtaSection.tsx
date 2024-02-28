import { FC } from 'react';

import { Offers } from '@/components/CTA/Offers';
import { SetCta } from '@/components/CTA';

type SetCtaSectionProps = {
  id?: string;
  variant?: 'mint' | 'sun' | 'violet';
};

export const SetCtaSection: FC<SetCtaSectionProps> = ({ id, variant }) => {
  return (
    <div id={id} className="relative mb-12 scroll-m-16 md:mb-24">
      <div className="px-container mx-auto max-w-container py-8">
        <SetCta variant={variant} />
      </div>
    </div>
  );
};
