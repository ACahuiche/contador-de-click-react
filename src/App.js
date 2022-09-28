import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/Contador';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';

function App() {

  const manejarClick = () => {
    console.log('Click');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freecodecamplogo}
        alt="Logo de freecodecamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks="5"/>

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
