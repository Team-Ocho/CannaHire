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
            jobreqs: "", 
            img:[]

        }
    }

    show = (data) => {
        console.log("here");
        this.setState({ show: true, company: data.company, title: data.title, location: data.location, intro: data.intro, jobdescription: data.jobdescription, jobreqs: data.jobreqs, date: data.date, img: data.img })
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
                                        date: "Applied on 12/25/18", img: "https://static1.squarespace.com/static/556c8a61e4b0a58d63e16051/t/5b564f8b03ce642b5e0eceb5/1532383122450/Caliva_Wordmark_Vertical_Blue_1200px.png"
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
                                        date: "Applied on 12/22/18", img: "data:image/jpeg;base64,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86T4mOPFzGk+JC5YYWsGixoaODQAPAIMVx7m/mgkfPSsL4HEuLWi7oydZGiNZbwI2Kq5IxJW0nNgnewX1s1Ft+y4EBel1H1uRKSbXLTxPPFzGk+NkGFVOcHKjxY1RA/oaxp8QLqLyZkmsrpPko3yucec83I63POoL0BFhTJ7TdtHCD+W32hS0UTWizWho4AADwCCv4Gww3J1Pydw6R50pHjYXbgP6QNXisVzgkf9TqvzP4tXo1daTJ8DiS6GMk7SWNJPWbIILNr9V03ZPruVmXxFG1oDWgADYALAdwX2gLH8+R+WpuxJ6zVsC4Z6SN+t8bXW2aTQbeKDMMxR1VfXD6JFqq4YKWOO+gxrb7dFoF+uy5kBV3FmQjUND4/nG7vvDh1qxL8XJjcalC9IvXplkUUs1O/UXRvHce8b1NwYzqmjnBjukgg+Yq9VdBFKLSRtd1j2qJkwjSH7Dh1OPtVXRaPEsft8tPssrVRjKqcLNDG9IBJ85UI98s79ZdI89ZK0CPCFIDfRcetx9ilaOgiiFo42t6h7U6LT5k9tlv8AfZB4Uw6YPlZfnCLAbdEe9WZEVsRERqGylIpGoERF1MREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
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
                            <img style={{alignContent: "center"}}className = "company-logos"src={this.state.img}></img>
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
