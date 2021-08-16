document.getElementById('depositeButton').addEventListener('click',function(){
    const amount = document.getElementById('depositeAmount');
    const inputAmount = parseFloat(amount.value);

    const depositeTotal = document.getElementById('depositeMoney');
    const oldAmount = parseFloat(depositeTotal.innerText);
    
    const totalAmount = inputAmount + oldAmount;
    depositeTotal.innerText = totalAmount;

    amount.value = "";

    
})
