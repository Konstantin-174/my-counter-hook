import local from './InputBlock.module.scss';
import React, {ChangeEvent} from 'react';
import CounterButton from '../Counter/CounterButton/CounterButton';

type InputBlockPropsType = {

    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputBlock: React.FC<InputBlockPropsType> = ({
                                                              changeHandler
                                                          }) => {

    const setBtn = () => {
        alert('WTF!?')
    }

    return (
        <section className={local.inputBlockWrap}>
            <div className={local.inputArea}>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        max value
                    </div>
                    <Input changeHandler={changeHandler}
                    />
                </div>
                <div className={local.inputItem}>
                    <div className={local.inputTitle}>
                        start value
                    </div>
                    <Input changeHandler={changeHandler}
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

