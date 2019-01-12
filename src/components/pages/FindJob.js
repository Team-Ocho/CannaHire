import React from "react";
import JobResults from "../JobResults";
import Sidebar from "../Sidebar";
import {Component} from 'react';



class FindJob extends Component {
  state={
    searchValue: ""
  }

  handleInputChange = (event) => {
    const userSearchInput = event.target.userSearchInput;
    this.setState({
      [userSearchInput]: event.target.value
    })
  }

  render() {
    return(
      <div>
      <Sidebar />
      <div className="main">
        <form className="example">
          <input onChange={this.handleInputChange} name="searchValue" type="text" placeholder="Location, Job Title" value={this.state.searchValue}></input>
  
          <button type="submit">Search</button>
        </form>
      </div>
      <JobResults />
    </div>

    )
  }

}


export default FindJob;
