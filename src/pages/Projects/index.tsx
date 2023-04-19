import React from 'react';
import Application from 'widgets/Application';
import ProjectsMain from './widgets/ProjectsMain';
import ProjectsShow from './widgets/ProjectsShow';

const Projects = () => {
  return (
    <div>
      <ProjectsMain />
      <ProjectsShow />
      <Application />
    </div>
  );
};

export default Projects;
