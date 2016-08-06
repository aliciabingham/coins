var userInput = document.getElementById("userInput");
var submitButton = document.getElementById("submit");
var output = document.getElementById("output");
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;
var numOfCoins = 0;

submitButton.addEventListener("click", clickFunction);

function clickFunction() {
  console.log('submit has been clicked');
  coinCounter();
}


function coinCounter() {
  var coinPurse = {};
  var inputVariable = userInput.value;
  var converterEquation = (inputVariable * 100);
  console.log(converterEquation);

  while (converterEquation >= quarter) {
    converterEquation -= quarter;
    numOfCoins++

  }
  coinPurse.quarters = numOfCoins;
  numOfCoins = 0;

    while (converterEquation >= dime) {
      converterEquation -= dime;
      numOfCoins++
    }
    coinPurse.dimes = numOfCoins;
    numOfCoins = 0;

    while (converterEquation >= nickel) {
      converterEquation -= nickel;
      numOfCoins++
    }
    coinPurse.nickels = numOfCoins;
    numOfCoins = 0;

    while (converterEquation >= penny) {
      converterEquation -= penny;
      numOfCoins++
    }
    coinPurse.pennies = numOfCoins;
    numOfCoins = 0;


  console.log(coinPurse);

}

