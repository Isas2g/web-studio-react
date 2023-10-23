import React, { useEffect } from 'react';
import ProjectsMain from './widgets/ProjectsMain';
import ProjectsShow from './widgets/ProjectsShow';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { fetchAPIProjects } from 'entities/Project';

const Projects = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAPIProjects());
  }, [dispatch]);

  const projects = useAppSelector((state) => state.projects.value) || [];

  return (
    <div>
      <ProjectsMain />
      <ProjectsShow projects={projects} />
    </div>
  );
};

export default Projects;
