// when reload the page it will get start form the top
window.onload = function () {
    window.scrollTo(0, 0);
};
// when reload the page it will get start form the top



// up button

document.addEventListener('DOMContentLoaded',function(){
    let upBtn = document.querySelector('.up-btn')
    window.addEventListener('scroll',function(){
        if (window.scrollY > 176) {
            upBtn.classList.replace('up-btn','up-hide');
        }else{
            upBtn.classList.replace('up-hide','up-btn')
        }
    })
})

// up button




// menu
document.addEventListener('DOMContentLoaded',function(){
    let menuBtn = document.querySelector('.toggle-menu')
    let menu = document.querySelector('.part3')
    let menuLinks = document.querySelector('.menu')

    menuBtn.addEventListener('click',function(){
        if(window.innerWidth <= 1000){
            menu.classList.toggle('md-part3')
            menuLinks.classList.toggle('md-menu')

            if (menu.classList.contains('md-part3')) {
                menu.removeAttribute('id');
            } else {
                menu.setAttribute('id', 'part2');
            }
        }
    })
    
    // Ensure menu is visible when resizing back above 1000px
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1000) {
            menu.classList.remove('md-part3');
            menuLinks.classList.remove('md-menu');
            menu.setAttribute('id', 'part2'); // Reset ID if needed
        }
    });

})


// Initialize Swiper
document.addEventListener('DOMContentLoaded',function(){
    let swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction:false,
            pauseOnMouseEnter:true,
        },
        loop:true,
        speed:1000,
        allowTouchMove: false
    });
})


// banner
document.addEventListener('DOMContentLoaded',function(){
    let requiredInfo = document.querySelector('.required-info')
    window.addEventListener('scroll', function(){
        if (window.scrollY >= 40) {
            requiredInfo.classList.add('required-infoAnimate')
        }
    })
    
    if(window.innerHeight < 729){
        requiredInfo.classList.add('required-infoAnimate')
    }
})


// about 



// Image Animation
document.addEventListener('DOMContentLoaded',function(){
    let img1 = document.querySelector('.img1');
    let img2 = document.querySelector('.img2');
    let img3 = document.querySelector('.img3');
    let img4 = document.querySelector('.img4');

    let imageSide = document.querySelector('.image-side');
    let started = false;

    window.addEventListener('scroll',function(){
        if (!started) {
            let elementPosition = img2.getBoundingClientRect();
            let windowHeight = window.innerHeight;
            if (windowHeight >= elementPosition.top) {
                img1.classList.add('img1-anim')
                img2.classList.add('img2-anim')
                img3.classList.add('img3-anim')
                img4.classList.add('img4-anim')
            }
        }
    })
})



// manage details

document.addEventListener('DOMContentLoaded',function(){
    let valueDisplays = document.querySelectorAll(".num");
    let tillTime = 4000;
    let started = false;

    window.addEventListener('scroll',function(){
        
        if (!started){
            
            valueDisplays.forEach((valueDisplay) => {

                let elementPosition = valueDisplay.getBoundingClientRect();
                let windowHeight = window.innerHeight;

                if(windowHeight >= elementPosition.top){

                    started = true;

                    let startValue = 0;
                    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                    let duration = Math.floor(tillTime / endValue);
            
                    let counter = setInterval(function () {
                        startValue = startValue + 2;
                        valueDisplay.textContent = startValue;
                        if (startValue == endValue) {
                        clearInterval(counter);
                        }
                    },duration);
                }
            });
        }
    })

})

// manage details


// room logs

document.addEventListener('DOMContentLoaded',function(){
    let roomLogs = document.querySelector('.room-logs')
    let roomA = document.querySelector('.roomA')
    let roomB = document.querySelector('.roomB')
    let roomC = document.querySelector('.roomC')

    let started = false;
    window.addEventListener('scroll',function(){
        if (!started) {
            let elementPosition = roomLogs.getBoundingClientRect();
            let windowHeight = window.innerHeight;
            if (windowHeight > elementPosition.top) {
                started = true;
                roomA.classList.add('room1-ani')
                roomB.classList.add('room2-ani')
                roomC.classList.add('room3-ani')
            }
        }
    })
})

// room logs