import React,{useState} from "react"
import "./App.css"

const CounterApp=() => {

  let [score, setScore]=useState(0)
  return(
    <div> 
      <h1 className="header"> This is my Counter Application </h1>
      <h2 className="header">This Assignment is submitted by Snehdeep Kaur</h2>
      <h3 className="header">Current score: {score} </h3>
      <button className= "button" onClick={()=>(score<25)? setScore(score+1): alert("The counter has reached its maximum value.") }> Increment </button>
      <button className= "button" onClick={()=>{setScore(0)}}> Reset </button> 
      <button className= "button" onClick={()=>(score>0)? setScore(score-1): alert("The counter is at its minimum value")}> Decrement </button>
    </div>
    
  )
}


export default CounterApp