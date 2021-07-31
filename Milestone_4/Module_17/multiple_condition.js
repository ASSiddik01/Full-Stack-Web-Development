var gotJob = true;
var hasMoney = 100000;
var hasFlat = true;
var hasHouse = true;



if (gotJob == true && hasFlat == true) {
    console.log("Biye Confirm");
} else {
    console.log("Biye cancel");
}

if (gotJob == true || hasMoney > 200000) {
    console.log("Biye Confirm");
} else {
    console.log("Biye cancel");
}

if (gotJob == true && hasMoney > 200000) {
    console.log("Biye Confirm");
} else {
    console.log("Biye cancel");
}

if ((gotJob == true || hasMoney > 200000) && hasHouse == true) {
    console.log("Biye Confirm");
} else {
    console.log("Biye cancel");
}