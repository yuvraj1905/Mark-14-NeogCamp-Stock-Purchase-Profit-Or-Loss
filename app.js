const numberOfStocks = document.querySelector("#numberOfStocks");
const currentPrice = document.querySelector("#currentPrice");

const initialPrice = document.querySelector("#initialPrice");
const submitbtn = document.querySelector("#submit-btn");
const Output = document.querySelector("#Output");

function checkPrice() {
  var startPrice = Number(initialPrice.value);
  var quantity = Number(numberOfStocks.value);
  var currentValue = Number(currentPrice.value);

  var moneyInvested = startPrice * quantity;
  var currentEstimate = currentValue * quantity;

  var result = checkProfitOrLoss(moneyInvested, currentEstimate);
  // console.log(result);
}

function checkProfitOrLoss(initial, now) {
  var result =
    initial > now
      ? `Loss of ${initial - now} and `
      : `Profit of ${now - initial} and `;
  var resultPercent =
    initial > now
      ? `you got a loss of ${Math.trunc((initial - now) * 100) / initial}%.`
      : `you got a Profit of ${Math.trunc((now - initial) * 100) / initial}%.`;

  var ans;
  if (initial === now) {
    ans = "No gain No Loss";
  } else {
    ans = result + resultPercent;
    Output.innerText = ans;
  }
  Output.innerText = ans;
}

submitbtn.addEventListener("click", checkPrice);
