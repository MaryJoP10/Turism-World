import React from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../../data/places.json';
import './countryInfo.css';
import CustomTabs from './CountryTabs';
import { Link } from 'react-router-dom';

const CountryInfo = () => {
  const { id } = useParams();
  const country = placesData.country.find(country => country.id === parseInt(id));

  const tabs = [
    {
      label: 'General',
      content: (
        <div>
          <h1>Información general sobre {country.name}</h1>
          <div className="body_content">
            <img src={country.img_general} alt='' style={{ float: 'right', width: '40vw', marginTop: '10vh', justifySelf: 'center' }} />
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Nombre oficial: </h4>{country.of_name}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Capital: </h4>{country.capital}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Ubicación: </h4>{country.location}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Superficie: </h4>{country.surface}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Población: </h4>{country.poblation}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Idioma: </h4>{country.languaje}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw' }}><h4>Moneda: </h4>{country.currency}</p>
          </div>
          <div className="body_content">
            <h1>Recomendaciones antes de viajar a {country.name}</h1>
            <p style={{ textAlign: 'left', fontSize: '1.5vw', marginTop: '4vh' }}>{country.recommendation_1}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw', marginTop: '4vh' }}>{country.recommendation_2}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw', marginTop: '4vh' }}>{country.recommendation_3}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw', marginTop: '4vh' }}>{country.recommendation_4}</p>
            <p style={{ textAlign: 'left', fontSize: '1.5vw', marginTop: '4vh' }}>{country.recommendation_5}</p>
          </div>
        </div>
      ),
    },
    {
      label: 'Cultura',
      content: (
        <div className="body_content">
          <h1>Cultura en {country.name}</h1>
          <h2>Un pequeño recorrido por la cultura de {country.name}.</h2>
          <div style={{ marginLeft: '2vw', marginRight: '2vw' }}>
            {country.culture.map((cul, index) => (
              <div style={{ marginTop: '2vh', display: 'block', clear: 'both' }} key={index}>
                <div style={{ marginTop: '6vh' }}>
                  <img src={cul.img} style={{ width: '25rem', float: 'left', marginRight: '20px' }} alt="" />
                  <h3 style={{ textAlign: 'left' }}>{cul.name}</h3>
                  <p style={{ textAlign: 'justify' }}>{cul.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Gastronomía',
      content: (
        <div>
          <h1>Gastronomía en {country.name}</h1>
          <div className="row justify-content-center" style={{ display: 'flex' }}>
            {country.gastronomy.map((gastro, index) => (
              <div className='country_card card p-3 m-3' style={{ width: "25rem" }} key={index}>
                <img src={gastro.img} className="card-img-top img-fluid" alt='' />
                <div className="card-body">
                  <h3>{gastro.name}</h3>
                  <p>{gastro.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Festividades',
      content: (
        <div>
          <h1>Festividades que se celebran en toda {country.name}</h1>
          <div className="row justify-content-center" style={{ display: 'flex' }}>
            {country.fest.map((fest, index) => (
              <div className='country_card card p-3 m-3' style={{ width: "25rem" }} key={index}>
                <img src={fest.img} className="card-img-top img-fluid" alt='' />
                <div className="card-body">
                  <h3>{fest.name}</h3>
                  <p>{fest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Transporte',
      content: (
        <div>
          <h1>Transporte en {country.name}</h1>
          <div className="row justify-content-center" style={{ display: 'flex' }}>
            {country.transport.map((tran, index) => (
              <div className='country_card card p-3 m-3' style={{ width: "25rem" }} key={index}>
                <img src={tran.img} className="card-img-top img-fluid" alt='' />
                <div className="card-body">
                  <h3>{tran.name}</h3>
                  <p>{tran.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Ciudades',
      content: (
        <div>
          <h1>Ciudades de {country.name}</h1>
          <div className="row justify-content-center" style={{ display: 'flex' }}>
            {country.places.map(place => (

              <div className='country_card card p-3 m-3' style={{ width: "18rem" }} key={place.id}>
                <img src={place.img} className="card-img-top img-fluid" alt={place.name} />
                <div className="card-body">
                  <h3>{place.name}</h3>
                  <Link to={`/country/${country?.id}/${place?.id}`} key={place?.id}>
                    <button>Ver más</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: 'Leyes',
      content: (
        <div>
          <h1>Leyes en {country.name}</h1>
          <h2>En {country.name}, como en todos los países, existen leyes cuya infricción resultará en sanciones.</h2>
          <h3>¡Te contamos algunas de ellas!</h3>
          <div className="body_content row justify-content-center" style={{ display: 'flex' }}>
            {country.laws.map((law, index) => (
              <div className='country_card card p-3 m-3' style={{ width: "25rem" }} key={index}>
                <div className="card-body">
                  <h3>{law.name}</h3>
                  <p>{law.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      ),
    }
  ];
  return (
    <>
      <div className="header_help">
        <img src={country.header} alt='' />
        <h2 className="h1">¡Bienvenido a {country.name}!</h2>
      </div>
      <div className="country_content">
        <CustomTabs tabs={tabs} />
      </div>
    </>
  );
};

export default CountryInfo;