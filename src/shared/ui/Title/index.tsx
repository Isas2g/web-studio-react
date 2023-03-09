import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const Title = ({ children }: PropsWithChildren<any>) => {
  return <h3 className="second-title">{children}</h3>;
};

export default Title;
