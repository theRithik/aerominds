import React from "react";

const Error404=()=>{
    return(
        <>
       <div style={{width:'100%',height:'100vh'}}>
<img src="/images/404.webp" style={{width:'100%',height:'100%'}} alt="404 Error" />
<a className="btn btn-success" href="/" style={{position:'absolute',background:'#36db1c',border:'2px solid #fff',fontWeight:500,padding:'10px 40px',bottom:'10%',left:'20%',borderRadius:30}}>Home</a>
       </div>
        </>
    )
}
export default Error404