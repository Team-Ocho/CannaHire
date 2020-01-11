import React from "react";
import JobResults from "../JobResults";
import Sidebar from "../Sidebar";
import { Component } from 'react';
import "../../styles/FindJob.css";
import { fuzzySearch } from 'kyanite'

fuzzySearch('te', 'test') // => true
fuzzySearch('dog', 'testing') // => false

// search is also curried

const search = fuzzySearch('te')
search('test') // => true 




class FindJob extends Component {
  state = {
    query: '',
    jobs: ""
  }
 
  
  
  
  handleInputChange = (event) => {
    const userSearchInput = event.target.userSearchInput;
    this.setState({
      [userSearchInput]: event.target.value
    })
    for (var i = 0; i < this.state.jobs.length; i++) {
      var search = fuzzySearch(event.target.value)
       if (search(this.state.jobs[i])) {
    // add to list of options? magic
         }
      fuzzySearch(event.target.value, this.state.jobs[i])
    }
  }

  render() {
    return (
        // <div>
        //   <Sidebar />
        //   <div className="container-fluid moveRightPlease">
        //     <div className="row">
        //       <div className="col-12 text-center">
        //         <div className="input-group" id="adv-search">
        //           <h5 className="locationlabel">Location: <input type="text" className="searchform-control" placeholder="New York" /></h5>

        //           <h5 className="titlelabel">Job Title: <input type="text" className="searchform-control" placeholder="Financial Analyst" /></h5>
        //           <button type="submit" className="btn btn-primary searchsubmit">Search</button>
        //         </div>
        //       </div>
        //       <JobResults />
        //     </div>
        //   </div>
        // </div>


       <div className="row">
         <div className="col-md-3">
           <Sidebar />
           <div className="container-fluid moveRightPlease">
             <div className="row">
               <div className="col-md-8">
                 <div className="input-group" id="adv-search">
                   <h5 className="locationlabel">Location: <input ref={input => this.search = input} onChange={this.handleInputChange} type="text" className="searchform-control" placeholder="New York" /></h5>
                   <h5 className="titlelabel">Job Title: <input type="text" className="searchform-control" placeholder="Financial Analyst" /></h5>
                   <button type="submit" className="btn btn-primary searchsubmit">Search</button>
                 </div>
               </div>
               <JobResults />
             </div>
           </div>
       </div>
       </div> 
    )
  
    }
  }


export default FindJob;
