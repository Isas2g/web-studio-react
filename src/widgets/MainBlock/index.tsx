import { useState } from 'react';
import HeroTitle from 'shared/ui/HeroTitle';
import classes from './style.module.scss';
import Button from 'shared/ui/Button';
import ModalCommission from '../ModalCommission';
import ModalJoin from '../ModalJoin';

const MainBlock = () => {
  const [activeJoinModal, setActiveJoinModal] = useState(false);
  const [activeCommissionModal, setActiveCommissionModal] = useState(false);

  return (
    <div className={`${classes['block-container']} `}>
      <HeroTitle>
        Разрабатываем сайты от &#123;
        <span className={classes['pink-gradient']}>идеи</span>
        &#125; до &#123;
        <span className={classes['blue-gradient']}>запуска</span>&#125;
      </HeroTitle>
      <p className={classes['main-block-text']}>
        Уникальный дизайн и качественный код от команды студентов Московского
        Политеха
      </p>
      <div className={classes['buttons-container']}>
        <Button
          isAction
          text={'Заказать проект'}
          onClick={() => {
            setActiveCommissionModal(true);
          }}
        />
        <Button
          text={'Хочу в команду!'}
          onClick={() => {
            setActiveJoinModal(true);
          }}
        />
      </div>
      <ModalCommission
        active={activeCommissionModal}
        setActive={setActiveCommissionModal}
      />
      <ModalJoin active={activeJoinModal} setActive={setActiveJoinModal} />
    </div>
  );
};

export default MainBlock;
