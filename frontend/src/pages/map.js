import React from 'react';
import Upper from '../images/upper.jpg'
import Countries from '../components/Places/Country.js';

const Map = () => {


  return (
    <>
      <div className="header_help">
        <img src={Upper} alt=''/>
        <h1 className="h1 header_text">Tu destino</h1>
      </div>
      <div className="places_container">
        <h1 className='h1'>Países</h1>
        <Countries className="countries"/>
      </div>
    </>
  );
};

export default Map;