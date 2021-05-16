import React from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss';

type CounterPropsType = {
    displayValue: number
    incCount: () => void
    resetCount: () => void
}

const Counter: React.FC<CounterPropsType> = ({
                                                 displayValue,
                                                 incCount,
                                                 resetCount
}) => {

    return (
        <section className={local.counter}>
            <CounterInput count={displayValue}
            />
            <div className={local.btns}>
                <CounterButton title="inc"
                               onClick={incCount}
                               disabled={displayValue >= 5}
                />
                <CounterButton title="reset"
                               onClick={resetCount}
                               disabled={displayValue === 0}
                />
            </div>
        </section>
    )
}

export default Counter