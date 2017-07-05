$(document).ready(function () {
  console.log('started...');
  var ongoingOpertaion = '';
  var isOperator = false;

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => {
    key.addEventListener('click', function (e) {
      var char = $(this).text();
      console.log($(this).text());
      if (char === '8') {
        console.log('eight');
      }
    });
  });
  window.addEventListener('keydown', main);
  function main(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    var keyCode = e.keyCode;
    if (!key) return;
    mainThread(keyCode);
  }

  function deleteAChar() {
    console.log('test');
    var text = document.querySelector('.ongoing-op-text').textContent;
    if (text.length == 0) {
      console.log();
    }
    else {
      text = text.substr(0, text.length - 1);
      document.querySelector('.ongoing-op-text').innerHTML = text;
    }
  }

  function calculate(operator) {
    var text = document.querySelector('.ongoing-op-text').textContent;
    var arr = text.split(' ');
    var number1 = parseInt(arr[0]);
    var number2 = parseInt(arr[2]);
    var result;
    switch (arr[1]) {
      case '/':
        console.log(number1 / number2);
        result = number1 / number2;
        return number1 / number2;
        break;
      case '*':
        console.log(number1 * number2);
        result = number1 * number2;
        return number1 * number2;
        break;
      case '-':
        console.log(number1 - number2);
        result = number1 - number2;
        return number1 - number2;
        break;
      case '+':
        console.log(number1 + number2);
        result = number1 + number2;
        return number1 + number2;
        break;
      default:
        console.log('other operator');
    }
  }

  function addToActivityLog() {
    var text = document.querySelector('.ongoing-op-text').textContent;
    var result = calculate();
    var operationComplete = `<div class="operation">${text} = ${result}</div>`;
    console.log(operationComplete);
    $('.all-operation').prepend(operationComplete);
  }

  function stringHasOperator(operator) {
    var currentOperator = operator;
    var text = document.querySelector('.ongoing-op-text').textContent;
    if (text.indexOf('/') == -1 && text.indexOf('*') == -1 && text.indexOf('-') == -1 && text.indexOf('+') == -1) {
      console.log('add operator');
      document.querySelector('.ongoing-op-text').innerHTML = text + " " + String.fromCharCode(operator) + " ";
    } else {
      calculate();
      addToActivityLog();
      document.querySelector('.ongoing-op-text').innerHTML = calculate();
      //clearTheInputArea();
    }
  }

  function mainThread(keyCode) {
    if (keyCode == '46') { //if the key is the delete button
      deleteAChar();
    } else if (keyCode == '111' || keyCode == '106' || keyCode == '109' || keyCode == '107') { // if the key is an operator
      keyCode -= '64';
      console.log(String.fromCharCode(keyCode));
      stringHasOperator(keyCode);
    } else if (keyCode == '110') { // if it the dot 
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

  function clearAll() {
    document.querySelector('.ongoing-op-text').innerHTML = '';
    document.querySelector('.all-operation').innerHTML = '';
  }

  document.querySelector('.ac').addEventListener('click', clearAll);

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