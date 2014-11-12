// CLICK EVENTS / USER INPUT
$('td').click(function(){
    var buttonValue = $(this).text();
    console.log(buttonValue);
    $('#displayoutput').append(buttonValue);
    press(buttonValue);
});


// ACTUAL CALCULATIONS

function displayOutput(){
  return $('#displayoutput').val();
}

var previousResult;
var nextOperation;

function add(a, b){
  return ((a * 100000000000000) + (b * 100000000000000))/100000000000000
}

function subtraction(a, b){
  return ((a * 100000000000000) - (b * 100000000000000))/100000000000000
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
  return (a)/(b);
}

function currentValue(string){
  return $('#displayoutput').val() * 1;
}

function calculate(){
  if(!!nextOperation){ //if nextOperation is there, then do this function. Made nextOperation a boolean value and stated if it was false, false (or true)
  previousResult = nextOperation(previousResult, currentValue());
  } else {
    previousResult = currentValue();
  }
}

function press(buttonValue){
  switch (buttonValue) {
    case '+':
      calculate();
      nextOperation = add;
      $('#displayoutput').val('');

      break;
    case '-':
      // handle -
      calculate();
      nextOperation = subtraction;
      $('#displayoutput').val('');
      break;
    case '*':
      calculate();
      nextOperation = multiply;
      $('#displayoutput').val('');
      break;
    case '/':
      // handle /
      calculate();
      nextOperation = divide;
      $('#displayoutput').val('');
      break;
    case 'C':
      // handle C
        nextOperation = undefined;
        previousResult = undefined;
        $('#displayoutput').val('');
      break;
    case '=':
      calculate();
      nextOperation = undefined;
      $('#displayoutput').val(previousResult);
      break;
    case '+/-':
      // handle +/-
        $('#displayoutput').val("LOW BATTERY");
      break;
    default:
      var current = $('#displayoutput').val();
      $('#displayoutput').val(current + buttonValue);
          
  }
}
// FLOATING POINT IMPRECISION
  // Any precision operation needs to be performed BEFORE the result is displayed
    // If not, we'll be correcting AFTER the fact, rather than preventing imprecision.
    // I think doing so BEFORE will be easier.  Too many variables when it comes to "after".
// Options
  // Convert to a string and manipulate (before)
  // Do some kind of toPrecision and then toFixed or parseFloat (after)
  // Multiply and divide everything by an outrageous number
  // split the float value into multiple integer parts.

// A good idea
//For example, to add 48.6 and 589.55, convert each number to 2 integers:
//
//46.80 -> 46 & 80 
//589.55 -> 589 & 55
//
//Add the integers: 
//46 + 589 = 635 
//80 + 55 = 135
//
//Integer Divide the decimal part by 100: 
//135 / 100 = 1 
//135 % 100 = 35
//
//635 + 1 = 636
//
//Tie on the remainder: 
//636.35
//
//This would require some conversion to string, and doing integer math and then converting back to string. But would yield more accurate results.
