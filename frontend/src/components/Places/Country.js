import placesData from '../../data/places.json'
import './countries.css'
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    return (
        <div className="countries_container">
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
            <div className='row justify-content-center'>
                {placesData.country.map(country => (
                    <div className='country_card card p-3 m-3' style={{ width: "18rem" }} key={country.id}>
                        <img src={country.img} className="card-img-top img-fluid" alt="" />
                        <div className="card-body">
                            <h3>{country.name}</h3>
                            <Link to={`/country/${country?.id}`} key={country?.id}>
                                <button>Ver más</button>
                            </Link>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

export default Country

