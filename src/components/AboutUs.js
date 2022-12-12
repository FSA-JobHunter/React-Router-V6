import React from "react"
import { useOutletContext } from "react-router-dom"

const AboutUs =()=>{
    const obj = useOutletContext()
    console.log(obj)
    return(
        <h1>About Us</h1>
    )
}

export default AboutUs