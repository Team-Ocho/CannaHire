import React, { Component } from 'react';

import "../../styles/Dashboard.css";
import Card from "../Card";
import Sidebar from '../Sidebar';
import Modal, { closeStyle } from 'simple-react-modal';


class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            company:"",
            location: "",
            date: "",
            intro: "",
            jobdescription: "",
            jobreqs: ""

        }
    }

    show = (data) => {
        console.log("here");
        this.setState({ show: true, company: data.company, title: data.title, location: data.location, intro: data.intro, jobdescription: data.jobdescription, jobreqs: data.jobreqs, date: data.date })
    }

    close = () => {
        console.log("line22");
        this.setState({ show: false })
    }



    render() {

        return (
            <div>
                <Sidebar />
                <div className="container container-dashboard ">
                    <div className="row">
                        <div className="col-12 text-center">
                        </div>
                    </div>

                    <div class="container-yourjobs">
                        <h3>Jobs You've Applied To</h3>
                        <div class="row">

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Content Marketing Manager </h4>
                                    </div>

                                    <div class="text">
                                        <span>Caliva</span><br></br>
                                        <span>San Jose, CA</span>
                                    </div>

                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({ company:"Caliva",
                                        title: "Content Marketing Manager", location: "San Jose, CA", intro: "Caliva is your friendly and trusted cannabis brand. We believe in wellness options that work for your lifestyle; in boosting your spirits and seeking adventure; in motivating the mind, steadying the body and being inspired to create.",
                                        jobdescription: "The Senior Content Marketing Manager at Caliva is responsible for the brand's overall content strategy and messaging. As a member of Caliva's marketing team, this role plays a crucial part in shaping the messaging for both the consumer- and business-facing sides of Caliva. From pithy product copy to forward-thinking ebooks, Caliva is looking for someone with exceptionally strong written and strategic skills. If you also happen to have a passion for cannabis and wellness, even better. We're looking for someone who can help us lead the discussion on the future of cannabis. Lead all aspects of Caliva's B2B and B2C content strategy, including ideation, creation, curation, writing, orchestration, production, and editing. Write and edit articles, blog posts, ebooks, webinars, product descriptions, and video scripts for Caliva's consumer blog, business blog, e-commerce platform, and products. Manage a team of content producers (writers, editors, videographers, etc.). Maintain content calendar for both B2B and B2C content. Create and implement a strategy for long-form content/reviews with partners. Ensure all content is optimized for web search (SEO). Assist Brand Manager in copy-writing for all product descriptions and packaging.",
                                        jobreqs: "Must be 21 years of age or older. Minimum 3-5 years of professional experience in content production. Passion for innovative storytelling and experience producing a wide variety of content from webinars to blog posts to videos. Must be a versatile writer and producer, capable of writing a short product description, working with/interviewing various people inside and outside the organization, and gaining an in-depth understanding of Caliva and the cannabis industry. Expertise and interest in search engine optimization (SEO); able to implement SEO best practices in blogs and web content. A self-starter with outstanding editorial judgement, creative abilities, and collaborative thinker; capable of making high-impact, data-driven decisions. Superb editorial and grammatical skills; able to juggle the intricacies of both B2B and B2C content strategies. Experience working for a large consumer goods brand is a plus. Experience with CMS (content management systems), Hubspot, and/or Moz also a plus.",
                                        date: "Applied on 12/25/18"
                                    })}>More</a>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Acquisition Marketing Associate</h4>
                                    </div>

                                    <div class="text">
                                        <span>greenrush</span><br></br>
                                        <span>San Mateo, CA</span>
                                    </div>

                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({ company:"greenrush",
                                        title: "Acquisition Marketing Associate", location: "San Mateo, CA",
                                        jobdescription: "The Acquisition Marketing Associate will be responsible for driving growth and sales for our high-value clients within various directory websites and managing our affiliate marketing program. Activities include paid placement on cannabis directory websites, maintaining listings on mainstream directory sites including Yelp, and communicating with and managing affiliates. This role will serve as a liaison between our Client Success organization and high-value clients, ensuring alignment of promotional offers, business objectives, and planning. The ideal candidate is an analytical thinker who is results-driven and an effective cross-functional communicator. This role will report to the Director of Performance Marketing.",
                                        jobreqs: "1-3 years of data-driven experience in marketing. Highly analytical and detail-orientated with a strong grasp on Excel.Naturally curious with an overall eagerness to learn in a fast-paced startup environment. Superb communication skills, both verbal and through Powerpoint/Excel. Great team player who can collaborate cross-functionally as well as with high-value clients. If you don’t thrive in a fast-paced, ever-evolving, and sometimes ambiguous work environment, then this wouldn’t be the ideal fit. Passionate about cannabis!",
                                        date: "Applied on 12/22/18"
                                    })}>More</a>
                                    
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Marketing Coordinator</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>

                                    <a href="#">More</a>

                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Marketing Coordinator</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>

                                    <a href="#">More</a>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Web Developer</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>

                                    <a href="#">More</a>

                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>UI Designer</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                                    </div>

                                    <a href="#">More</a>


                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Graphic Designer</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>

                                    </div>

                                    <a href="#">More</a>


                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">

                                <div class="box-part text-center">


                                    <div class="title">
                                        <h4>Graphic Designer</h4>
                                    </div>

                                    <div class="text">
                                        <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>

                                    </div>

                                    <a onClick={() => this.show({ title: "Graphic Designer" })}>More</a>


                                </div>
                            </div>
                            <a className="view-more" href="#">View More</a>
                            <div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                </div>

                <div>
                    <Modal animationType="fade"
                        transparent={true}
                        visible={this.props.visible}
                        className="test-class"  //this will completely overwrite the default css completely
                        style={{ overlay: { zIndex: 3 }, background: "white", width: "60%", marginLeft: "25.0em" }} //overwrites the default background
                        containerStyle={{ background: 'white' }} //changes styling on the inner content area
                        containerClassName="test"
                        closeOnOuterClick={true}
                        show={this.state.show}
                        onClose={this.close}>

                        <a className="close-modal" onClick={this.close}>X</a>
                        <div className="modal-info">
                            <h5>{this.state.title}</h5>
                            <h5>{this.state.company}</h5>
                            <h5>{this.state.location}</h5>
                            <h6>{this.state.date}</h6>
                            <p>{this.state.intro}</p>
                            <p>{this.state.jobdescription}</p>
                            <p>{this.state.jobreqs}</p>
                        </div>

                    </Modal>
                </div>

            </div>



        )
    }
}



export default Dashboard
