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
        containerStyle={{ marginBottom: 33 }}
        onChange={(event) => {
          setNewProject({
            ...newProject,
            title: event.target.value,
          });
        }}
      />
      <Input
        label="ПЕРИОД РАЗРАБОТКИ"
        placeholder="20xx - 20xx"
        type="text"
        id="project-years"
        name="project-years"
        containerStyle={{ marginBottom: 33 }}
        onChange={(event) => {
          // setNewProject({
          //   ...newProject,
          //   title: event.target.value
          // })
        }}
      />
      <Input
        label="ОПИСАНИЕ ПРОЕКТА"
        placeholder="Описание"
        type="text"
        id="project-description"
        name="project-description"
        containerStyle={{ marginBottom: 33 }}
        style={{ minHeight: 200 }}
        isMultiline
        onChange={(event) => {
          setNewProject({
            ...newProject,
            description: event.target.value,
          });
        }}
      />

      <Input
        label="Номер команды"
        placeholder="teamID"
        type="text"
        id="teamID"
        name="teamID"
        containerStyle={{ marginBottom: 33 }}
        style={{ minHeight: 200 }}
        isMultiline
        onChange={(event) => {
          setNewProject({
            ...newProject,
            teamID: Number(event.target.value),
          });
        }}
      />

      <p className={classes['sub-title']}>стек технологий</p>
      <div className={classes['buttons-container']}>
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'REACT.JS'} isAction />
        <ProjectFormButton text={'ANGULAR.JS'} />
        <ProjectFormButton text={'DOCKER'} isAction />
        <ProjectFormButton text={'FIGMA'} isAction />
        <ProjectFormButton text={'TYPESCRIPT'} isAction />
        <ProjectFormButton text={'REDUX'} isAction />
        <ProjectFormButton text={'REDUX TOOLKIT'} isAction />
        <ProjectFormButton text={'RTK QUERY'} />
        <ProjectFormButton text={'FSD ARCHITECHTURE'} />
        <ProjectFormButton text={'VUETIFY'} />
        <ProjectFormButton text={'POSTGRESQL'} />
        <ProjectFormButton text={'GOLANG'} />
      </div>

      <Input
        label="ссылка на проект"
        placeholder="https://..."
        type="text"
        id="project-link"
        name="project-link"
        containerStyle={{ marginBottom: 40 }}
        onChange={(event) => {
          setNewProject({
            ...newProject,
            link: event.target.value,
          });
        }}
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
