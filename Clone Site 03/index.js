const humicon = document.getElementById('hum-icon')
const right = document.getElementById('right')

humicon.addEventListener('click', function(e){
    if (right.style.display === 'flex') {
        right.style.display = 'none'
    } else {
        right.style.display = 'flex'
    }
})





// email check

const email = document.getElementById('email')
const text = document.getElementById('corrtTxt')
email.addEventListener('input', function(){
    let mailregex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
    
    if (mailregex.test(email.value) || email.value === '') {
        text.style.display = 'none'
    }else{
        text.style.display = 'block'
    }
})

// email check


// swiper js

var swiper = new Swiper(".swiper",{
    slidesPerView:1,
    spaceBetween:10,
    speed:400,
    preventClicks:true,
    noSwiping:true,
    freeMode:false,
    navigation:{
        nextEl:".next",
        prevEl:".prev",
    },
    breakpoints:{
        550:{
            slidesPerView:2,
            spaceBetween:20,
        },
        950:{
            slidesPerView:3,
            spaceBetween:30,
        },
        1200:{
            slidesPerView:4,
            spaceBetween:30,
        }
    }
})

// swiper js