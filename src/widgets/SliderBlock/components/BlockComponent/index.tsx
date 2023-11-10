import { ReactElement, useState } from 'react';
import SlideMenu from '../SlideMenu';
import TextContent from '../TextContent';
import classes from './style.module.scss';
import Paragraph from 'shared/ui/Paragraph';

interface Props {
  menuList: string[],
  textContents: ReactElement[],
}

export default function BlockComponent({
  menuList,
  textContents
}: Props) {

  const [activeIndex, setActiveIndex] = useState(0);
  
  return <div className={classes['block']}>
    <div className={classes['second-part']}>
      <div className={classes['paragraphs']}>
        {
          textContents[activeIndex]
        }
      </div>
    </div>
    <div className={classes['list-container']}>
      {
        menuList.map(
          (item, index) => <div
            key={item} 
            className={classes['list-container1']}
            onMouseOver={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <h5 className={
              index === activeIndex 
                ? classes['text-active'] 
                : classes['text']
            }>{item}</h5>
          </div>
        )
      }
    </div>
  </div>
};