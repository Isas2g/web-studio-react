import React from 'react';
import classes from './style.module.scss';
import Title from '../../../../shared/ui/Title';
import Subtitle from '../../../../shared/ui/Subtitle';
import List from '../../../../shared/ui/List';
import { SliderBlock } from 'widgets/';

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
      <SliderBlock 
        menuList={[
          '[продакт,',
          'маркетинг,',
          'дизайн,',
          'frontend,',
          'backend]',
        ]}
        textContents={[
          <>
            <p className={classes['team-items']}>
              Продакт менеджер раз
            </p>
            <p className={classes['team-items']}>
              Продакт менеджер два
            </p>
          </>,
          <>
            <p className={classes['team-items']}>
              Маркетолог раз
            </p>
            <p className={classes['team-items']}>
              Маркетолог два
            </p>
          </>,
          <>
            <p className={classes['team-items']}>
              Дизайнер раз
            </p>
            <p className={classes['team-items']}>
              Дизайнер два
            </p>
          </>,
          <>
            <p className={classes['team-items']}>
              Фронтендер раз
            </p>
            <p className={classes['team-items']}>
              Фронтендер два
            </p>
          </>,
          <>
            <p className={classes['team-items']}>
              Бэкендер раз
            </p>
            <p className={classes['team-items']}>
              Бэкендер два
            </p>
          </>,
        ]}
      />
      {/* <div className={classes['row']}>
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
      </div> */}
    </div>
  );
};

export default TeamBlock;
