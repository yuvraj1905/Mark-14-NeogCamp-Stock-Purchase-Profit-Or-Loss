const numberOfStocks = document.querySelector("#numberOfStocks");
const currentPrice = document.querySelector("#currentPrice");

const initialPrice = document.querySelector("#initialPrice");
const submitbtn = document.querySelector("#submit-btn");
const Output = document.querySelector("#Output");

function checkPrice() {
  var startPrice = initialPrice.value;
  var quantity = numberOfStocks.value;
  var currentValue = currentPrice.value;

  if (startPrice === "" || quantity === "" || currentValue === "") {
    alert("Please enter all required values ");
    return;
  }

  var moneyInvested = Number(startPrice) * Number(quantity);
  var currentEstimate = Number(currentValue) * Number(quantity);

  var result = checkProfitOrLoss(moneyInvested, currentEstimate);
  // console.log(result);
}

function checkProfitOrLoss(initial, now) {
  var loss = initial - now;
  var profit = now - initial;
  var lossPercent = (((initial - now) * 100) / initial).toFixed(2);
  var profitPercent = (((now - initial) * 100) / initial).toFixed(2);
  var result =
    initial > now
      ? `Feels bad!! You got a loss of Rs ${loss} which is `
      : `Woahhh! You got a profit of Rs ${profit} which is `;
  var resultPercent =
    initial > now
      ? `${lossPercent}% of loss over initial value😐.`
      : ` ${profitPercent}% of profit over the initial value 🤩💰.`;

  var ans;
  if (initial === now) {
    ans = "No gain No Loss 🤠";
  } else {
    ans = result + resultPercent;
    Output.innerText = ans;
  }
  Output.innerText = ans;
  Output.style.display = "block";
  if (lossPercent > 50) {
    document.body.style.backgroundColor = "red";
    return;
  } else if (lossPercent <= 50) {
    document.body.style.backgroundColor = "white";
    return;
  }
}

submitbtn.addEventListener("click", checkPrice);
