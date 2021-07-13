import React from "react"
import "./App.css"
import Button from "./Button"

const Helloprint=() => {
  return(
    <div> 
      <h1 className="header"> Hello World!!! </h1>
      <h2 className="header">This Assignment is submitted by Snehdeep Kaur</h2>
      <Button buttonText = "Node.Js" />
      <Button buttonText = "Let's React"/> 
      <Button buttonText = "React.Js"/> 
    </div>
    
  )
}


export default Helloprint