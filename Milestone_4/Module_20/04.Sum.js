function arraySummation(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
        var output = numbers[i];
        sum = sum+output;
    }
    return sum;
}

var totalSum = arraySummation([83,84,83,77,55]);
console.log(totalSum);