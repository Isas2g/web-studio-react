import React from 'react';
import Title from 'shared/ui/Title';
import classes from './style.module.scss';
import Paragraph from 'shared/ui/Paragraph';
import List from 'shared/ui/List';
import Subtitle from 'shared/ui/Subtitle';

const MainSecondBlock = () => {
  return (
    <div className={'container'}>
      <div className={classes['text-container']}>
        <Title>What about &#34;About Web&#34;?</Title>
        <Subtitle>
          Мы представляем сообщество студентов, которые разделяют общую страсть
          к веб-разработке и хотят развиваться в этой области. Совместное
          творчество и обмен знаниями — главные инструменты для достижения наших
          целей.
        </Subtitle>
      </div>
      <div className={classes['block']}>
        <div className={classes['second-part']}>
          <div className={classes['paragraphs']}>
            <Paragraph>
              Проектируем структуру сайта, определяем дизайн и внешний вид,
              выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <div></div>
            <Paragraph>
              Мы также планируем интерфейсы и определяем, какие элементы будут
              находиться на каждой странице.
            </Paragraph>
          </div>
        </div>
        <div className={classes['list-container']}>
          <List
            items={[
              '[исследуем,',
              'проектируем,',
              'разрабатываем,',
              'тестируем,',
              'запускаем]',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSecondBlock;
