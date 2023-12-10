import { Application } from 'widgets/index';
import {
  ValuesBlock,
  BoardBlock,
  HistoryBlock,
  MainAboutBlock,
} from './widgets';

const About = () => {
  return (
    <div className={'about'}>
      <MainAboutBlock />
      <ValuesBlock />
      <BoardBlock />
      <HistoryBlock />
      <Application />
    </div>
  );
};

export default About;
