import { useNavigate } from 'react-router-dom'
import './service.css'
import { useEffect } from 'react'
import { FloatButton } from 'antd'

const Services=()=>{
    const history =useNavigate()
     useEffect(()=>{
    window.scrollTo(0,0)
        },[])

    return(
        <>
        <div>
            <div style={{width:'100%',position:'relative'}}>
                <img src="/images/servicebanner4.webp" className='bigimg' alt="service Bannner" style={{width:'100%',height:'100vh'}} />
                <img src="/images/servicebanner4.2.webp" className='smallimg' alt="service Bannner" style={{width:'100%',height:'100vh'}} />
          
           <div className="serverbannerdiv bigimg">
<h1>Innovating Drone Technology & Aerospace Solutions</h1>
<p className='smalltext' style={{marginLeft:'10%',marginRight:'10%',color:'#fff'}}>At AeroMinds, we provide cutting-edge drone technology services tailored for businesses, industries, and professionals. From expert training and precision spraying to comprehensive maintenance (AMC) and aerospace staffing, we ensure operational efficiency and innovation at every level.</p>
           </div>
            </div>
            <div style={{padding:'5%',marginTop:'2%'}}>
                <h1 style={{fontWeight:700,textAlign:'center'}}>Our Core Services</h1>
                <p className='smalltext' style={{textAlign:'center'}}>Explore our range of industry-leading services designed to elevate your aerial capabilities and workforce.</p>
                <div style={{display:'flex',justifyContent:'center',gap:40,marginTop:'5%',alignItems:'center',flexWrap:'wrap'}}>
                    <div className='crd'>
<img src='/images/training.svg' alt='drone training' style={{width:130}} />
<h6 style={{fontWeight:600}}>Drone Training & Certification</h6>
<p className='smalltext'>Empowering the next generation of drone pilots and industry professionals with world-class training.</p>
                    </div>
                    <div className='crd'>
<img src='/images/spraying.svg' alt='drone spraying' style={{width:100}} />
<h6 style={{fontWeight:600}}>Precision Drone Spraying </h6>
<p className='smalltext'>Revolutionizing agriculture and industrial applications with precision aerial spraying technology.</p>
                    </div>
                    <div className='crd'>
<img src='/images/droneservice.svg' alt='drone repair' style={{width:130}} />
<h6 style={{fontWeight:600}}>Drone Repair & Annual Maintenance</h6>
<p className='smalltext'>Keeping your drones operational, reliable, and ready for action with our Annual Maintenance Cost (AMC) model.</p>
                    </div>
                    <div className='crd'>
<img src='/images/staffing.svg' alt='drone repair' style={{width:130}} />
<h6 style={{fontWeight:600}}>Aerospace Staffing Solutions </h6>
<p className='smalltext'>Connecting top-tier aviation and aerospace talent with mission-critical roles in defense, aviation, and drone industries.</p>
                    </div>
                </div>
                <FloatButton.BackTop />
                <div className='row' style={{padding:'5%'}}>
                    <div className='col-md-6'>
                    <img src='/images/trainer.webp' alt='drone training' style={{width:'100%'}}/>
              
                        </div>
                          <div className='col-md-6' style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <h1 style={{fontWeight:700,fontSize:30}}>Drone Training & Certification </h1>
                        <p className='smalltext'>Empowering the next generation of drone pilots and industry professionals with world-class training.                 </p>
                        <div style={{alignItems:'center',marginLeft:'10%',marginTop:'2%'}}>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>Hands-on Flight Training</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Certified Drone Pilot Programs</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Industry-Specific Courses (Agriculture, Inspection, etc.)</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Regulatory Compliance & Safety Training</p>
                        </div>
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <h6 style={{fontWeight:600,marginBottom:30}}>Why Choose Our Training?</h6>
                            <div style={{textAlign:'start',marginLeft:'10%'}}>
                            <p className='smalltext' style={{marginBottom:5}}> Learn from certified experts in the drone industry.</p>
                       <p className='smalltext' style={{marginBottom:5}}>Get real-world experience with state-of-the-art UAVs.</p>
                       <p className='smalltext' style={{marginBottom:5}}>Industry-approved certifications for career advancement.</p>
                        
                        </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div className='row' style={{padding:'5%'}}>
                    
                    <div className='col-md-6' style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <h1 style={{fontWeight:700,fontSize:30}}>Precision Drone Spraying  </h1>
                        <p className='smalltext'>Revolutionizing agriculture and industrial applications with precision aerial spraying technology.</p>
                        <div style={{alignItems:'center',marginLeft:'10%',marginTop:'2%'}}>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>Efficient Pesticide & Fertilizer Application</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>Reduced Chemical Waste & Environmental Impact</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Large-Scale Crop Coverage with Minimal Effort</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Cost-Effective Solutions for Farmers & Agribusiness</p>
                        </div>
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <h6 style={{fontWeight:600,marginBottom:30}}>How It Works?</h6>
                            <div style={{textAlign:'start',marginLeft:'10%'}}>
                            <p className='smalltext' style={{marginBottom:5}}><strong style={{marginRight:10}}>Autonomous drones  </strong> 
                            equipped with AI-driven spraying systems ensure uniform coverage, reducing human effort and maximizing efficiency.              </p>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='/images/spraying2.webp' alt='drone repair' style={{width:'100%'}}/>
                    </div>
                </div>
                <div className='row' style={{padding:'5%'}}>
                    <div className='col-md-6'>
                        <img src='/images/service2.webp' alt='drone service' style={{width:'100%'}}/>
                    </div>
                    <div className='col-md-6' style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <h1 style={{fontWeight:700,fontSize:30}}>Drone Repair & Annual Maintenance (AMC) </h1>
                        <p className='smalltext'>Keeping your drones operational, reliable, and ready for action with our Annual Maintenance Cost (AMC) model.</p>
                        <div style={{alignItems:'center',marginLeft:'10%',marginTop:'2%'}}>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>Preventive Maintenance & Health Checks</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Quick Repairs & Spare Parts Support</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> On-Demand Technical Assistance</p>
                        </div>
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <h6 style={{fontWeight:600,marginBottom:30}}>Why Enroll in AMC?</h6>
                            <div style={{textAlign:'start',marginLeft:'10%'}}>
                            <p className='smalltext' style={{marginBottom:5}}><strong style={{marginRight:10}}>Minimized Downtime: </strong> Get your drones repaired swiftly.</p>
                       <p className='smalltext' style={{marginBottom:5}}> <strong style={{marginRight:10}}>Cost Savings: </strong>Avoid unexpected repair costs with our subscription-based maintenance model.</p>
                       <p className='smalltext' style={{marginBottom:5}}> <strong style={{marginRight:10}}>Expert Support: </strong>Trained professionals available for on-call servicing and troubleshooting.</p>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row' style={{padding:'5%'}}>
                    
                    <div className='col-md-6' style={{textAlign:'center',display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
                            <h1 style={{fontWeight:700,fontSize:30}}>Aerospace Staffing Solutions </h1>
                        <p className='smalltext'>Connecting top-tier aviation and aerospace talent with mission-critical roles in defense, aviation, and drone industries.</p>
                        <div style={{alignItems:'center',marginLeft:'10%',marginTop:'2%'}}>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>Skilled Drone Operators & Engineers</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> Aerospace Technicians & Maintenance Experts</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'> AI & Robotics Specialists for UAV Technologies</p>
                        </div>
                        <div style={{display:'flex',gap:20,}}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                        <p className='smalltext'>  End-to-End Workforce Solutions for Aerospace Companies</p>
                        </div>
                        </div>
                        <div style={{marginTop:'5%'}}>
                            <h6 style={{fontWeight:600,marginBottom:30}}>Why Work with Us?</h6>
                            <div style={{textAlign:'start',marginLeft:'10%'}}>
                            <p className='smalltext' style={{marginBottom:5}}><strong style={{marginRight:10}}>Vetted Professionals:  </strong>  Only the best talent in aviation and drone technology.                            </p>
                       <p className='smalltext' style={{marginBottom:5}}> <strong style={{marginRight:10}}>Custom Staffing Solutions: </strong>Short-term, long-term, and contract-based hiring.</p>
                       <p className='smalltext' style={{marginBottom:5}}> <strong style={{marginRight:10}}>Seamless Talent Integration:  </strong>Finding the right fit for your aerospace needs</p>
                        
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='/images/repair.webp' alt='drone repair' style={{width:'100%'}}/>
                    </div>
                </div>
                <div style={{textAlign:'center',marginTop:'5%'}}>
                    <img src='/images/contactus.webp' alt='contactus' onClick={()=>history('/contactus')} style={{width:120,cursor:'pointer'}}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services