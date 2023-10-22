import { MouseEventHandler } from 'react';
import classes from './style.module.scss';

interface Props {
  text: string;
  identifier: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isAction?: boolean;
  style?: React.CSSProperties;
}

const Button = (props: Props) => {
  const id = props.identifier
  return (
    <label className={classes['check-button']} htmlFor={id}>
      <input type="checkbox" className={classes['input-element']} value={props.text} id={id} name={id} />
      <div className={classes['gradient-wrapper']}>
        <span className={classes['check-text']}>{props.text}</span>
      </div>
    </label>
  );
};

export default Button;
