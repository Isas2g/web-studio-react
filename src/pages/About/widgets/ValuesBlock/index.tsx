import React from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import Paragraph from 'shared/ui/Paragraph';
import List from 'shared/ui/List';

const ValuesBlock = () => {
  return (
    <div className={'container'}>
      <div className={classes['values-container']}>
        <Title>Принципы_работы()</Title>
        <Subtitle style={{ maxWidth: '1028px', paddingBottom: '112px' }}>
          Мы верим в эти принципы и применяем их на практике, чтобы достичь
          самых высоких результатов.
        </Subtitle>
        <div className={classes['row']}>
          <div className={classes['left-side']}>
            <Paragraph>
              Мы стремимся соблюдать сроки, установленные для каждого проекта,
              так как понимаем, насколько важно время для наших клиентов. Мы
              полностью преданы своим обязательствам и всегда держим слово,{' '}
            </Paragraph>
          </div>
          <div className={classes['right-side']}>
            <List
              items={[
                '[наставничество,',
                'пунктуальность,',
                'коммуникация,',
                'результативность]',
              ]}
            ></List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesBlock;
