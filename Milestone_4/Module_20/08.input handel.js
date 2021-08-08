function fiboSeries(number) {
    if(typeof number != "number" ){
        return "Please give a number";
    }
    if(number<2){
        return "Give a greater than 1 number";
    }
    const fibo = [0, 1];

    for (let i = 2; i <= 10; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}

var fibonacciSerias = fiboSeries(-20);
console.log(fibonacciSerias);