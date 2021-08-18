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