import React, { useState } from 'react';
import classes from '../../shared/ui/Modal/style.module.scss';
import Input from '../../shared/ui/Input';
import Button from '../../shared/ui/Button';

const ModalJoin = () => {
  return (
    <div>
      <h2 className={classes['form-title']}>
        Заявка на присоединение в команду
      </h2>
      <form className={classes['form']}>
        <Input
          id="name"
          label={'ФИО'}
          type={'text'}
          placeholder="ФИО"
          name="name"
        />
        <Input
          id="state"
          label={
            'Обучаешься ли ты в Московском Политехе? Если да, укажи номер группы'
          }
          type={'state'}
          placeholder="201-72X"
          name="state"
        />
        <Input
          id="tg"
          label={'Telegram'}
          type={'tg'}
          placeholder="@example (telegram)"
          name="tg"
        />
        <Input
          id="exp"
          label={
            'Расскажи о своем опыте веб-разработки, участия в хакатонах, других проектах - все, что посчитаешь нужным'
          }
          type={'exp'}
          placeholder="В качестве курсовой работы в прошлом семестре я делал веб-сайт... с использованием технологий..."
          name="exp"
          isMultiline
        />
        <Input
          id="technologies"
          label={
            'Опиши свой предпочитаемый стек технологий (стек, который уже использовал в работе или который готов изучать в течение семестра параллельно с интенсивной работой над проектом)'
          }
          type={'technologies'}
          placeholder="React"
          name="technologies"
        />
        <div className={classes['role-checkbox']}>
          <p
            className={classes['checkbox-title']}
            style={{ marginTop: 33, marginBottom: 10 }}
          >
            Какую роль готов на себя взять?
          </p>
          <Input
            type={'checkbox'}
            id="frontend"
            name="frontend"
            value={'Frontend-разработка'}
          />
          <Input
            type={'checkbox'}
            id="backend"
            name="backend"
            value={'Backend-разработка'}
          />
          <Input type={'checkbox'} id="design" name="design" value={'Дизайн'} />
          <Input
            type={'checkbox'}
            id="manager"
            name="manager"
            value={'Менеджмент'}
          />
          <Input type={'checkbox'} id="devops" name="devops" value={'DevOps'} />
          <Input
            type={'checkbox'}
            id="marketing"
            name="marketing"
            value={'Маркетинг'}
          />
        </div>
        {/*<div className={classes['marketing-radio']}>*/}
        {/*  <p*/}
        {/*    className={classes['checkbox-title']}*/}
        {/*    style={{ marginTop: 33, marginBottom: 10 }}*/}
        {/*  >*/}
        {/*    Готов ли заниматься маркетингом помимо основных обязанностей?*/}
        {/*  </p>*/}
        {/*  <Input type="radio" id="ratio_1" name="pos" value="Да" />*/}
        {/*</div>*/}
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
      </form>
    </div>
  );
};

export default ModalJoin;
