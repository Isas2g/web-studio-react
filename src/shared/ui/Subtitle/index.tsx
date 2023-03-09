import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Subtitle = ({ children }: PropsWithChildren<unknown>) => {
  return <h4 className="subtitle">{children}</h4>;
};

export default Subtitle;
