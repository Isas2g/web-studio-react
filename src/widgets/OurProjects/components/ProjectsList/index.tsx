import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';
import { useAppSelector } from 'shared/store';

const ProjectsList = () => {
  const projects = useAppSelector((state) => state.projects.value);

  return (
    <div className={classes['projects-container']}>
      {/* <ProjectCard
        isProjectsPage
        title={'About Web'}
        years={'2020 — 2021'}
        description={
          'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
        }
      />
      <ProjectCard
        isProjectsPage
        title={'About Web'}
        years={'2020 — 2021'}
        description={
          'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
        }
      />
      <ProjectCard
        isProjectsPage
        title={'About Web'}
        years={'2020 — 2021'}
        description={
          'Информационный портал для заказчиков и сотрудников веб-студии. Вы сейчас здесь.'
        }
      /> */}
      {projects.map((item, index) => (
        <ProjectCard
          id={item.id}
          key={index}
          title={item.title}
          description={item.description}
          years={`${new Date(item.startedAt).getFullYear()} - ${new Date(
            item.endedAt
          ).getFullYear()}`}
          isProjectsPage
        />
      ))}
    </div>
  );
};

export default ProjectsList;
