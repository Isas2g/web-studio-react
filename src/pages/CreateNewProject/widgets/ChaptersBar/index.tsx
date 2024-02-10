import classes from './style.module.scss'
import {
    Chapters
} from '../../index'
interface Props {
    selectedChapter: Chapters,
    setSelectedChapter: any
}

const ChaptersBar = ({
    selectedChapter,
    setSelectedChapter
}: Props) => {
    const chapters = Object.values(Chapters)
    return (
        <ul className={classes['left-bar']}>
            {
                Object.values(Chapters).map(chapter => {
                    return chapter === selectedChapter ? (
                        <li 
                            key={chapter} 
                            className={classes['chapter'] + ' ' + classes['chapter--active']}
                        >
                            {chapter}
                        </li>
                    ) : (
                        <li 
                            key={chapter} 
                            className={classes['chapter']}
                            role='presentation'
                            onClick={() => setSelectedChapter(chapter)}
                        >
                            {chapter}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ChaptersBar