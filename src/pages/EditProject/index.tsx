import { Link } from 'react-router-dom';
import classes from './style.module.scss';
import Input from 'shared/ui/Input';
import ProjectForm from 'widgets/ProjectForm';

const EditProject = () => {
  return (
    <div className={classes['container']}>
      <ProjectForm />
    </div>
  );
};

export default EditProject;
