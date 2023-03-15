import React from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';

const Footer = () => {
  const socialsStyle = {
    padding: '18px 23px',
    borderRadius: 22,
    margin: '19px 19px 0 0',
  };

  return (
    <div className={`${classes['footer-wrapper']}`}>
      <div className={`${classes['footer-container']} ${'container'}`}>
        <div className={classes['first-block']}>
          <p className={classes['text']}>
            Остались вопросы или предложения? Напишите нам в любое время!
          </p>
          <p className={classes['text-bold']}>aboutweb@gmail.com</p>
          <Button style={socialsStyle} text={'VK'} />
          <Button style={socialsStyle} text={'Telegram'} />
        </div>
        <div className={classes['second-block']}>
          <ul className={classes['list']}>
            <li>Проекты</li>
            <li>История</li>
            <li>О студии</li>
          </ul>
        </div>
        <div className={classes['second-block']}>
          <ul className={classes['list']}>
            <li>Контакты</li>
            <li>Хочу в команду</li>
            <li>Авторизация</li>
          </ul>
        </div>
        <Link to="/" className={classes['logo']}>
          AW
        </Link>
      </div>
    </div>
  );
};

export default Footer;
