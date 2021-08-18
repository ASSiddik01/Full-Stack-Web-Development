function updateCaseNumber(isIncrease) {
    const caseInput = document.getElementById('case_number')
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber

    const caseTotal = document.getElementById('case_total');
    caseTotal.innerText = caseNumber *59

}


document.getElementById('case_plus').addEventListener('click', function () {
    updateCaseNumber(true);

})

document.getElementById('case_minus').addEventListener('click', function () {
    updateCaseNumber(false);
})