import React from 'react';
import '../styles/mapa.css';
import colombia from '../images/colombia.png';

const Colombia = () => {
    return (
        <div className='container_colombia'>
            <div className='center_colombia'>
                <img src={colombia} alt="Colombia"/>
            </div>
        </div>
    );
}
export default Colombia;