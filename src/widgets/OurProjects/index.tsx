import classes from './style.module.scss';
import floatingImage from 'shared/assets/icons/floating-image-2.svg';
import ProjectsList from './components/ProjectsList';
import { Project } from 'entities/Project';

interface Props {
  projects: Project[];
}

const OurProjects = ({ projects }: Props) => {
  return (
    <div className={`${classes['our-projects']} container`}>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default OurProjects;
