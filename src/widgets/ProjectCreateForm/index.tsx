import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/store';
import { Project } from '../../entities/Project/types';
import { createProject } from '../../entities/Project/store';
import classes from '../ProjectForm/style.module.scss';
import Input from '../../shared/ui/Input';
import ProjectFormButton from '../ProjectForm/components/Button';
import Button from '../../shared/ui/Button';
import Document from '../ProjectForm/components/Document';

const ProjectCreateForm = () => {
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projects.project);
  const [newProject, setNewProject] = useState<Project>(project);

  const createProjectHandler = () => {
    console.log(newProject);
    dispatch(createProject({ ...newProject }));
  };

  return (
    <div className={classes['']}>
      <Input
        label="Название проекта"
        placeholder="Название проекта"
        type="text"
        id="project-title"
        name="project-title"
      />
      <Input
        label="ПЕРИОД РАЗРАБОТКИ"
        placeholder="20xx - 20xx"
        type="text"
        id="project-years"
        name="project-years"
      />
      <Input
        label="ОПИСАНИЕ ПРОЕКТА"
        placeholder="Описание"
        type="text"
        id="project-description"
        name="project-description"
      />

      <Input
        label="Номер команды"
        placeholder="teamID"
        type="text"
        id="teamID"
        name="teamID"
      />

      <p className={classes['sub-title']}>стек технологий</p>
      <div className={classes['buttons-container']}>
        <ProjectFormButton identifier='vue' text={'VUE.JS'} />
        <ProjectFormButton identifier='react' text={'REACT.JS'} isAction />
        <ProjectFormButton identifier='angular' text={'ANGULAR.JS'} />
        <ProjectFormButton identifier='docker' text={'DOCKER'} isAction />
        <ProjectFormButton identifier='figma' text={'FIGMA'} isAction />
        <ProjectFormButton identifier='ts' text={'TYPESCRIPT'} isAction />
        <ProjectFormButton identifier='redux' text={'REDUX'} isAction />
        <ProjectFormButton identifier='redux-tk' text={'REDUX TOOLKIT'} isAction />
        <ProjectFormButton identifier='rtk' text={'RTK QUERY'} />
        <ProjectFormButton identifier='fsd' text={'FSD ARCHITECHTURE'} />
        <ProjectFormButton identifier='vuetify' text={'VUETIFY'} />
        <ProjectFormButton identifier='psql' text={'POSTGRESQL'} />
        <ProjectFormButton identifier='go' text={'GOLANG'} />
      </div>

      <Input
        label="ссылка на проект"
        placeholder="https://..."
        type="text"
        id="project-link"
        name="project-link"
      />

      <p className={classes['sub-title']}>документы</p>
      <div>
        <Button text={'Загрузить'} />
      </div>
      <div className={classes['docs-container']}>
        <Document title={'document.docx'} />
        <Document title={'doc2.docx'} />
      </div>
      <div className={classes['buttons-container']}>
        <Button onClick={createProjectHandler} text={'Создать'} isAction />
      </div>
    </div>
  );
};

export default ProjectCreateForm;
