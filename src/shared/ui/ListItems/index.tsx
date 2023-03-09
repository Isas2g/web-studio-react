import React, { ReactFragment, ReactPortal } from 'react';
import './style.scss';
type ReactNode = ReactFragment | ReactPortal | boolean | null | undefined;

interface Props {
  isActive?: boolean;
}

type PropsWithChildren<P> = P & { children?: ReactNode };

const ListItems = ({ isActive, children }: PropsWithChildren<Props>) => {
  return (
    <div className="list-container1">
      {isActive ? (
        <div className="tracing">
          <h5 className="text-active">{children}</h5>
        </div>
      ) : (
        <h5 className="text">{children}</h5>
      )}
    </div>
  );
};

export default ListItems;
