function smallestValue(numbers){
    let min = numbers[0];
    for ( let i=0; i <numbers.length;i++){
        var element = numbers[i];
        if (element<min){
            min=element;
        }
    }return min;
}

const smallNumber = smallestValue([45,6,7,44,56,70,4,24]);


console.log(smallNumber);

