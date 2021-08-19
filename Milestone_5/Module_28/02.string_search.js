const products = [
    'Apple Phone',
    'Samsung phone',
    'Apple Laptop',
    'Samsung laptop'
]

const search = 'phone';

const output = [];

// for (const product of products){
//     if(product.toLowerCase().indexOf(search.toLowerCase()) != -1){
//         output.push(product);
//     }
// }

// console.log(output);

for (const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        output.push(product);
    }
}

console.log(output);