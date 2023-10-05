import React from 'react';
import classes from '../EditProject/style.module.scss';
import ProjectCreateForm from '../../widgets/ProjectCreateForm';

const CreateProject = () => {
  return (
    <div className={classes['container']}>
      <ProjectCreateForm />
    </div>
  );
};

export default CreateProject;
