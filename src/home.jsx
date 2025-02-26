import React, { useEffect } from "react";
import Hero from "./components/hero";
import HeroSection2 from "./components/herosection2";
import Features from "./components/features";
import Storyhero from "./components/story";
import HeroContact from "./components/contact";

const Home=()=>{

    useEffect(()=>{
        window.scrollTo(0,0)
            },[])

    return(
        <>
        <div style={{width:'100%',overflowX:'hidden',position:'relative',height:'dvh'}}>
<Hero/>
<HeroSection2/>
<Features/>
<Storyhero/>
<HeroContact/>
        </div>
        </>
    )
}
export default Home