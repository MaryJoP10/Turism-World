import React from 'react';
import '../styles/home.css';
import inicio from '../images/inicio.png';
import ReactSearchBox from "react-search-box";

const Home = () => {

    return (
        <div className='container_home'>
            <div className='center_home'>
                <img src={inicio} alt="Inicio" />
                <ReactSearchBox placeholder="Buscador" />
                <p>Inhabilitado mientras se mejora la aplicación</p>
                <button >Colombia</button>
                <h1>Turism World</h1>
            </div>
        </div>
    );
}
export default Home;