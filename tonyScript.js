var travisJordan = document.querySelector("#avgPrice");

travisJordan.innerHTML = "StockX Average Price: $" + data.ProductActivity[0].localAmount;
console.log(data.ProductActivity[0].shoeSize);
for (var i = 0; i < data.ProductActivity.length; i++) {
    console.log(data.ProductActivity[i].localAmount);
}
