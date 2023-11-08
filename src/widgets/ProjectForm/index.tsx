import classes from './style.module.scss';
import { Button, Input, FileInput } from 'shared/ui';
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
        defaultValue={project?.title}
        value={newProject?.title}
        onChange={(e) => setNewProject({...newProject, title: e.currentTarget.value})}
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
        value={newProject?.description}
        onChange={(e) => setNewProject({...newProject, description: e.currentTarget.value})}
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
        value={newProject?.link}
        onChange={(e) => setNewProject({...newProject, link: e.currentTarget.value})}
      />

      <p className={classes['sub-title']}>документы</p>
      <div>
        <FileInput
          maxFileQuantity={ 5 }
          maxFileSize={ 5242880 }
        />
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
