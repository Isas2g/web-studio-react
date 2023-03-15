import classes from './style.module.scss';
import crossIcon from 'shared/assets/icons/cross.svg';

interface Props {
  title: string;
}

const Document = ({ title }: Props) => {
  return (
    <div className={classes['doc-container']}>
      <div className={classes['doc-inner']}>
        {title} <img width={27} src={crossIcon} alt="cross-btn" />
      </div>
    </div>
  );
};

export default Document;
