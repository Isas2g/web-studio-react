import classes from './style.module.scss';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import ProjectFormButton from './components/Button';
import Document from './components/Document';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { useEffect, useState } from 'react';
import { fetchProject, updateProject } from 'entities/Project/store';
import { Project } from 'entities/Project/types';

interface Props {
  id: number;
}

const ProjectForm = ({ id }: Props) => {
  const dispatch = useAppDispatch();
  const project = useAppSelector((state) => state.projects.project);
  const [newProject, setNewProject] = useState<Project>(project);
  const isLoading = useAppSelector((state) => state.projects.isLoading);

  if (isLoading) {
    return <p style={{ marginTop: 200 }}>{'loading...'}</p>;
  }
  // console.log(isLoading);
  // if (!isLoading) {
  //   setNewProject(project);
  // }

  const updateProjectHandler = () => {
    // console.log(newProject);
    dispatch(updateProject({ ...newProject, id }));
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
        defaultValue={project.title}
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
        value={`${new Date(project.startedAt).getFullYear()} - ${new Date(
          project.endedAt
        ).getFullYear()}`}
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
        defaultValue={project.description}
        onChange={(event) => {
          setNewProject({
            ...newProject,
            description: event.target.value,
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
        defaultValue={project.link}
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
        <Button onClick={updateProjectHandler} text={'Сохранить'} isAction />
      </div>
    </div>
  );
};

export default ProjectForm;
