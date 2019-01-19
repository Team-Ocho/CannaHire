import React from 'react';
import "../styles/JobResults.css";
import Axios from 'axios';
import { Component } from 'react';
import Modal, { closeStyle } from 'simple-react-modal';


class JobResults extends Component {

  state = {
    show: false,
    jobs: [],
    company_logo: "",
    company_name: "",
    job_title: "",
    city_state: "",
    job_description: "",
    employee_requirements: "",
    currJob: {}
  }

  show = (data) => {
    console.log("here");
    // debugger;
    console.log(data);
    this.setState({ show: true, company_name: data.company_name, job_description: data.job_description })
    console.log(this.state);
    console.log(data.company_name);
    console.log(data.job_description)
  }

  close = () => {
    console.log("close modal");
    this.setState({ show: false })
  }


  switchJob(job) {
    this.setState({ currJob: job })
    
    // var found = 
    // this.jobs.find( x => x.job_posting_id === found) 
    }
  
  onApply = () => {
    alert("You applied to " + this.state.currJob.job_title + " at " + this.state.currJob.company_name + ".");
  }

  componentDidMount() {
    this.renderPage()
  }

  renderPage = (event) => {
    Axios.get("/jobs/postings")
      .then((res) => {
        console.log("Posts", res.data)

        this.setState({
          jobs: res.data
        })
      })
  }

  render() {
    return (
      <div className="row">
      <div className="col-md-6">
        <h3 className="results">Search Results</h3>{this.state.jobs.length > 0 && this.state.jobs.map((job) => {
          return (
            <div className="card" value={job.job_posting_id} onClick={() => this.switchJob(job)}>
              <div className="container">
                <h4><b>{job.job_title}</b></h4>
                <a className="list-group-item" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
                <p>{job.company_name}</p> <p>{job.city_state}</p>
                <p>{job.job_description}</p>
                <footer className="card-footer">Keywords?:</footer>
              </div>
            </div>
          )
        })}
        </div>
        <div className="col-md-6">
          <div className="job-info">
            <h5><b>{this.state.currJob.job_title}</b></h5>
            <h5>{this.state.currJob.company_name}</h5>
            <h5>{this.state.currJob.city_state}</h5>
            <p>{this.state.currJob.job_description}</p>
            <p>{this.state.currJob.employee_requirements}</p>
            {/* <a className="close-job" onClick={this.close}>X</a> */}
            <button onClick = {this.onApply}>Apply</button>
          </div>
        </div>
      </div>)
  }
}

export default JobResults


