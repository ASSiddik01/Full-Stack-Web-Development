let num1=4;
let num2=7;
let num3=5;

//Maximun
console.log("Maximun");
function maxValue(n1,n2,n3){
    var maxOutput= Math.max(n1,n2,n3);
    return maxOutput;
}
var maximum = maxValue(num1,num2,num3);
console.log(maximum);

//Minimum
console.log("Minimun");
function minValue(n1,n2,n3){
    var minOutput= Math.min(n1,n2,n3);
    return minOutput;
}


var minimum = minValue(num1,num2,num3);
console.log(minimum);