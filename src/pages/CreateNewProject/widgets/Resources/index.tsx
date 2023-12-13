import classes from './style.module.scss'
import {
    Button
} from 'shared/ui/index'
import {
    Input
} from '../index'

const Resources = () => {
    return (
        <div className={classes['resources']}>
            <div className={classes['resources__image']}></div>

            <div className={classes['resources__upload']}>
                <Button text="Загрузить обложку" isAction={true} />

                <div className={classes["resources__upload-text"]}>
                    <p className={classes["resources__upload-name"]}>photo.png</p>
                    <p className={classes["resources__upload-size"]}>120 KB  / 120 KB</p>
                </div>
            </div>

            <Input style={{ marginTop: 70 }} placeholder='Ссылка на реализованный проект' />
            <Input style={{ marginTop: 25 }} placeholder='Ссылка на github' />
            <Input style={{ marginTop: 25 }} placeholder='Комментарий на память' />

            <Button style={{ width: '100%', marginTop: 100 }} text='Сохранить' />

        </div>
    )
}

export default Resources