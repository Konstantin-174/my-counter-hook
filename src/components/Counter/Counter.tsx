import React, {useState} from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss'


const Counter: React.FC = () => {

    let [count, setCount] = useState<number>(0)

    const incCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        if (count > 0) {
            setCount(0)
        }
    }

    return (
        <section className={local.counter}>
            <CounterInput count={count}/>
            <div className={local.btns}>
                <CounterButton title="inc"
                               onClick={incCount}
                               disabled={count >= 5}
                />
                <CounterButton title="reset"
                               onClick={resetCount}
                               disabled={count === 0}
                />
            </div>
        </section>
    )
}

export default Counter