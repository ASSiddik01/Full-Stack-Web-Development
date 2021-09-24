import './App.css';
import Device from './components/Device/Device';
import { useState, useEffect } from 'react';

function App() {
  const [steps, setSteps] = useState(0);

  const increaseWalk = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  }

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div className="App">
      <h2>My steps: {steps} </h2>
      <button onClick={increaseWalk }>Walk</button>
      <Device name='iPhone' price='50000'></Device>
    </div>
  );
}

export default App;
