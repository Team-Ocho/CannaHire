import React from 'react';
import "../../styles/Sidebar.css";
import {Link} from "react-router-dom";

const CompanySidebar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
         <img className="dashboard-logo" src={require('../../assets/logo1.png')}></img>

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
          to="/applicants"
          className={
            window.location.pathname === "/applicants-jobs" ? "nav-link active" : "nav-link"
          }
        > <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-id-badge" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</i>
            Applicants</a>
            
          </li>
        </Link>
        <Link
          to="/admin-inbox"
          className={
            window.location.pathname === "/admin-inbox" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
          Inbox <span class="pcoded-badge label label-danger">2</span></a>
          </li>
        </Link>
        <Link
          to="/post-job"
          className={
            window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-map-pin" aria-hidden="true">&nbsp;&nbsp;</i>
          Post A Job </a>
          </li>
        </Link>
        <Link
          to="/yourjobs"
          className={
            window.location.pathname === "/yourjobs" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-list" aria-hidden="true">&nbsp;&nbsp;</i>
          Your Jobs </a>
          </li>
        </Link>
        <Link
          to="/admin-learn"
          className={
            window.location.pathname === "/admin-learn" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
          Learn</a>
          </li>
        </Link>
        <Link
          to="/admin-settings"
          className={
            window.location.pathname === "/admin-settings" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-cog" aria-hidden="true">&nbsp;&nbsp;</i>
          Settings</a>
          </li>
        </Link>
        <Link
          to="/"
          className={
            window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
          }
        ><li className="nav-item">
        <a className="nav-link js-scroll-trigger" href=""><i class="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
          Logout</a>
          </li>
        </Link>
      </ul>
    </div>
  </nav>
    // <div className="dashboard-main">
    //   <ul className="sidenav">
    //     <img className="dashboard-logo" src={require('../../assets/logo1.png')}></img>
    //     <h3 className="hi">Company Name</h3>
    //     <Link
    //       to="/applicants"
    //       className={
    //         window.location.pathname === "/applicants" ? "nav-link active" : "nav-link"
    //       }
    //     > <i class="fa fa-id-badge" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</i>
    //       Applicants <span class="pcoded-badge label label-warning">NEW</span>
    //     </Link>
    //     <Link
    //       to="/admin-inbox"
    //       className={
    //         window.location.pathname === "/admin-inbox" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-inbox" aria-hidden="true">&nbsp;&nbsp;</i>
    //       Inbox <span class="pcoded-badge label label-danger">2</span>
    //     </Link>
    //     <Link
    //       to="/post-job"
    //       className={
    //         window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-map-pin" aria-hidden="true">&nbsp;&nbsp;&nbsp;&nbsp;</i>
    //       Post Job
    //       </Link>
    //       <Link
    //       to="/yourjobs"
    //       className={
    //         window.location.pathname === "/post-job" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-list" aria-hidden="true">&nbsp;&nbsp;</i>
    //       Your Jobs
    //       </Link>
    //     <Link
    //       to="/admin-learn"
    //       className={
    //         window.location.pathname === "/admin-learn" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-industry" aria-hidden="true">&nbsp;&nbsp;</i>
    //       Learn
    //     </Link>
    
    //     <Link
    //       to="/admin-settings"
    //       className={
    //         window.location.pathname === "/admin-settings" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-cog" aria-hidden="true">&nbsp;&nbsp;</i>
    //       Settings
    //     </Link>
    //     <Link
    //       to="/logout"
    //       className={
    //         window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
    //       }
    //     ><i class="fa fa-arrow-circle-right" aria-hidden="true">&nbsp;&nbsp;</i>
    //       Logout
    //     </Link>
    //     <figure>
    //     <img className="profile" src="https://image.freepik.com/free-vector/avatar-logo-design_1465-15.jpg" alt="Avatar"></img>
    //     {/* <figcaption>Cleveland, OH</figcaption> */}
    //     </figure>
    //   </ul>
    // </div>
)

export default CompanySidebar;