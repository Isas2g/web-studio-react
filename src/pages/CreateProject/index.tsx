import { ProjectForm } from 'widgets/index';
import classes from '../EditProject/style.module.scss';
import { useEffect } from 'react';
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
