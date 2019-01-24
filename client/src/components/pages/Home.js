import React from "react";
import "../../styles/Home.css";
import "../../../src/index.css";
import { Link } from "react-router-dom";




function Home() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
      </Link>
        </li>
        <li className="nav-item">
          {/* <Link
        to="/learn"
        className={
          window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
        }
      >
        Learn
      </Link> */}
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
        <li className="nav-item">
          <Link
            to="/register"
            className={
              window.location.pathname === "/register" ? "nav-link active" : "nav-link"
            }
          >
            Register
      </Link>

        </li>
      </ul>
      <div className="home-body">
        <header className="header">
          <img src={require('../../assets/logo1.png')} className="logo"></img>
          <h1 className="title">CannaHire</h1>
          <h4 className="intro">Discover your Career in the Cannabis Industry.</h4>
        </header>

        {/* <div className="map-location">
            <form>
                <input type="text" className="location" placeholder="City, State, Zipcode, or Job Title"></input>
                <button className = "search">Search</button><br></br>
            </form>
        
            </div> */}

        <div className="screenshots">
          <h3>Search and apply for jobs.</h3>
          <img className="screenshot-images" href="" src={require('../../assets/jobs.png')} alt=""></img>

          <h3 className="top">Learn about the Cannabis Market.</h3>
          <img className="screenshot-images" href="" src={require('../../assets/learn.png')} alt=""></img>


          <h3 className="top">Track your career.</h3>
          <img className="screenshot-images" href="" src={require('../../assets/inbox.png')} alt=""></img>

          <footer class="bgdefault padding_half">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <ul class="social white wow bounceIn">
                    <a href="javascript:void(0)"><i class="fa fa-facebook"></i> </a>
                    <a href="javascript:void(0)"><i class="fa fa-twitter"></i> </a>
                  </ul>
                  <p class="whitecolor top30 wow fadeInUp">Copyright &copy; 2019 Team Ocho. all rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>


        </div>
      </div>
    </div>
  );
}

export default Home;