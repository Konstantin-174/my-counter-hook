import React, {useState} from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss';

type CounterPropsType = {
    displayValue: number
    maxValue: number
}

const Counter: React.FC<CounterPropsType> = ({displayValue, maxValue}) => {

    let [count, setCount] = useState<number>(displayValue)

    const incCount = () => setCount(count + 1)

    const resetCount = () => {
         if (count > displayValue) {
             setCount(count = displayValue)
         }
    }

    return (
        <section className={local.counter}>
            <CounterInput maxValue={maxValue}
                          count={count}
            />
            <div className={local.btns}>
                <CounterButton title="inc"
                               onClick={incCount}
                               disabled={count >= maxValue}
                />
                <CounterButton title="reset"
                               onClick={resetCount}
                               disabled={count === displayValue}
                />
            </div>
        </section>
    )
}

export default Counter