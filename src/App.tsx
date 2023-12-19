import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";

function App() {
    // State
    const localStorageStartValue = localStorage.getItem('startValue');
    const counterStartValue = localStorageStartValue ? JSON.parse(localStorageStartValue) : 0;

    const localStorageMaxValue = localStorage.getItem('maxValue');
    const counterMaxValue = localStorageMaxValue ? JSON.parse(localStorageMaxValue) : 5;

    const [startInputValue, setStartInputValue] = useState(counterStartValue);
    const [maxInputValue, setMaxInputValue] = useState(counterMaxValue);

    const [count, setCount] = useState(startInputValue);
    const [maxValue, setMaxValue] = useState(maxInputValue);

    // Validations
    const [startInputError, setStartInputError] = useState(false);
    const [maxInputError, setMaxInputError] = useState(false);
    const [setterChange, setSetterChange] = useState(false);

    // Logic
    const updateCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(startInputValue);
    };
    const onStartValueInputChange = (value: number) => {
        value < 0 || value >= maxInputValue ? setStartInputError(true) : setStartInputError(false);
        value >= maxInputValue ? setMaxInputError(true) : setMaxInputError(false);
        setStartInputValue(value);
        setSetterChange(value !== count);
    }
    const onMaxValueInputChange = (value: number) => {
        startInputValue >= value ? setMaxInputError(true) : setMaxInputError(false);
        value <= startInputValue ? setStartInputError(true) : setStartInputError(false);
        setMaxInputValue(value);
        setSetterChange(value !== maxValue);
    }
    const setOptions = () => {
        setCount(startInputValue);
        setMaxValue(maxInputValue);
        localStorage.setItem('startValue', JSON.stringify(startInputValue));
        localStorage.setItem('maxValue', JSON.stringify(maxInputValue));
        setSetterChange(false);
    }

    return (
        <div className="App">
            <Setter
                startInputValue={startInputValue}
                maxInputValue={maxInputValue}
                onStartValueInputChange={onStartValueInputChange}
                onMaxValueInputChange={onMaxValueInputChange}
                setOptions={setOptions}
                startInputError={startInputError}
                maxInputError={maxInputError}
                setterChange={setterChange}
            />
            <Counter
                count={count}
                maxCount={maxValue}
                updateCount={updateCount}
                resetCount={resetCount}
                startInputError={startInputError}
                maxInputError={maxInputError}
                startInputValue={startInputValue}
                setterChange={setterChange}
            />
        </div>
    );
}

export default App;
