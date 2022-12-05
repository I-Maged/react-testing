import { useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);

  const scoreChange = (type) => {
    let temp = 0;
    if (type === 'inc') {
      temp = score + 1;
    } else {
      temp = score - 1;
    }
    setScore(temp);
  };

  return (
    <div className='App'>
      <h1>{score}</h1>
      <div>
        <button onClick={() => scoreChange('inc')}>Increment</button>
        <button onClick={() => scoreChange('dec')}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
