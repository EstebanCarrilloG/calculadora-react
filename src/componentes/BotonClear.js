import React from "react";
import '../hojas-de-estilos/BotonClear.css'

const BotonClear = (props) =>(
    <div 
    onClick={props.manejarClear}
    className="boton-clear">
        {props.children}
    </div>
    );

export default BotonClear