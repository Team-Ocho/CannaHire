import React from "react";
import { Link } from "react-router-dom";
import "../styles/LoginNav.css";
import JobResults from "./JobResults";
import {Router} from 'react-router-dom';




const LoginNav = () => (


  <div className="dashboard-main">
    <ul className="sidenav">
      <img className="dashboard-logo" src={require('../assets/logo1.png')}></img>
      <h3 className="hi">Hi Name!</h3>
      <Link
        to="/search-jobs"
        className={
          window.location.pathname === "/search-jobs" ? "nav-link active" : "nav-link"
        }
      >
        Search Jobs
      </Link>
      <Link
        to="/dashboard"
        className={
          window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </Link>
      <Link
        to="/messages"
        className={
          window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
        }
      >
        Messages
      </Link>
      <Link
        to="/blank"
        className={
          window.location.pathname === "/post-a-job" ? "nav-link active" : "nav-link"
        }
      >
        Saved Posts
      </Link>
      <Link
        to="/post"
        className={
          window.location.pathname === "/post-a-job" ? "nav-link active" : "nav-link"
        }
      >
        Logout
      </Link>
    </ul>

    <div class="main">
      <form class="example">
        <input type="text" placeholder="Location, Job Title" name="search"></input>

        <button type="submit">Search</button>
      </form>


    </div>
    <JobResults />
  </div>
);


export default LoginNav;
