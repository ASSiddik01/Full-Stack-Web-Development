document.getElementById('case_plus').addEventListener('click',function(){
    const caseInput =  document.getElementById('case_number')
    const caseNumber = caseInput.value;
    caseInput.value=parseInt(caseNumber)+1;

})