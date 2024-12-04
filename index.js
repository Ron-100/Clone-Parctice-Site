const btn = document.querySelectorAll('.btns1')
// console.log(btn);
const mainBody = document.querySelector('#main_body');
// console.log(mainBody);

btn.forEach((button)=>{
    // console.log(button);
    button.addEventListener('click', function(b){
        // console.log(b);
        // console.log(b.target);
        if (b.target.id === "#EFEFEF") {
            mainBody.style.backgroundColor = b.target.id
        }
        if (b.target.id === "#212121") {
            mainBody.style.backgroundColor = b.target.id
        }
    })
})
