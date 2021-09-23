import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
    </div>
  );
}

// function Countries() {
//   const [countries, setConuntries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setConuntries(data));
//   },[])
//   return (
//     <div className="d">
//       <h1>World Tour</h1>
//       <h3>Available Conuntry: {countries.length}</h3>
//       {
//         countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// const Country = props => {
//   return (
//     <div className="">
//       <h4>Country:{props.name} </h4>
//       <p>Capital:{props.capital} </p>
//     </div>
//   )
// }

export default App;
