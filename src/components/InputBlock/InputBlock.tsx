import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

export const InputBlock: React.FC = () => {

    const setBtn = () => {
        alert("WTF!? Where is my value?")
    }

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input />
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input />
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton title="set" onClick={setBtn}/>
            </div>
        </section>
    )
}

const Input: React.FC = () => {

    return (
        <div className={local.input}>
            <div className={local.dec}
                 tabIndex={0}
                 >-</div>
            <input type="text"
            />
            <div className={local.inc}
                 tabIndex={0}>+</div>
        </div>
    )
}

