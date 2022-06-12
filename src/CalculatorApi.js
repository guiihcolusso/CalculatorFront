class CalculatorApi{

    constructor(serviceAddress){

        this.serviceAddress = serviceAddress;

    }

    converteOperation(operation){

        if(operation === '+') return "sum";
        if(operation === '-') return "sub";
        if(operation === '*') return "mul";
        if(operation === '/') return "div";

    }

    makeURL(num1, num2, operation){

        const resource = `/${operation}/${num1}/${num2}`;
        console.log(new URL(resource, this.serviceAddress));
        return new URL(resource, this.serviceAddress);

    }

    calculate(num1, num2, operation, handler){

        fetch(this.makeURL(num1, num2, this.converteOperation(operation))).then(res => res.json()).then(response => {

            handler(response["result"]);

        }, err => {

            handler(err);
            console.log(err);

        });

    }

}

export default CalculatorApi;