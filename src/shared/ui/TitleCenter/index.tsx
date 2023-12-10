import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';

type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

type PropsWithChildren<P> = P & { children?: ReactNode };

const TitleCenter = ({ children }: PropsWithChildren<unknown>) => {
  return <h2 className="title-center">{children}</h2>;
};

export default TitleCenter;
