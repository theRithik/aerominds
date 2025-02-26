import { useNavigate } from "react-router-dom";
import AnimatedTitle from "./animatedtitle";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );


const HeroContact=()=>{
    const history = useNavigate()

    return(
        <>
        <div id="contact" className="contact-section">
        <div className="contact-container">
        <div className="contact-image-container">
        <ImageClipBox
            src="/images/w1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/images/expert2.webp"
            clipClass="contact-clip-path-2 clip2eff"
          />
</div>
<div className="contactright">
<ImageClipBox
            src="/images/service2.webp"
            clipClass="md-scale-125 absolute"
          />
          
</div>
<div className="flex-container">
<p className="join-text">
Join Aerominds
</p>

<AnimatedTitle   
title="Lets Build Tomorrow's World"
containerClass="contactustitle"
/>

<div style={{textAlign:'center'}}>
<img src="/images/contactus.webp" alt="contactus" style={{width:120,cursor:'pointer',filter:'invert(1)'}} onClick={()=>history('/contactus')} />
</div>

</div>
</div>
</div>
        </>
    )
}
export default HeroContact