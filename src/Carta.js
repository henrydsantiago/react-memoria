import React, {useState} from 'react';
import './Carta.css';
import Flipcard from 'react-flipcard-2'

export default function Carta(params){
    const {icono, estaSiendoComparada, fueAdivinada, seleccionarCarta, carta} = params
    console.log('Cartaseleccionar: ', seleccionarCarta)
    console.log('CARTA: ', carta)
    /* const [isFlipped, setFlipped] = useState(true) */
    return(
        <div className="carta" onClick={seleccionarCarta(carta)} >
            
            <Flipcard 
            isFlipped={estaSiendoComparada || fueAdivinada}  
            disabled={true}
            >
                <div className="portada" ></div>
                <div className="contenido">
                    <i className={`fa ${icono}  fa-5x`}/>
                </div>
            </Flipcard>
        </div>
    )
}