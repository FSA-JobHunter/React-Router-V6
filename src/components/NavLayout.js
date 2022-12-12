import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

export function NavLayout() {
  return (
    <>
      <nav>
        <ul>

          {/* <li><NavLink to="/" style={({isActive})=> isActive ? {color:'red'} : {} }>Home</NavLink></li>
          <span></span>
          <li><NavLink to="/books" style={({isActive})=> isActive ? {color:'red'} : {} }>BookList</NavLink></li>
          <span></span>
          <li><NavLink to="/aboutus" style={({isActive})=> isActive ? {color:'red'} : {} }>About US</NavLink></li> */}
        
         
          {/* <li>
            <NavLink to="/" style={({isActive})=> isActive ? {color:'red'} : {} }>
             {({isActive})=> isActive ? "ActiveHome" : "Home"}
            </NavLink>
          </li>
          <span></span>
          <li><NavLink to="/books" style={({isActive})=> isActive ? {color:'red'} : {} }>BookList</NavLink></li>
          <span></span>
          <li><NavLink to="/aboutus" style={({isActive})=> isActive ? {color:'red'} : {} }>About US</NavLink></li> */}
        

          
          <li><NavLink to="/" >Home</NavLink></li>
          <span></span>
          <li><NavLink to="/books" >BookList</NavLink></li>
          <span></span>
          <li><NavLink to="/aboutus" >About US</NavLink></li>

        </ul>
      </nav>

      <Outlet context={{ hello: "world" }} />
    </>
  )
}