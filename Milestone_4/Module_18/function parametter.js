function juiceKhabo(taka){
    console.log("Mama Juice den");
    console.log("Ai nen taka",taka);
    var juicePrice=10;
    var juiceQuentity= taka/juicePrice;
    return juiceQuentity;

}

var money =200;

var juice = juiceKhabo(money);
console.log("Ai now Juice",juice,"ta");
