import React from 'react';
import "../../styles/Learn.css";
import { Link } from "react-router-dom";


const Learn = () => (
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
        <div className="display-articles">
            {/* <h3 className="newsfeed">The Latest</h3> */}
            <div className="card-article">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>    
            <div className="card-article">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> 
            <div className="card-article">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>   
        </div>

        <div className="articles-right">
        <div className="card-article-right">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text-right">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            <div className="card-article-right">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text-right">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            <div className="card-article-right">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text-right">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
                
        </div>

        </div>


        )
        
export default Learn