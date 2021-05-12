import React, {useState} from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss'


export type CountStateType = typeof countState
const countState = {count: 0}

const Counter: React.FC = () => {

    let [count, setCount] = useState<CountStateType>(countState)

    const incCount = () => {
        let newCount = count.count + 1
        setCount({...countState, count: newCount})
    }

    const resetCount = () => {
        if (count.count > 0) {
            setCount({...countState, count: 0})
        }
    }

    return (
        <section className={local.counter}>
            <CounterInput count={count}/>
            <div className={local.btns}>
                <CounterButton title="inc"
                               onClick={incCount}
                               disabled={count.count >= 5}
                />
                <CounterButton title="reset"
                               onClick={resetCount}
                               disabled={count.count === 0}
                />
            </div>
        </section>
    )
}

export default Counter