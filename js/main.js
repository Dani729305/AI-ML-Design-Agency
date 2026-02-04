function navAnimation(){
var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    var tl = gsap.timeline()
    tl.to(".bottom-nav",{
        height : "21vh"
    })
    tl.to(".nav-part-2 h5",{
        display : "block"
    })
    tl.from(".nav-part-2 h5 span",{
        y : 25,
        // duration : 0.3,
        stagger : {
            amount: 0.6
        }
    })
})

nav.addEventListener("mouseleave", function(){
    var tl = gsap.timeline()
    tl.to(".nav-part-2 h5",{
      display : "none",
      duration : 0.1
    })
    tl.to(".bottom-nav",{
        height :0,
        duration : 0.2
    })
})
}
navAnimation();

function page2Animation(){

var rightElem = document.querySelectorAll(".right-elem");
rightElem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
       gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
       })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
        opacity:0,
        scale:0
        })
    })

    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect()
        })
    })
})
}
page2Animation();

function Page3Animation(){
    var page3Center = document.querySelector(".page-3-center");
var video = document.querySelector(".page-3 video");
page3Center.addEventListener("click", function(){
    video.play();
    gsap.to(video,{
        opacity:1,
        transform: "scaleX(1) scaleY(1)",
        borderRadius:0
    })
    video.addEventListener("click", function(){
        video.pause();
        gsap.to(video,{
        opacity:0,
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius:"20px"
    })
    })
})
}
Page3Animation();


gsap.from(".page-8-bottom .part-2 p, .page-8-bottom .part-4 p",{
    x: 0,
    duration : 1,
    scrollTrigger:{
        trigger: ".page-8-bottom .part-2",
        scroller : "body",
        // markers: true,
        start: "top 65%",
        end : "top 20%",
        scrub : 2
    }
})

var sections = document.querySelectorAll(".righty");

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1;
        elem.childNodes[3].play();

    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0;
        elem.childNodes[3].load();

    })
})

function loading(){
var tl = gsap.timeline();
tl.from(".page-1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from(".page-1",{
    transform : "scaleX(0.7) scaleY(0.2) translateY(50%)",
    ease : "expo.out",
    borderRadius:"50px",
    duration:2,
    delay:0.5
})
tl.from("nav",{
    opacity:0
}
)
tl.from(".page-1 h1, .page-1 p, .page-1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})
}
loading();


gsap.to(".page-9>h2",{
    y:80,
    duration:1,
    scrollTrigger:{
        trigger:".page-9 h2",
        scroller:"body",
        // markers:true,
        start: "top 75%",
        end:"top 70%",
        scrub:2
    }
})