const selected = [];
for (i = 0; i < 10; i++) {
    let random = Math.random() * 100;
    let picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    } else {
        console.log("Found Duplicate",selected, picked);
    }
}
console.log(selected);
