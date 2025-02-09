const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    if (menu.style.left == "-100%" || menu.style.left == "" ) {
        menu.style.left = "0%"
        menuBtn.style.position= 'fixed'
        menuBtn.style.right= '32px'
    } else {
        menuBtn.style.position= 'static'
        menu.style.left = "-100%"
    }
});

// menuBtn.addEventListener('click', function () {
//     if (menu.style.opacity === "0" || menu.style.opacity === "" ) {
//         menu.style.opacity = "100"
//         menu.style.visibility = "visible"
//         menuBtn.style.position= 'fixed'
//         menuBtn.style.right= '32px'
//     } else {
//         menuBtn.style.position= 'static'
//         menu.style.visibility = "hidden"
//         menu.style.opacity = "0"
//     }
// });
