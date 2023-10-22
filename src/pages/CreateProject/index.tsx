import React from 'react';
import classes from './style.module.scss';
import { ProjectForm } from 'widgets/index';
import { useAppDispatch } from 'shared/store';
import { Project, createProject } from 'entities/Project';

const CreateProject = () => {
  const dispatch = useAppDispatch();

  const createProjectHandler = (newProject: Project) => {
    dispatch(createProject(newProject));
  };

  return (
    <div className={classes['container']}>
      <ProjectForm handler={createProjectHandler} />
    </div>
  );
};

export default CreateProject;
