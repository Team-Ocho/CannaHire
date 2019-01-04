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
                to="/messages"
                className={
                    window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
                }
            >
                Messages
        </Link>
            <Link
                to="/post"
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

        <div className="dashboard">
            <div class="w3-row">
                <div class=" w3-container w3-quarter">
                </div>
                <div class="w3-container w3-quarter">
                    <h2 className = "your-dashboard">Your Dashboard</h2>
                </div>
            </div>
        </div>

        <div className="applied-jobs">
            <div class="w3-row">
                <div class=" w3-container w3-quarter">
                </div>
                <div class="w3-container w3-quarter">
                    <h3 className = "your-jobs">Jobs You've Applied To</h3>
                    <h5>This Week</h5>
                </div>

            </div>
        </div>

        <div className="list-applied-jobs">
        <div class="w3-row">
                <div class="w3-container w3-quarter">
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                <a href="#"className="view-all">View All</a>
                </div>
             
        </div>
        </div>

        <div className="past-jobs">
            <div class="w3-row">
                <div class=" w3-container w3-quarter">
                </div>
                <div class="w3-container w3-quarter">
                    <h5>Past</h5>
                </div>

            </div>
        </div>

        <div className="list-applied-jobs">
        <div class="w3-row">
                <div class="w3-container w3-quarter">
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                </div>
                <div class="w3-container w3-quarter">
                <Card />
                <a href="#"className="view-all">View All</a>
                </div>
                
        </div>
        </div>



    </div>
);

export default Dashboard
