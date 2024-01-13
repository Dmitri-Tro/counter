import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setter} from "./components/Setter";

function App() {
    return (
        <div className="App">
            <Setter />
            <Counter />
        </div>
    )
}

export default App;
