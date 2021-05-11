import React from 'react'
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import local from './Counter.module.scss'


const Counter: React.FC = () => {

    return (
        <section className={local.counter}>
            <CounterInput />
            <div className={local.btns}>
                <CounterButton />
                <CounterButton />
            </div>
        </section>
    )
}

export default Counter