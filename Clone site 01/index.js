// Email check
const emailCheck = document.getElementById('email');
emailCheck.addEventListener('input',function(){
    let eValue = document.getElementById('email').value;
    let eCheck = document.getElementById('emailCheck');
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(eValue === ""){
        eCheck.style.display = 'none'
    }else if(!regex.test(eValue)) {
        eCheck.style.display = 'block'
    }else{
        eCheck.style.display = 'none'
    }
})