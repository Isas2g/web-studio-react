import React, { ReactFragment, ReactPortal } from 'react';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Paragraph = ({ children }: PropsWithChildren<any>) => {
  return <h4 className="paragraph">{children}</h4>;
};

export default Paragraph;
