import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import {InputBlock} from './components/InputBlock/InputBlock';


const App: React.FC = () => {
    return (
        <div className="App">
            <InputBlock />
            <Counter />
        </div>
    );
}

export default App;
