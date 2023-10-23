import React from 'react';
import Title from 'shared/ui/Title';
import classes from './style.module.scss';
import Paragraph from 'shared/ui/Paragraph';
import List from 'shared/ui/List';
import Subtitle from 'shared/ui/Subtitle';
import { SliderBlock } from 'widgets/';

const MainSecondBlock = () => {
  return (
    <div className={`${classes['block-container']} container`}>
      <div className={classes['text-container']}>
        <Title>What about &#34;About Web&#34;?</Title>
        <Subtitle>
          Мы представляем сообщество студентов, которые разделяют общую страсть
          к веб-разработке и хотят развиваться в этой области. Совместное
          творчество и обмен знаниями — главные инструменты для достижения наших
          целей.
        </Subtitle>
      </div>
      <SliderBlock
        menuList={['[исследуем,', 'проектируем,', 'разрабатываем,', 'тестируем,', 'запускаем]']}
        textContents={[
          <>
            <Paragraph>
              исследуем структуру сайта, определяем дизайн и внешний вид,
              выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <Paragraph>
              Мы также планируем интерфейсы и определяем, какие элементы будут
              находиться на каждой странице.
            </Paragraph>
          </>,
          <>
            <Paragraph>
                Проектируем структуру сайта, определяем дизайн и внешний вид,
                выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <Paragraph>
                Мы также планируем интерфейсы и определяем, какие элементы будут
                находиться на каждой странице.
            </Paragraph>
          </>,
          <>
            <Paragraph>
                разрабатываем структуру сайта, определяем дизайн и внешний вид,
                выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <Paragraph>
                Мы также планируем интерфейсы и определяем, какие элементы будут
                находиться на каждой странице.
            </Paragraph>
          </>,
          <>
            <Paragraph>
                тестируем структуру сайта, определяем дизайн и внешний вид,
                выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <Paragraph>
                Мы также планируем интерфейсы и определяем, какие элементы будут
                находиться на каждой странице.
            </Paragraph>
          </>,
          <>
            <Paragraph>
                запускаем структуру сайта, определяем дизайн и внешний вид,
                выбираем цветовую гамму и разрабатываем логотип.
            </Paragraph>
            <Paragraph>
                Мы также планируем интерфейсы и определяем, какие элементы будут
                находиться на каждой странице.
            </Paragraph>
          </>,
        ]}
      />
    </div>
  );
};

export default MainSecondBlock;
