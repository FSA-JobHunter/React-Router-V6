import React from "react"
import { useParams, useOutletContext } from "react-router-dom"

const Book =()=>{
    const {id} = useParams()
    const obj = useOutletContext()
    console.log(id)
    console.log(obj)
    return(
        <h1>Book {id}</h1>
    )
}

export default Book