import React from 'react';
import { Component } from 'react';
import CompanySidebar from './CompanySidebar';
import "../../styles/PostJob.css";

class PostJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: "",
      level: "",
      jobLocation: "",
      city: "",
      jobDescription: "",
      jobRequirements: "",
      tags: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      value: event.target.value,
      [name]: event.target.value
    })
  }

  handleSubmit(event) {
    alert('Job post was submitted: ' + this.state.jobTitle);
    // event.preventDefault();
    event.target.reset();
    console.log(this.state);
  }



  render() {
    return (
      <div>
        <CompanySidebar />
        <h3 className="post-a-job">Post a New Job</h3>

        <div className="create-job-form">
          <form onSubmit={this.handleSubmit}>
            <label for="exampleFormControlInput1">Job Title</label>
            <input name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Project Manager"></input>
            <label for="exampleFormControlSelect1">Level</label>
            <select name="level" value={this.state.level} onChange={this.handleChange} class="form-control" id="exampleFormControlSelect1">
              <option>Intern</option>
              <option>Entry Level</option>
              <option>Junior/Mid-level</option>
              <option>Senior</option>
            </select>
            <label for="exampleFormControlSelect1">Job Location</label>
            <select name="jobLocation" value={this.state.jobLocation} onChange={this.handleChange} class="form-control" id="exampleFormControlSelect1">
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
            <label className="city" for="exampleFormControlSelect1">City</label>
            <input name="city" value={this.state.city} onChange={this.handleChange} type="text" class="form-control" id="exampleFormControlInputCity" placeholder="Birmingham"></input>

            <label for="exampleFormControlTextarea1">Job Description (300 character min.)</label>
            <textarea minlength="300" name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <label for="exampleFormControlTextarea1">Job Requirements (300 character min.)</label>
            <textarea minlength="300" name="jobRequirements" value={this.state.jobRequirements} onChange={this.handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

            <label className="tags" for="exampleFormControlSelect1">Tags </label>
            <input name="tags" value={this.state.tags} onChange={this.handleChange} type="text" class="form-control" id="exampleFormControlInputCity" placeholder="Marketing, Social Media, Graphic Design..."></input>

            <button className="submit-job" type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }



}

export default PostJob
