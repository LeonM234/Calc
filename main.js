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
  mantissaofA = a.toString().match(/[^.]*\.?(\d*)/)[1].length;
  mantissaofB = b.toString().match(/[^.]*\.?(\d*)/)[1].length;
  var digits = Math.max(mantissaofA, mantissaofB);
  var sum = a + b
  return sum.toFixed(digits);
};

function subtraction(a, b){
mantissaofA = a.toString().match(/[^.]*\.?(\d*)/)[1].length;
mantissaofB = b.toString().match(/[^.]*\.?(\d*)/)[1].length;
var digits = Math.max(mantissaofA, mantissaofB);
var difference = a - b
return difference.toFixed(digits);
};

function multiply(a, b){
  return a * b;
};

function divide(a, b){
  var periodA = a.toString().indexOf(".");
  var periodB = b.toString().indexOf(".");
  if (periodA !== -1 || periodB !== -1){
    mantissaofA = a.toString().match(/[^.]*\.?(\d*)/)[1].length;
    mantissaofB = b.toString().match(/[^.]*\.?(\d*)/)[1].length;
    var digits = Math.max(mantissaofA, mantissaofB);
    var quotient = a / b;
    return quotient.toFixed(digits);
  } else {
    var quotient = a / b;
    return quotient;
  }
};

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
