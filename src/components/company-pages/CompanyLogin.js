import React, { Component } from 'react';
import "../../styles/CompanyLogin.css";
import {Link} from 'react-router-dom';

class CompanyLogin extends Component {

    //add state and handler here 
    
    render() {
        return (
            <div>
                <header className="logo-header">
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
                        <div class="col-md-9 register-right">
                            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <Link
                                        to="/user-login"
                                    >
                                        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link
                                        to="/admin-login">
                                        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Employer</a>
                                    </Link>
                                </li>
                            </ul>
                            <div class="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 class="register-heading">Register as an Employer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full Company Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Company Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="hidden" selected disabled>Please select your Security Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister" value="Register" />
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
                    
export default CompanyLogin