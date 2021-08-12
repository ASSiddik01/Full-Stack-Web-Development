let products = [
    { name: "Apple watch", price: 34000 },
    { name: "Xaomi watch", price: 7000 },
    { name: "Apple iphone6 phone", price: 45000 },
    { name: "Samsung s6 phone", price: 40000 },
    { name: "Apple laptop", price: 80000 },
    { name: "ASUS laptop", price: 55000 }
]


for (const product of products){
    if(product.price < 10000){
        break;
    }
    console.log(product);
}

console.log("========================");

for (const product of products){
    if(product.price < 10000){
        continue;
    }
    console.log(product);
}