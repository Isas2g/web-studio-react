import Button from 'shared/ui/Button';
import classes from './style.module.scss';

import React from 'react';

interface Props {
  title: string;
  years: string;
  description: string;
  isAdminPage?: boolean;
  isProjectsPage?: boolean;
}

const ProjectCard = ({
  title,
  years,
  description,
  isAdminPage,
  isProjectsPage,
}: Props) => {
  return (
    <div className={classes['card-container']}>
      <p className={classes['card-title']}>{title}</p>
      <p className={classes['card-years']}>{years}</p>
      <p className={classes['card-description']}>{description}</p>
      {(isAdminPage || isProjectsPage) && (
        <div className={classes['buttons-container']}>
          {isAdminPage && (
            <>
              <Button text={'Редактировать'} style={{ marginBottom: 30 }} />
              <Button text={'Удалить'} />
            </>
          )}
          {isProjectsPage && (
            <Button text={'Смотреть проект'} style={{ whiteSpace: 'nowrap' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
