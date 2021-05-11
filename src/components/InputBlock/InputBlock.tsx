import local from './InputBlock.module.scss';
import React, {useState} from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

export const InputBlock: React.FC = () => {

    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)

    const decMaxValue = () => {
        setMaxValue(maxValue - 1)
    }

    const incMaxValue = () => {
        setMaxValue(maxValue + 1)
    }

    const decStartValue = () => {
        setStartValue(startValue - 1)
    }

    const incStartValue = () => {
        setStartValue(startValue + 1)
    }

    const setBtn = () => {
        alert('WTF!? Where is my value?')
    }

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
                <CounterButton title="set" onClick={setBtn}/>
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
            <input type="text" value={value}
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

