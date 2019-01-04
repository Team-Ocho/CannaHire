import React from 'react';
import "../../styles/LoginNav.css";
import "../../styles/Dashboard.css";
import { Link } from "react-router-dom";
import Card from "../Card";

const Dashboard = () => (

    <div className="dashboard-main">
    <ul className="sidenav">
      <img className="dashboard-logo" src={require('../../assets/logo1.png')}></img>
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
        to="/messages"
        className={
          window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
        }
      >
        Messages
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
    </ul>
    <div className="container container-dashboard">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="your-dashboard">Your Dashboard</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 ">
          <h3 className="your-jobs text-center">Jobs You've Applied To</h3>
          <h6>This Week</h6>
        </div>

      </div>
      <div className="row">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
          <a href="#" className="view-all">View All</a>
        </div>

      </div>
      <div className="row">
        <div className="col-12">
          <h6>Past</h6>
        </div>

      </div>
      <div className="row">
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
        </div>
        <div className="col-4">
          <Card />
          <a href="#" className="view-all">View All</a>
        </div>

      </div>

    </div>
  </div>
);

export default Dashboard
