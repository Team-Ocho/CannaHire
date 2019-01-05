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
        Find Jobs
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
  </ul>
        <div className="home-body">
            <header className = "header">
                <img src={require('../../assets/logo1.png')} className="logo"></img>                
                <h1 className = "title">CANNAHIRE</h1>
                <h4 className = "intro">Discover your career in the cannabis industry.</h4>
            </header>

            <div className="map-location">
            <form>
                <input type="text" className="location" placeholder="City, State, Zipcode, or Job Title"></input>
                <button className = "search">Search</button><br></br>
            </form>
        
            </div>

            <div className = "screenshots">
            <h3>Search and apply for jobs.</h3>
            <img className = "screenshot-images"href="" src ={require('../../assets/search.png')} alt=""></img>

            <h3>Learn about the cannabis market.</h3>
            <img className = "screenshot-images"href="" src ={require('../../assets/screenshot-placeholder.png')} alt=""></img>


            <h3>Track your career.</h3>
            <img className = "screenshot-images"href="" src ={require('../../assets/screenshot-placeholder.png')} alt=""></img>


            </div>
        </div>
        </div>
    );
}

export default Home;