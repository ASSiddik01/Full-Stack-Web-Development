function largestValue(numbers){
    let largest = numbers[0];
    for ( let i=0; i <numbers.length;i++){
        var element = numbers[i];
        if (element>largest){
            largest=element;
        }
    }return largest;
}

// const largeNumber = largestValue([45,6,7,44,56,70,4,24]);
const largeNumber = largestValue([-34,-5,-21,-12]);

console.log(largeNumber);