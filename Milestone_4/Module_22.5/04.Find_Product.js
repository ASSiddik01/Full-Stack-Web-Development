let products = [
    { name: "Apple watch", price: 34000 },
    { name: "Xaomi watch", price: 34000 },
    { name: "Apple iphone6 phone", price: 34000 },
    { name: "Samsung s6 phone", price: 34000 },
    { name: "Apple laptop", price: 34000 },
    { name: "ASUS laptop", price: 34000 }
]

function searchProduct(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product)
        }
    }
    return matched;
}

const find = searchProduct(products, "phone");
console.log(find);