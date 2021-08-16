document.getElementById('depositeButton').addEventListener('click',function(){
    const amount = document.getElementById('depositeAmount');
    const depositeTotal = document.getElementById('depositeMoney');
    depositeTotal.innerText = amount.value;
    amount.value= "";
})