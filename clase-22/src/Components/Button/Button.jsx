import React from 'react'
import './Button.css'

const Button = (props) => {

    return (
        <button className='btn btn-primary'>{props.children}</button>
    )
}

export default Button