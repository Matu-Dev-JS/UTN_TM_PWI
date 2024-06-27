import React from "react"
const RowArticle = (props) => {
    return (
        
        <div>
            <h2>{props.titulo}</h2>
            <span>{props.fecha}</span>
            <br />
            <a href="http//developer.mozila.org">{props.direccion_author} </a>
        </div>
    )
}
export default RowArticle