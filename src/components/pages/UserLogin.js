import React from 'react';
import {Component} from 'react';
import "../../styles/UserLogin.css";
import {Link} from "react-router-dom";

class UserLogin extends Component {

    state = {
        firstName: "",
        lastName: "", 
        email: "",
        password: "",
        confirmPassword: "",
        security:""
    }

    

    handleChange = (event) => {
        console.log(event.target);
        const name = event.target.name;
        const password = event.target.password;
        // const email = event.target.email
        // debugger allows you to see values 
        this.setState({
            [name]: event.target.value,
            [password]: event.target.value
        })
    }

    render() {
        return(

            <div>
            <header className = "logo-header">
                <img src={require('../../assets/logo1.png')} className="login-logo"></img>                
            </header>
            <div class="container register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://cdn2.iconfinder.com/data/icons/circle-ux-ui/512/lock_half_background-512.png" alt="" />
                    <h3>Welcome</h3>
                    <p>Already a member?</p>
                    <input type="submit" name="" value="Login" />
                </div>
                <div className="col-md-9 register-right">
                    <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li className="nav-item">
                        <Link
                        to="/user-login"
                        >
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                        to="/admin-login">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 className="register-heading">Apply as an Employee</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onChange={this.handleChange} name="firstName" type="text" className="form-control" placeholder="First Name *" value={this.state.firstName} />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleChange} name="lastName" type="text" className="form-control" placeholder="Last Name *" value={this.state.lastName} />
                                    </div>
                                    <div className="form-group">
                                        <input onChange ={this.handleChange} name="password" type="password" className="form-control" placeholder="Password *" value={this.state.password} />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={this.handleChange} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password *" value={this.state.confirmPassword} />
                                    </div>
                                    <div className="form-group">
                                        <div className="maxl">
                                            <label className="radio inline">
                                                <input type="radio" name="gender" value="male" checked></input>
                                                <span> Male </span>
                                            </label>
                                            <label className="radio inline">
                                                <input type="radio" name="gender" value="female"></input>
                                                <span>Female </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onChange = {this.handleChange} type="email" className="form-control" name="email" placeholder="Your Email *" value={this.state.email} />
                                    </div>
    
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                                            <option>What is your Birthdate?</option>
                                            <option>What is Your old Phone Number</option>
                                            <option>What is your Pet Name?</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Answer *" value="" />
                                    </div>
                                    <input type="submit" className="btnRegister" value="Register" />
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>    
        </div>
        

        )
    }



}

export default UserLogin