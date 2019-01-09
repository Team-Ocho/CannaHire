import React from 'react';
import "../styles/Sidebar.css";
import {Link} from "react-router-dom";

const Sidebar = () => (


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
          to="/learn"
          className={
            window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
          }
        >
          Learn
          </Link>
        <Link
          to="/inbox"
          className={
            window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
          }
        >
          Inbox
        </Link>
        <Link
          to="/saved-posts"
          className={
            window.location.pathname === "/saved-posts" ? "nav-link active" : "nav-link"
          }
        >
          Saved Posts
        </Link>
        <Link
          to="/logout"
          className={
            window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
          }
        >
          Logout
        </Link>
        <figure>
        <img className="profile" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"></img>
        <figcaption>Cleveland, OH</figcaption>
        <figcaption>Financial Analyst</figcaption>
        </figure>

      </ul>

    </div>
)

export default Sidebar;