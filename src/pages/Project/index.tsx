import React from 'react';
import classes from './style.module.scss';
import ProjectBlock from './widgets/ProjectBlock';
import Application from 'widgets/Application';
import Footer from '../../shared/ui/Footer';

const Project = () => {
  return (
    <div className={'container'}>
      <ProjectBlock />
      <Application />
      <Footer />
    </div>
  );
};

export default Project;
