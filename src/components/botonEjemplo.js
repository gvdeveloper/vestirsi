/*Agregar el {useState}*/
import React, { useState } from 'react';
import './style.css';

export default function Contar() {
  const fecha = new Date().toString();

  let [state, setState] = useState({ click: 0, fechaRes: fecha /* llama a la const fecha */ });

  const handleClick = () => {
      /*Ponemos el ++state. antes para que primero sume. Después lo de fechaRes se hace para que al hacer click en el botón, no nos borre lo que esté en la fecha*/
    setState({ click: ++state.click, fechaRes: fecha });
  };

  return (
    <div>
      <h1>Clicks {state.click}</h1>
      <h2>Dia y hora: {state.fechaRes}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}