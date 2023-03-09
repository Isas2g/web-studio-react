import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isMainTitle?: boolean;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const HeroTitle = ({ isMainTitle, children }: PropsWithChildren<Props>) => {
  return (
    <div className="title-container">
      {isMainTitle ? (
        <h1 className="title">{children}</h1>
      ) : (
        <h2 className="title">{children}</h2>
      )}
    </div>
  );
};

export default HeroTitle;
