function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }
    return factorial;
}

console.log(getFactorial(5));

function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial *= i;
        i--;
    }
    return factorial;
}

console.log(getFactorial(5));
