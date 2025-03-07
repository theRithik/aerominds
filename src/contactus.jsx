import { StarFilled } from "@ant-design/icons"
import { useEffect, useState } from "react"
import { PostData } from "./config/user/apicall"
import endpoints from "./config/endpoints"
import { message } from "antd"
import { Link } from "react-router-dom"


const Contactus=()=>{
     useEffect(()=>{
    window.scrollTo(0,0)
        },[])

        const [disabled,setDisabled]=useState(false)

        const sendRequ=async()=>{
            try{
          
            const name = document.getElementById('name').value
            const email = document.getElementById('email').value
            const phone = document.getElementById('number').value
            const msg = document.getElementById('message').value
            const last = document.getElementById('last').value
            const check = document.getElementById('flexCheckDefault').checked
          console.log(name,email,phone,check)
          if(name!=='' & email !=='' && phone !=='' && last !=='' && msg !==''){
            if(check){
                setDisabled(true)
            document.getElementById('loader').innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
             
           const dt={
                    name:name,
                    email:email,
                    phone:phone,
                    message:msg,
                    last:last,
                    endpoint:endpoints.query
                }
          
          const data = await PostData(dt)
          
          if(data){
            message.success('Query Sent Successfully')
          }
          }
          else{
            message.error('please agree to our terms and conditions')
          }
          }else{
            message.info('please fill all the fields')
          }
          }catch(er){
               console.log(er)
            }finally{
                setDisabled(false)
          document.getElementById('loader').innerHTML='<span id="loader"></span>'
            }
          }          



    return(
        <>
        <div style={{overflowX:'hidden'}}>
            <div className="row" style={{marginTop:'5%'}}>
                <div className="col-md-5">
<div style={{padding:20,margin:10,background:'#f3f3f3',borderRadius:10}}>
<h1 style={{fontWeight:700}}>We love to help</h1>
<p className="smalltext">We have a full service agency with experts ready to help. we'll get in touch within 24 hours</p>
<div className="row">
<div className="col-md-6">
<label className="form-label">First name</label>
<input className="form-control" type="text" id="name" placeholder="Fist name" />
</div>
<div className="col-md-6">
<label className="form-label">Last name</label>
<input className="form-control" type="text" id="last" placeholder="Last name" />
</div>
</div>
<div>
<label className="form-label">Email</label>
<input className="form-control" type="email" id="email" placeholder="Email" />
</div>
<div>
<label className="form-label">Phone number</label>
<input className="form-control" type="number" id="number" placeholder="Phone number" />
</div>
<div>
<label className="form-label">Message</label>
<textarea className="form-control" type="text" id="message" placeholder="Message" style={{minHeight:100}} ></textarea>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label smalltext" style={{color:'black',fontSize:10}} for="flexCheckDefault">
    You agree to our friendly <Link to="/privacy-policy" style={{textDecoration:'underline'}}>privacy policy </Link>
  </label>
</div>
<div style={{marginTop:20}}>
    <button className="greenbutton" disabled={disabled} onClick={sendRequ} style={{width:'100%'}}> <span id="loader"></span> Submit</button>
</div>
</div>
                </div>
                <div className="col-md-7" style={{position:'relative',justifyContent:'center',display:'flex',marginBottom:30}}>
               <img src="/images/contact.webp" alt="contact" style={{width:'98%',marginTop:10,height:'650px',borderRadius:10}} />
<div style={{position:'absolute',left:'5%',bottom:'15%'}}>
    <div style={{display:'flex',gap:10}}>
<StarFilled style={{color:'white'}} />
<StarFilled style={{color:'white'}}/>
<StarFilled style={{color:'white'}}/>
<StarFilled style={{color:'white'}} />
<StarFilled style={{color:'white'}}/>
</div>
<p className="smalltext" style={{color:'#fff',width:'90%'}}>At AeroMinds, excellence is at the core of everything we do. With a 5-star rating, we have earned the trust of our clients through cutting-edge drone solutions, expert training, and unparalleled aerospace services. Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.</p>
<p className="smalltext" style={{color:'#fff',fontWeight:700,width:'90%'}}>Join the many satisfied professionals and businesses who rely on AeroMinds for top-tier drone technology and aerospace expertise! </p>
</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contactus