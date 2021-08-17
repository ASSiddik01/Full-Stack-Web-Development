function getInputValue(inputId) {
    const amount = document.getElementById(inputId);
    const inputAmount = parseFloat(amount.value);
    // Clean deposite input value
    amount.value = "";
    return inputAmount;
}

function updateTotalFiled(totalFiledId, inputAmount) {
    const depositeTotal = document.getElementById(totalFiledId);
    const oldAmount = parseFloat(depositeTotal.innerText);

    const totalAmount = inputAmount + oldAmount;
    depositeTotal.innerText = totalAmount;
}

function updateBlance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    if (isAdd == true) {
        const newTotalBalance = balnceAmount + inputAmount;
        balanceTotal.innerText = newTotalBalance;
    } else {
        const newTotalBalance = balnceAmount - inputAmount;
        balanceTotal.innerText = newTotalBalance;
    }
}

document.getElementById('depositeButton').addEventListener('click', function () {
    const inputAmount = getInputValue('depositeAmount');
    if (inputAmount > 0) {
        updateTotalFiled('depositeMoney', inputAmount)
        updateBlance(inputAmount, true);
    }

})

// Withdrow

document.getElementById('withdrowButton').addEventListener('click', function () {
    const newdrowAmount = getInputValue('withdrowAmount');

    if (newdrowAmount > 0) {
        
        updateTotalFiled('withdrowMoney', newdrowAmount)
        updateBlance(newdrowAmount, false);
    }


})
