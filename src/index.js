module.exports = function toReadable (number) {
  let firstNumber = String(number)[0];
  let secondNumber = String(number)[1];
  let thirdNumber = String(number)[2];

  let twoDigits = secondNumber + thirdNumber;

    if (number.toString().length === 1) {
        switch (firstNumber) {
            case '1':
                firstNumber = 'one';
                break;
            case '2':
                firstNumber = 'two';
                break;
            case '3':
                firstNumber = 'three';
                break;
            case '4':
                firstNumber = 'four';
                break;
            case '5':
                firstNumber = 'five';
                break;
            case '6':
                firstNumber = 'six';
                break;
            case '7':
                firstNumber = 'seven';
                break;
            case '8':
                firstNumber = 'eight';
                break;
            case '9':
                firstNumber = 'nine';
                break;
            case '0':
                firstNumber = 'zero';
                break;
        }
        secondNumber = '';
        thirdNumber = '';

    } else if (number.toString().length === 2) {
        thirdNumber = '';
        twoDigits = firstNumber + secondNumber;

        switch (firstNumber) {
            case '0':
                firstNumber = 'zero';
                break;
            case '1':
                firstNumber = 'one';
                break;
            case '2':
                firstNumber = 'twenty';
                break;
            case '3':
                firstNumber = 'thirty';
                break;
            case '4':
                firstNumber = 'forty';
                break;
            case '5':
                firstNumber = 'fifty';
                break;
            case '6':
                firstNumber = 'sixty';
                break;
            case '7':
                firstNumber = 'seventy';
                break;
            case '8':
                firstNumber = 'eighty';
                break;
            case '9':
                firstNumber = 'ninety';
                break;
        }
    
        switch (secondNumber) {
            case '1':
                secondNumber = 'one';
                break;
            case '2':
                secondNumber = 'two';
                break;
            case '3':
                secondNumber = 'three';
                break;
            case '4':
                secondNumber = 'four';
                break;
            case '5':
                secondNumber = 'five';
                break;
            case '6':
                secondNumber = 'six';
                break;
            case '7':
                secondNumber = 'seven';
                break;
            case '8':
                secondNumber = 'eight';
                break;
            case '9':
                secondNumber = 'nine';
                break;
            case '0':
                secondNumber = '';
                break;
        }
       
        if (firstNumber === 'one') {
            firstNumber = '';
            
            switch (twoDigits) {
                case '10':
                    secondNumber = 'ten';
                    break;
                case '11':
                    secondNumber = 'eleven';
                    break;
                case '12':
                    secondNumber = 'twelve';
                    break;
                case '13':
                    secondNumber = 'thirteen';
                    break;
                case '14':
                    secondNumber = 'fourteen';
                    break;
                case '15':
                    secondNumber = 'fifteen';
                    break;
                case '16':
                    secondNumber = 'sixteen';
                    break;
                case '17':
                    secondNumber = 'seventeen';
                    break;
                case '18':
                    secondNumber = 'eighteen';
                    break;
                case '19':
                    secondNumber = 'nineteen';
                    break;
            }
        }
    } else if (number.toString().length === 3) {

        switch (firstNumber) {
            case '1':
                firstNumber = 'one hundred';
                break;
            case '2':
                firstNumber = 'two hundred';
                break;
            case '3':
                firstNumber = 'three hundred';
                break;
            case '4':
                firstNumber = 'four hundred';
                break;
            case '5':
                firstNumber = 'five hundred';
                break;
            case '6':
                firstNumber = 'six hundred';
                break;
            case '7':
                firstNumber = 'seven hundred';
                break;
            case '8':
                firstNumber = 'eight hundred';
                break;
            case '9':
                firstNumber = 'nine hundred';
                break;
        }

        switch (secondNumber) {
            case '1':
                secondNumber = 'one';
                break;
            case '2':
                secondNumber = 'twenty';
                break;
            case '3':
                secondNumber = 'thirty';
                break;
            case '4':
                secondNumber = 'forty';
                break;
            case '5':
                secondNumber = 'fifty';
                break;
            case '6':
                secondNumber = 'sixty';
                break;
            case '7':
                secondNumber = 'seventy';
                break;
            case '8':
                secondNumber = 'eighty';
                break;
            case '9':
                secondNumber = 'ninety';
                break;
            case '0':
                secondNumber = '';
                break;
        }

        switch (thirdNumber) {
            case '1':
                thirdNumber = 'one';
                break;
            case '2':
                thirdNumber = 'two';
                break;
            case '3':
                thirdNumber = 'three';
                break;
            case '4':
                thirdNumber = 'four';
                break;
            case '5':
                thirdNumber = 'five';
                break;
            case '6':
                thirdNumber = 'six';
                break;
            case '7':
                thirdNumber = 'seven';
                break;
            case '8':
                thirdNumber = 'eight';
                break;
            case '9':
                thirdNumber = 'nine';
                break;
            case '0':
                thirdNumber = '';
                break;
        }

        if (secondNumber === 'one') {
            thirdNumber = '';
            
            switch (twoDigits) {
                case '10':
                    secondNumber = 'ten';
                    break;
                case '11':
                    secondNumber = 'eleven';
                    break;
                case '12':
                    secondNumber = 'twelve';
                    break;
                case '13':
                    secondNumber = 'thirteen';
                    break;
                case '14':
                    secondNumber = 'fourteen';
                    break;
                case '15':
                    secondNumber = 'fifteen';
                    break;
                case '16':
                    secondNumber = 'sixteen';
                    break;
                case '17':
                    secondNumber = 'seventeen';
                    break;
                case '18':
                    secondNumber = 'eighteen';
                    break;
                case '19':
                    secondNumber = 'nineteen';
                    break;
            }
        }
    } 

    result = firstNumber + ' ' + secondNumber + ' ' + thirdNumber;
    result = result.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");

    return result;
  
}
