import local from './InputBlock.module.scss';
import React, {ChangeEvent} from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

type InputBlockPropsType = {
    setDisplayValue: (value: number) => void
    maxInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startInputChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startValue: number
}

export const InputBlock: React.FC<InputBlockPropsType> = ({
                                                              setDisplayValue,
                                                              maxInputChangeHandler,
                                                              startInputChangeHandler,
                                                              startValue
                                                          }) => {

    const setBtn = () => setDisplayValue(startValue)

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input changeHandler={maxInputChangeHandler}
                    />
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input changeHandler={startInputChangeHandler}
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
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputPropsType> = ({changeHandler}) => {

    return (
        <div className={local.input}>
            <input type="number"
                   placeholder="Your value"
                   onChange={changeHandler}
            />
        </div>
    )
}

