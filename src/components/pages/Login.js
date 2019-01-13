import React from 'react';
import { Component } from 'react';
import "../../styles/LoginForm.css";
import { timingSafeEqual } from 'crypto';
import {Link} from "react-router-dom";


class Login extends Component {
 constructor(props) {
     super(props);
     this.state={
         email:"",
         pswd: ""
     };

     this.handleLogin= this.handleLogin.bind(this);
     this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
 }

 handleLogin(event) { 
     const target = event.target;
     const name = target.name;
     this.setState({
         value: event.target.value, 
         [name]: event.target.value
     })

 }

 handleLoginSubmit (event) {
     alert('Successfully logging in...');
     event.target.reset();
 }



    render() {
        return (
            
            <div class="container-login">
            <Link 
            to="/">
            <button className="back">Home</button>
            </Link>
            <img className="loginform-logo" src={require("../../assets/logo1.png")}></img>
                <div class="login-form">
                    <div class="main-div">
                        <div class="panel">
                            <h2>Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form id="Login">
                            <div class="form-group">
                                <input name="email" value={this.state.email} onChange={this.handleLogin} type="email" class="form-control" id="inputEmail" placeholder="Email Address"></input>
                            </div>
                            <div class="form-group">
                                <input name="pswd" value={this.state.pswd} onChange={this.handleLogin} type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
                            </div>
                            <div class="forgot">
                                <a href="reset.html">Forgot password?</a>
                            </div>
                            <button onSubmit={this.handleLoginSubmit} type="Submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
                </div>
        )
    }
}

export default Login