import React from 'react';
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import Axios from 'axios';

// logoutFunc = () => {
//   console.log("Logging Out")
//   Axios.get("/logout")
//   .then(res => {
//     console.log(res)
//   })
// }

const Sidebar = () => (


  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
       <img className="dashboard-logo" src={require('../assets/logo1.png')}></img>

    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Cannahire</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2 rotate" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF3dBm9Y3xLJr21xlcPd2AdWvN3eIC82e8HDuRekX1qgwnxNiMQ" alt="" />
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <Link
          to="/search-jobs"
          className={
            window.location.pathname === "/search-jobs" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about"><i className="fa fa-search" aria-hidden="true">&nbsp;&nbsp;</i>
            Search Jobs</a>
            
          </li>
        </Link>
        <Link
          to="/dashboard"
          className={
            window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about"><i className="fa fa-folder" aria-hidden="true">&nbsp;&nbsp;</i>
            Dashboard</a>
            
          </li>
        </Link>
        <Link
          to="/learn"
          className={
            window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about"><i className="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
            Learn</a>
            
          </li>
        </Link>
        <Link
          to="/inbox"
          className={
            window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about"><i className="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
            Inbox <span className="pcoded-badge label label-danger">2</span></a>
            
          </li>
        </Link>
        <Link
          to="/settings"
          className={
            window.location.pathname === "/settings" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about"><i className="fa fa-cog" aria-hidden="true">&nbsp;&nbsp;</i>
            Settings</a>
            
          </li>
        </Link>
        <Link
          to="/"
          className={
            window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/logout"><i className="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
            Logout</a>
            
          </li>
        </Link>
      </ul>
    </div>
  </nav>
  // <div className="dashboard-main">
  //   <ul className="sidenav">
  //     <img className="dashboard-logo" src={require('../assets/logo1.png')}></img>
  //     <h3 className="hi">Hi Liz!</h3>
  // <Link
  //   to="/search-jobs"
  //   className={
  //     window.location.pathname === "/search-jobs" ? "nav-link active" : "nav-link"
  //   }
  // > <i className="fa fa-search" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Search Jobs
  // </Link>
  // <Link
  //   to="/dashboard"
  //   className={
  //     window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
  //   }
  // > <i className="fa fa-folder" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Dashboard
  // </Link>
  // <Link
  //   to="/learn"
  //   className={
  //     window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
  //   }
  // > <i className="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Learn
  //   </Link>
  // <Link
  //   to="/inbox"
  //   className={
  //     window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
  //   }
  // > <i className="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Inbox <span className="pcoded-badge label label-danger">2</span>
  // </Link>
  // <Link
  //   to="/settings"
  //   className={
  //     window.location.pathname === "/settings" ? "nav-link active" : "nav-link"
  //   }
  // ><i className="fa fa-cog" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Settings
  // </Link>
  // <Link
  //   to="/logout"
  //   className={
  //     window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
  //   }
  // > <i className="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
  //   Logout
  // </Link>
  //     <figure>
  //     <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJF3dBm9Y3xLJr21xlcPd2AdWvN3eIC82e8HDuRekX1qgwnxNiMQ" alt="Avatar"></img>
  //     <figcaption>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Liz Stien</figcaption>
  //     <figcaption>&nbsp;&nbsp;Marketing Manager</figcaption>
  //     </figure>

  //   </ul>

  // </div>
)

export default Sidebar;