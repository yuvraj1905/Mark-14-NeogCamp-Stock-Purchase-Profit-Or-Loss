const numberOfStocks = document.querySelector("#numberOfStocks");
const currentPrice = document.querySelector("#currentPrice");

const initialPrice = document.querySelector("#initialPrice");
const submitbtn = document.querySelector("#submit-btn");
const Output = document.querySelector("#Output");

function checkPrice() {
  var startPrice = Number(initialPrice.value);
  var quantity = Number(numberOfStocks.value);
  var currentValue = Number(currentPrice.value);

  if (startPrice === "" || quantity === "" || currentValue === "") {
    alert("Please enter all required values ");
  }

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
      ? `you got a loss of ${(((initial - now) * 100) / initial).toFixed(2)}%.`
      : `you got a Profit of ${(((now - initial) * 100) / initial).toFixed(
          2
        )}%.`;

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
