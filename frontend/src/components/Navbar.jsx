// shortcut snippet: rafce
import React from 'react'
import {NavLink} from "react-router-dom"
import {IoPerson, IoPricetag, IoHome, IoLogOut} from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <NavLink className="navbar-brand" to="/dashboard">Navbar</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#"><IoHome/> Home</a>
                        <a class="nav-link" href="#"><IoPricetag/> Products</a>
                        <a class="nav-link" href="#"><IoPerson/> Users</a>
                        <a class="nav-link" href="#"><IoLogOut/> Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar