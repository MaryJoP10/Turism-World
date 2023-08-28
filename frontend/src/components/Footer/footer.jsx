import React from 'react';
import "./footer.css";
import Logo from '../../images/logo.png';

const Footer = () => {
    return(
        <div className='footer_container'>
            <img src={Logo} alt="Logo"/>
        </div>
    );
}

export default Footer;