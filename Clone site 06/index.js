const header = document.querySelector('.header');
let Yscrollprev = window.scrollY;

window.addEventListener('scroll',function(){
    let Yscrollcurr = window.scrollY;
    
    if (Yscrollcurr > Yscrollprev) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.641)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    }

    Yscrollprev = Yscrollcurr;
})



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".sec1, .sec2, .secA, .secB"); 
    const navLinks = document.querySelectorAll(".options a");

    function changeActiveLink() {
        let index = 0;
        let scrollPosition = window.scrollY + 100; // Offset for better accuracy
        // console.log(scrollPosition);
        
        // Loop through sections to find the one currently in view
        for (let i = 0; i < sections.length; i++) {
            if (scrollPosition >= sections[i].offsetTop) {
                index = i;
            } else {
                break;
            }
        }

        // Remove active class from all links, then add to the correct one
        navLinks.forEach(function(link){
            link.classList.remove("active")
        });
        navLinks[index].classList.add("active");
    }

    changeActiveLink(); // Run once on page load
    window.addEventListener("scroll", changeActiveLink);
});



document.addEventListener('DOMContentLoaded',function(){
    let menu = document.querySelector('#menu')
    let about = document.querySelector('.align-about')
    let cage = document.querySelectorAll('.cage')
    let contactUs = document.querySelector('.contactUs')
    let form = document.querySelector('.form')
    window.addEventListener('scroll',function(){
        let viewport = window.scrollY;
        if(viewport > 278){
            menu.classList.add('ani-menu')
        }

        if(viewport > 1246){
            console.log('ok');
            about.classList.add('ani-about')
        } 

        if(viewport > 350){
            console.log('ok');
            cage[0].classList.add('ani-cage')
            cage[1].classList.add('ani-cage')
        }   
        
        if(viewport > 2220){
            contactUs.classList.add('ani-sec')
        } 

        if(viewport > 2220){
            form.classList.add('ani-sec')
        }
    })
})


// Email check
const emailCheck = document.getElementById('email');
emailCheck.addEventListener('input',function(){
    let eValue = document.getElementById('email').value;
    let eCheck = document.getElementById('mailCheck');
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(eValue === ""){
        eCheck.style.display = 'none'
    }else if(!regex.test(eValue)) {
        eCheck.style.display = 'block'
    }else{
        eCheck.style.display = 'none'
    }
})





