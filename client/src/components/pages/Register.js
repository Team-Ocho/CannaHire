import React from 'react';
import "../../styles/Register.css"
import { Link } from "react-router-dom";

const Register = () => (
    <div>
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
        <div>
            <img className="register-logo" src={require('../../assets/logo1.png')}></img>
            <h2 className="register-login">Welcome to CannaHire! <br></br>Let's get started.</h2>
        </div>

        <div class="row">
            <div class="column">
                <Link
                    to="/user-login"
                >
                    <button class="login-card" >
                        <img className="job-seeker" src={require('../../assets/suitecase.png')}></img>
                        <h3 className="statement">I am a job seeker.</h3>
                        <p className="paragraph">Search and apply to jobs.</p>

                    </button>
                </Link>

            </div>

            <div class="column">
            <Link
            to="/admin-login">
                <button class="login-card">
                    <img className="hiring" src={require('../../assets/group.png')}></img>
                    <h3 className="statement">I am hiring.</h3>
                    <p className="paragraph">Post jobs and manage applicants.</p>
                </button>
                </Link>
            </div>
        </div>
    </div>


)

export default Register 