import React, { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const NotFound =()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
          //navigate('/')
        navigate(-2)
        },2000)
    },[])
    const location = useLocation()
    console.log("location:",location)
    return(
        <h1>NotFound</h1>
    )
}

export default NotFound