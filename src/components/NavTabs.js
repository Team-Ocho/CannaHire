import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavTabs.css"; 


const NavTabs = () => (
  
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Find Jobs
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/learn"
        className={
          window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
        }
      >
        Learn
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/post"
        className={
          window.location.pathname === "/post-a-job" ? "nav-link active" : "nav-link"
        }
      >
        Post A Job
      </Link>
    </li>
  </ul>
);

export default NavTabs;
