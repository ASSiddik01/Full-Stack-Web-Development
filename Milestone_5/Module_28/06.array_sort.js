const numbers = [3,5,2,55,63,62,33,44,52,88,76];

const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

const recersedNumbers = numbers.reverse();
console.log(recersedNumbers);

const sortedByFunction = numbers.sort(function(a,b){
    return a-b;
})
console.log(sortedByFunction);
