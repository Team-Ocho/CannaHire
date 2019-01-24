import React from 'react';
import { Component } from 'react';
import "../../styles/YourJob.css";
import CompanySidebar from './CompanySidebar';

class YourJobs extends Component {

    render() {
        return (
            <div class="box">
                <CompanySidebar />

                <div class="container">
                    <h3>Your Job Postings</h3>
                    <div class="row">

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Social Media Manager</h4>
                                </div>

                                <div class="text">
                                    <span>The Social Media Manager will administer the company’s social media marketing and advertising...</span>
                                </div>

                                <span class="pcoded-badge-jobactive label label-warning-jobactive">ACTIVE</span>
                                <a href="#">More</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Social Media Manager</h4>
                                </div>

                                <div class="text">
                                    <span>The Social Media Manager will administer the company’s social media marketing and advertising...</span>
                                </div>

                                <span class="pcoded-badge-jobactive label label-warning-jobactive">ACTIVE</span>
                                <a href="#">More</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Marketing Director</h4>
                                </div>

                                <div class="text">
                                    <span>Designing and implementing comprehensive marketing strategies to create awareness of he company's business activities...</span>
                                </div>

                                <span class="pcoded-badge-jobactive label label-warning-jobactive">ACTIVE</span>
                                <a href="#">More</a>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Jr. Data Analyst</h4>
                                </div>

                                <div class="text">
                                    <span>Interpreting data, analyzing results using statistical techniques. Developing and implementing data analyses, data collection systems...</span>
                                </div>

                                <span class="pcoded-badge-jobactive label label-warning-jobactive">ACTIVE</span>
                                <a href="#">More</a>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Web Developer</h4>
                                </div>

                                <div class="text">
                                    <span>The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create...</span>
                                </div>

                                <span class="pcoded-badge-jobinactive label label-warning-jobinactive">INACTIVE</span>
                                <a href="#">More</a>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Financial Analyst</h4>
                                </div>

                                <div class="text">
                                    <span>Determines cost of operations by establishing standard costs; collecting operational data. Improves financial status by analyzing results...</span>
                                </div>

                                <span class="pcoded-badge-jobinactive label label-warning-jobinactive">INACTIVE</span>
                                <a href="#">More</a>


                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Financial Analyst</h4>
                                </div>

                                <div class="text">
                                    <span>Determines cost of operations by establishing standard costs; collecting operational data. Improves financial status by analyzing results...</span>
                                </div>

                                <span class="pcoded-badge-jobinactive label label-warning-jobinactive">INACTIVE</span>
                                <a href="#">More</a>


                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                            <div class="box-part text-center">


                                <div class="title">
                                    <h4>Graphic Designer</h4>
                                </div>

                                <div class="text">
                                    <span> create visual communications to convey messages in an effective and aesthetically pleasing manner. They design web pages, brochures, logos, signs, books, magazine covers...</span>

                                </div>

                                <span class="pcoded-badge-jobinactive label label-warning-jobinactive">INACTIVE</span>
                                <a href="#">More</a>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }



}

export default YourJobs