import React from 'react';

function CalculatorButton({name, onClick}){

    return (

        <input type="button" value = {name} className={name === '='? 'calculator-equal-button': null} onClick={onClick}/>

    )

}

export default CalculatorButton;