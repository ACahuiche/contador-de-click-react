import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  //Hook useState, recibe una variable y un metodo, el metodo actualizara la variable
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freecodecamplogo}
        alt="Logo de freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>

        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
