import shuffle from 'lodash.shuffle';
import FontAwesomeClass from './fontAwesomeClass';

const NUMERO_DE_CARTAS = 20;

export default () =>{
    const fontAwesomeClass = FontAwesomeClass();
    let cartas = [];

    while (cartas.length<NUMERO_DE_CARTAS){
        const index = Math.floor(Math.random() * fontAwesomeClass.length);
        const carta = {
            icono: fontAwesomeClass.splice(index, 1)[0],
            fueAdivinada: false
        }
        cartas.push(carta)
        cartas.push({...carta})
    }
    return  shuffle(cartas);
}