import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';

const App = () => {

    let [displayValue, setDisplayValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)

    const maxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = +e.currentTarget.value
        setMaxValue(maxValue)
    }
    const startInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValue = +e.currentTarget.value
        setStartValue(startValue)
    }

    const incCount = () => {
        setDisplayValue(displayValue + 1)
    }

    const resetCount = () => {
        if(displayValue > startValue) {
            setDisplayValue(displayValue = startValue)
        }
    }

    return (
        <div className="App">
            <InputBlock setDisplayValue={setDisplayValue}
                        startValue={startValue}
                        maxInputChangeHandler={maxInputChangeHandler}
                        startInputChangeHandler={startInputChangeHandler}
            />
            <Counter incCount={incCount}
                     displayValue={displayValue}
                     resetCount={resetCount}/>
        </div>
    );
}

export default App;
