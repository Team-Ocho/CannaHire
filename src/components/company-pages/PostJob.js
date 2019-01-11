import React from 'react';
import {Component} from 'react';
import CompanySidebar from './CompanySidebar';
import "../../styles/PostJob.css";

class PostJob extends Component {
    render(){
        return(
            <div>
            <CompanySidebar />
            
            <form>
  <div class="form-group-job">
    <label for="exampleFormControlInput1">Job Title</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Project Manager"></input>
  </div>
  <div class="form-group-job">
    <label for="exampleFormControlSelect1">Level</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Intern</option>
      <option>Entry Level</option>
      <option>Junior/Mid-level</option>
      <option>Senior</option>
    </select>
  </div>
  <div class="form-group-job">
    <label for="exampleFormControlSelect1">State</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Alabama</option>
      <option>Alaska</option>
      <option>Arizona</option>
      <option>Arkansas</option>
      <option>California</option>
      <option>Colorado</option>
      <option>Connecticut</option>
      <option>Delaware</option>
      <option>Florida</option>
      <option>Georgia</option>
      <option>Hawaii</option>
      <option>Idaho</option>
      <option>Illinois</option>
      <option>Indiana</option>
      <option>Iowa</option>
      <option>Kansas</option>
      <option>Kentucky</option>
      <option>Louisiana</option>
      <option>Maine</option>
      <option>Maryland</option>
      <option>Massachusetts</option>
      <option>Michigan</option>
      <option>Minnesota</option>
      <option>Mississippi</option>
      <option>Missouri</option>
      <option>Montana</option>
      <option>Nebraska</option>
      <option>Nevada</option>
      <option>New Hampshire</option>
      <option>New Jersey</option>
      <option>New Mexico</option>
      <option>New York</option>
      <option>North Carolina</option>
      <option>North Dakota</option>
      <option>Ohio</option>
      <option>Oklahoma</option>
      <option>Oregon</option>
      <option>Pennsylvania</option>
      <option>Rhode Island</option>
      <option>South Carolina</option>
      <option>South Dakota</option>
      <option>Tennessee</option>
      <option>Texas</option>
      <option>Utah</option>
      <option>Vermont</option>
      <option>Virginia</option>
      <option>Washington</option>
      <option>West Virginia</option>
      <option>Wisconsin</option>
      <option>Wyoming</option>
    </select>
    <br></br>
    <label className="city" for="exampleFormControlSelect1">City</label>
    <input type="text" class="form-control" id="exampleFormControlInputCity" placeholder="Denver"></input>


  </div>

  <div class="form-group-job">
    <label for="exampleFormControlTextarea1">Job Description (100 words min.)</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
</div>
        )
    }



}

export default PostJob
