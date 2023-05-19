import React from 'react';
import classes from './style.module.scss';
import Title from 'shared/ui/Title';
import Subtitle from 'shared/ui/Subtitle';
import Paragraph from 'shared/ui/Paragraph';

//TODO: исправить padding после Subtitle на 30 вместо 40 в мобильной версии

const TasksBlock = () => {
  return (
    <div className={classes['tasks-container']}>
      <Title>задачи()</Title>
      <div className={classes['first-row']}>
        <Subtitle style={{ padding: '0 0 40px 0' }}>
          Анализ предметной области и проведение исследований
        </Subtitle>
        <Paragraph>
          Необходимо понять, какой тип сайта необходим клиенту, какие функции
          должны быть реализованы, какой дизайн должен быть использован, и какие
          технологии должны быть использованы для создания сайта.
        </Paragraph>
      </div>
      <div className={classes['second-row']}>
        <Subtitle style={{ padding: '0 0 40px 0' }}>
          Создание нового стиля визуальных коммуникация и их адаптация
        </Subtitle>
        <Paragraph>
          После определения требований клиента, необходимо создать дизайн сайта,
          который будет соответствовать требованиям клиента и будущим
          потребностям его целевой аудитории. Дизайн должен быть удобным для
          использования и соответствовать последним трендам в веб-дизайне.
        </Paragraph>
      </div>
      <div className={classes['third-row']}>
        <Subtitle style={{ padding: '0 0 40px 0' }}>
          Много часов работы по верстке и кодингу бэкэнд-части, и что-то еще
        </Subtitle>
        <Paragraph>
          После того, как дизайн сайта будет утвержден клиентом, необходимо
          приступить к его разработке и тестированию. Важно убедиться, что сайт
          функционирует корректно и отображается правильно на разных устройствах
          и браузерах.
        </Paragraph>
      </div>
    </div>
  );
};

export default TasksBlock;
