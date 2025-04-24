document.addEventListener('DOMContentLoaded',function(){
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector('.menu');
    const otherSide =document.querySelector('.otherSide')

    let div = document.createElement('div')
    div.style.width = '38px'
    menuBtn.addEventListener('click', function () {
        if (menu.style.right == "-40%" || menu.style.right == "" ) {
            menu.style.right = "0%"
            menuBtn.style.position= 'fixed'
            menuBtn.style.right= '32px'
            otherSide.appendChild(div)
        } else{
            menuBtn.style.position = 'static'
            menu.style.right = "-40%"
            otherSide.removeChild(div)
        }
    });
})

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
