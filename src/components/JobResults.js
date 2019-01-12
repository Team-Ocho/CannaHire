import React from 'react';
import "../styles/JobResults.css";
import Axios from 'axios';
import { Component } from 'react';

class JobResults extends Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    this.renderPage()
  }

  renderPage = (event) => {
    Axios.get("/jobs/postings")
    .then( (res) => {
      console.log("Posts", res.data)
      
      this.setState({
        jobs: res.data
      })
    })
  }


  render() {
    return (
      <div className="results-table">
        <h3 className="results">Search Results</h3>{this.state.jobs.map((job) => {
        return (
          <div className="card">
            <div className="container">
              <h4><b>{job.job_title}</b></h4>
              <a className="list-group-item" href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>
              <p>{job.company_name}</p> <p>{job.city_state}</p>
              <p>{job.job_description}</p>
              <footer className="card-footer">Keywords?:</footer>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

export default JobResults


// <div className="results-table">
//     <h3 className="results">Search Results</h3>
//     <div className="card">
//             <div className="container ">
//                 <h4><b>Position</b></h4>
//                 <a className="list-group-item" href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>                   
//                 <p>Company</p> <p>City, State</p>
//                 <p>Lorem ipsum dolor sit amet, no placerat dissentias pro, vel scaevola iudicabit forensibus ei. Causae aliquid appetere usu no, cu sed nostro atomorum, ius in agam dissentiunt. Ipsum saepe platonem est ea, cum mutat labores ex, ut pro dicit homero. Et sit consul putant, his et wisi libris voluptatibus. Eu sed quando oporteat, vix ex aeterno ceteros. </p>
//                 <footer className="card-footer">Keywords: Marketing, New York, Chicago, Social Media, Google Ads...</footer>
//             </div>
//     </div>
//     <div className="card">
//             <div className="container ">
//                 <h4><b>Position</b></h4>
//                 <a className="list-group-item" href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>                   
//                 <p>Company</p> <p>City, State</p>
//                 <p>Lorem ipsum dolor sit amet, no placerat dissentias pro, vel scaevola iudicabit forensibus ei. Causae aliquid appetere usu no, cu sed nostro atomorum, ius in agam dissentiunt. Ipsum saepe platonem est ea, cum mutat labores ex, ut pro dicit homero. Et sit consul putant, his et wisi libris voluptatibus. Eu sed quando oporteat, vix ex aeterno ceteros. </p>
//                 <footer className="card-footer">Keywords: Marketing, New York, Chicago, Social Media, Google Ads...</footer>
//             </div>
//     </div>
//     <div className="card">
//             <div className="container ">
//                 <h4><b>Position</b></h4>
//                 <a className="list-group-item" href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>                 
//                 <p>Company</p> <p>City, State</p>
//                 <p>Lorem ipsum dolor sit amet, no placerat dissentias pro, vel scaevola iudicabit forensibus ei. Causae aliquid appetere usu no, cu sed nostro atomorum, ius in agam dissentiunt. Ipsum saepe platonem est ea, cum mutat labores ex, ut pro dicit homero. Et sit consul putant, his et wisi libris voluptatibus. Eu sed quando oporteat, vix ex aeterno ceteros. </p>
//                 <footer className="card-footer">Keywords: Marketing, New York, Chicago, Social Media, Google Ads...</footer>
//             </div>
//     </div>
//     <div className="card">
//             <div className="container ">
//                 <h4><b>Position</b></h4>
//                 <a className="list-group-item" href="#"><i className="fa fa-bookmark-o" aria-hidden="true"></i></a>                  
//                 <p>Company</p> <p>City, State</p>
//                 <p>Lorem ipsum dolor sit amet, no placerat dissentias pro, vel scaevola iudicabit forensibus ei. Causae aliquid appetere usu no, cu sed nostro atomorum, ius in agam dissentiunt. Ipsum saepe platonem est ea, cum mutat labores ex, ut pro dicit homero. Et sit consul putant, his et wisi libris voluptatibus. Eu sed quando oporteat, vix ex aeterno ceteros. </p>
//                 <footer className="card-footer">Keywords: Marketing, New York, Chicago, Social Media, Google Ads...</footer>
//             </div>
//     </div>

//     <div className = "breadcrumbs">
//     <a>1 </a>
//     <a>2 </a>
//     <a>3 </a>
//     <a>4 </a>
//     <a>...</a>
//     </div>




// </div>

//     );
