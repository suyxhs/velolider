import { FC } from 'react';

import { Offers } from '@/components/CTA/Offers';

type OffersSectionProps = {
  id?: string;
  variant?: 'mint' | 'sun' | 'violet';
};

export const OffersSection: FC<OffersSectionProps> = ({ id, variant }) => {
  return (
    <div id={id} className="relative mb-12 scroll-m-16 md:mb-24">
      <div className="px-container mx-auto max-w-container py-8">
        <Offers variant={variant} />
      </div>
    </div>
  );
};
