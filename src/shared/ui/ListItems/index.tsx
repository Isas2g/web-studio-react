import React, { ReactFragment, ReactPortal } from 'react';
import classes from './style.module.scss';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isActive?: boolean;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const ListItems = ({ isActive, children }: PropsWithChildren<Props>) => {
  return (
    <div className={classes['list-container1']}>
      {isActive ? (
        <div className={classes['tracing']}>
          <h5 className={classes['text-active']}>{children}</h5>
        </div>
      ) : (
        <h5 className={classes['text']}>{children}</h5>
      )}
    </div>
  );
};

export default ListItems;
