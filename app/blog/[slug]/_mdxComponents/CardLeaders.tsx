import type { FC, ReactNode } from 'react';

type MdxCardLeadersProps = {
    children: ReactNode;
};

export const MdxCardLeaders: FC<MdxCardLeadersProps> = ({ children }) => {
    return (
        <>

            <div className="sm:grid sm:grid-cols-2 text-base font-medium">
                {children}
            </div>

        </>
    );
};
