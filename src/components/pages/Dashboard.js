import React from 'react';
import "../../styles/Dashboard.css";
import Card from "../Card";
import Sidebar from '../Sidebar';

const Dashboard = () => (

 <div>
   <Sidebar />
    <div className="container container-dashboard">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="your-dashboard">Your Dashboard</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 ">
          <h3 className="your-jobs text-center">Jobs You've Applied To</h3>
          <h6>This Week</h6>
        </div>

      </div>
      <div className="row">
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        
        <div className="col-3">
          <Card />
          <a href="#" className="view-all">View All</a>
        </div>

      </div>
      <div className="row">
        <div className="col-12">
          <h6>Past</h6>
        </div>

      </div>
      <div className="row">
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-3">
          <Card />
          <a href="#" className="view-all" >View All</a>
        </div>

      </div>

    </div>
  </div>
);

export default Dashboard
