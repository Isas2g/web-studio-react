import React from 'react';
import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';

const ProjectsList = () => {
  return (
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
  );
};

export default ProjectsList;
