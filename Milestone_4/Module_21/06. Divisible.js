for (var i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Devisiable by 3 and 5")
    }
    if (i % 3 == 0) {
        console.log("Devisiable by 3")
    }
    if (i % 5 == 0) {
        console.log("Devisiable by 5")
    } else {
        console.log(i);
    }
}