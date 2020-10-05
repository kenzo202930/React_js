import React from 'react';
import "./styles/syles.scss";
import "./styles/estilos.css";
import Curso from './Curso'
import Cabecera from './Cabecera';

const App = () => (
<>
<div className="redimension">
    <Cabecera />
</div>



<div className= "ed-grid  m-grid-3">
  <Curso />
  <Curso />
  <Curso />
 
</div>
</>
)
export default App; 