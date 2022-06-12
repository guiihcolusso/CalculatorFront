import React from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

function CalculatorPanel({result, operationClicked, numberClicked, dotClicked, clearClicked, equalClicked}){

    const buttonsName = [

        {text:'7', handler: () => numberClicked('7')},
        {text:'8', handler: () => numberClicked('8')},
        {text:'9', handler: () => numberClicked('9')},
        {text:'/', handler: () => operationClicked('/')},
        {text:'4', handler: () => numberClicked('4')},
        {text:'5', handler: () => numberClicked('5')},
        {text:'6', handler: () => numberClicked('6')},
        {text:'*', handler: () => operationClicked('*')},
        {text:'1', handler: () => numberClicked('1')},
        {text:'2', handler: () => numberClicked('2')},
        {text:'3', handler: () => numberClicked('3')},
        {text:'-', handler: () => operationClicked('-')},
        {text:'0', handler: () => numberClicked('0')},
        {text:'.', handler: () => dotClicked()},
        {text:'C', handler: () => clearClicked()},
        {text:'+', handler: () => operationClicked('+')},
        {text:'=', handler: () => equalClicked()},
    ]

    const buttons = buttonsName.map(button => <CalculatorButton name = {button.text} onClick = {button.handler}/>);

    return (

        <div className="calculator-grid-conteiner">
            <CalculatorDisplay text = {result}/>
            {buttons}

        </div>

    )

}

export default CalculatorPanel;