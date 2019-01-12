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
        > <i class="fa fa-id-badge" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</i>
          Applicants <span class="pcoded-badge label label-warning">NEW</span>
        </Link>
        <Link
          to="/admin-inbox"
          className={
            window.location.pathname === "/admin-inbox" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
          Inbox <span class="pcoded-badge label label-danger">2</span>
        </Link>
        <Link
          to="/post-job"
          className={
            window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-map-pin" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</i>
          Post Job
          </Link>
          <Link
          to="/yourjobs"
          className={
            window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-list" aria-hidden="true">&nbsp;&nbsp;</i>
          Your Jobs
          </Link>
        <Link
          to="/admin-learn"
          className={
            window.location.pathname === "/admin-learn" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
          Learn
        </Link>
        <Link
          to="/saved-posts"
          className={
            window.location.pathname === "/saved-posts" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-download" aria-hidden="true">&nbsp;&nbsp;</i>
          Saved Posts
        </Link>
        <Link
          to="/settings"
          className={
            window.location.pathname === "/settings" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-cog" aria-hidden="true">&nbsp;&nbsp;</i>
          Settings
        </Link>
        <Link
          to="/logout"
          className={
            window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
          }
        ><i class="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
          Logout
        </Link>
        <figure>
        <img className="profile" src="https://image.freepik.com/free-vector/avatar-logo-design_1465-15.jpg" alt="Avatar"></img>
        {/* <figcaption>Cleveland, OH</figcaption> */}
        </figure>
      </ul>
    </div>
)

export default CompanySidebar;