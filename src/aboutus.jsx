import { FloatButton } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const Aboutus=()=>{
    const history=useNavigate()
    useEffect(()=>{
window.scrollTo(0,0)
    },[])
    return(
        <>
        <div style={{overflowX:'hidden'}}>
<div>
    
                <img src="/images/about2.webp" className="bigimg" alt="About us" style={{width:'100%',height:'100vh'}}/>
                <img src="/images/about2.2.webp" className="smallimg" alt="About us" style={{width:'100%',height:'100vh'}}/>
            
</div>
<div  style={{padding:'5%'}}>
    <h1 style={{fontWeight:700,marginBottom:30}}>About Aerominds</h1>
    <h6>Pioneering the Future of Drone Technology & Aerospace Excellence</h6>
    <p className="smalltext">At AeroMinds, we are more than just a technology company—we are innovators, visionaries, and industry leaders in drone technology, training, precision spraying, repair & maintenance, and aerospace staffing.

With a commitment to cutting-edge solutions and operational excellence, we empower businesses, professionals, and industries to harness the full potential of UAVs (Unmanned Aerial Vehicles) and aerospace workforce solutions.
</p>
<div style={{position:'relative',marginTop:'5%'}}>
<img src="/images/about1.webp" alt="aerominds agriculture" style={{width:'100%',borderRadius:40,height:400}} />
<div style={{position:'absolute',left:'5%',bottom:'5%'}}>
    <h2 style={{fontWeight:300,color:'#fff'}}>We are building tomorrow's World</h2>
</div>
</div>
</div>
<FloatButton.BackTop />
<div style={{padding:'5%'}}>
<h1 style={{fontWeight:700,textAlign:'center',marginBottom:'5%'}}>Our Team</h1>
<div style={{display:'flex',gap:40,textAlign:'center',flexWrap:'wrap',justifyContent:'center'}}>
<div style={{width:250,height:300,position:'relative',borderRadius:20}}>
    <img src="/images/team/chairman.png" alt="chairman" style={{width:250,height:300,borderRadius:20}} />
<div style={{position:'absolute',bottom:'4%',left:'4%',padding:10,backdropFilter:'blur(4px)',borderRadius:12,width:'93%'}}>
<h6 style={{fontWeight:600,fontSize:20,marginBottom:0,textAlign:'start'}}>Rajagaru</h6>
<p className="smalltext" style={{fontSize:11,textAlign:'start',marginBottom:0}}>Chairman</p>
</div>
</div>
<div style={{width:250,height:300,position:'relative',borderRadius:20}}>
    <img src="/images/team/vam.png" alt="chairman" style={{width:250,height:300,borderRadius:20}} />
<div style={{position:'absolute',bottom:'4%',left:'4%',padding:10,backdropFilter:'blur(4px)',borderRadius:12,width:'93%'}}>
<h6 style={{fontWeight:600,fontSize:20,marginBottom:0,textAlign:'start'}}>Vam</h6>
<p className="smalltext" style={{fontSize:11,textAlign:'start',marginBottom:0,color:'#fff'}}>Chief Executive Officer</p>
</div>
</div>
<div style={{width:250,height:300,position:'relative',borderRadius:20}}>
    <img src="/images/team/cfo.png" alt="chairman" style={{width:250,height:300,borderRadius:20}} />
<div style={{position:'absolute',bottom:'4%',left:'4%',padding:10,backdropFilter:'blur(4px)',borderRadius:12,width:'93%'}}>
<h6 style={{fontWeight:600,fontSize:20,marginBottom:0,textAlign:'start'}}>Sowbhagya</h6>
<p className="smalltext" style={{fontSize:11,textAlign:'start',marginBottom:0,color:'#fff'}}>CFO & HR</p>
</div>
</div>
<div style={{width:250,height:300,position:'relative',borderRadius:20}}>
    <img src="/images/team/vinay.png" alt="chairman" style={{width:250,height:300,borderRadius:20}} />
<div style={{position:'absolute',bottom:'4%',left:'4%',padding:10,backdropFilter:'blur(4px)',borderRadius:12,width:'93%'}}>
<h6 style={{fontWeight:600,fontSize:20,marginBottom:0,textAlign:'start'}}>Vinay</h6>
<p className="smalltext" style={{fontSize:11,textAlign:'start',marginBottom:0,color:'#fff'}}>COO</p>
</div>
</div>
<div style={{width:250,height:300,position:'relative',borderRadius:20}}>
    <img src="/images/team/ajay.png" alt="chairman" style={{width:250,height:300,borderRadius:20}} />
<div style={{position:'absolute',bottom:'4%',left:'4%',padding:10,backdropFilter:'blur(4px)',borderRadius:12,width:'93%'}}>
<h6 style={{fontWeight:600,fontSize:20,marginBottom:0,textAlign:'start'}}>Ajay</h6>
<p className="smalltext" style={{fontSize:11,textAlign:'start',marginBottom:0,color:'#fff'}}>CTO</p>
</div>
</div>
</div>
</div>
<div style={{textAlign:'center',marginTop:'5%',marginBottom:40}}>
                    <img src='/images/contactus.webp' alt='contactus'  onClick={()=>history('/contactus')} style={{width:120,cursor:'pointer'}}/>
                </div>
        </div>
        </>
    )
}
export default Aboutus