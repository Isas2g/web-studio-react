import classes from './style.module.scss'

interface Props {
    placeholder?: string,
    initalValue?: string,
    style?: any
}

const Input = ({
    placeholder,
    initalValue,
    style
}: Props) => {
    return (
        <input 
            className={classes['input']} 
            placeholder={placeholder} 
            value={initalValue} 
            type="text" 
            style={style}
        />
    )
}

export default Input