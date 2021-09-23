import React from 'react';
import { useState, useEffect } from 'react';
import './Countries.css'


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
        <div className="countries_container">
        {
          countries.map(country=><Country country={country}></Country>)
        }
        </div>
      </div>
    )
  }
  
const Country = props => {
  const { name, capital, population, region } = props.country;
  console.log(props.country)
    return (
      <div className="country">
        <h4>Country: {name} </h4>
        <p>Capital: {capital} </p>
        <p><small>Region:{region} </small></p>
        <p>Population: {population} </p>
      </div>
    )
  }

export default Countries;