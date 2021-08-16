function getInputValue (){
    const amount = document.getElementById('depositeAmount');
    const inputAmount = parseFloat(amount.value);
    // Clean deposite input value
    amount.value = "";
    return inputAmount;
}

document.getElementById('depositeButton').addEventListener('click',function(){
    const inputAmount = getInputValue();

    const depositeTotal = document.getElementById('depositeMoney');
    const oldAmount = parseFloat(depositeTotal.innerText);
    
    const totalAmount = inputAmount + oldAmount;
    depositeTotal.innerText = totalAmount;


    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount+inputAmount;
    balanceTotal.innerText = newTotalBalance;   
    
})

// Withdrow

document.getElementById('withdrowButton').addEventListener('click',function(){
    const drowamount = document.getElementById('withdrowAmount');
    const newdrowAmount = parseFloat(drowamount.value);

    const withdorwTotal = document.getElementById('withdrowMoney');
    const oldDrowAmount = parseFloat(withdorwTotal.innerText);
    
    const totalDrowAmount = newdrowAmount + oldDrowAmount;
    withdorwTotal.innerText = totalDrowAmount;

    drowamount.value = "";

    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount-newdrowAmount;
    balanceTotal.innerText = newTotalBalance;
    
})
