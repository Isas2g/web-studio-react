import React from 'react';
import classes from './style.module.scss';
import Title from '../../../../shared/ui/Title';
import Subtitle from '../../../../shared/ui/Subtitle';
import List from '../../../../shared/ui/List';

const TeamBlock = () => {
  const team = ['Софья Яблонская', 'Денис Камчатов'];
  return (
    <div className={classes['team-container']}>
      <Title>Команда()</Title>
      <div className={classes['team-subtitle']}>
        <Subtitle>
          Именно эти счастливчики, именно которых мы можете сейчас прочитать,
          принимали участие в разработке проекта
        </Subtitle>
      </div>
      <div className={classes['row']}>
        <div className={classes['left-side']}>
          {team.map((item, index) => (
            <p className={classes['team-items']} key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className={classes['right-side']}>
          <List
            items={[
              '[продакт,',
              'маркетинг,',
              'дизайн,',
              'frontend,',
              'backend]',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamBlock;
