import { 
  MainBlock,
  MainSecondBlock,
  MainProjects,
  MainTechnologies,
  Application,
} from 'widgets/index';
import classes from './style.module.scss';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage3 from 'shared/assets/icons/floating-image-3.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';

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
