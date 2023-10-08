import React from 'react';
import "./footer.css";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGoogle } from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';

const Footer = () => {
    return (
        <>
            <footer className="footer_container text-center text-white">
                <div className="container p-4 pb-0">
                    <p>Explora el Mundo a Tu Manera, Con Nosotros</p>
                    <section className='mb-4' >
                        <a className="btn btn-outline-light btn-floationg m-1" href="#!" role="button">
                            <AiFillGithub className='icon_footer' />
                        </a>
                        <a className="btn btn-outline-light btn-floationg m-1" href="#!" role="button">
                            <AiOutlineLinkedin className='icon_footer' />
                        </a>
                        <a className="btn btn-outline-light btn-floationg m-1" href="#!" role="button">
                            <AiOutlineInstagram className='icon_footer' />
                        </a>
                        <a className="btn btn-outline-light btn-floationg m-1" href="#!" role="button">
                            <AiOutlineGoogle className='icon_footer' />
                        </a>
                        <a className="btn btn-outline-light btn-floationg m-1" href="./help" role="button">
                            <BiHelpCircle className='icon_footer' />
                        </a>
                    </section>
                </div>
                <div className="copyright text-center p-3">
                    © 2023 Copyright: Grupo 2 Proyecto Aplicado En TIC 2 (UPB)
                </div>
            </footer>
        </>

    );
}

export default Footer;