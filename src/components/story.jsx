import { useRef } from "react"
import AnimatedTitle from "./animatedtitle"
import gsap from "gsap";
import RoundedCorners from "./roundedcorners";


const Storyhero=()=>{

    const frameRef= useRef(null)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;
    
        if (!element) return;
    
        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;
    
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;
    
        gsap.to(element, {
          duration: 0.3,
          rotateX,
          rotateY,
          transformPerspective: 500,
          ease: "power1.inOut",
        });
      };
    
      const handleMouseLeave = () => {
        const element = frameRef.current;
    
        if (element) {
          gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut",
          });
        }
      };

    return(
        <>
        <div id="story">
<div className="story-container">
<p className="story-text">
Training To Takeoff
</p>
<div style={{position:'relative',width:'100%',height:'100%'}}>
<AnimatedTitle
            title="The story of Aerominds"
            containerClass="animatedtext-containerclass"
          />

<div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                 ref={frameRef}
                 onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/images/experts.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
                </div>
                </div>
                <RoundedCorners/>
                </div>
</div>
<div className="storytext-container">
          <div className="textinner-container ">
            <p className="text-content">
            Born from a passion for innovation and aerial excellence, AeroMinds was created to revolutionize drone technology and aerospace solutions. With expertise in training, precision spraying, repair, and workforce staffing, we empower industries to harness the power of UAVs. Our hub-and-spoke model ensures seamless service, making drone technology more accessible, efficient, and future-ready. At AeroMinds, we are not just shaping the industry—we are soaring beyond boundaries!
           </p>
           </div>
           </div>
</div>
        </div>
        </>
    )
}
export default Storyhero