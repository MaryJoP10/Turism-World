import React from 'react';
import '../styles/home.css';
import home from '../images/home.jpg';
import { BiSolidHotel, BiSolidTrain, BiCommentDetail, BiWorld } from "react-icons/bi";
import { MdFastfood, MdPlace } from "react-icons/md";
import { TbGavel } from "react-icons/tb";
import { FaPersonWalkingLuggage} from "react-icons/fa6";
import { LuPartyPopper } from "react-icons/lu";
import {PiLightbulbBold} from "react-icons/pi";

const Home = () => {

    return (
        <>
            <div className='header_home'>
                <div className='header_img'>
                    <img src={home} alt="Home"></img>
                </div>
                <div className='header_text'>
                    <h1 className='title'>Deja una huella</h1>
                    <h2>en cada lugar que visites...</h2>
                    <h3>Planea de la mejor manera tu viaje con nosotros.</h3>
                    <a href="./map"><button>Busca tu destino</button></a>
                </div>
            </div>
            <div className='services_home'>
                <h1>Descubre</h1>
                <table>
                    <tr>
                        <td>
                            <PiLightbulbBold className='icon' />
                            <p>Generalidades</p>
                        </td>
                        <td>
                            <BiSolidHotel className='icon' />
                            <p>Alojamiento</p>
                        </td>
                        <td>
                            <MdFastfood className='icon' />
                            <p>Gastronomía</p>
                        </td>
                        <td>
                            <MdPlace className='icon' />
                            <p>Lugares</p>
                        </td>
                        <td>
                            <BiWorld className='icon' />
                            <p>Cultura</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FaPersonWalkingLuggage className='icon' />
                            <p>Actividades</p>
                        </td>
                        <td>
                            <BiSolidTrain className='icon' />
                            <p>Transporte</p>
                        </td>
                        <td>
                            <TbGavel className='icon' />
                            <p>Leyes</p>
                        </td>

                        <td>
                            <LuPartyPopper className='icon' />
                            <p>Festividades</p>
                        </td>
                        <td>
                            <BiCommentDetail className='icon' />
                            <p>Experiencias</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="mision_home">
                <h1>Objetivo</h1>
            </div>

        </>
    );
}

export default Home;