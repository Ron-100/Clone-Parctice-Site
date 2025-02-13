// hide & scroll navigation start

const header = document.querySelector('.header')

let preScroll = window.scrollY;
// console.log(preScroll);



window.addEventListener('scroll', ()=>{
    let currtScroll = window.scrollY;
    if(currtScroll > preScroll){
        header.style.transform = `translateY(-105%)`
    }else{
        header.style.transform = `translateY(0%)`
    }
    
    preScroll = currtScroll;
})

// hide & scroll navigation end



// page marker start

// const aTag = document.querySelectorAll('.nav a')
// let marker = document.querySelector('.nav a::after')
// console.log(aTag);
// addEventListener('click',function(){
//     marker.style.transform = `scaleY(0)`;
// })

// page marker end



// manu button start

const menubtn = document.querySelector('.menu-btn');
let nav1 = document.querySelector('.nav1');
let nav2 = document.querySelector('.nav2');
let nav3 = document.querySelector('.nav3');

menubtn.addEventListener('click', function(){
    nav2.classList.toggle('nav2js')
    nav1.classList.toggle('nav1js')
    nav3.classList.toggle('nav3js')
})

// manu button end



// manu visibility start

const nav = document.querySelector('.nav')

menubtn.addEventListener('click',function(){
    if(nav.classList.contains('nav')){
        nav.classList.replace('nav','menu-btn-nav')
    }else{
        nav.classList.replace('menu-btn-nav','nav')
    }
})

// manu visibility end

// manu visibility1.0 start
// manu visibility1.0 end


// baner start

const swiper = new Swiper('.swiper', {
    direction: 'vertical',  // Enable vertical mode
    loop: true,             // Loop through slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },       
    effect:'fade',
    autoplay: {
        delay: 3000,        // Change slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay after user interaction
    },
});

// baner end





// introduction start

const firstLink = document.querySelector('.links p:nth-child(1)');
const secondLink = document.querySelector('.links p:nth-child(2)');
const thirdLink = document.querySelector('.links p:nth-child(3)');

let linkP1 = document.getElementById('sec-index1')
let linkP2 = document.getElementById('sec-index2')
let linkP3 = document.getElementById('sec-index3')

let color = '#FF4400';
let removeColor = '#8f8f8f';


firstLink.style.color = color;
firstLink.addEventListener('click',function(){
    linkP1.style.opacity = '100'
    linkP2.style.opacity = '0'
    linkP3.style.opacity = '0'
    firstLink.style.color = color
    secondLink.style.color = removeColor
    thirdLink.style.color = removeColor
})

secondLink.addEventListener('click',function(){
    linkP2.style.opacity = '100'
    linkP1.style.opacity = '0'
    linkP3.style.opacity = '0'
    secondLink.style.color = color
    firstLink.style.color = removeColor
    thirdLink.style.color = removeColor
})

thirdLink.addEventListener('click',function(){
    linkP3.style.opacity = '100'
    linkP1.style.opacity = '0'
    linkP2.style.opacity = '0'
    thirdLink.style.color = color
    firstLink.style.color = removeColor
    secondLink.style.color = removeColor
})

// introduction end




// const links = document.querySelectorAll('.links p'); // Select all links
// const sections = document.querySelectorAll('.sec2-wapper'); // Select all sections
// const activeColor = '#FF4400';
// const defaultColor = '#8f8f8f';

// // Initially set the first link as active
// links[0].style.color = activeColor;
// sections[0].style.opacity = '1'; // Ensure first section is visible

// // Function to handle clicks
// function handleClick(index) {
//     // Reset all sections and links
//     sections.forEach(section => (section.style.opacity = '0'));
//     links.forEach(link => (link.style.color = defaultColor));

//     // Activate the clicked link and corresponding section
//     sections[index].style.opacity = '1';
//     links[index].style.color = activeColor;
// }

// // Attach event listeners to each link
// links.forEach((link, index) => {
//     link.addEventListener('click', () => handleClick(index));
// });




// const links = document.querySelectorAll('.links p'); // Select all links
// const sections = document.querySelectorAll('.sec2-wapper'); // Select all sections
// const activeColor = '#FF4400';
// const defaultColor = '#8f8f8f';

// // Initially set the first link as active
// links[0].style.color = activeColor;
// sections[0].style.opacity = '1'; // Ensure first section is visible

// // Function to handle clicks
// function handleClick(index) {
//     // Reset all sections and links using normal functions
//     sections.forEach(function (section) {
//         section.style.opacity = '0';
//     });

//     links.forEach(function (link) {
//         link.style.color = defaultColor;
//     });

//     // Activate the clicked link and corresponding section
//     sections[index].style.opacity = '1';
//     links[index].style.color = activeColor;
// }

// // Attach event listeners using normal functions
// links.forEach(function (link, index) {
//     link.addEventListener('click', function () {
//         handleClick(index);
//     });
// });


