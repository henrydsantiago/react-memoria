import React from 'react'
import Carta from './Carta'
import './Tablero.css';


export default function Tablero ({baraja, parejaSeleccionada, estaComparando, seleccionarCarta}) {
    console.log('Pareja: ', parejaSeleccionada)
    console.log('Comparando: ', estaComparando)
    console.log('Seleccionar: ', seleccionarCarta)
    console.log('BARAJA: ', baraja)
    return (
        <div className="tablero">
         {baraja.map((carta, index)=> {
             const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
             
             return(
                <Carta 
                    carta={carta}
                    key={index}
                    icono={carta.icono}
                    estaSiendoComparada = {estaSiendoComparada}
                    seleccionarCarta = {()=> seleccionarCarta(carta)}
                    fueAdivinada = {carta.fueAdivinada}
                />
                )}
             )
         }
        </div>
    )
}