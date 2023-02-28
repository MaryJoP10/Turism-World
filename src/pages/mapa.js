import React from 'react';
import '../styles/mapa.css';
import mapa from '../images/mapamundi.png';

const Mapa = () => {
    return (
        <div className='container_mapa'>
            <div className='center_mapa'>
                <img src={mapa} alt="Mapa" />
                <h1>Turism World</h1>
            </div>
        </div>
    );
}
export default Mapa;