import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isMainTitle?: boolean;
  //TODO: исправить тип any
  style?: any;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const HeroTitle = ({
  isMainTitle,
  children,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <div style={style} className={classes['title-container']}>
      {isMainTitle ? (
        <h1 className={classes['title']}>{children}</h1>
      ) : (
        <h2 className={classes['title']}>{children}</h2>
      )}
    </div>
  );
};

export default HeroTitle;
