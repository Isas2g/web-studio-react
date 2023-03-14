import TitleCenter from '../../shared/ui/TitleCenter';
import Header from '../../shared/ui/Header';
import AboutBlock from '../../widgets/AboutBlock';
import AboutWhyUs from '../../widgets/AboutWhyUs';

const About = () => {
  return (
    <main className={'about'}>
      <Header />

      <AboutBlock />
      <AboutWhyUs />
    </main>
  );
};
export default About;
