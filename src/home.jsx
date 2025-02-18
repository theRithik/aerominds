import { CheckCircleTwoTone } from "@ant-design/icons";
import { Collapse, FloatButton, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const history = useNavigate()
    return(
        <>
        <div style={{overflowX:'hidden'}}>
            <div>
                <img src="/images/home.webp" className="bigimg" alt="home image" style={{width:'100%',height:'100vh'}}/>
           <img src="/images/home1.1.webp" className="smallimg" alt="home image" style={{width:'100%',height:'100vh'}}/>
            </div>
            <div style={{padding:'5%'}}>
<div>
    <div className="row">
        <div className="col-md-8">
        <h2 style={{marginBottom:'8%'}} className="section2h2">Innovating the Future</h2>

<div style={{display:'flex',gap:20}}>
<div style={{display:'flex',gap:10,padding:'10px 30px',borderColor:'#ccd2d8',alignItems:'center',borderRadius:20,border:'1px solid #ccd2d8',width:'fit-content'}}>
    <img src="/images/crown.png" style={{width:15}} alt="drone" />
    <h6 style={{marginBottom:0,fontSize:12}}>Aerospace</h6>
</div> 
<div style={{display:'flex',gap:10,padding:'10px 30px',borderColor:'#ccd2d8',alignItems:'center',borderRadius:20,border:'1px solid #ccd2d8',width:'fit-content'}}>
    <img src="/images/time.png" style={{width:15}} alt="drone" />
    <h6 style={{marginBottom:0,fontSize:12}}>Drone Technology</h6>
</div>   
</div>  
        </div>
<div className="col-md-4">
<div style={{marginTop:'5%'}}>
    <img src="/images/playbutton.webp" style={{width:250,marginBottom:30}} alt="playbutton"/>
<p className="smalltext">
At AeroMinds, we specialize in cutting-edge drone technologies, offering expert training, precision spraying, repair & maintenance with an advanced Annual Maintenance Cost (AMC) model based on a hub-and-spoke infrastructure. Our goal is to ensure maximum operational efficiency for businesses and individuals, revolutionizing drone applications across industries.
</p>
</div>
</div>
    </div>
<img src="/images/home3.webp" alt="drone" className="bigimg" style={{width:'100%',height:450,marginTop:'5%'}}/>
<img src="/images/home3.2.webp" alt="drone" className="smallimg" style={{width:'100%',height:450,marginTop:'5%'}}/>
    </div>
           </div>
            
            <FloatButton.BackTop />
    
            <div className="row" style={{padding:'5%'}}>
                <h1 style={{textAlign:'center'}}>Our Expertise</h1>
                <div className="col-md-6 centered">
<img src="/images/experts.webp" style={{width:'100%'}} alt="experts" />
                </div>
                <div className="col-md-6">
<div style={{marginTop:'10%'}}>
    <div style={{display:'flex',gap:20,flexWrap:'nowrap',alignItems:'baseline'}}>
        <span className="hmnumeff">01</span>
        <div style={{flexDirection:'column',display:'flex'}}>
        <h5>Drone Training & Certification </h5>
        <p className="smalltext" style={{lineHeight:'180%'}}>
        Empowering the next generation of drone professionals with industry-leading courses.
        </p>
        </div>
    </div>
    <hr/>
    <div style={{display:'flex',gap:20,flexWrap:'nowrap',alignItems:'baseline'}}>
        <span className="hmnumeff">02</span>
        <div style={{flexDirection:'column',display:'flex'}}>
        <h5>Precision Spraying Solutions </h5>
        <p className="smalltext" style={{lineHeight:'180%'}}>
        Enhancing agricultural efficiency with advanced drone-based spraying technologies. </p>
        </div>
    </div>
    <hr/>
    <div style={{display:'flex',gap:20,flexWrap:'nowrap',alignItems:'baseline'}}>
        <span className="hmnumeff">03</span>
        <div style={{flexDirection:'column',display:'flex'}}>
        <h5>Drone Repair & Maintenance (AMC)</h5>
        <p className="smalltext" style={{lineHeight:'180%'}}>
        Ensuring peak drone performance with expert servicing and maintenance plans.
        </p>
        </div>
    </div>
    <hr/>
    <div style={{display:'flex',gap:20,flexWrap:'nowrap',alignItems:'baseline'}}>
        <span className="hmnumeff">04</span>
        <div style={{flexDirection:'column',display:'flex'}}>
        <h5> Aerospace Staffing Solutions</h5>
        <p className="smalltext" style={{lineHeight:'180%'}}>
        Connecting top-tier talent with critical roles in aviation, defense, and drone technology.
        </p>
        </div>
    </div>
    <hr/>
</div>
</div>
</div>
<div className="greensection">
<h1 style={{textAlign:'center',marginBottom:30}}>How We Work</h1>
<h5 style={{textAlign:'center'}}>The Hub-and-Spoke Model</h5>
<p className="smalltext" style={{textAlign:'center'}}>Our unique hub-and-spoke infrastructure ensures efficient service delivery, whether for drone deployment, maintenance, or training.</p>
<div className="centered" style={{marginTop:'5%',flexDirection:'row',flexWrap:'wrap',gap:30}}>
<div className="card">
    <img src="/images/center.svg" alt="centralized" style={{width:200,marginBottom:30}} />
<h6 >Centralized Expertise</h6>
<p className="smalltext">Core hubs with top-notch professionals & training centers</p>
</div>
<div className="card">
    <img src="/images/repair.svg" alt="centralized" style={{width:133,marginBottom:30}} />
<h6 >Regional Accessibility</h6>
<p className="smalltext" >Spokes for easy access to support, repair, and logistics.</p>
</div>
<div className="card">
    <img src="/images/expansion.svg" alt="centralized" style={{width:165,marginBottom:30}} />
<h6 >Scalability</h6>
<p className="smalltext" >Expansion for businesses requiring large-scale drone operations.</p>
</div>
</div>
</div>
<div className="" style={{padding:'5%'}}>

<div className="row">
    <div className="col-md-6">
<img src="/images/expert2.webp" style={{width:'100%'}} alt="why choose us ?"/>
    </div>
    <div className="col-md-6 centered">
    <h1 style={{textAlign:'center',fontWeight:700,marginBottom:40}}>Why Choose Aerominds ?</h1>
    <Space direction="vertical">
    <Collapse
      defaultActiveKey={['1']}
      expandIcon={() => <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:15}}/>}
         style={{width:'100%'}}
      items={[
        {
          key: '1',
          label: 'Cutting-Edge Technology',
          children: <p>We leverage the latest advancements in AI, automation, and drone engineering.</p>,
        },
      ]}
    />
     <Collapse
      defaultActiveKey={['1']}
      expandIcon={() => <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:15}} />}
         style={{width:'100%'}}
      items={[
        {
            key: '2',
            label: 'Expert-Led Training',
            children: <p>Our certified trainers equip you with the skills to excel in drone operations.</p>,
          },
    ]}
    />
     <Collapse
      defaultActiveKey={['1']}
      expandIcon={() => <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:15}} />}
         style={{width:'100%'}}
      items={[
        {
            key: '3',
            label: 'Reliable AMC Services',
            children: <p>Our maintenance model ensures zero downtime and optimal performance.</p>,
          },
    ]}
    />
     <Collapse
      defaultActiveKey={['1']}
      expandIcon={() => <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:15}}/>}
         style={{width:'100%'}}
      items={[
        {
            key: '4',
            label: 'Industry-Specific Expertise',
            children: <p>We understand the unique challenges of various sectors and tailor solutions accordingly.</p>,
          },
    ]}
    />
    <Collapse
      defaultActiveKey={['1']}
      expandIcon={() => <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:15}}/>}
         style={{width:'100%'}}
      items={[
        {
            key: '4',
            label: 'Proven Track Record',
            children: <p>Trusted by businesses and professionals for drone excellence and aerospace staffing. </p>,
          },
    ]}
    />
    </Space>
    </div>
</div>
</div>
<div style={{textAlign:'center',marginBottom:40}}>
<img src="/images/contactus.webp" alt="contactus" style={{width:120,cursor:'pointer'}} onClick={()=>history('/contactus')} />
</div>
        </div>
        </>
    )
}
export default Home