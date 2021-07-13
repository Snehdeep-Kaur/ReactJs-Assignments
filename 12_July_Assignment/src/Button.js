import React from "react"

const Button=({buttonText},{funname})=>{
    return(
        <button className="button" onclick={funname}>{buttonText}</button>
    )
      
}

export default Button