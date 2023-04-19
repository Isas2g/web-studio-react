import ProjectBlock from './widgets/ProjectBlock';
import Application from 'widgets/Application';
import GoalBlock from './widgets/GoalBlock';
import TasksBlock from './widgets/TasksBlock';
import TeamBlock from './widgets/TeamBlock';

const Project = () => {
  return (
    <div className={'container'}>
      <ProjectBlock />
      <GoalBlock />
      <TasksBlock />
      <TeamBlock />
      <Application />
    </div>
  );
};

export default Project;
