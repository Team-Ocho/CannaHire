import React from 'react';
import "../styles/Sidebar.css";
import {Link} from "react-router-dom";

const Sidebar = () => (


    <div className="dashboard-main">
      <ul className="sidenav">
        <img className="dashboard-logo" src={require('../assets/logo1.png')}></img>
        <h3 className="hi">Hi Liz!</h3>
        <Link
          to="/search-jobs"
          className={
            window.location.pathname === "/search-jobs" ? "nav-link active" : "nav-link"
          }
        > <i class="fa fa-search" aria-hidden="true">&nbsp;&nbsp;</i>
          Search Jobs
        </Link>
        <Link
          to="/dashboard"
          className={
            window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
          }
        > <i class="fa fa-folder" aria-hidden="true">&nbsp;&nbsp;</i>
          Dashboard
        </Link>
        <Link
          to="/learn"
          className={
            window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
          }
        > <i class="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
          Learn
          </Link>
        <Link
          to="/inbox"
          className={
            window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
          }
        > <i class="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
          Inbox <span class="pcoded-badge label label-danger">2</span>
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
        > <i class="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
          Logout
        </Link>
        <figure>
        <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF3dBm9Y3xLJr21xlcPd2AdWvN3eIC82e8HDuRekX1qgwnxNiMQ" alt="Avatar"></img>
        <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liz Stien</figcaption>
        <figcaption>&nbsp;&nbsp;Marketing Manager</figcaption>
        </figure>

      </ul>

    </div>
)

export default Sidebar;