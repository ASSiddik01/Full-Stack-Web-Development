function fiboSeries(n){
    if (n == 0){
        return [0];
    }
    if(n==1){
        return [0, 1];
    }
    const fibo = fiboSeries(n-1);
    fibo[n]=fibo[n-1] + fibo [n-2];
    return fibo;
}

const fibonacciSeries = fiboSeries(9);
console.log(fibonacciSeries);
