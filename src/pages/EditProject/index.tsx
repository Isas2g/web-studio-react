import { Link, useParams } from 'react-router-dom';
import classes from './style.module.scss';
import Input from 'shared/ui/Input';
import ProjectForm from 'widgets/ProjectForm';
import { useEffect } from 'react';
import { fetchProject, updateProject } from 'entities/Project/store';
import { useAppDispatch } from 'shared/store';

const EditProject = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProject(Number(id)));
  }, [dispatch, id]);
  return (
    <div className={classes['container']}>
      <ProjectForm id={Number(id)} />
    </div>
  );
};

export default EditProject;
