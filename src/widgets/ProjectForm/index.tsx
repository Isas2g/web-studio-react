import classes from './style.module.scss';
import Input from 'shared/ui/Input';
import Button from 'shared/ui/Button';
import ProjectFormButton from './components/Button';
import Document from './components/Document';

const ProjectForm = () => {
  return (
    <div className={classes['']}>
      <Input
        label="Название проекта"
        placeholder="Название проекта"
        type="text"
        id="project-title"
        name="project-title"
        containerStyle={{ marginBottom: 33 }}
      />
      <Input
        label="ПЕРИОД РАЗРАБОТКИ"
        placeholder="20xx - 20xx"
        type="text"
        id="project-years"
        name="project-years"
        containerStyle={{ marginBottom: 33 }}
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
      />

      <p className={classes['sub-title']}>стек технологий</p>
      <div className={classes['buttons-container']}>
        <ProjectFormButton text={'VUE.JS'} isAction />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'DOCKER'} isAction />
        <ProjectFormButton text={'FIGMA'} isAction />
        <ProjectFormButton text={'VUE.JS'} isAction />
        <ProjectFormButton text={'VUE.JS'} isAction />
        <ProjectFormButton text={'VUE.JS'} isAction />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'VUE.JS'} />
        <ProjectFormButton text={'VUE.JS'} />
      </div>

      <Input
        label="ссылка на проект"
        placeholder="https://..."
        type="text"
        id="project-link"
        name="project-link"
        containerStyle={{ marginBottom: 40 }}
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
        <Button text={'Сохранить'} isAction />
      </div>
    </div>
  );
};

export default ProjectForm;
