var myMobile = {
    brand: "Apple",
    name: "iPhone",
    model: 6,
    color: "Silver",
    ram: "1gb",
    price: 46000,
}

console.log(myMobile);
console.log("=================")

console.log(myMobile.name);
console.log("=================")


//different ways to set peremeter value

myMobile.price = 38000;
console.log(myMobile);
console.log("=================")

myMobile["price"] = 35000;
console.log(myMobile);
console.log("=================")

var priceProperty = "price";
myMobile[priceProperty] = 32000;
console.log(myMobile);
console.log("=================")