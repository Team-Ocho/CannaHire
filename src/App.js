import React, { Component } from 'react';
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";


import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginNav from './components/LoginNav';
import Dashboard from './components/pages/Dashboard';
import Messages from './components/pages/Messages';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Home /> */}
        <Route exact path = "/" component = {Home}></Route>
        <Route exact path ="/login" component = {LoginNav}></Route>
        <Route exact path ="/search-jobs" component = {LoginNav}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/messages" component={Messages}></Route>
      </div>
      </Router>
    );    
    }
}

export default App;
