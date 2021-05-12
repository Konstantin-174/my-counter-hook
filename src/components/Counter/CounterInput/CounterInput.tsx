import React from 'react'
import classes from './CounterInput.module.scss'
import {CountStateType} from '../Counter';

type CounterInputPropsType = {
    count: CountStateType
}

const CounterInput: React.FC<CounterInputPropsType> = ({count}) => {

    return (
        <div className={`${classes.input} + ${count.count === 5 ? classes.error : ""}`}>
            {count.count}
        </div>
    )
}

export default CounterInput