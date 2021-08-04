//Break
var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
    if (i > 7) {
        break;
    }
}

console.log("================")

var numbers = [3, 45, 5, 7, 75, 43, 66, 98, 210, 55, 42];

for (var i = 0; i <= numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;
    }
    console.log(number);

}
