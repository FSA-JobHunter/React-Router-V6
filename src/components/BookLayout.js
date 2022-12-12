import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

export function BookLayout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/books/1">Book 1</Link></li>
          <br></br>
          <li><Link to="/books/2">Book 2</Link></li>
          <br></br>
          <li><Link to="/books/new">New Book</Link></li>
        </ul>
      </nav>

      {/* Outlet to render child route */}
      <Outlet context={{ item: "book" }} />
    </>
  )
}