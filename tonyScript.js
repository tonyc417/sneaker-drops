var travisJordan = document.querySelector("#avgPrice");

travisJordan.innerHTML = "StockX Average Price: $" + data.ProductActivity[0].localAmount;

console.log(data);