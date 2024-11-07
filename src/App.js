import "./App.css";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");

  function corregirFormatoNumeros(texto) {
    return texto
      .replace("Error", "")
      .replace(/\.{2,}/g, ".")
      .replace(/^([0]){1,}/, "$1")
      .replace(/([-+*/])([0]){1,}/g, "$1$2")
      .replace(/^[.]/, "0.")
      .replace(/([+\-*/])[.]/g, "$10.")
      .replace(/[0.]{2}([+-/*])/, "")
      .replace(/^([/+*-]\d+)/g, "0$1")
      .replace(/([\d])[.]([+-])/g, "$1$2")
      .replace(/([+*/]){2,}/g, "$1")
      .replace("++", "+")
      .replace(/--/g, "-")
      .replace(/[+-]([-+]){2}/g, "$1")
      .replace(/([+\-*/]){3}/g, "$1")
      .replace(/\s+/g, "")
      .replace(/(\d+\.\d+)(?:\.+(\d+))+/g, "$1$2");
  }

  const agregarInput = (val) => {
    if (input === "Error") {
      setInput(val);
    }
    setInput(corregirFormatoNumeros(input + val));
    console.log(corregirFormatoNumeros(input + val));
  };
  const calcularResultado = () => {
    //let re = /^[+-]?\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/g;
    console.log(typeof input);

    try {
      input !== "" ? setInput(String(evaluate(input))) : setInput("Error");
    } catch (error) {
      console.log(error);
      setInput("Error");
    }
  };

  return (
    <div className="App container">
      <div className="contenedor-calculadora">
        <Pantalla id="display" input={input} />
        <div className="fila">
          <Boton id="one" manejarClic={agregarInput}>1</Boton>
          <Boton id="two" manejarClic={agregarInput}>2</Boton>
          <Boton id="three"    manejarClic={agregarInput}>3</Boton>
          <Boton id ="add" manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton id="four" manejarClic={agregarInput}>4</Boton>
          <Boton id="five" manejarClic={agregarInput}>5</Boton>
          <Boton id="six" manejarClic={agregarInput}>6</Boton>
          <Boton id ="subtract" manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton id="seven" manejarClic={agregarInput}>7</Boton>
          <Boton id="eight" manejarClic={agregarInput}>8</Boton>
          <Boton id="nine" manejarClic={agregarInput}>9</Boton>
          <Boton id ="multiply" manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton id="equals" manejarClic={calcularResultado}>=</Boton>
          <Boton id="zero" manejarClic={agregarInput}>0</Boton>
          <Boton id="decimal" manejarClic={agregarInput}>.</Boton>
          <Boton id="divide" manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear id="clear" manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
