import Header from 'shared/ui/Header';
import MainBlock from '../../widgets/MainBlock';
import './style.scss';
import floatingImage1 from 'shared/assets/icons/floating-image-1.svg';
import floatingImage2 from 'shared/assets/icons/floating-image-2.svg';
import floatingImage3 from 'shared/assets/icons/floating-image-3.svg';
import floatingImage4 from 'shared/assets/icons/floating-image-4.svg';
import MainSecondBlock from '../../widgets/MainSecondBlock';

import MainProjects from '../../widgets/MainProjects';

const Main = () => {
  return (
    <div className="main-page-container">
      <img alt="" src={floatingImage1} className="floating-image-1" />
      <img alt="" src={floatingImage2} className="floating-image-2" />
      <img alt="" src={floatingImage3} className="floating-image-3" />
      <img alt="" src={floatingImage4} className="floating-image-4" />
      <Header />
      <MainBlock />
      <MainSecondBlock />

      <MainProjects />
    </div>
  );
};

export default Main;
