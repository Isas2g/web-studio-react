import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isMainTitle?: boolean;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const HeroTitle = ({ isMainTitle, children }: PropsWithChildren<Props>) => {
  return (
    <div className={classes['title-container']}>
      {isMainTitle ? (
        <h1 className={classes['title']}>{children}</h1>
      ) : (
        <h2 className={classes['title']}>{children}</h2>
      )}
    </div>
  );
};

export default HeroTitle;
