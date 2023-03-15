import { MouseEventHandler } from 'react';
import classes from './style.module.scss';

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isAction?: boolean;
  style?: React.CSSProperties;
}

const Button = ({ text, onClick, isAction, style }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={style}
        className={
          isAction ? classes['btn'] + ' ' + classes['active'] : classes['btn']
        }
        title={text}
      ></button>
    </div>
  );
};

export default Button;
