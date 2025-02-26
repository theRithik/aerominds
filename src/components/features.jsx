import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt=({children,className = ''})=>{
    const [transformStyle,setTransformStyle]=useState('')
    const itemRef=useRef();

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
        
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
    
        const tiltX = (relativeY - 0.8) * 5;
        const tiltY = (relativeX - 0.8) * -5;
    
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
      };
    
      const handleMouseLeave = () => {
        setTransformStyle("");
      };

    return(
        <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
    )
}


const Bentocard=({src,title,description,iscoming})=>{
return(
    <>
    <div style={{position:'relative',width:'100%',height:'100%'}}>
    <video 
    src={src}
    loop
    muted
    autoPlay
    style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}
    />
    <div className="bentocarddiv2">
        <div>
            <h1 className="bento-title">{title}</h1>
{description && (
    <p className="dentodescription-text">
        {description}
    </p>
)}
        </div>
        </div>
    </div>
    </>
)
}

const Features=()=>{
    return(
<>
<section className="features-section">
<div className="features-container">
    <div className="features-subhead">
        <p className="subhead-p-f">
Into Aerominds Expertise
        </p>
        <p className="subhead-p2-f">
            we specialize in cutting-edge drone technologies, offering expert training, precision spraying, repair & maintenance with an advanced Annual Maintenance Cost (AMC) model based on a hub-and-spoke infrastructure. Our goal is to ensure maximum operational efficiency for businesses and individuals, revolutionizing drone applications across industries
        </p>
        </div>
<BentoTilt className="bentotittle border-wh">
<Bentocard src ="/videos/training.mp4"
title={<>Drone Training </>}
description = "Empowering the next generation of drone professionals with industry-leading drone courses of their interests."
/>
</BentoTilt>

<div className="bento-grid">
    <BentoTilt className="bento-tilt_1 grid-row">
<Bentocard 
src="/videos/sparying.mp4"
title="Precision Spraying"
description="Enhancing agricultural efficiency with advanced drone-based spraying technologies special made for the agriculture."
/>
    </BentoTilt>
    <BentoTilt className="bento-tilt_1 bento-tit2">
<Bentocard 
src="/videos/service-4.mp4"
title="Drone Repair & AMC"
description="Ensuring peak drone performance with expert servicing and maintenance plans called as Annual Maintenance Cost (AMC)."
/>
    </BentoTilt>

    <BentoTilt className="bento-tilt_1 bento-tit3">
<Bentocard 
src="/videos/aerospace.mp4"
title="Aerospace Staffing"
description="Connecting top-tier talent with critical roles in aviation, defense, and drone technology."
/>
    </BentoTilt>
<div className="bento-tilt_2">
<div style={{display:'flex',width:'100%',height:'100%',flexDirection:'column',justifyContent:'space-between',background:'#82fc6f',padding:5}}>
    <h1 className="bento-title" style={{maxWidth:70,color:'black'}}>
More Coming Soon!
    </h1>

<img src="/images/aeromindslogo.png" style={{width:'40%',marginLeft:'auto',alignSelf:'flex-end',marginBottom:10,marginRight:10}} />
</div>
</div>
<BentoTilt className="bento-tilt_2">
          <video
            src="videos/agriculture.mp4"
            loop
            muted
            autoPlay
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}
          />
        </BentoTilt>
    </div>
</div>
            </section>
            
        </>
    )
}
export default Features