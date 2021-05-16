import React from 'react'
import classes from './CounterInput.module.scss'

type CounterInputPropsType = {
    count: number
}

const CounterInput: React.FC<CounterInputPropsType> = ({count}) => {

    return (
        <div className={`${classes.input} + ${count === 5 ? classes.error : ""}`}>
            {count}
        </div>
    )
}

export default CounterInput