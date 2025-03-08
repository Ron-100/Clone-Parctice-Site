// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };

// intro arrow
document.addEventListener('DOMContentLoaded',function(){
    let arrow = document.querySelector('.intro-arrow a');
    arrow.addEventListener('mouseover',function(){
        arrow.style.animationPlayState = "paused";
    })
    arrow.addEventListener('mouseout',function(){
        arrow.style.animationPlayState = "running";
    })
})
// intro arrow


// ikib animation

document.addEventListener('DOMContentLoaded',function(){
    let ikib = document.querySelector('.name a');
    let started = false;
    
    function ikibSlide(){
        let elementPosition = ikib.getBoundingClientRect().top;
        let windowHight = window.innerHeight;
        
        if(!started && elementPosition < windowHight){
            started = true;
            ikib.classList.add('show')
        }
    }
    window.addEventListener('scroll',ikibSlide)

    ikib.addEventListener('click',function(){
        window.scrollTo(0, 0);
    })
})

// ikib animation


// min screen nav

document.addEventListener('DOMContentLoaded',function(){
    let menu = document.querySelector('.menu-btn');
    let menuList = document.querySelector('.nav ul');
    let links = document.querySelectorAll('.nav ul li a');
    menu.addEventListener('click',function(){
        menuList.classList.toggle('appear')
        links.forEach(function(link){
            link.classList.toggle('show')
        })
    })

    const menubtn = document.querySelector('.menu-btn');
    let nav1 = document.querySelector('.nav1');
    let nav2 = document.querySelector('.nav2');
    let nav3 = document.querySelector('.nav3');
    menubtn.addEventListener('click', function(){
        nav2.classList.toggle('nav2js')
        nav1.classList.toggle('nav1js')
        nav3.classList.toggle('nav3js')
    })
})

// min screen nav


// page marker

document.addEventListener('DOMContentLoaded',function(){
    let pages = document.querySelectorAll('.home, .first-bdyimg, .about, .services, .team, .history, .works, .contact');
    let navLinks = document.querySelectorAll('.nav ul li');
    
    function activePage(){
        let scrollPosition = window.scrollY + 200;
        index = 0;
        for (let i = 0; i < pages.length; i++) {
            if (scrollPosition > pages[i].offsetTop) {
                index = i;
            }else{
                break;
            }
        }
        
        navLinks.forEach(function(links){
            links.classList.remove('active');
        })
        navLinks[index].classList.add('active');
        
    }

    window.addEventListener('scroll', activePage);
    activePage();
})

// page marker


// home page animation

document.addEventListener('DOMContentLoaded',function(){
    let rSqu = document.querySelector('.r-squ')
    let inrSqr = document.querySelector('.inr-sqr')
    let inrSqrP = document.querySelector('.inr-sqr p')
    let started = false;
    
    window.addEventListener('scroll',function(){
        let elementPosition = inrSqr.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (!started && windowHeight > elementPosition) {
            started = true
            rSqu.classList.add('r-squani')
            inrSqr.classList.add('inr-sqrani')
            inrSqrP.classList.add('inr-sqraniT')
            
            setTimeout(function(){
                rSqu.style.boxShadow = '10px 10px 0px rgb(192, 192, 192)';
                rSqu.style.transition = 'all 2s';
            },1000)
        }
    })
})

// home page animation


// first body Image

document.addEventListener('DOMContentLoaded',function(){
    let spanTag = document.querySelectorAll('.first-bdyimg p span');
    let started = false;

    function addColr(){
        let elementPosition = spanTag[0].getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if(windowHeight > elementPosition && !started){
            started = true;
            setTimeout(function(){
                spanTag.forEach(function(colorTag){
                    colorTag.classList.add('addtxtcolr')
                })
            },1000)
        }
    }

    window.addEventListener('scroll',addColr)
    
})

// first body Image


// services 
// understand it

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.box1');
    const ltoR = document.querySelector('.all-contents-js');

    // section-Mark

    function mark(index) {
        options.forEach(op => op.classList.remove('active')); // Remove 'active' from all
        options[index].classList.add('active'); // Add 'active' to clicked one
    }
    
    // Attach event listeners to each `.box1`
    options.forEach((option, index) => {
        option.addEventListener('click', function () {
            mark(index); // Update active class
        });
    });

    // section-Mark


    function getPositionValues() {
        let width = window.innerWidth;

        if (width > 1200) {
            return [0, -70, -140, -210, -280];
        } else if (width >= 986) {
            return [0, -56, -112, -168, -224];
        } else if (width >= 870) {
            return [0, -50, -100, -210, -280];
        } else if (width >= 768) {
            return [0, -45, -90, -135, -180];
        } else if (width < 768) {
            return [0, -22, -44, -66, -88];
        } else {
            return [0, -70, -140, -210, -280];
        }
    }

    function updatePosition(index) {
        const positionValues = getPositionValues();
        if (index < positionValues.length) {
            ltoR.style.left = `${positionValues[index]}em`;
        }
    }

    // Attach event listeners to each `.box1`
    options.forEach((option, index) => {
        option.addEventListener('click', function () {
            updatePosition(index);
        });
    });

    // Update positions on window resize
    window.addEventListener('resize', function () {
        updatePosition(0); // Reset position to the first index when resizing
    });
});

// services 