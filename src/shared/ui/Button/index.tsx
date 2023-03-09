import { MouseEventHandler } from 'react';
import './style.scss';

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isAction?: boolean;
  style?: any;
}

const Button = ({ text, onClick, isAction, style }: Props) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={isAction ? 'action-button' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
