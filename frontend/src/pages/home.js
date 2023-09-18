import React from 'react';
import '../styles/home.css';
import home from '../images/home.jpg';
import about from '../images/about_us.jpg';
import { BiSolidHotel, BiSolidTrain, BiCommentDetail, BiWorld } from "react-icons/bi";
import { MdFastfood, MdPlace } from "react-icons/md";
import { TbGavel } from "react-icons/tb";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";
import { PiLightbulbBold } from "react-icons/pi";

const Home = () => {

    return (
        <>
            <div className='header_home'>
                <div className='header_img'>
                    <img src={home} alt="Home"></img>
                </div>
                <div className='header_text'>
                    <h1 className='title'>Deja una huella</h1>
                    <h2 className="h2">en cada lugar que visites...</h2>
                    <h3 className="h3">Planea de la mejor manera tu viaje con nosotros.</h3>
                    <a href="./map"><button className="button">Busca tu destino</button></a>
                </div>
            </div>
            <div className='services_home'>
                <h1 className="h1">Descubre</h1>
                <table>
                    <tr>
                        <td>
                            <PiLightbulbBold className='icon' />
                            <p className='p'>Generalidades</p>
                        </td>
                        <td>
                            <BiSolidHotel className='icon' />
                            <p className='p'>Alojamiento</p>
                        </td>
                        <td>
                            <MdFastfood className='icon' />
                            <p className='p'>Gastronomía</p>
                        </td>
                        <td>
                            <MdPlace className='icon' />
                            <p className='p'>Lugares</p>
                        </td>
                        <td>
                            <BiWorld className='icon' />
                            <p className='p'>Cultura</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FaPersonWalkingLuggage className='icon' />
                            <p className='p'>Actividades</p>
                        </td>
                        <td>
                            <BiSolidTrain className='icon' />
                            <p className='p'>Transporte</p>
                        </td>
                        <td>
                            <TbGavel className='icon' />
                            <p className='p'>Leyes</p>
                        </td>

                        <td>
                            <LuPartyPopper className='icon' />
                            <p className='p'>Festividades</p>
                        </td>
                        <td>
                            <BiCommentDetail className='icon' />
                            <p className='p'>Experiencias</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="mision_home">
                <div className="left">
                    <div className='mision_text'>
                        <h2 className="h2">Donde las Aventuras Cobran Vida</h2>
                        <p className='p'>En Turism World, hacemos que cada destino sea una experiencia vibrante que nunca olvidarás.</p>
                    </div>
                </div>
                <div className="right"><img src={about} /></div>
            </div>

            <div className="end_home">
                <h1 className="h1">¿Alguna pregunta?</h1>
                <a href="./help"><button className="button">Contáctanos</button></a>
            </div>

        </>
    );
}

export default Home;