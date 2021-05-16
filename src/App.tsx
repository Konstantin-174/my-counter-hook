import React, {ChangeEvent} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';

const App = () => {

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.value

    return (
        <div className="App">
            <InputBlock changeHandler={inputChangeHandler}/>
            <Counter/>
        </div>
    );
}

export default App;
