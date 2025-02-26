import React, { useEffect, useRef, useState } from "react";
import './header.css'
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";

const Header=()=>{
    const location = useLocation()
   
const navcontainerRef = useRef(null)
    useEffect(()=>{

      const nav = document.getElementById('homeheader')
      let prevScroll = window.pageYOffset
     
      window.addEventListener('scroll',()=>{
        const currentScroll = window.pageYOffset
        if(prevScroll<currentScroll){
          nav.classList.add('scroll-down')
        }else{
          nav.classList.remove('scroll-down')
        }
       prevScroll = currentScroll
      })
      
    },[])



    useEffect(()=>{
        
const nm = location.pathname
const nav = document.querySelectorAll('.nav-link')
const fp = document.querySelector('.selected')
if(fp){
  fp.classList.remove('selected')
}
for(let i = 0; i<nav.length; i++){

  if(nav[i].innerText === 'Home' && nm ==='/'){
    nav[i].classList.add('selected')
  }

else if(nav[i].innerText === 'Services' && nm === '/services'){
 nav[i].classList.add('selected')
}
else if(nav[i].innerText === 'About us' && nm === '/aboutus'){
    nav[i].classList.add('selected')
   }
   else if(nav[i].innerText === 'Contact us' && nm === '/contactus'){
    nav[i].classList.add('selected')
   }
}
    },[location])
    const handleclick=(e)=>{
const val = e.target
const rem = document.querySelectorAll('.selected')
if(rem.length>0){
rem[0].classList.remove('selected')
val.classList.add('selected')
}else{
val.classList.add('selected')
}
    }

    return(
        <>
        <nav class="navbar navbar-expand-lg " ref={navcontainerRef} id="homeheader">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
    <img src="/images/aeromindslogo.png" style={{width:150}} alt="logo" />
    </a>
    <i class="bi bi-list d-lg-none officoncan" style={{paddingRight:10,paddingLeft:10,fontSize:25,cursor:'pointer'}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"></i>
   
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" onClick={handleclick}  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" onClick={handleclick} to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" onClick={handleclick} to="/aboutus">About us</Link>
        </li>
      </ul>
    </div>
    <div className="contactbtn">
    <ul class="navbar-nav">
    <li class="nav-item">
    <Link class="nav-link" onClick={handleclick} to="/contactus">Contact us</Link>
        </li>
        </ul>
    </div>
  </div>
  <div class="offcanvas-lg offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
  
    <button type="button" class="btn-close" style={{fontSize:25,marginTop:10,marginRight:10}} data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="offcandiv1">
      <ul>
       <Link to="/"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Home</span><i class="bi bi-chevron-right"></i></li></Link>
       
       <Link to="/services">
       <li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Services</span>
       <i class="bi bi-chevron-right"></i>
       </li>
       </Link>
       <Link to="/aboutus">  <li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>About</span><i class="bi bi-chevron-right"></i></li></Link>
       <Link to="/contactus"><li data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"><span>Contact</span><i class="bi bi-chevron-right"></i></li></Link>
      </ul>
      {/* {!logged&&
      <h6 className="offcantag">
      Become a Sri Vigneshwara Drones Member for the best Drone courses, services, and future Evotol in the world. 
      </h6>
}
{logged &&
  <h6 className="offcantag">Welcome to the Future, Thank you for Being a member of our Community,</h6>
}
{!logged ?(
      <div className="offcanbutt">
        <span onClick={()=>{history('/register')}} style={{cursor:'pointer'}}>Join Us</span>
        <span onClick={()=>{history('/login')}} style={{cursor:'pointer'}}>Sign In</span>
      </div>
      ):(
<div className="offcanbutt">
        <span onClick={()=>{history('/user/profile')}} style={{cursor:'pointer'}}>Profile</span>
        <span onClick={logout} style={{cursor:'pointer'}}>Logout</span>
      </div>
      )} */}

    </div>
  </div>
</div>
</nav>
<Outlet/>
<Footer/>
        </>
    )
}
export default Header