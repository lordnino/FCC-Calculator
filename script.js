$(document).ready(function () {
  console.log('started...');
  var ongoingOpertaion = '';
  var isOperator = false;

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
    key.addEventListener('click', main);
  });
  window.addEventListener('keydown', main);
  function main(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    var keyCode = e.keyCode;
    if (!key) return;
    console.log(keyCode);
    if (keyCode == '46') { //if the key is the delete button
      console.warn('delete');
    } else if (keyCode == '111' || keyCode == '106' || keyCode == '109') { // if the key is an operator
      keyCode -= '64';
      console.log(String.fromCharCode(keyCode));
    } else if (keyCode == '110'){ // if it the dot 
      keyCode -= '64';
      addOnGoingOperation(keyCode);
    } else if (keyCode == '13') { // it the enter button
    } else { // if it just a number
      keyCode -= 48;
      addOnGoingOperation(keyCode);
    }
  }

  function addOnGoingOperation(keyCode) {
    var text = document.querySelector('.ongoing-op-text').textContent;
    text += String.fromCharCode(keyCode);
    document.querySelector('.ongoing-op-text').innerHTML = text;
  }

  // function addOngoingOperation() {
  //   $('.ongoing-op-text').text(ongoingOpertaion);
  // }

  // function clearOnGoingOperationSection() {
  //   $('.ongoing-op-text').text('');
  // }

  // function calculate(number1, number2, operation) {
  //   var n1 = parseInt(number1);
  //   var n2 = parseInt(number2);
  //   var result;
  //   if (operation == '111') {
  //     result = n1 / n2;
  //     console.log(result);
  //     return result;
  //   } else if (operation == '106') {
  //     result = n1 * n2;
  //     console.log(result);
  //     return result;
  //   } else if (operation == '109') {
  //     result = n1 - n2;
  //     console.log(result);
  //     return result;
  //   } else {
  //     result = n1 + n2;
  //     console.log(result);
  //     return result;
  //   }
  // }

  // function validate(key) {
  //   var arr = ongoingOpertaion.split("");
  //   if (arr.indexOf('111') || arr.indexOf('106') || arr.indexOf('109') || arr.indexOf('107') == -1) {
  //     ongoingOpertaion += String.fromCharCode(key);
  //     splitTheOperation();
  //   } else {
  //     return;
  //   }
  // }

  // function splitTheOperation(string, operationKey) {
  //   var arr = ongoingOpertaion.split(operationKey);
  //   return arr;
  // }

});

//psuedocode 
// check if it's a valid operation
// if it isn't valid operation => end function (x // 5)
// print string in the operation
// check if it need to calculate
// if it needs to calculate then calc 
// print the result to the all operation 
// clear the input

// function
// function to calculate 
// input => (number1, number2, operation)
// ouput => result

// function to validate
// input => string
// ouput => string