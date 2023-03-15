import React, { useState } from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import arrow from 'shared/assets/icons/arrow.svg';
import floatingImage from 'shared/assets/icons/floating-image-2.svg';
import ProjectCard from 'entities/Project/components/ProjectCard';

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

      <div className={classes['projects-container']}>
        <ProjectCard
          isProjectsPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          isProjectsPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
        <ProjectCard
          isProjectsPage
          title={'About Web'}
          years={'2020 — 2021'}
          description={
            'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
          }
        />
      </div>
    </div>
  );
};

export default OurProjects;
