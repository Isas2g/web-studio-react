import React, { useState } from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import arrow from 'shared/assets/icons/arrow.svg';
import floatingImage from 'shared/assets/icons/floating-image-2.svg';
import ProjectsList from './components/ProjectsList';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { fetchProjects } from 'entities/Project/store';

const OurProjects = () => {
  const projects = useAppSelector((state) => state.projects.value);
  const dispatch = useAppDispatch();

  const addProject = () => {
    dispatch(fetchProjects());
  };

  return (
    <div className={`${classes['our-projects']} container`}>
      <img className={classes['floating-image']} src={floatingImage} alt={''} />
      <Title>проекты</Title>
      <Subtitle>
        Последние решения, которые нам удалось успешно реализовать.
      </Subtitle>
      <button onClick={addProject} className={classes['filter']}>
        Готовые проекты
        <img src={arrow} className={classes['arrow']} alt={''} />
      </button>
      <ProjectsList />
    </div>
  );
};

export default OurProjects;
