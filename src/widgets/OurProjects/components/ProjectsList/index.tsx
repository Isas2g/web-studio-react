import { Project } from 'entities/Project';
import classes from './style.module.scss';
import ProjectCard from 'entities/Project/components/ProjectCard';
import { useAppSelector } from 'shared/store';

interface Props {
  projects: Project[],
}

const ProjectsList = ({projects}: Props) => {

  return (
    <div className={classes['projects-container']}>
      {projects.map((item, index) => (
        <ProjectCard
          id={item.id}
          key={index}
          title={item.title}
          description={item.description}
          years={`${new Date(item.startedAt).getFullYear()} - ${new Date(
            item.endedAt
          ).getFullYear()}`}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
