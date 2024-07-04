import React from 'react';
import './Color.css'

const Color = (props) => {
    const colores /* array String */ = props.colores
    return (
    <div className="colors">
                {colores.map((color /* string */, index /* number */) => {
                    return (

                        <div className="color" style={{backgroundColor: color}} key={color + index} >
                            <span className='bi bi-heart'></span>{index}
                        </div>

                    )
                })
                }
    </div>
    )
}

export default Color