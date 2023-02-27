import React from 'react';
import '../styles/home.css';
import inicio from '../images/inicio.png';

const Home = () => {
    return (
        <div className='container_home'>
            <div className='center_home'>
                <img src={inicio} alt="Inicio" />
            </div>
        </div>
    );
}
export default Home;