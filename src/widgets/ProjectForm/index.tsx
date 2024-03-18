import classes from './style.module.scss';
import { Button, Input, FileInput } from 'shared/ui';
import { Button as ProjectFormButton } from './components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from 'entities/Project/types';
import { useAppDispatch, useAppSelector } from 'shared/store';
import { getCategories } from 'entities/Project';
import { uploadProjectFiles, setProjectImage } from 'entities/Project/store';

interface Props {
  handler: (project: Project) => void;
  project?: Project;
}

const ProjectForm = ({ handler, project }: Props) => {
  const [newProject, setNewProject] = useState<Project | any>(project || {});
  const [filesList, setFiles] = useState<File[]>([]); // сюда класть файлы проекта
  const [image, setImage] = useState<File[]>([]);
  const categories = useAppSelector((state) => state.projects.categories);
  const dispatch = useAppDispatch();

  const years =
    project?.startedAt && project?.endedAt
      ? `${project.startedAt.split('-')[0]}-${project.endedAt.split('-')[0]}`
      : '';

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleFileInput = () => {
    if (project && filesList.length > 0) {
      dispatch(
        uploadProjectFiles({
          projectId: project.id,
          files: filesList,
        })
      );
    }
  };

  const handleProjectImageUpload = () => {
    if (project && image) {
      dispatch(
        setProjectImage({
          projectId: project.id,
          projectImage: image,
        })
      );
    }
  };

  const handleFile = () => {
    return;
  };

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
        onChange={(e) =>
          setNewProject({ ...newProject, title: e.currentTarget.value })
        }
      />
      <Input
        label="ПЕРИОД РАЗРАБОТКИ"
        placeholder="20xx - 20xx"
        type="text"
        id="project-years"
        name="project-years"
        defaultValue={years}
        onChange={(e) =>
          setNewProject({
            ...newProject,
            startedAt: e.currentTarget.value.split('-')[0] + '-01-01T00:00:00Z',
            endedAt: e.currentTarget.value.split('-')[1] + '-01-01T00:00:00Z',
          })
        } // приведение к апишному виду
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
        onChange={(e) =>
          setNewProject({ ...newProject, description: e.currentTarget.value })
        }
      />

      <p className={classes['sub-title']}>Категория проекта</p>
      {categories && categories.length > 0 ? (
        <div>
          <select
            name="category_id"
            id="category_id"
            onChange={(e) =>
              setNewProject({
                ...newProject,
                category_id: e.currentTarget.value,
              })
            }
          >
            <option disabled selected>
              Выбрать категорию проекта
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id.toString()}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className={classes['warning']}>Категорий еще не было добавлено</p>
      )}

      <p className={classes['sub-title']}>стек технологий</p>
      <div className={classes['buttons-container']}>
        <ProjectFormButton identifier="vue" text={'VUE.JS'} isAction />
        <ProjectFormButton identifier="react" text={'REACT.JS'} isAction />
        <ProjectFormButton identifier="angular" text={'ANGULAR.JS'} isAction />
        <ProjectFormButton identifier="docker" text={'DOCKER'} isAction />
        <ProjectFormButton identifier="figma" text={'FIGMA'} isAction />
        <ProjectFormButton identifier="ts" text={'TYPESCRIPT'} isAction />
        <ProjectFormButton identifier="redux" text={'REDUX'} isAction />
        <ProjectFormButton
          identifier="redux-tk"
          text={'REDUX TOOLKIT'}
          isAction
        />
        <ProjectFormButton identifier="rtk" text={'RTK QUERY'} isAction />
        <ProjectFormButton
          identifier="fsd"
          text={'FSD ARCHITECHTURE'}
          isAction
        />
        <ProjectFormButton identifier="vuetify" text={'VUETIFY'} isAction />
        <ProjectFormButton identifier="psql" text={'POSTGRESQL'} isAction />
        <ProjectFormButton identifier="go" text={'GOLANG'} isAction />
      </div>

      <Input
        label="ссылка на проект"
        placeholder="https://..."
        type="text"
        id="project-link"
        name="project-link"
        defaultValue={project?.link || ''}
        value={newProject?.link}
        onChange={(e) =>
          setNewProject({ ...newProject, link: e.currentTarget.value })
        }
      />
      <>
        <p className={classes['sub-title']}>документы</p>
        <div>
          <FileInput
            onInput={handleFile}
            maxFileQuantity={5}
            maxFileSize={5242880}
            filesList={filesList}
            setFiles={setFiles}
          />
        </div>
      </>
      <>
        <p className={classes['sub-title']}>изображение проекта</p>
        <div>
          <FileInput
            onInput={handleFile}
            maxFileQuantity={1}
            maxFileSize={5242880}
            filesList={filesList}
            setFiles={setImage}
          />
        </div>
      </>
      <div className={classes['buttons-container']}>
        <Button
          onClick={() => {
            handler(newProject as Project);
            handleFileInput();
            handleProjectImageUpload();
          }}
          text={'Сохранить'}
          isAction
        />
      </div>
    </div>
  );
};

export default ProjectForm;
