import React from 'react'
import data from './Data.json'

function Fetch(){
    return(
        <div className='container_paises'>
            {
                data.map((data,i) => (
                    <div className='pais' key={i}>
                        <h1>{data.title}</h1>
                    </div>
                ))
            }
        </div>

    )
}

export default Fetch