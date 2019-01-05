import React from "react";
import JobResults from "../JobResults";
import Sidebar from "../Sidebar";




const FindJob = () => (

  <div>
    <Sidebar />
    <div class="main">
      <form class="example">
        <input type="text" placeholder="Location, Job Title" name="search"></input>

        <button type="submit">Search</button>
      </form>
    </div>
    <JobResults />
  </div>
);


export default FindJob;
