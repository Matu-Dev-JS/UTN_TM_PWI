import React from 'react' 

import './CardColor.css'
import Color from '../Color/Color'

/**
 * Renders a card component for displaying colors with their respective likes and time.
 *
 * @param {Object} props - The properties for the CardColor component.
 * @param {Array<string>} props.colores - The array of color strings to display.
 * @param {string} props.time - The time string to display.
 * @param {number} props.likes - The number of likes to display.
 * @return {JSX.Element} The rendered CardColor component.
 */
const CardColor = ({colores, time, likes}) => {
    return (
        <div className='colors-cards'>
            <div className='color'>
                <Color colores={colores}/>
            </div>
            <div className="card-controls">
                <button className='btn-like'>
                    <i className='bi bi-heart'></i>
                    {likes}
                </button>
                <span className="time">
                    {time}
                </span>
            </div>
        </div>
    )
}



export default CardColor

/**
 * Logs a greeting message with the provided name.
 *
 * @param {Object} props - An object containing the name property.
 * @param {string} props.nombre - The name to be included in the greeting message.
 * @return {void} This function does not return anything.
 */
const miFuncion = ({nombre}) => {
    
    console.log('hola me llamo ' + nombre)
}