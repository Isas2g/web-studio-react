import React from 'react';
import classes from './style.module.scss';
import ProjectBlock from './widgets/ProjectBlock';
import Application from 'widgets/Application';

const Project = () => {
  return (
    <div className={'container'}>
      <ProjectBlock />
      <Application />
    </div>
  );
};

export default Project;
