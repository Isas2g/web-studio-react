import Header from 'shared/ui/Header';
import MainBlock from 'widgets/MainBlock';
import classes from './style.module.scss';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage3 from 'shared/assets/icons/floating-image-3.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';
import MainSecondBlock from 'widgets/MainSecondBlock';
import MainProjects from 'widgets/MainProjects';
import MainTechnologies from 'widgets/MainTechnologies';
import Application from 'widgets/Application';

const Main = () => {
  return (
    <div className={classes['main-page-container']}>
      <img
        alt=""
        src={floatingImage1}
        className={classes['floating-image-1']}
      />
      <img
        alt=""
        src={floatingImage2}
        className={classes['floating-image-2']}
      />
      <img
        alt=""
        src={floatingImage3}
        className={classes['floating-image-3']}
      />
      <img
        alt=""
        src={floatingImage4}
        className={classes['floating-image-4']}
      />
      <MainBlock />
      <MainSecondBlock />
      <MainProjects />
      <MainTechnologies />
      <Application />
    </div>
  );
};

export default Main;
