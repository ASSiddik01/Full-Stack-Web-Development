document.getElementById('depositeButton').addEventListener('click',function(){
    const amount = document.getElementById('depositeAmount');
    const inputAmount = parseFloat(amount.value);

    const depositeTotal = document.getElementById('depositeMoney');
    const oldAmount = parseFloat(depositeTotal.innerText);
    
    const totalAmount = inputAmount + oldAmount;
    depositeTotal.innerText = totalAmount;

    amount.value = "";

    // Update total balance
    const balanceTotal = document.getElementById('totalMoney');
    const balnceAmount = parseFloat(balanceTotal.innerText);

    const newTotalBalance = balnceAmount+inputAmount;
    balanceTotal.innerText = newTotalBalance;   

    
})
