import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect } from "react"
import { useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle=({title,containerClass})=>{

const containerRef = useRef(null)

useEffect(()=>{
const ctx = gsap.context(()=>{
    const titleanimation = gsap.timeline({
        scrollTrigger:{
            trigger:containerRef.current,
            start:'100 bottom',
            end:'center bottom',
            toggleActions:'play none none reverse'
        }
    });
    titleanimation.to('.animated-word',{
        opacity:1,
        transform:'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease:'power2.inOut',
        stagger:0.02,
    })

    return()=>ctx.revert();
},containerRef)
},[])
    return(
        <>
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
           {title.split('<br/>').map((line,index)=>(
            <div key={index} className="titletextanimated">
               <span className="animated-word">
                {line}
                </span>
                </div>
           ))}
           </div>
        </>
    )
}
export default AnimatedTitle