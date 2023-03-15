import React, { useState } from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import arrow from 'shared/assets/icons/arrow.svg';
import floatingImage from 'shared/assets/icons/floating-image-2.svg';
import ProjectsList from './components/ProjectsList';

const OurProjects = () => {
  return (
    <div className={`${classes['our-projects']} container`}>
      <img className={classes['floating-image']} src={floatingImage} alt={''} />
      <Title>проекты</Title>
      <Subtitle>
        Последние решения, которые нам удалось успешно реализовать.
      </Subtitle>
      <div className={classes['filter']}>
        Готовые проекты
        <img src={arrow} className={classes['arrow']} alt={''} />
      </div>
      <ProjectsList />
    </div>
  );
};

export default OurProjects;
