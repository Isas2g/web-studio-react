import ValuesBlock from './widgets/ValuesBlock';
import Application from 'widgets/Application';
import BoardBlock from './widgets/BoardBlock';
import HistoryBlock from './widgets/HistoryBlock';
import MainAboutBlock from './widgets/MainAboutBlock';

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
