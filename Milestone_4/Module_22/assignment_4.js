/*=============================
            Problem-01
=============================*/

function seerToMon(seer) {
    // Input type check
    if (typeof seer != "number") {
        return "Please! give a number";
    }
    // Negative input check
    if (seer < 40) {
        return "Please! give a number greater than 40 or equal to 40";
    }
    let mon = seer / 40;
    return mon;
}

const result = seerToMon(800);
console.log(result);




/*=============================
            Problem-02
=============================*/

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // Input type check
    if (typeof shirtQuantity != "number" || typeof pantQuantity != "number" || typeof shoeQuantity != "number") {
        return "Please! give all product quantity number.If you don't purchase any quantity of an item, give the value 0";
    }
    // Negative input check
    if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return "Negative quantity is not acceptable";
    }
    // Per product price
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // Every item total cost calculation
    const totalShirtPrice = perShirtPrice * shirtQuantity;
    const totalPantPrice = perPantPrice * pantQuantity;
    const totalShoePrice = perShoePrice * shoeQuantity;

    // All item total cost calculation
    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice
}

//Product quantity
let shirt = 2;
let pant = 3;
let shoe = 2;

const total = totalSales(shirt, pant, shoe);
console.log(total);




/*=============================
            Problem-03
=============================*/

function deliveryCost(quantity) {

    // Differant stage delivery charge
    const firstStageDeliveryCharge = 100;
    const secondStageDeliveryCharge = 80;
    const restStageDeliveryCharge = 50;

    // Input type check
    if (typeof quantity != "number") {
        return "Please! give product quantity number";
    }

    // Negative input check
    if (quantity < 0) {
        return "Negative quantity is not acceptable";
    }

    // Highest 100 quantity delivery cost calculation
    if (quantity <= 100) {
        const firstStageDeliveryCost = firstStageDeliveryCharge * quantity;
        return firstStageDeliveryCost;
    }

    // Highest 200 quantity delivery cost calculation
    else if (quantity <= 200) {
        const firstStageDeliveryCost = firstStageDeliveryCharge * 100;
        const restQuantity = quantity - 100;
        const secondStageDeliveryCost = secondStageDeliveryCharge * restQuantity;
        const totalCharge = firstStageDeliveryCost + secondStageDeliveryCost
        return totalCharge;
    }

    // More than 200 quantity delivery cost calculation
    else {
        const firstStageDeliveryCost = firstStageDeliveryCharge * 100;
        const secondStageDeliveryCost = secondStageDeliveryCharge * 100;
        const restQuantity = quantity - 200;
        const restStageDeliveryCost = restStageDeliveryCharge * restQuantity;
        const totalCharge = firstStageDeliveryCost + secondStageDeliveryCost + restStageDeliveryCost;
        return totalCharge;
    }
}

const totalCost = deliveryCost(230);
console.log(totalCost);




/*=============================
            Problem-04
=============================*/

function perfectFriend(names) {
    // Input type check
    for (const name of names) {
        if (typeof name != "string") {
            return "Please! give a string array";
        }
    }

    // Expected result calculate
    for (const name of names) {
        if (name.length == 5) {
            return name;
        }
    }
}


let friendsName = ["shakib", "siddik", "salman", "shama", "shawon" ,"sunny"];

const bestFriend = perfectFriend(friendsName);
console.log(bestFriend);




