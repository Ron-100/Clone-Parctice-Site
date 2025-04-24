document.addEventListener('DOMContentLoaded', function(){
    
    const fromContainer = document.querySelector('#from_container')

    let logIng = document.getElementById('btn')
    let logOutTxt ;
    
    logIng.addEventListener('click', function(e){
        e.stopPropagation();
        let userName = document.getElementById('username').value;
        let passWord = document.getElementById('password').value;  

        if (userName !== '' && passWord !== '') {
            let UserDetails = {
                Name: userName,
                Pass: passWord
            }
            localStorage.setItem('user', JSON.stringify(UserDetails))
            fromContainer.style.display = 'none'

            if (localStorage !== '') {
                let wclMss = document.createElement('p')
                wclMss.innerHTML = `Welcome ${UserDetails.Name}`
                wclMss.style.color = 'white'
                wclMss.style.fontSize = '25px'
                document.body.appendChild(wclMss);

                let showInfos = document.createElement('a');
                showInfos.textContent = 'See Your ID & Pass'
                showInfos.style.color = 'white'
                showInfos.style.cursor = 'pointer'
                document.body.appendChild(showInfos)

                showInfos.addEventListener('click',function(e){
                    e.stopPropagation();
                    
                    if (localStorage !== '') {
                        let detailsPrintConsole = JSON.parse(localStorage.getItem('user'));
                        alert(`Your ID - ${detailsPrintConsole.Name} & Your Pass - ${detailsPrintConsole.Pass}`)
                        alert(`If you want to delete your Data, Touch anywere in the blue area after lou Out`)
                    }
                });
    
                logOutTxt= document.createElement('a')
                logOutTxt.innerHTML = 'Log Out!'
                logOutTxt.style.color = 'white'
                logOutTxt.style.fontSize = '12px'
                logOutTxt.style.cursor = 'pointer'
                logOutTxt.style.cursor = 'pointer'
                logOutTxt.style.textDecoration = 'underline'
                document.body.appendChild(logOutTxt)
                

                logOutTxt.addEventListener('click', function(e){
                    e.stopPropagation();
                    location.reload();
                })
            }

    
            let rmvAlert = document.getElementById('alert-messg')
            if (rmvAlert) {
                rmvAlert.remove();
            }            

        } else {
            alerT();

            const userNameField = document.getElementById('username');
            const passwordField = document.getElementById('password');

            const removeAlert = function(){
                const alertMsg = document.getElementById('alert-messg');
                
                if (alertMsg) {
                    alertMsg.remove();
                }
                
                // use for optimization - without this two line it works
                // userNameField.removeEventListener('input', removeAlert);
                // passwordField.removeEventListener('input', removeAlert);  
            };

            userNameField.addEventListener('input', removeAlert);
            passwordField.addEventListener('input', removeAlert);
        }
        function alerT(){
            if (!document.getElementById('alert-messg')) {
                let textTag = document.createElement('p')
                textTag.innerHTML = 'Please fill the details'
                textTag.id = 'alert-messg'
                textTag.style.color = 'white'
                textTag.style.fontSize = '18px'
                document.body.appendChild(textTag)
            }
        }
    })

    
    document.body.addEventListener('click',function(){
        localStorage.clear()
    })
})

document.addEventListener('DOMContentLoaded', function(){

    let PassInput = document.getElementById('password');
    let showLevel = document.getElementById('show_level')

    PassInput.addEventListener('input',function(){
        
        let passField = PassInput.value;

        // let hasLower = /[a-z]/.test(passField);
        // let hasUpper = /[A-Z]/.test(passField);
        // let hasDigit = /\d/.test(passField);
        // let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(passField);

        if (passField.length > 0) {
            if (passField.length <= 4) {
                showLevel.style.display = 'block'
                showLevel.innerText = 'Weak'
            }else if (passField.length > 4 && passField.length <= 8 ) {
                showLevel.style.display = 'block'
                showLevel.innerText = 'Medium' 
            }else if (passField.length > 8 && passField.length == 12 ) {
                showLevel.style.display = 'block'
                showLevel.innerText = 'Strong' 
            }else {
                return;
            }
        } else {
            showLevel.style.display = 'none'
        }
    })
})

// document.addEventListener('DOMContentLoaded', function () {
//     let PassInput = document.getElementById('password');
//     let showLevel = document.getElementById('show_level');

//     PassInput.addEventListener('input', function () {
//         let passField = PassInput.value;

//         if (passField.length > 0) {
//             showLevel.style.display = 'block'; // show the text when input is not empty

//             if (passField.length <= 4) {
//                 showLevel.innerText = 'Weak';
//                 showLevel.style.color = 'red';
//             } 
//             else if (
//                 passField.length <= 8 &&
//                 /[a-z]/.test(passField) &&
//                 /[A-Z]/.test(passField) &&
//                 /\d/.test(passField)
//             ) {
//                 showLevel.innerText = 'Medium';
//                 showLevel.style.color = 'orange';
//             } 
//             else if (
//                 passField.length > 8 &&
//                 /[a-z]/.test(passField) &&
//                 /[A-Z]/.test(passField) &&
//                 /\d/.test(passField) &&
//                 /[!@#$%^&*(),.?":{}|<>]/.test(passField)
//             ) {
//                 showLevel.innerText = 'Strong';
//                 showLevel.style.color = 'green';
//             } 
//             else {
//                 showLevel.innerText = 'Keep Going';
//                 showLevel.style.color = 'gray';
//             }
//         } else {
//             showLevel.style.display = 'none'; // hide when input is empty
//         }
//     });
// });

