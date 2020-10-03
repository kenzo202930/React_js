import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/syles.scss";
import "./styles/estilos.css"
import App from './App' 


const root = document.getElementById("root");

// // const elemento = React.createElement(componente, propiedades, hijos)
// const elemento = React.createElement("h1", {className: "saludo", }, "hola papucho")

ReactDOM.render(<App />, root); 