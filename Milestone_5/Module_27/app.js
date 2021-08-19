function updateCaseNumber(product, isIncrease, price) {
    const caseInput = document.getElementById(product + '_number')
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber

    const caseTotal = document.getElementById(product + '_total');
    caseTotal.innerText = caseNumber * price;

    // calculate total

    calculationTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + "_number");
    const procuctNumber = parseInt(productInput.value);
    return procuctNumber;
}

function calculationTotal() {
    const phoneTotal = getInputValue("phone") * 1200;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax_amount').innerText = taxAmount;
    document.getElementById('total_price').innerText = totalPrice;
}


// Phone Events
document.getElementById('phone_plus').addEventListener('click', function () {
    updateCaseNumber('phone', true, 1200);

})
document.getElementById('phone_minus').addEventListener('click', function () {
    updateCaseNumber('phone', false, 1200);
})

// Case Events
document.getElementById('case_plus').addEventListener('click', function () {
    updateCaseNumber('case', true, 59);

})
document.getElementById('case_minus').addEventListener('click', function () {
    updateCaseNumber('case', false, 59);
})