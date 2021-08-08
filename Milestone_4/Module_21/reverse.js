let string = "My name is Abu Shama";

function reversed(myText) {
    let reverse = "";
    for (const letter of myText) {
        // console.log(letter);
        reverse = letter + reverse;
    }return reverse;
}

let reverseString = reversed(string);

console.log(reverseString);