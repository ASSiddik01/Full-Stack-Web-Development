import React from 'react';
import { useState, useEffect } from 'react';


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
        <h2>Load form own component file</h2>
        <h3>Available Conuntry: {countries.length}</h3>
        {
          countries.map(country=><Country name={country.name} capital={country.capital}></Country>)
        }
      </div>
    )
  }
  
  const Country = props => {
    return (
      <div className="">
        <h4>Country:{props.name} </h4>
        <p>Capital:{props.capital} </p>
      </div>
    )
  }

export default Countries;