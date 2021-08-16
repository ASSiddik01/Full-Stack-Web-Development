document.getElementById('submitButton').addEventListener('click',function(){
    const userEmail = document.getElementById('inputEmail').value;
    const userPassword = document.getElementById('inputPassword').value;
    if(userEmail == "user@ad.com" && userPassword == "mypassword"){
        window.location.href = "03.Banking.html";
    }


})