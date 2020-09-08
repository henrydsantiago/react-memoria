import React, {useState} from 'react';
import Header from './Header'
import Tablero from './Tablero';
import './App.css';
import construirBaraja from './utils/construirBaraja'


const estadoInicial = {
  baraja: construirBaraja(),
  parejaSeleccionada:['Hola'],
  estaComparando: false, 
}



function App() {
  const [state, setState] = useState(estadoInicial) ;

  function seleccionarCarta(carta){
    console.log('Estoy en SeleccionarCarta', carta)
    if(
      state.estaComparando ||
      state.parejaSeleccionada.indexOf(carta)>-1 ||
      carta.fueAdivinada
    ){
      return;
    } 
    const parejaSeleccionada = [...state.parejaSeleccionada, carta]
    setState(parejaSeleccionada)
  }
  
  return (
    <div className="App">
      <Header/>
      <Tablero 
        {...state}
        seleccionarCarta = {()=>seleccionarCarta}
      />
    </div>
  );
}



export default App;
