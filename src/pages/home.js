import React from 'react';
import '../styles/home.css';
import inicio from '../images/inicio.png';

const Home = () => {
    return (
        <div className='container_home'>
            <div className='center_home'>
                <img src={inicio} alt="Inicio" />
                <h1>Turism World</h1>
            </div>
        </div>
    );
}
export default Home;