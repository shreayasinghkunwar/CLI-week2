// Extracting parameters 
function extractArgument(argument) {
    if (argument.length > 2) {
        getArgument(argument);
    }

    else {
        //restricting empty input
        console.log("Arguments not entered");
        throw 'Argument Cannot be empty! Enter numbers';
    }

}

extractArgument(process.argv)



function getArgument(argument) {
    argument = argument.slice(2);
    const arrayofNumbers = validate(argument);
    SortNumbers(arrayofNumbers);

}


//validating function
function validate(argument) {

    const isNumber = require('is-number');

    argument.forEach((values) => {
        if (!isNumber(values)) {
            throw 'Enter numbers only!';

        }

    });

    //converting into numbers
    const NumberArray = convertStringArray(argument);
    return NumberArray;
}

function convertStringArray(argument) {
    const arrofNumbers = argument.map((val) => {
        return Number(val)
    })

    return arrofNumbers;
}


// Removing duplicated numbers
function SortNumbers(arguments) {

    var dedupe = require('dedupe');
    var SortedNumbers = dedupe(arguments);
    console.log("Removing duplicated numbers");
    console.log(SortedNumbers);

}



