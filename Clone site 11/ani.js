//Nav
document.addEventListener('DOMContentLoaded',function(){
    let syn = gsap.timeline()
    
    syn.from('#nav',{
        opacity:0,
        y:-50,
        duration:0.5
    })
    
    let h1 = document.querySelector('#page>#headline>h1')
    let h1Lines = h1.innerHTML.split('<br>') 
    h1.innerHTML = h1Lines.map((line)=> (`<div class='h1lines'>${line}</div>`)).join("")

    syn.from('#page>#headline>h1 .h1lines',{
        opacity:0,
        scale:0.9,
        y:100,
        duration:1,
        stagger:0.2,
        ease: "circ.out",
    },)
    
    syn.from('#page>h4',{
        opacity:0,
        scale:0.9,
        y:100,
        duration:1,
        ease: "circ.out",
      },'-=0.8')
      
      syn.from('canvas',{
        opacity:0,
        y:100,
        duration:1,
        ease: "circ.out",
    },'-=0.8')
})

//Arrow
document.addEventListener('DOMContentLoaded',function(){
  let arrow = document.querySelector('#arrow')

  gsap.to(arrow,{
    opacity:0,
    visibility: "hidden",
    duration:0.1,
    scrollTrigger:{
      trigger:arrow,
      scroller:'#main',
      scrub:0,
      // markers:true,
      start:'top 85%',
      end:'top 80%',
    }
  })
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
    
})

//Data-driven Section :-
document.addEventListener('DOMContentLoaded',function(){
  
  // Onetime animation
  gsap.from('#slice',{
    x:-550,
    duration:1.5,
    stagger:0.2,
    ease:'circ.out',
    scrollTrigger:{
      trigger:'#sliceCover',
      scroller:'#main',
      // markers:true,
      start:'top 95%',
      end:'top 0%'
    }
  })

  //Parallax Effact
  gsap.to('#slice',{
    yPercent: -260, // use instad of transform: translateY(-260%) cause it overwrite the value, and kill the Onetime animation effect
    scrollTrigger:{
      trigger:'#sliceCover',
      scroller:'#main',
      scrub:1,
      // markers:true,
      start:'top 80%',
      end:'top 10%'
    }
  })
})


