import classes from './style.module.scss'
import {
    useState
} from 'react'

import {
    Button,
    Input
} from 'shared/ui/index'

export enum Directions {
    management="Менеджмент",
    frontend="Frontend",
    backend="Backend",
    design="Дизайн",
    marketing="Маркетинг",
    devOps="DevOps",
}

const Teammates = () => {

    const [selectedDirection, setSelectedDirection] = useState<Directions>(Directions.management)

    return (
        <div className={classes['teammates']}>
            <div className={classes["directions"]}>
                {
                    Object.values(Directions).map(direction => {
                        return direction === selectedDirection ? (
                            <div 
                                key={direction} 
                                className={classes["direction"] + ' ' + classes["direction--active"]}
                            >
                                {direction}
                            </div>
                        ) : (
                            <div 
                                key={direction} 
                                className={classes["direction"]}
                                role='presentation'
                                onClick={() => setSelectedDirection(direction)}
                            >
                                {direction}
                            </div>
                        )
                    })
                }
            </div>
            
            <div className={classes['checkboxes']}>
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />
                <Input
                    type={'checkbox'}
                    id="frontend"
                    name="frontend"
                    value={'Frontend-разработка'}
                />

            </div>

            <Button style={{ width: '100%', marginTop: 84 }} text='Сохранить' />

            <p className={classes['teammates__footer-text']}>Не нашли нужного члена команды?</p>
            <Button style={{ width: '100%', marginTop: 25 }} text='Добавить нового участника' />
        </div>
    )
}

export default Teammates