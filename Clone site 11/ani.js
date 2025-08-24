//Nav
document.addEventListener('DOMContentLoaded',function(){
    let syn = gsap.timeline()
    
    syn.from('#nav',{
        opacity:0,
        y:-50,
        duration:0.5
    })
    
    let h1 = document.querySelector('#page>h1')
    let h1Lines = h1.innerHTML.split('<br>') 
    h1.innerHTML = h1Lines.map((line)=> (`<div class='h1lines'>${line}</div>`)).join("")

    syn.from('#page>h1 .h1lines',{
        opacity:0,
        y:100,
        duration:0.6,
        stagger:0.2,
        ease: "sine.out",
    },)
    
    syn.from('#page>h4',{
        opacity:0,
        y:100,
        duration:0.6,
        ease: "sine.out",
    },'-=0.4')
    
    syn.from('canvas',{
        opacity:0,
        y:100,
        duration:0.6,
        ease: "sine.out",
    },'-=0.4')
})

//Moving Element
document.addEventListener('DOMContentLoaded',function(){
    window.addEventListener('wheel',function(e){
        if (e.deltaY > 0) {         
            gsap.to('#volt',{
                transform:'translateX(-200%)',
                repeat:-1,
                duration:2,
                ease:'none'
            })
        } else {
            gsap.to('#volt',{
                transform:'translateX(0%)',
                repeat:-1,
                duration:2,
                ease:'none'
            })  
        }
    })
    // gsap.to('#volt',{
    //     transform:'translateX(200%)',
    //     repeat:-1,
    //     duration:1,
    //     ease:'none'
    // })
    
})



    
