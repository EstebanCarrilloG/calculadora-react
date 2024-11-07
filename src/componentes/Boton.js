import React from "react";
import '../hojas-de-estilos/Boton.css'

function Boton(props) {

    const esoperador = valor =>{
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    }
    return(
        <div id={props.id}
        onClick={() => props.manejarClic(props.children)}
            className={`boton-contenedor ${esoperador(props.children) ? 'operador' : null}`.trimEnd()}>
            {props.children}
        </div>
    )
    
}

export default Boton