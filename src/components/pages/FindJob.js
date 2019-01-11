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
        <div class="row justify-content-center">
          <div class="card-body row no-gutters align-items-center">
            <form class="form-inline" action="/action_page.php">
                <label for="email">Job Title: </label>
                <input type="email" className="form-control" id="email"></input>
              <div class="form-group">
                <label for="pwd">Location: </label>
                <input type="password" className="form-control" id="pwd"></input>
              </div>
              <button className="search-button" type="submit" class="btn btn-default">Search</button>
            </form>
        </div>
        </div>
        <JobResults />
      </div>

    )
  }

}


export default FindJob;
