import React from 'react';
import Title from '../../shared/ui/Title';
import './style.scss';
import Paragraph from '../../shared/ui/Paragraph';
import ListItems from '../../shared/ui/ListItems';

const MainSecondBlock = () => {
  return (
    <div className="second-block-container">
      <div className="text-container">
        <Title>What about &#34;About Web&#34;?</Title>
        <Paragraph>
          Мы представляем сообщество студентов, которые разделяют общую страсть
          к веб-разработке и хотят развиваться в этой области. Совместное
          творчество и обмен знаниями — главные инструменты для достижения наших
          целей.
        </Paragraph>
        <div className="second-part">
          <p className="subtitle">
            Проектируем структуру сайта, определяем дизайн и внешний вид,
            выбираем цветовую гамму и разрабатываем логотип.
            <br />
            <br />
            Мы также планируем интерфейсы и определяем, какие элементы будут
            находиться на каждой странице.
          </p>
          <div className="list-container">
            <ListItems>[исследуем, </ListItems>
            <ListItems isActive>проектируем, </ListItems>
            <ListItems>разрабатываем, </ListItems>
            <ListItems>тестируем, </ListItems>
            <ListItems>запускаем] </ListItems>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSecondBlock;
