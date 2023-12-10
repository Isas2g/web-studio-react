import React, { useState } from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';
import Modal from '../Modal';
import ModalJoin from '../../../widgets/ModalJoin';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(false);

  const socialsStyle = {
    padding: '18px 23px',
    borderRadius: 22,
    margin: '19px 19px 0 0',
  };

  const footerMenu = [
    {
      text: 'Проекты',
      link: '/projects',
    },
    {
      text: 'О студии',
      link: '/about',
    },
    // {
    //   text: 'История',
    //   link: '',
    // },
  ];

  const footerSecondMenu = [
    {
      text: 'Контакты',
      link: 'https://vk.com/aboutweb',
      target: '__blank'
    },
    {
      text: 'Авторизация',
      link: '/auth',
    },
  ];

  return (
    <div className={`${classes['footer-wrapper']}`}>
      <div className={`${classes['footer-container']} ${'container'}`}>
        <div className={classes['first-block']}>
          <p className={classes['text']}>
            Остались вопросы или предложения? Напишите нам в любое время!
          </p>
          <p className={classes['text-bold']}>aboutweb@gmail.com</p>
          <div className={classes['btn-container']}>
            <Link to={'https://vk.com/aboutweb'} className={classes['lnk']} target='__blank'>
              <Button style={socialsStyle} text={'VK'} />
            </Link>
            <Link to={''} className={classes['lnk']}>
              <Button style={socialsStyle} text={'Telegram'} />
            </Link>
          </div>
        </div>
        <div className={classes['second-block']}>
          <ul className={classes['list']}>
            {footerMenu.map((item) => {
              return (
                <li key={item.text}>
                  <Link
                    to={item.link}
                    style={{ color: '#D8D8E3', margin: '0' }}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes['third-block']}>
          <ul className={classes['list']}>
            {footerSecondMenu.map((item) => {
              return (
                <li key={item.text}>
                  <Link
                    to={item.link}
                    style={{ color: '#D8D8E3', margin: '0' }}
                    target={item.target}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className={classes['join']}
            onClick={() => setActiveModal(true)}
          >
            Хочу в команду
          </button>
        </div>
        <Link to="/" className={classes['logo']}>
          AW
        </Link>
      </div>
      <ModalJoin active={activeModal} setActive={setActiveModal} />
    </div>
  );
};

export default Footer;
