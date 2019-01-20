import React from "react";
import JobResults from "../JobResults";
import Sidebar from "../Sidebar";
import { Component } from 'react';
import "../../styles/FindJob.css";


class FindJob extends Component {
  state = {
    searchValue: ""
  }

  handleInputChange = (event) => {
    const userSearchInput = event.target.userSearchInput;
    this.setState({
      [userSearchInput]: event.target.value
    })
  }

  render() {
    return (
        <div>
          <Sidebar />
          <div className="container-fluid moveRightPlease">
            <div className="row">
              <div className="col-12 text-center">
                <div className="input-group" id="adv-search">
                  <h5 className="locationlabel">Location: <input type="text" className="searchform-control" placeholder="New York" /></h5>

                  <h5 className="titlelabel">Job Title: <input type="text" className="searchform-control" placeholder="Financial Analyst" /></h5>
                  <button type="submit" className="btn btn-primary searchsubmit">Search</button>
                </div>
              </div>
              <JobResults />
            </div>
          </div>
        </div>


    )
  }

}


export default FindJob;
