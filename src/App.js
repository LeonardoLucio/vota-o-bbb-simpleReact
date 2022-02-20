import logo from './arthur.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <div className="App-content">
        <button type="button" onClick={() => setCount(count +1)}>
        <span>Arthur</span>
          <img src={logo}>
            </img>
            <span>Votos: {count}</span>
          </button>
          <button type="button" onClick={() => setCount1(count1 +1)}>
        <span>Arthur</span>
          <img src={logo}>
            </img>
            <span>Votos: {count1}</span>
          </button>
          <button type="button" onClick={() => setCount2(count2 +1)}>
        <span>Arthur</span>
          <img src={logo}>
            </img>
            <span>Votos: {count2}</span>
          </button>
      </div>
    </div>
  );
}

export default App;
