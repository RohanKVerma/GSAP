const title1 = new SplitType('#text1');
const title2 = new SplitType('#text2');

gsap.to('.char',{
      duration: 2.5,
      y:0,
      opacity:1,
      stagger: 0.1,
      ease: "elastic.out(0.7,0.3)",
      delay:0.5
})
gsap.from('.intro_img img',{
      delay:3.5,
      duration: 1,
      width:0
})
// gsap.to('.intro_img img',{
//       delay:10,
//       duration: 2.5,
//       width:100
// })
gsap.from('.bottom_text',{
      delay:3.5,
      duration: 1,
      y:100
})
// gsap.to('.bottom_text',{
//       delay:10,
//       duration: 2.5,
//       y:0
// })
// gsap.registerPlugin(ScrollSmoother);
// let smoother = ScrollSmoother.create({
//       wrapper: 'body',
//       content: 'body',
//       smooth:3,
//       smoothTouch:0.1
// })

gsap.registerPlugin(ScrollTrigger);
gsap.to('.bottom_text-wrap',{
      scrollTrigger: {
            trigger: '.bottom_text-wrap',
            start: 'top 110%',
            end: 'top -10%',
            scrub: 1
      },
      x:100,
      visibility:100,
      duration:3
})
gsap.to('.star',{
      scrollTrigger: {
            trigger: '.bottom_text-wrap',
            start: 'top 110%',
            end: 'top -10%',
            scrub: 1
      },
      rotate:940,
      duration:3
})
gsap.to('.intro_img img',{
      scrollTrigger: {
            trigger: '.bottom_text-wrap',
            start: 'top 110%',
            end: 'top -10%',
            scrub: 1
      },
      scale:1.1,
      x:250,
      duration:3
})
gsap.to('#text2',{
      scrollTrigger: {
            trigger: '.bottom_text-wrap',
            start: 'top 110%',
            end: 'top -10%',
            scrub: 1
      },
      x:300,
      y:50,
      duration:3
})
gsap.to('#about_rotating_box',{
      scrollTrigger: {
            trigger: '.heading',
            start: 'top 100%',
            end: 'top 23%',
            scrub: 1
      },
      rotate:720
})
gsap.to('.about_img',{
      scrollTrigger: {
            trigger: '.heading',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
      },
      y:0
})
gsap.to('#benefits_rotating_box',{
      scrollTrigger: {
            trigger: '.benefits_grid',
            start: 'top 110%',
            end: 'top 0%',
            scrub: 1
      },
      rotate:720
})
gsap.to('.benefit_head',{
      scrollTrigger: {
            trigger:'.benefits_grid',
            start: 'top 90%',
            end: 'top 0%',
            scrub: 1
      },
      x:0
})
gsap.from('.portfolio_head',{
      scrollTrigger:{
            trigger:'.portfolio_grid',
            start: 'top bottom',
            // end: 'top -100%',
            scrub: 1
      },
      ease: "ease.in(1.7)",
      y:120
})
gsap.to('.portfolio_item img',{
      scrollTrigger:{
            trigger:'.portfolio_item',
            start: 'top 70%',
            end: 'top -100%',
            scrub: 1
      },
      scale:1
})
gsap.from('.portfolio_item:nth-child(2n+1)',{
      scrollTrigger:{
            trigger:'.portfolio_item',
            start: 'top 70%',
            end: 'top -100%',
            scrub: 1
      },
      y:-70
})
gsap.from('.portfolio_item:nth-child(2n)',{
      scrollTrigger:{
            trigger:'.portfolio_item',
            start: 'top 70%',
            end: 'top -100%',
            scrub: 1
      },
      y:70
})
gsap.to('#portfolio_rotating_box',{
      scrollTrigger: {
            trigger: '.portfolio',
            start: 'top 100%',
            end: 'top 10%',
            scrub: 1
      },
      rotate:720
})
gsap.to('#services_rotating_box',{
      scrollTrigger: {
            trigger: '.services',
            start: 'top bottom',
            scrub: 1
      },
      rotate:720
})
gsap.to('.service_arrow',{
      scrollTrigger: {
            trigger: '.services_list',
            // start: 'top 70%',
            // end: 'top -100%',
            start: 'top bottom',
            scrub: 1
      },
      x:0
})

const text3 = new SplitType('#text3', {
	types: 'chars',
      absolute:true
});
let array = text3.chars;
// console.log(array);
for (let i = 0; i < array.length; i++) {
      const char = array[i];
      char.classList.add('end_char');
      char.setAttribute('id','char'+i);
}
gsap.to('.end_char',{
      scrollTrigger:{
            trigger: '#text3',
            start: 'top 100%',
            end: 'top 45%',
            scrub:1
      },
      ease: "power1.inOut",
      stagger:0.1,
      y:0,
      opacity:1
})