import React from "react"
import {FaTimes, FaRegCircle} from "react-icons/fa"

const Icons =({choice}) =>{
    switch(choice){
        case "Cross":
            return <FaTimes className="icon"/>;
        case "Circle":
            return <FaRegCircle className="icon"/>;
        default:
            return "";

    }
}

export default Icons