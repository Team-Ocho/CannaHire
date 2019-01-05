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


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path = "/" component = {Home}></Route>
        <Route exact path ="/login" component = {FindJob}></Route>
        <Route exact path ="/search-jobs" component = {FindJob}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/messages" component={Messages}></Route>
        <Route exact path ="/learn" component={Learn}></Route>
        <Route exact path="/admin-dashboard" component={CompanyAdmin}></Route>
        <Route exact path="/admin-learn" component={CompanyLearn}></Route>
        <Route exact path ="/applicants" component={Applicant}></Route>
      </div>
      </Router>
    );    
    }
}

export default App;
