import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';

const App: React.FC = () => {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    let [displayStartValue, setDisplayStartValue] = useState<number>(startValue)

    const decMaxValue = () => setMaxValue(maxValue - 1)
    const incMaxValue = () => setMaxValue(maxValue + 1)
    const decStartValue = () => setStartValue(startValue - 1)
    const incStartValue = () => setStartValue(startValue + 1)

    return (
        <div className="App">
            <InputBlock maxValue={maxValue}
                        decMaxValue={decMaxValue}
                        incMaxValue={incMaxValue}
                        startValue={startValue}
                        decStartValue={decStartValue}
                        incStartValue={incStartValue}
                        setDisplayValue={setDisplayStartValue}
            />
            <Counter displayValue={displayStartValue}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;
