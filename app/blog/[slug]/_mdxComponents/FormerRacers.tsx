import type { FC, ReactNode } from 'react';


import NextImage from 'next/image';

type MdxFormerRacersProps = {
    children: ReactNode;
};

export const MdxFormerRacers: FC<MdxFormerRacersProps> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-2  ">
      {children}
    </div>
  );
};
