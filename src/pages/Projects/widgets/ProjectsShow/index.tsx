import React from 'react';
import ProjectsList from 'widgets/OurProjects';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';

const ProjectsShow = () => {
  return (
    <div className={`${classes['projects-show']} container`}>
      <div className={classes['btns-row']}>
        <Button text={'Все проекты'} isAction={true} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
        <Button text={'Все проекты'} />
      </div>
      <ProjectsList />
    </div>
  );
};

export default ProjectsShow;
