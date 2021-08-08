const phones = [
    { name: "iphone", model: "4", rom: "16gb", ram: "1gb", price: 23000, quantity: 3 },
    { name: "iphone", model: "5", rom: "32gb", ram: "1gb", price: 16000, quantity: 2 },
    { name: "iphone", model: "6", rom: "64gb", ram: "1gb", price: 15000, quantity: 5 },
    { name: "iphone", model: "7", rom: "128gb", ram: "2gb", price: 17000, quantity: 1 },
    { name: "iphone", model: "8", rom: "256gb", ram: "2gb", price: 19000, quantity: 1 },
]

let totalPrice = 0;

for (const phone of phones) {
    const productPrice = phone.price * phone.quantity;
    totalPrice = totalPrice + productPrice;
}

console.log(totalPrice);