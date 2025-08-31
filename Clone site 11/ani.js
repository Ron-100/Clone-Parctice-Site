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
// Nav Dropdown
document.addEventListener('DOMContentLoaded',function(){
  let resources = document.querySelector('#dropdown')
  let ressub = document.querySelector('#ressub')
  let cover;
  resources.addEventListener('mouseenter',function(){
    clearTimeout(cover)
    gsap.to(ressub,{
      visibility:'visible',
      opacity:1,
      scale:1,
    })
  })
  
  resources.addEventListener('mouseleave',function(){ 
    // delay hiding so user has time to move through gap
    cover = setTimeout(()=>{
      gsap.to(ressub,{
        visibility:'hidden',
        opacity:0,
        scale:0.8
      })
    },150)
  })

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

//All in One
document.addEventListener("DOMContentLoaded", () => {

  const imgs = document.querySelectorAll("#svg7 image");
  const svg = document.querySelectorAll("#svg7 g");
  const word = document.querySelectorAll("#svg7 text");
  
  let cap = gsap.timeline({
    scrollTrigger: {
      trigger: '#svg7',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  });

  cap.from(svg, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  });

  cap.from(imgs, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  },'0.4');


  cap.from(word, {
    opacity: 0, 
    duration:0.05, 
    repeat:-1,  
    yoyo:true, 
    stagger: 0.01,     
  },'0.9');

  
  // text Animation
  let cop = gsap.timeline({
      scrollTrigger: {
      trigger: '#cage7',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  })
    
  cop.from("#text7 h1",{
    opacity:0,
    scale:0.8,
    y:40,  
  })
  
  
  let p = document.querySelector('#para')
  let pLines = p.innerHTML.split('<br>')
  p.innerHTML = pLines.map((line)=>(`<p class='lines'>${line}</p>`)).join("");
  
  
  cop.from(p.querySelectorAll('.lines'),{
    opacity:0,
    scale:0.8,
    y:40,
    duration:0.5,
    stagger:0.1,
    ease:"slow(0.7,0.7,false)" 
  },'-=0.5')
  
});

//Easy to use
document.addEventListener("DOMContentLoaded", () => {

  const imgs = document.querySelectorAll("#svg8 image");
  const svg = document.querySelectorAll("#svg8 g");
  const word = document.querySelectorAll("#svg8 text");
  
  let cap = gsap.timeline({
    scrollTrigger: {
      trigger: '#svg8',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  });

  cap.from(svg, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  });

  cap.from(imgs, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  },'0.4');


  cap.from(word, {
    opacity: 0, 
    duration:0.05, 
    repeat:-1,  
    yoyo:true, 
    stagger: 0.01,     
  },'0.9');


  // text Animation
  let cop = gsap.timeline({
      scrollTrigger: {
      trigger: '#cage8',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  })
    
  cop.from("#text8 h1",{
    opacity:0,
    scale:0.8,
    y:40,  
  })
  
  
  let p = document.querySelector('#text8 p')
  let pLines = p.innerHTML.split('<br>')
  p.innerHTML = pLines.map((line)=>(`<p class='lines'>${line}</p>`)).join("");
  
  
  cop.from(p.querySelectorAll('.lines'),{
    opacity:0,
    scale:0.8,
    y:40,
    duration:0.5,
    stagger:0.1,
    ease:"slow(0.7,0.7,false)" 
  },'-=0.5')
});

//Dedicated support
document.addEventListener("DOMContentLoaded", () => {

  const imgs = document.querySelectorAll("#svg9 image");
  const svg = document.querySelectorAll("#svg9 g");
  const word = document.querySelectorAll("#svg9 text");
  
  let cap = gsap.timeline({
    scrollTrigger: {
      trigger: '#svg9',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  });

  cap.from(svg, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  });

  cap.from(imgs, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  },'0.4');


  cap.from(word, {
    opacity: 0, 
    duration:0.5, 
    repeat:-1,  
    yoyo:true, 
    stagger: 0.01,     
  },'0.9');

  // Text Animation
  let cop = gsap.timeline({
      scrollTrigger: {
      trigger: '#cage9',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  })
    
  cop.from("#text9 h1",{
    opacity:0,
    scale:0.8,
    y:40,  
  })
  
  
  let p = document.querySelector('#text9 p')
  let pLines = p.innerHTML.split('<br>')
  p.innerHTML = pLines.map((line)=>(`<p class='lines'>${line}</p>`)).join("");
  
  
  cop.from(p.querySelectorAll('.lines'),{
    opacity:0,
    scale:0.8,
    y:40,
    duration:0.5,
    stagger:0.1,
    ease:"slow(0.7,0.7,false)" 
  },'-=0.5')

});

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




  // text Animation
  let cop = gsap.timeline({
      scrollTrigger: {
      trigger: '#sliceCover',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  })
  
  
  cop.from("#rside h1",{
    opacity:0,
    scale:0.8,
    y:40,  
  })
  
  
  let p = document.querySelector('#rside p')
  let pLines = p.innerHTML.split('<br>')
  p.innerHTML = pLines.map((line)=>(`<p class='lines'>${line}</p>`)).join("");
  
  
  cop.from(p.querySelectorAll('.lines'),{
    opacity:0,
    scale:0.8,
    y:40,
    duration:0.5,
    stagger:0.1,
    ease:"slow(0.7,0.7,false)" 
  },'-=0.5')
})

//Simple
document.addEventListener("DOMContentLoaded", () => {
  
  const imgs = document.querySelectorAll("#svg11 image");
  const svg = document.querySelectorAll("#svg11 g");
  const word = document.querySelectorAll("#svg11 text");
  
  let cap = gsap.timeline({
    scrollTrigger: {
      trigger: '#svg11',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  });

  cap.from(svg, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  });

  cap.from(imgs, {
    opacity: 0,  
    scale:0,          
    duration: 0.5,
    stagger: 0.01,     
  },'0.4');


  cap.from(word, {
    opacity: 0,
    duration:4, 
    repeat:-1,  
    yoyo:true, 
    stagger: 0.01,     
  },'0.9');

  // text Animation
  let cop = gsap.timeline({
      scrollTrigger: {
      trigger: '#cage11',
      scroller: '#main',
      start: "top 80%", 
      end: "bottom 0%",  
      // markers: true 
    }
  })
    
  cop.from("#text11 h1",{
    opacity:0,
    scale:0.8,
    y:40,  
  })
  
  
  let p = document.querySelector('#text11 p')
  let pLines = p.innerHTML.split('<br>')
  p.innerHTML = pLines.map((line)=>(`<p class='lines'>${line}</p>`)).join("");
  
  
  cop.from(p.querySelectorAll('.lines'),{
    opacity:0,
    scale:0.8,
    y:40,
    duration:0.5,
    stagger:0.1,
    ease:"slow(0.7,0.7,false)" 
  },'-=0.5')

});

//Footer
document.addEventListener('DOMContentLoaded',function(){

  gsap.to('#page12',{
    yPercent: -100.2,
    scrollTrigger:{
      trigger:'#page12',
      scroller:'#main',
      scrub:1,
      // markers:true,
      start:'top 100%',
      end:'top 0%'
    }
  })
})