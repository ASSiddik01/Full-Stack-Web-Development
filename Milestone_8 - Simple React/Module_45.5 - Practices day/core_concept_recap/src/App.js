import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <MyComponents brand='Apple' price='50000'></MyComponents>
      <MyComponents brand='LG' price='40000'></MyComponents>
      <MyComponents brand='Samsung' price='30000'></MyComponents>
    </div>
  );
}

function MyComponents(props) {
  const [points, setPoints]= useState(0)
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '2px solid blue',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px'
  }

  const addPoints = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle} className="">
      <h1>Brand name: {props.brand }</h1>
      <h3 style={{ color: 'red' }}>Price: {props.price} </h3>
      <h3>Rateing: {points }</h3>
      <button onClick={addPoints }>Add Rateing</button>
    </div>
    
  )
}

export default App;
