import { useState } from 'react'
import placesData from '../data/places.json'

export default function Places() {

    const [places, setPlaces] = useState([]);

    const handleCountryClic = (placesToStore) => {
        setPlaces(placesToStore);
    };

    return (
        <div>

            {/* <div class="col mainSearcher">
                <form class="my-2 my-lg-0">
                    <input
                        class="form-control mr-sm-2"
                        type="search"
                        placeholder="¿Que quieres buscar?"
                        aria-label="Search"
                        onChange={e => setPlaces(places.filter((place) =>  place.name.toLowerCase().includes(e.target.value.toLowerCase())))}
                    />
                </form>
            </div> */}

            <div className='row'>
                {placesData.country.map(country => (
                    <div className='col' key={country.id}>
                        <button type="button" className="btn btn-outline-info" onClick={() => handleCountryClic(country.places)}>{country.name}</button>
                    </div>
                ))}
            </div>

            <div className='row'>
                {places.map(place => (
                    <div className="card p-3 m-3" style={{ width: "18rem" }} key={place.id}>
                        <img src={place.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{place.name}</h5>
                            <p className="card-text">{place.description}</p>
                            <a href="#" className="btn btn-primary">Más Información</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

