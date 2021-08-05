function getFactorial(number) {
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial;
}

console.log(getFactorial(5));
console.log(getFactorial(6));