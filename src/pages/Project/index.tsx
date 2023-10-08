import {
  ProjectBlock,
  GoalBlock,
  TasksBlock,
  TeamBlock,
} from './widgets';
import { Application } from 'widgets/index';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect } from 'react';
import { fetchProject } from 'entities/Project';

const Project = () => {
  const { id } = useParams();
  const project = useAppSelector((state) => state.projects.project);
  const isLoading = useAppSelector((state) => state.projects.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProject(Number(id)));
  }, []);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }

  return (
    <div className={'container'}>
      <ProjectBlock project={project} />
      <GoalBlock project={project} />
      <TasksBlock />
      <TeamBlock />
      <Application />
    </div>
  );
};

export default Project;
