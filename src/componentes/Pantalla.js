import React from "react";
import '../hojas-de-estilos/Pantalla.css'

const Pantalla =({input, id})=>(
    <div className="input" id={id}> 
        {input ? input : "0"}
    </div>
    );

export default Pantalla