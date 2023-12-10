import React from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import Paragraph from 'shared/ui/Paragraph';
import List from 'shared/ui/List';
import { SliderBlock } from 'widgets/';

const ValuesBlock = () => {
  return (
    <div className={'container'}>
      <div className={classes['values-container']}>
        <Title>Принципы_работы()</Title>
        <div className={classes['subtitle']}>
          <Subtitle>
            Мы верим в эти принципы и применяем их на практике, чтобы достичь
            самых высоких результатов.
          </Subtitle>
        </div>
        <SliderBlock 
          menuList={[
            '[наставничество,',
            'пунктуальность,',
            'коммуникация,',
            'результативность]',
          ]}
          textContents={[
            <>
              <Paragraph>
                Мы обеспечиваем рост наших сотрудников, помогаем в обучении и подсказываем,
                какие навыки стоит подтянуть. Для разработчиков проводится код-ревью с полезными рекомендациями,
                для остальных - регулярный чек-ап и встречию.
              </Paragraph>
            </>,
            <>
              <Paragraph>
                Мы стремимся соблюдать сроки, установленные для каждого проекта,
                так как понимаем, насколько важно время для наших клиентов. Мы
                полностью преданы своим обязательствам и всегда держим слово.
              </Paragraph>
            </>,
            <>
              <Paragraph>
                Между командой и заказчиком не возникает проблем в коммуникации,
                т.к. мы на берегу обговариваем способ взаимодействия и строго ему следуем. 
                Заказчик может узнать статус проекта на любой его стадии и посмотреть текущую итерацию
              </Paragraph>
            </>,
            <>
              <Paragraph>
                За получением результата вы можете наблюдать в live режиме. 
                Мы ничего не скрываем и объявляем каждую итерацию проекта.
                Каждый результат по проекту будет вам известен.
              </Paragraph>
            </>,
          ]}
        />
        {/* <div className={classes['row']}>
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
        </div> */}
      </div>
    </div>
  );
};

export default ValuesBlock;
