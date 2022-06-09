import React from "react";
import "./Nav.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYouTubeSquare,
// } from "react-icons/fa";
// import React, { Component } from "react";
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
export const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* this div for logo */}
        <div className="logo">
          <h2>
            <samp>M</samp>obile
            <samp>V</samp>et
          </h2>
        </div>
        {/* the second div for the navbar element */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
          </ul>
        </div>
        {/* 3rd div for social media link */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                target="balram"
              >
                {/* <FaFacebookSquare className="facebook" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                target="balram"
              >
                {/* <FaFacebookSquare className="instagram" /> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCpchDc9ibtKi6Qj4wWP-Iog"
                target="balram"
              >
                {/* <FaFacebookSquare className="youtube" /> */}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
