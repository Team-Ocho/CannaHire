import React from 'react';
import "../styles/JobResults.css";
import Axios from 'axios';
import { Z_ASCII } from 'zlib';
import { Component } from 'react';

class JobResults extends Component {
  state = {
    jobList: []
  }

  componentDidMount() {
    this.renderPage()
  }

  renderPage = () => {
    var posts;
    Axios.get("/jobs/postings")
    .then( function (data) {
      console.log("Posts", data)
      posts = data
      var jobList = posts.map(function (job) {
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
      })
      this.setState({jobList})
    })
  }


  render() {
    return (
      <div className="results-table">
        <h3 className="results">Search Results</h3>{this.state.jobList}
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
