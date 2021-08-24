const nums = [2, 4, 6, 8];

let output = [];

for (const num of nums) {
    const result = num * 2
    output.push(result);
}

console.log(output);

// Map
const dubble = num => num * 2;
const result = nums.map(dubble);
console.log(result);