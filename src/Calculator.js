import React from 'react';
import CalculatorPanel from './CalculatorPanel';

class Calculator extends React.Component {

    constructor(props){

        super(props);
        this.state = {

            result: "",
            numbers:["", ""],
            numberIndex: 0,
            operation:"",

        }
        
    }

    operationHandler(operation){

        if(this.state.numberIndex === 1){

            this.equalHandler();
            return;

        }

        if(operation === "-" && this.state.result === ""){

            this.numberHandler(operation);
            return;

        }

        this.setOperation(operation);

    }

    setOperation(operation){

        this.setState({operation: operation});
        this.nextNumber();

    }

    nextNumber(){

        const newIndex = this.state.numberIndex === 0 ? 1 : 0;
        this.setState({

            result: this.state.numbers[newIndex],
            numberIndex: newIndex,

        }) 

    }

    numberHandler(number){
        
        const newNumber = this.state.numbers[this.state.numberIndex] + number;
        this.updateNumber(newNumber);

    }

    updateNumber(newNumber){

        let newNumbers = this.state.numbers;
        newNumbers[this.state.numberIndex] = newNumber;
        this.setState({

            result: newNumbers[this.state.numberIndex],
            numbers: newNumbers

        })

    }

    dotHandler(){
        
        const newNumber = this.state.numbers[this.state.numberIndex] + '.';
        if(isNaN(newNumber)) return;
        this.updateNumber(newNumber);


    }

    clearHandler(){

        this.setState({
            
            result: "",
            numbers:["", ""],
            numberIndex: 0,
            operation:""

        })


    }

    equalHandler(){

        if(this.state.numbers[0] ==="" || this.state.numbers[1] === "") return;
        this.props.calculatorApi.calculate(
            this.state.numbers[0],
            this.state.numbers[1],
            this.state.operation,
            (result) => {
                console.log(result);
                this.setResult(result)

            }
            );


    }

    setResult(result){

        const newNumbers     = [result, ""];
        const newNumberIndex = 0;

        this.setState({

            result: newNumbers[newNumberIndex],
            numbers: newNumbers,
            numberIndex: newNumberIndex,
            operation: "",

        })

    }

    render(){

        return (

            <div className="calculator-grid-conteiner">

                <CalculatorPanel
                    result           = {this.state.result} 
                    operationClicked = {this.operationHandler.bind(this)} 
                    numberClicked    = {this.numberHandler.bind(this)}
                    dotClicked       = {this.dotHandler.bind(this)}
                    clearClicked     = {this.clearHandler.bind(this)}
                    equalClicked     = {this.equalHandler.bind(this)}
                />

            </div>

        )
        
    }

}

export default Calculator;