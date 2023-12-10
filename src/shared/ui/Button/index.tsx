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
    <button
      style={style}
      onClick={onClick}
      className={isAction ? classes['action-button'] : classes['button']}
    >
      {text}
    </button>
  );
};

export default Button;
