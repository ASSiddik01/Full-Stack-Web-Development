function getInputValue (inputId){
    const amount = document.getElementById(inputId);
    const inputAmount = parseFloat(amount.value);
    // Clean deposite input value
    amount.value = "";
    return inputAmount;
}

document.getElementById('depositeButton').addEventListener('click',function(){
    const inputAmount = getInputValue('depositeAmount');

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
    const newdrowAmount = getInputValue('withdrowAmount');


    const withdorwTotal = document.getElementById('withdrowMoney');
    const oldDrowAmount = parseFloat(withdorwTotal.innerText);
    
    const totalDrowAmount = newdrowAmount + oldDrowAmount;
    withdorwTotal.innerText = totalDrowAmount;


    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount-newdrowAmount;
    balanceTotal.innerText = newTotalBalance;
    
})
