import React from 'react';
import '../styles/help.css';
import '../styles/App.css';
import Upper from '../images/upper.jpg'
import Mailer from '../components/Mailer/Mailer.jsx';

const Help = () => {

    return (
        <>
            <div className="header_help">
                <img src={Upper} />
                <h1 className="h1 header_text">Contáctanos</h1>
            </div>
            <div className='help_page'>
                <Mailer/>
            </div>
        </>
    );
}
export default Help;