import { useNavigate } from "react-router-dom"


const Button=({id,title,rightIcon,leftIcon,containerClass})=>{

    const history = useNavigate()
    return(
       <button id={id} className={`custom-button ${containerClass}`} onClick={()=>history('/contactus')}>
       {leftIcon}
       <span style={{position:'relative',display:'inline-flex', overflow:'hidden',fontSize:'0.75rem',textTransform:'uppercase'}}>
        
        <div>
        {title}
        </div>
        </span>
       </button>
    )
}
export default Button