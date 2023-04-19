import React from 'react';
import classes from './style.module.scss';
import HeroTitle from 'shared/ui/HeroTitle';
import Paragraph from 'shared/ui/Paragraph';

//TODO: исправить br в HeroTitle

const ProjectsMain = () => {
  return (
    <div className={`${classes['projects-main']} container`}>
      <HeroTitle>
        &#123;
        <span className={classes['pink-color']}>Познакомьтесь</span>
        &#125; <br />с проектами студии
      </HeroTitle>
      <Paragraph>
        Узнайте о нашем опыте и качестве работ через наши проекты
      </Paragraph>
    </div>
  );
};

export default ProjectsMain;
