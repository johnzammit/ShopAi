import React, { useState } from "react";
import "../App.css";

function Navbar() {

  return (
    <nav className="nav">
      
      <ul>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            News
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
       
      </ul>
      
    </nav>
  );
}

export default Navbar;