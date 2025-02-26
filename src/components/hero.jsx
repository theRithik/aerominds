import { useEffect, useRef, useState } from "react"
import Button from "./button"
import { TiLocationArrow } from "react-icons/ti"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { VscLoading } from "react-icons/vsc"

gsap.registerPlugin(ScrollTrigger)
const Hero=()=>{
    const [currentIndex,setCurrentIndex]= useState(1)
    const [hasclicked,setHasclicked]=useState(false)
    const [isloading,setIsloading]=useState(false)
    const [loadedViedo,setLoadedViedo]=useState(0)
    const totalvideos = 4
    const videoRef = useRef(null)
  

    const handleviedoclick=()=>{
        setHasclicked(true)
        setCurrentIndex(upcomingViedoIndex)
        
    }

    const handleLoadedVideo=()=>{
        setLoadedViedo((prev)=>prev+1)
    }

    const upcomingViedoIndex = (currentIndex % totalvideos) + 1
    
useGSAP(()=>{
    if(hasclicked){
        gsap.set('#next-video',{visibility:'visible'});
        
        gsap.to('#next-video',{
            transformOrigin:'center center',
            scale:1,
            width:'100%',
            height:'100%',
            duration:1,
            ease:'power1.inOut',
            onStart:()=>videoRef.current.play(),

        })

        gsap.from('#current-video',{
            transformOrigin:'center center',
            scale:0,
            duration:1.5,
            ease:'power1.inOut',
        })
    }

},{dependencies:[currentIndex],revertOnUpdate:true})

useGSAP(()=>{
    gsap.set('#video-frame',{
        clipPath:'polygon(4% 0%, 72% 0%, 95% 90%, 0% 100%)',
        borderRadius:'0 0 10% 5%',

    })
    gsap.from('#video-frame',{
        clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius:'0 0 0 0',
        ease:'power1.inOut',
        scrollTrigger:{
            trigger:'#video-frame',
            start:'center center',
            end:'bottom center',
            scrub:true
        }
    })
})

    const getVideoSrc=(index)=> `/videos/service-${index}.mp4`
    return(
        <>
        <div style={{position:'relative',height:'100dvh',width:'100vw',overflowX:'hidden'}}>

{isloading &&(

<div style={{width:'100dvw',height:'100vh',position:'absolute',zIndex:100,background:'#fff'}}>
    <div className="heroloading">
Loading
<VscLoading/>
        </div>
    </div>
)
    }

<div id="video-frame" style={{position:'relative',zIndex:10,height:'100dvh',width:'100vw',overflow:'hidden'}}>
    <div>
        <div className="clipmask absolutecenter" style={{overflow:'hidden',cursor:'pointer',position:'absolute',zIndex:50,borderRadius:'.5rem'}}>
            <div onClick={handleviedoclick} className="smallvideo">
            <video
                                ref={videoRef}
                                src={getVideoSrc(upcomingViedoIndex)}
                                loop
                                muted
                                id="current-video"
                                onLoadedData={handleLoadedVideo} // Use `onLoadedData` instead of `onLoad`
                                autoPlay
                                playsInline // Ensure it plays on mobile browsers
                            />
            </div>

        </div>
       <video  ref={videoRef} 
       src={getVideoSrc(currentIndex)}
       loop
       muted
       id="next-video"
       className="absolute-center"
       onLoadedData={handleLoadedVideo}
       />
       <video   
src={getVideoSrc(currentIndex === 1 ? 1 : currentIndex - 1)}
      autoPlay
      muted
      loop
      className="thirdvideo"
      onLoadedData={handleLoadedVideo}
      />

    </div>
    <h1 className="futursitc" style={{position:'absolute',bottom:5,right:5,zIndex:40,color:'#fff'}}>
AEROMINDS
    </h1>
    <div style={{position:'absolute',top:0,left:0,width:'100%',zIndex:40,height:'100%'}}>
<div className="inner-container">
<h1 className="futursitc" style={{color:'#fff'}}>Redefined</h1>
<p className="hero-text">Powering the future of drones and aerospace</p>
   <Button id="hero-contact" title="Contact us" leftIcon ={<TiLocationArrow/>} containerClass="herobuttoncss"/>
</div>
    </div>

</div>
<h1 className="futursitc" style={{position:'absolute',bottom:5,right:5,color:'#36db1c'}}>
AEROMINDS
    </h1>
        </div>
        </>
    )
}
export default Hero