import classes from './style.module.scss';

import React from 'react';

interface Props {
  title: string;
  years: string;
  description: string;
}

const ProjectCard = ({ title, years, description }: Props) => {
  return (
    <div className={classes['card-container']}>
      <p className={classes['card-title']}>{title}</p>
      <p className={classes['card-years']}>{years}</p>
      <p className={classes['card-description']}>{description}</p>
    </div>
  );
};

export default ProjectCard;
