import React, { Component } from 'react';
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import Messages from './components/pages/Messages';
import FindJob from './components/pages/FindJob';
import CompanyAdmin from "../src/components/company-pages/CompanyAdmin";
import CompanyLearn from "../src/components/company-pages/AdminLearn";
import Applicant from "../src/components/company-pages/Applicants";
import CompanyInbox from './components/company-pages/CompanyInbox';
import UserLogin from './components/pages/UserLogin';
import CompanyLogin from './components/company-pages/CompanyLogin';
import Register from './components/pages/Register';
import PostJob from './components/company-pages/PostJob';
import YourJobs from './components/company-pages/YourJobs';
import Login from './components/pages/Login';
import Applicants2 from './components/company-pages/Applicants2';
import Settings from './components/Settings';
import AdminSettings from './components/company-pages/AdminSettings';




class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Route exact path = "/" component = {Home}></Route>
        {/* <Route exact path ="/login" component = {FindJob}></Route> */}
        <Route exact path ="/search-jobs" component = {FindJob}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/inbox" component={Messages}></Route>
        <Route exact path ="/learn" component={Learn}></Route>
        <Route exact path="/admin-dashboard" component={Applicant}></Route>
        <Route exact path="/admin-learn" component={CompanyLearn}></Route>
        <Route exact path ="/applicants" component={Applicant}></Route>
        <Route exact path = "/admin-inbox" component={CompanyInbox}></Route>
        <Route exact path = "/register" component={Register}></Route>
        <Route exact path = "/user-login" component={UserLogin}></Route>
        <Route exact path = "/admin-login" component={CompanyLogin}></Route>
        <Route exact path="/post-job" component={PostJob}></Route>
        <Route exact path="/post" component={Applicant}></Route>
        <Route exact path="/yourjobs" component={YourJobs}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/applicants2" component={Applicants2}></Route>
        <Route exact path="/settings" component={Settings}></Route>
        <Route exact path="/admin-settings" component={AdminSettings}></Route>
      </div>
      </Router>
    );    
    }
}

export default App;
