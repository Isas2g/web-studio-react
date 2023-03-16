import AboutBlock from 'widgets/AboutBlock';
import AboutWhyUs from 'widgets/AboutWhyUs';
import MainSecondBlock from 'widgets/MainSecondBlock';
import Application from 'widgets/Application';

const About = () => {
  return (
    <main className={'about'}>
      <AboutBlock />
      <AboutWhyUs />
      <MainSecondBlock />
      <Application />
    </main>
  );
};
export default About;
