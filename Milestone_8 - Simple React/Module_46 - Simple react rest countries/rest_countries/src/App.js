import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [countries, setConuntries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setConuntries(data));
  },[])
  return (
    <div className="d">
      <h1>World Tour</h1>
      <h3>Available Conuntry: {countries.length }</h3>
    </div>
  )
}

export default App;
