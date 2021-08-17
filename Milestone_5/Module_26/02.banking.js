function getInputValue (inputId){
    const amount = document.getElementById(inputId);
    const inputAmount = parseFloat(amount.value);
    // Clean deposite input value
    amount.value = "";
    return inputAmount;
}

function updateTotalFiled(totalFiledId,inputAmount){
    const depositeTotal = document.getElementById(totalFiledId);
    const oldAmount = parseFloat(depositeTotal.innerText);
    
    const totalAmount = inputAmount + oldAmount;
    depositeTotal.innerText = totalAmount;
}

document.getElementById('depositeButton').addEventListener('click',function(){
    const inputAmount = getInputValue('depositeAmount');

    updateTotalFiled('depositeMoney', inputAmount)

    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount+inputAmount;
    balanceTotal.innerText = newTotalBalance;   
    
})

// Withdrow

document.getElementById('withdrowButton').addEventListener('click',function(){
    const newdrowAmount = getInputValue('withdrowAmount');



    updateTotalFiled('withdrowMoney', newdrowAmount)


    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount-newdrowAmount;
    balanceTotal.innerText = newTotalBalance;
    
})
