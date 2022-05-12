import { useState } from 'react';
import './App.css';
import Sum from './Components/Sum';

function App() {
  const [values,setValues] = useState({a:10,b:20});

  const [counter, setCounter]= useState(0);
  return (
    <div className="App">
      
      <Sum values={values}/>
      <h1>Testing counter text</h1>
      <div id='counter-value'>{counter}</div>
      <button id='increment-btn' onClick={() => setCounter(counter+1)}>Increment</button>
      <button id='decrement-btn' onClick={() => setCounter(counter-1)}>Decrement</button>
    </div>
  );
}

export default App;
