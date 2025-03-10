
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react';
const Footer=()=>{

    const [deferredPrompt,setDeferredPrompt]=useState(null)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault()
            console.log(e)
             setDeferredPrompt(e)
        });
      }, []);

    
      
const handleClick=async()=>{
    console.log(deferredPrompt)
    if(deferredPrompt){
        
      deferredPrompt.prompt();
      const {outcome}= await deferredPrompt.userChoice;
      if(outcome ==='accepted'){
        console.log('User accepted')
      }else{
        console.log('user Denied')
      }
    }
  if('Notification' in window){
   const permission = await Notification.requestPermission()
  if(permission !=='denied'){
    console.log('Notifaction activated',permission)
  }else{
    console.log(permission,'denied')
  }
  }
  }

    const history=useNavigate()
    return(
        <>
        <div className="footer">
<div className='row' style={{marginBottom:10}}>
<div className='col-md-3' style={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'end'}}>
<img src='/images/aeromindslogo.png' alt='aerominds' style={{width:'100%'}}/>
<p className='smalltext' style={{color:'green',marginBottom:0}}>Building Tomorrow's World</p>
<h6 style={{fontSize:12,color:'#fff'}}>Copyright &copy;{new Date().getFullYear()}</h6>

</div>
<div className='col-md-9'>
<div className='row'>
<div className='col-md-3'>
<div className='footerlist'>
    <span ></span>
    <Link to='/'>
    <h6>Home</h6>
    </Link>
</div>
<div className='footerlist'>
    <span ></span>
    <Link to='/contactus'>
    <h6>Contact us</h6>
    </Link>
</div>
</div>
<div className='col-md-3'>
<div className='footerlist'>
    <span ></span>
    <Link to='/services'>
    <h6>Services</h6>
    </Link>
</div><div className='footerlist'>
    <span ></span>
    <Link to='privacy-policy'>
    <h6>Privacy Ploicy</h6>
    </Link>
</div>
</div>
<div className='col-md-3'>
<div className='footerlist'>
    <span ></span>
    <Link to='/aboutus'>
    <h6>Our Mission</h6>
    </Link>
</div>
<div className='footerlist'>
    <span ></span>
    <Link to='/terms&condition'>
    <h6>Terms & Conditions</h6>
    </Link>
</div>
</div>
<div className='col-md-3' style={{textAlign:'center',display:'flex',justifyContent:'center',flexDirection:'column'}}>
<button className='greenbutton' onClick={()=>history('/contactus')} style={{textTransform:'uppercase',width:150,height:45,background:'black',marginBottom:30}}>Contact us</button>
{deferredPrompt &&
            <h6 style={{float:'right',marginRight:'5%',cursor:'pointer',color:'green',fontSize:12}} onClick={handleClick}>Install Aerominds Web App <i class="bi bi-arrow-down-circle-fill"></i></h6>
            }
</div>
</div>
    <hr style={{borderWidth:2,borderColor:'#fff',opacity:1,marginTop:'8%'}}/>
    <div style={{textAlign:'end'}}>
<div style={{display:'flex',gap:20,justifyContent:'end'}}>
<i class="bi bi-twitter-x" style={{color:'green',cursor:'pointer'}}></i>
<i class="bi bi-instagram" style={{color:'green',cursor:'pointer'}}></i>
<i class="bi bi-meta" style={{color:'green',cursor:'pointer'}}></i>
<i class="bi bi-linkedin" style={{color:'green',cursor:'pointer'}}></i>
</div>
    </div>
</div>
</div>
<div style={{position:'absolute',bottom:'1%',left:'40%'}}>
<p className='smalltext' style={{fontSize:10,color:'black'}}>Designed & Developed by <img src='/images/signature.png' style={{width:40}} alt='signature'/></p>
</div>

        </div>
        </>
    )
}
export default Footer