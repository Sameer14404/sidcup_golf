let mve=document.querySelector("#cursor")
let mve1=document.querySelector("#cursor1")
document.addEventListener("mousemove",function(dets){
mve.style.left=dets.x+"px"
mve.style.top=dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    mve1.style.left=dets.x-100+"px"
    mve1.style.top=dets.y-100+"px"
    })
    

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
      
        start:"top-10%",
        end:"top -11%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})

