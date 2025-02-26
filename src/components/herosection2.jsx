import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import AnimatedTitle from "./animatedtitle"


gsap.registerPlugin(ScrollTrigger)

const HeroSection2=()=>{
useGSAP(()=>{
    const clipAnimation = gsap.timeline({
        scrollTrigger:{
            trigger:'#clip',
        start:'center center',
        end:'+800 center',
        scrub:0.5,
        pin:true,
        pinSpacing:true,

        }
    })
    clipAnimation.to('.mask-clip-path',{
        width:'100vw',
        height:'100vh',
        borderRadius:0,
    })

})


    return(
        <>
        <div id="herosection2">
            <div className="section2-container" >
                <h1 className="section2-h1">Welcome to Aerominds</h1>
           <AnimatedTitle title="Discover the India's 
           <br/>Largest Drone service provider"
           containerClass="animatedtitle2"
           />
        <div className="section2-subtext">
{/* <p>
we specialize in cutting-edge drone technologies, offering expert training,
precision spraying, repair & maintenance with an advanced Annual Maintenance Cost (AMC) model
</p> */}
        </div>
            </div>
          <div style={{height:'100dvh',width:'100vw'}} id="clip">
            <div className="mask-clip-path about-image">
<img src="/images/section2.2.webp" alt="aerominds background" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover'}} />
            </div>
            
            </div>  
        </div>
        </>
    )
}
export default HeroSection2