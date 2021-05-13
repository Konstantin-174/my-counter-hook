import React from 'react'
import classes from './CounterInput.module.scss'

type CounterInputPropsType = {
    count: number
    maxValue: number
}

const CounterInput: React.FC<CounterInputPropsType> = ({count, maxValue}) => {

    return (
        <div className={`${classes.input} + ${count === maxValue ? classes.error : ""}`}>
            {count}
        </div>
    )
}

export default CounterInput