import React from 'react';
import '../styles/ayuda.css';

const Ayuda = () => {

    return (
        <div className='ayuda_page'>
            <div className='container_ayuda'>
                <form>
                    <h1>Contactanos</h1>
                    <div className='input_ayuda'>
                        <div className='label'>
                            <input type='text' />
                            <label>Nombre</label>
                        </div>
                        <div className='label'>
                            <input type='text' />
                            <label>Correo</label>
                        </div>
                        <div className='label'>
                            <textarea type='text' />
                            <label>Inquietud</label>
                        </div>
                        <button>Consultar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Ayuda;