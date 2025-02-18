import React from "react";
import './fallerror.css'

const  FallbackRender=({ error, resetErrorBoundary })=>{
    return (
        <>
        <div style={{background:'#daffd1',paddingBottom:100,minHeight:'100vh'}}>
        <div className="policyDiv">
            <img src="/images/aeromindslogo.png" alt="logo" className="policyImg" style={{marginTop:'5%'}}/>
             </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:40}}>
                <h3 style={{fontWeight:600,textAlign:'center',width:'80%'}}>An Error Occured Please check your Network connection </h3>
                <img src="/images/errdrone.webp" alt="error" style={{width:'60%'}}/>
                <p style={{ color: "red" }}>{error?.message}</p>
                <h6>Facts:</h6>
                <h6 className="smalltext" >Aerominds changing tomorrow's world with drones</h6>
            </div>
      
        </div>
      </>
    )
  }
  export default FallbackRender