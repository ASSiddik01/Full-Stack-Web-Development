// let and const
const name="Abu Shama";
let phone = 'iphone 6';

// Tamplate string
const about = `I am ${name}. I have a ${phone}`;
console.log(about);

// Arrow function
const maxValue = x => x*x;
console.log(maxValue(5));

// Defalult parameter and speard array
const numbers = [22,32,43,23,24,33,55,45];

const maxNumber = Math.max(...numbers);
console.log(maxNumber);