import local from './InputBlock.module.scss';
import React, {ChangeEvent, useState} from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

export const InputBlock: React.FC = () => {

    const maxValueState = {maxValue: 0}
    type MaxValueStateType = typeof maxValueState

    const startValueState = {startValue: 0}
    type StartValueStateType = typeof startValueState

    let [maxValue, setMaxValue] = useState<MaxValueStateType>(maxValueState)
    let [startValue, setStartValue] = useState<StartValueStateType>(startValueState)


    const decMaxValue = () => {
        let newMaxValue = maxValue.maxValue - 1
        setMaxValue({...maxValueState, maxValue: newMaxValue})
    }

    const incMaxValue = () => {
        let newMaxValue = maxValue.maxValue + 1
        setMaxValue({...maxValueState, maxValue: newMaxValue})
    }

    const decStartValue = () => {
        let newStartValue = startValue.startValue - 1
        setStartValue({...startValueState, startValue: newStartValue})
    }

    const incStartValue = () => {
        let newStartValue = startValue.startValue + 1
        setStartValue({...startValueState, startValue: newStartValue})
    }

    const newMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

    }

    const newStartValue = (e: ChangeEvent<HTMLInputElement>) => {

    }

    const setBtn = () => {
        alert("WTF!?")
    }

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input value={maxValue.maxValue}
                           decValue={decMaxValue} onChangeValue={newMaxValue}
                           incValue={incMaxValue}
                    />
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input value={startValue.startValue}
                           decValue={decStartValue} onChangeValue={newStartValue}
                           incValue={incStartValue}
                    />
                </div>
            </div>
            <div className={local.btn}>
                <CounterButton title="set" onClick={setBtn}/>
            </div>
        </section>
    )
}

type InputPropsType = {
    value: number
    incValue: () => void
    decValue: () => void
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputPropsType> = ({value, incValue, decValue, onChangeValue}) => {

    return (
        <div className={local.input}>
            <div className={local.dec}
                 tabIndex={0}
                 onClick={decValue}
            >
                -
            </div>
            <input value={value}
                   onChange={onChangeValue}
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

