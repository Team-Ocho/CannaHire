import React from 'react';
import { Component } from 'react';
import "../../styles/LoginForm.css";
import { timingSafeEqual } from 'crypto';
import {Link} from "react-router-dom";
var axios = require("axios")


class Login extends Component {
     state = {
         email:"",
         password: ""
     };


 handleLogin = (event) => { 
     const target = event.target;
     const name = target.name;
     this.setState({
         value: event.target.value, 
         [name]: event.target.value
     })

 }

 handleLoginSubmit = () => {
     console.log('Successfully logging in...');
     var email = this.state.email
     var password = this.state.password
     console.log(email, password)
     axios.post("/app/login", {email: email, password: password})
     .then( (res) => {
       console.log(res)
     })
    //  event.target.reset();
 }



    render() {
        return (
            
            <div className="container-login">
            <Link 
            to="/">
            <button className="back">Home</button>
            </Link>
            <img className="loginform-logo" src={require("../../assets/logo1.png")}></img>
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form id="Login">
                            <div className="form-group">
                                <input name="email" value={this.state.email} onChange={this.handleLogin} type="email" className="form-control" id="inputEmail" placeholder="Email Address"></input>
                            </div>
                            <div className="form-group">
                                <input name="password" value={this.state.password} onChange={this.handleLogin} type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                            </div>
                            <div className="forgot">
                                <a href="reset.html">Forgot password?</a>
                            </div>
                            <button onClick={this.handleLoginSubmit} type="button" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
                </div>
        )
    }
}

export default Login