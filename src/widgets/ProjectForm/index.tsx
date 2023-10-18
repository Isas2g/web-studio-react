import classes from './style.module.scss';
import { Button, Input } from 'shared/ui';
import { Button as ProjectFormButton, Document } from './components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Project } from 'entities/Project/types';

interface Props {
  handler: (project: Project) => void;
  project?: Project;
}

const ProjectForm = ({ handler, project }: Props) => {
  const [newProject, setNewProject] = useState<
    Project | Record<string, string>
  >(project || {});

  return (
    <div>
      <Link className={classes['return-link']} to="/admin-projects">
        &lt; к проектам
      </Link>
      <Input
        label="Название проекта"
        placeholder="Название проекта"
        type="text"
        id="project-title"
        name="project-title"
        defaultValue={project?.title || ''}
      />
      <Input
        label="ПЕРИОД РАЗРАБОТКИ"
        placeholder="20xx - 20xx"
        type="text"
        id="project-years"
        name="project-years"
        value={
          project
            ? `${new Date(project.startedAt).getFullYear()} - ${new Date(
                project.endedAt
              ).getFullYear()}`
            : ''
        }
      />
      <Input
        label="ОПИСАНИЕ ПРОЕКТА"
        placeholder="Описание"
        type="text"
        id="project-description"
        name="project-description"
        style={{ minHeight: 200 }}
        isMultiline
        defaultValue={project?.description || ''}
      />

      <p className={classes['sub-title']}>стек технологий</p>
      <div className={classes['buttons-container']}>
        <ProjectFormButton identifier="vue" text={'VUE.JS'} />
        <ProjectFormButton identifier="react" text={'REACT.JS'} isAction />
        <ProjectFormButton identifier="angular" text={'ANGULAR.JS'} />
        <ProjectFormButton identifier="docker" text={'DOCKER'} isAction />
        <ProjectFormButton identifier="figma" text={'FIGMA'} isAction />
        <ProjectFormButton identifier="ts" text={'TYPESCRIPT'} isAction />
        <ProjectFormButton identifier="redux" text={'REDUX'} isAction />
        <ProjectFormButton
          identifier="redux-tk"
          text={'REDUX TOOLKIT'}
          isAction
        />
        <ProjectFormButton identifier="rtk" text={'RTK QUERY'} />
        <ProjectFormButton identifier="fsd" text={'FSD ARCHITECHTURE'} />
        <ProjectFormButton identifier="vuetify" text={'VUETIFY'} />
        <ProjectFormButton identifier="psql" text={'POSTGRESQL'} />
        <ProjectFormButton identifier="go" text={'GOLANG'} />
      </div>

      <Input
        label="ссылка на проект"
        placeholder="https://..."
        type="text"
        id="project-link"
        name="project-link"
        defaultValue={project?.link || ''}
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
        <Button
          onClick={() => handler(newProject as Project)}
          text={'Сохранить'}
          isAction
        />
      </div>
    </div>
  );
};

export default ProjectForm;
