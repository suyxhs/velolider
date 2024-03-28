import type { FC, ReactNode } from 'react';

type BlockquoteProps = {
  children: ReactNode;
};

export const Blockquote = ({ children }: BlockquoteProps) => {
  return (
    <blockquote>
      {children}
    </blockquote>
  );
};
