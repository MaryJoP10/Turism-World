import React from 'react';
import '../styles/home.css';
import home from '../images/home.jpg';

const Home = () => {

    return (
        <div className='container_home'>
            <div className='upper_home'>
                <img src={home} alt="Home" />
                <h1>Turism World</h1>            
            </div>
        </div>
    );
}
export default Home;