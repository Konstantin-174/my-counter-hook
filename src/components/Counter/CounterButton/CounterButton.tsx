import React from 'react'
import classes from './CounterButton.module.scss'

type CounterButtonPropsType = {
    title: string
    disabled?: boolean
    onClick: () => void
}

const CounterButton: React.FC<CounterButtonPropsType> = ({title, onClick, disabled}) => {

    return (
        <button className={classes.btn}
                onClick={onClick}
                disabled={disabled}
        >
            {title}
        </button>
    )
}

export default CounterButton