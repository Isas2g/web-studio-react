import { MouseEventHandler } from 'react';
import './style.scss';

interface Props {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ text, onClick = undefined }: Props) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
