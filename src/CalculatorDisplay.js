import React from 'react';

function CalculatorDisplay({text}){

    return (

        <input value={text} readOnly={true} className="calculator-display"/>

    )
    
}

export default CalculatorDisplay;