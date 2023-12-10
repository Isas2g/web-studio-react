import { useParams } from 'react-router-dom';
import classes from './style.module.scss';
import ProjectForm from 'widgets/ProjectForm';
import { useEffect } from 'react';
import { fetchProject, updateProject } from 'entities/Project';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { Project } from 'entities/Project';

const EditProject = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projects.project);

  const isLoading = useAppSelector((state) => state.projects.isLoading);

  useEffect(() => {
    dispatch(fetchProject(Number(id)));
  }, [dispatch, id]);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }

  const updateProjectHandler = (newProject: Project) => {
    dispatch(updateProject({ ...newProject, id: Number(id) }));
  };

  

  return (
    <div className={classes['container']}>
      <ProjectForm 
        handler={updateProjectHandler}
        project={project}
      />
    </div>
  );
};

export default EditProject;
