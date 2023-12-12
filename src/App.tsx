import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
const maxCount = 5;
function App() {

  const [count, setCount] = useState(0);

  const updateCount = () => {
      setCount(count + 1);
  };
  const resetCount = () => {
      setCount(0);
  };

  return (
    <div className="App">
      <Counter
          count = {count}
          maxCount = {maxCount}
          updateCount = {updateCount}
          resetCount = {resetCount}
      />
    </div>
  );
}

export default App;
