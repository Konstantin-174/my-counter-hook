import local from './InputBlock.module.scss';
import React from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

type InputBlockPropsType = {
    maxValue: number
    decMaxValue: () => void
    incMaxValue: () => void
    startValue: number
    decStartValue: () => void
    incStartValue: () => void
    setDisplayValue: (value: number) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({maxValue,
                                                              decMaxValue,
                                                              incMaxValue,
                                                              startValue,
                                                              decStartValue,
                                                              incStartValue,
                                                              setDisplayValue}) => {

    const setBtn = () => setDisplayValue(startValue)

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input value={maxValue}
                           decValue={decMaxValue}
                           incValue={incMaxValue}
                    />
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input value={startValue}
                           decValue={decStartValue}
                           incValue={incStartValue}
                    />
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton title="set"
                               onClick={setBtn}
                />
            </div>
        </section>
    )
}

type InputPropsType = {
    value: number
    incValue: () => void
    decValue: () => void
}

const Input: React.FC<InputPropsType> = ({value, incValue, decValue}) => {

    return (
        <div className={local.input}>
            <div className={local.dec}
                 tabIndex={0}
                 onClick={decValue}
            >
                -
            </div>
            <input value={value}
            />
            <div className={local.inc}
                 tabIndex={0}
                 onClick={incValue}
            >
                +
            </div>
        </div>
    )
}

