import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Paragraph = ({ children }: PropsWithChildren<unknown>) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;
