import React, { Component } from 'react';
import "../../styles/CompanyLogin.css";
import { Link } from 'react-router-dom';
var axios = require("axios")

class CompanyLogin extends Component {

  //add state and handler here 
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    confirmPassword: "",
    phone: "",
    security: "",
    securityAnswer: ""
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

  userRegister = () => {
    console.log("something happened React")
    var fName = this.state.firstName
    var lName = this.state.lastName
    var email = this.state.email
    var password = this.state.password
    console.log(fName, lName, email, password)
    axios.post("/register", {
      firstName: fName,
      lastName: lName,
      email: email,
      password: password
    }).then((data) => {
      console.log(data)
    })
  }

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
              <Link to="/login">
              <input type="submit" name="" value="Login" />
              </Link>
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
                      <input onChange={this.handleChange} name="firstName" type="text" class="form-control" placeholder="First Name *" value={this.state.firstName} />
                    </div>
                    <div class="form-group">
                      <input onChange={this.handleChange} name="lastName" type="text" class="form-control" placeholder="Last Name *" value={this.state.lastName} />
                    </div>
                    <div class="form-group">
                      <input onChange={this.handleChange} name="companyName" type="text" class="form-control" placeholder="Full Company Name *" value={this.state.companyName} />
                    </div>
                    <div class="form-group">
                      <input onChange={this.handleChange} name="email" type="email" class="form-control" placeholder="Company Email *" value={this.state.email} />
                    </div>
                    <div class="form-group">
                      <input onChange={this.handleChange} name="phone" type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value={this.state.phone} />
                    </div>


                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input onChange={this.handleChange} name="password" type="password" class="form-control" placeholder="Password *" value={this.state.password} />
                    </div>
                    <div class="form-group">
                      <input onChange={this.handleChange} name="confirmPassword" type="password" class="form-control" placeholder="Confirm Password *" value={this.state.confirmPassword} />
                    </div>
                    <div class="form-group">
                      <select class="form-control" name="security" onChange={this.handleChange} value={this.state.security}>
                        <option class="hidden" selected disabled>Please select your Security Question</option>
                        <option>What is your Birthdate?</option>
                        <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <input type="text" onChange={this.handleChange} name="securityAnswer" class="form-control" placeholder="`Answer *" value={this.state.securityAnswer} />
                    </div>
                    <input type="submit" onClick={this.userRegister} class="btnRegister" value="Register" />
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