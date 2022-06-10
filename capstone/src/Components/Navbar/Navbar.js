import React from "react";
import "./Nav.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="main-nav">
        {/* this div for logo */}
          <img src={require('./Navlogo.jpg')}  alt="logo" className="Mainname" style={{height: '7rem', padding:'2px'}}/>
          
        
        {/* the second div for the navbar element */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/store">Store</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/signin">Signin</a>
            </li>
            <li>
              <a href="/booking">Signin</a>
            </li>
            <li>
              <a href="/signin">Signin</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
