import React from 'react';
import "../../styles/Sidebar.css";
import {Link} from "react-router-dom";

const CompanySidebar = () => (


    <div className="dashboard-main">
      <ul className="sidenav">
        <img className="dashboard-logo" src={require('../../assets/logo1.png')}></img>
        <h3 className="hi">Company Name</h3>
        <Link
          to="/applicants"
          className={
            window.location.pathname === "/applicants" ? "nav-link active" : "nav-link"
          }
        >
          Applicants
        </Link>
        <Link
          to="/admin-inbox"
          className={
            window.location.pathname === "/admin-inbox" ? "nav-link active" : "nav-link"
          }
        >
          Inbox
        </Link>
        <Link
          to="/post-job"
          className={
            window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
          }
        >
          Post Job
          </Link>
        <Link
          to="/settings"
          className={
            window.location.pathname === "/settings" ? "nav-link active" : "nav-link"
          }
        >
          Settings
        </Link>
        <Link
          to="/admin-learn"
          className={
            window.location.pathname === "/admin-learn" ? "nav-link active" : "nav-link"
          }
        >
          Learn
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
        <img className="profile" src="https://image.freepik.com/free-vector/avatar-logo-design_1465-15.jpg" alt="Avatar"></img>
        <figcaption>Cleveland, OH</figcaption>
        </figure>
      </ul>
    </div>
)

export default CompanySidebar;