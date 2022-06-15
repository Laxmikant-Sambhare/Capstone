import { Input,Badge } from "@material-ui/core";
import React, { useState } from "react";
import "./Nav.css";
import { ShoppingCart } from '@material-ui/icons';
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <nav className="main-nav">
        {/* this div for logo */}
        <img
          src={require("./Navlogo.jpg")}
          alt="logo"
          className="Mainname"
          style={{ height: "7rem", padding: "2px" }}
        />

        {/* the second div for the navbar element */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li className="dropdown">
              <div
                className="dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
              >
                Services ⏷
              </div>
              {isActive && (
                <div className="dropdown-content">
                  <div>
                    <a href="/rescue" className="dropdown-item">
                      Rescue{" "}
                    </a>
                  </div>
                  <div>
                    <a href="/adoption" className="dropdown-item">
                      {" "}
                      Adoption
                    </a>
                  </div>
                  <div>
                    <a href="/store" className="dropdown-item">
                      {" "}
                      Store
                    </a>
                  </div>
                  <div>
                    <a href="/vet" className="dropdown-item">
                      {" "}
                      Veterinary
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="/booking">Booking</a>
            </li>
            <li>
              <a href="/Cart"> 
              <Badge  badgeContent={cartTotalQuantity } color="secondary">
            <ShoppingCart style={{width : '30px', height: '30px',cursor: 'pointer'}}/>
            </Badge>
            </a>
            </li>
            
          </ul>
        </div>
        <Input
          placeholder="🔍  Search"
          style={{
            alignContent: "center",
            alignItems: "center",
            width: "200px",
            height: "50px",
            fontSize: "20px",
            border: "px",
            marginLeft: "200px",
          }}
        />
      </nav>
    </div>
  );
};
