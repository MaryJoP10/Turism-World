import React from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../../data/places.json';
import CustomTabs from './CountryTabs';

const CityInfo = () => {
    const { id } = useParams();
    let city = null;
    const country = placesData.country.find(country => {
        city = country.places.find(place => place.id === parseInt(id));
        return city !== undefined;
    });

    const tabs = [
        {
            label: 'General',
            content: (
                <div className="body_content">
                    <h1>Información general sobre {city.name}</h1>

                </div>
            ),
        },
        {
            label: 'Actividades',
            content: (
                <div className="body_content">
                    <h1>Actividades para hacer en {city.name}</h1>

                </div>
            ),
        },
        {
            label: 'Alojamiento',
            content: (
                <div className="body_content">
                    <h1>Donde alojarse en {city.name}</h1>

                </div>
            ),
        },
        {
            label: 'Experiencias',
            content: (
                <div className="body_content">
                    <h1>Mira las experiencias de nuestros viajeros en {city.name}</h1>
                </div>
            ),
        },
    ]

    if (city) {
        return (
            <>
                <div className="header_help">
                    <img src={city.img} alt='' />
                    <h2 className="h1">¡Bienvenido a {city.name}!</h2>
                </div>
                <div className="country_content">
                    <CustomTabs tabs={tabs} />
                </div>
            </>
        );
    }
};

export default CityInfo;