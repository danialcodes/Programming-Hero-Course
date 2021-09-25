import React from 'react';
import './Country.css'
const Country = (props) => {
  const { name, capital, population, flags } = props.country;
  return (
    <div className='Country'>
      <h2>Name: {name}</h2>
      <img src={flags[0]} alt="" />
      <p>Capital: {capital}- Population: {population}</p>
    </div >
  );
};

export default Country;