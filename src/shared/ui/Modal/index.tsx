import React from 'react';
import classes from './style.module.scss';
import Input from '../Input';
import Button from '../Button';

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ active, setActive }: Props) => {
  return (
    <div
      onClick={() => setActive(false)}
      role="presentation"
      className={
        active ? `${classes[`modal`]} ${classes[`active`]}` : classes['modal']
      }
    >
      <div
        className={classes['modal__content']}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes['form-title']}>Заявка на создание проекта</h2>
        <div className={classes['form']}>
          <Input
            id="name"
            label={'ФИО'}
            type={'text'}
            placeholder="ФИО"
            name="name"
          />
          <Input
            id="contacts"
            label={'Контактные данные (Любой предпочительный способ связи)'}
            type={'contacts'}
            placeholder="+79xxxxxxxxx / @example (telegram) / example@example.com"
            name="contacts"
          />
          <Input
            id="goal"
            label={'Цель разработки сайта'}
            type={'goal'}
            placeholder="Онлайн-магазин музыкальных инструментов..."
            name="goal"
          />
          <Input
            id="description"
            label={'Короткое описание ожидаемого функционала сайта'}
            type={'description'}
            placeholder="На сайте можно совершать и оплачивать покупки..."
            name="description"
          />
          <Input
            id="deadlines"
            label={'Требования к времени выполнения задачи (при наличии)'}
            type={'deadlines'}
            placeholder="4 месяца на разработку"
            name="deadlines"
          />
          <Input
            id="technologies"
            label={'Требования к стеку технологий (при наличии)'}
            type={'technologies'}
            placeholder="React, Node.JS + Express..."
            name="technologies"
          />
          <Input
            id="additional"
            label={'Поле для дополнительной информации (при наличии)'}
            type={'additional'}
            placeholder="Поле для дополнительной информации (при наличии)"
            name="additional"
          />
          <Button
            style={{
              padding: 15,
              marginTop: 30,
              width: 250,
              alignSelf: 'center',
            }}
            text="Отправить заявку"
            isAction
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
