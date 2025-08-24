gsap.from("#container #page1:nth-child(1),#container #page1:nth-child(2)",{
    opacity:0,
    delay:0.5,
    stagger:0.5
})


let af2E = document.querySelectorAll('.slgsap')

// let af2EArr = Array.from(af2E);

af2E.forEach((page)=>{
    gsap.from(page,{
        y:50,
        opacity:0,
        scrollTrigger:{
            trigger:page,
            scroller:'body',
            start: 'top 85%',
            // markers: true,
        }
    });
});

////////////ChatGpt//////////////
// Target each .slgsap div and apply animation individually
// gsap.utils.toArray('#container .slgsap').forEach((el) => {
//   gsap.from(el, {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     scrollTrigger: {
//       trigger: el,
//       start: 'top 80%',
//       end: 'bottom 60%',
//       scroller: 'body',
//       markers: true,
//     },
//   });
// });
////////////ChatGpt//////////////
