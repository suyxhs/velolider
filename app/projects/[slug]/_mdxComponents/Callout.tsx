import type { FC, ReactNode } from 'react';

type CalloutProps = {
  children: ReactNode;
};

export const Callout = ({ children }: CalloutProps) => {
  return (
    <div className="my-8 rounded-lg border-4 border-green-btn px-2 text-base font-medium dark:border-black-700">
      {children}
    </div>
  );
};
