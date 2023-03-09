import React from 'react';
import Title from '../../shared/ui/Title';
import './style.scss';
import Paragraph from '../../shared/ui/Paragraph';
import List from 'shared/ui/List';
import Subtitle from '../../shared/ui/Subtitle';

const MainSecondBlock = () => {
  return (
    <div className="second-block-container">
      <div className="text-container">
        <Title>What about &#34;About Web&#34;?</Title>
        <Subtitle>
          Мы представляем сообщество студентов, которые разделяют общую страсть
          к веб-разработке и хотят развиваться в этой области. Совместное
          творчество и обмен знаниями — главные инструменты для достижения наших
          целей.
        </Subtitle>
        <div className="second-part">
          <div className="paragraphs">
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
          <div className="list-container">
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
    </div>
  );
};

export default MainSecondBlock;
