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
            company: "",
            location: "",
            date: "",
            intro: "",
            jobdescription: "",
            jobreqs: "",
            img: []

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
                    <div className="container-yourjobs">
                        <h3>Jobs You've Applied To</h3>
                            <div class="row">
                                <div className="col-md-3">
                                    <div className="box-part text-center">
                                        <div className="title">
                                            <h4>Content Marketing Manager </h4>
                                        </div>
                                    <div className="text">
                                        <span>Caliva</span><br></br>
                                        <span>San Jose, CA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "Caliva",
                                        title: "Content Marketing Manager", location: "San Jose, CA", intro: "Caliva is your friendly and trusted cannabis brand. We believe in wellness options that work for your lifestyle; in boosting your spirits and seeking adventure; in motivating the mind, steadying the body and being inspired to create.",
                                        jobdescription: "The Senior Content Marketing Manager at Caliva is responsible for the brand's overall content strategy and messaging. As a member of Caliva's marketing team, this role plays a crucial part in shaping the messaging for both the consumer- and business-facing sides of Caliva. From pithy product copy to forward-thinking ebooks, Caliva is looking for someone with exceptionally strong written and strategic skills. If you also happen to have a passion for cannabis and wellness, even better. We're looking for someone who can help us lead the discussion on the future of cannabis. Lead all aspects of Caliva's B2B and B2C content strategy, including ideation, creation, curation, writing, orchestration, production, and editing. Write and edit articles, blog posts, ebooks, webinars, product descriptions, and video scripts for Caliva's consumer blog, business blog, e-commerce platform, and products. Manage a team of content producers (writers, editors, videographers, etc.). Maintain content calendar for both B2B and B2C content. Create and implement a strategy for long-form content/reviews with partners. Ensure all content is optimized for web search (SEO). Assist Brand Manager in copy-writing for all product descriptions and packaging.",
                                        jobreqs: "Must be 21 years of age or older. Minimum 3-5 years of professional experience in content production. Passion for innovative storytelling and experience producing a wide variety of content from webinars to blog posts to videos. Must be a versatile writer and producer, capable of writing a short product description, working with/interviewing various people inside and outside the organization, and gaining an in-depth understanding of Caliva and the cannabis industry. Expertise and interest in search engine optimization (SEO); able to implement SEO best practices in blogs and web content. A self-starter with outstanding editorial judgement, creative abilities, and collaborative thinker; capable of making high-impact, data-driven decisions. Superb editorial and grammatical skills; able to juggle the intricacies of both B2B and B2C content strategies. Experience working for a large consumer goods brand is a plus. Experience with CMS (content management systems), Hubspot, and/or Moz also a plus.",
                                        date: "Applied on 12/25/18", img: "https://static1.squarespace.com/static/556c8a61e4b0a58d63e16051/t/5b564f8b03ce642b5e0eceb5/1532383122450/Caliva_Wordmark_Vertical_Blue_1200px.png"
                                    })}>More</a>
                                </div>
                            </div>
                                <div className="col-md-3">  
                                    <div className="box-part text-center">
                                        <div className="title">
                                            <h4>Acquisition Marketing Associate</h4>
                                        </div>
                                    <div class="text">
                                        <span>greenrush</span><br></br>
                                        <span>San Mateo, CA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "greenrush",
                                        title: "Acquisition Marketing Associate", location: "San Mateo, CA",
                                        jobdescription: "The Acquisition Marketing Associate will be responsible for driving growth and sales for our high-value clients within various directory websites and managing our affiliate marketing program. Activities include paid placement on cannabis directory websites, maintaining listings on mainstream directory sites including Yelp, and communicating with and managing affiliates. This role will serve as a liaison between our Client Success organization and high-value clients, ensuring alignment of promotional offers, business objectives, and planning. The ideal candidate is an analytical thinker who is results-driven and an effective cross-functional communicator. This role will report to the Director of Performance Marketing.",
                                        jobreqs: "1-3 years of data-driven experience in marketing. Highly analytical and detail-orientated with a strong grasp on Excel.Naturally curious with an overall eagerness to learn in a fast-paced startup environment. Superb communication skills, both verbal and through Powerpoint/Excel. Great team player who can collaborate cross-functionally as well as with high-value clients. If you don’t thrive in a fast-paced, ever-evolving, and sometimes ambiguous work environment, then this wouldn’t be the ideal fit. Passionate about cannabis!",
                                        date: "Applied on 12/22/18", img: "data:image/jpeg;base64,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86T4mOPFzGk+JC5YYWsGixoaODQAPAIMVx7m/mgkfPSsL4HEuLWi7oydZGiNZbwI2Kq5IxJW0nNgnewX1s1Ft+y4EBel1H1uRKSbXLTxPPFzGk+NkGFVOcHKjxY1RA/oaxp8QLqLyZkmsrpPko3yucec83I63POoL0BFhTJ7TdtHCD+W32hS0UTWizWho4AADwCCv4Gww3J1Pydw6R50pHjYXbgP6QNXisVzgkf9TqvzP4tXo1daTJ8DiS6GMk7SWNJPWbIILNr9V03ZPruVmXxFG1oDWgADYALAdwX2gLH8+R+WpuxJ6zVsC4Z6SN+t8bXW2aTQbeKDMMxR1VfXD6JFqq4YKWOO+gxrb7dFoF+uy5kBV3FmQjUND4/nG7vvDh1qxL8XJjcalC9IvXplkUUs1O/UXRvHce8b1NwYzqmjnBjukgg+Yq9VdBFKLSRtd1j2qJkwjSH7Dh1OPtVXRaPEsft8tPssrVRjKqcLNDG9IBJ85UI98s79ZdI89ZK0CPCFIDfRcetx9ilaOgiiFo42t6h7U6LT5k9tlv8AfZB4Uw6YPlZfnCLAbdEe9WZEVsRERqGylIpGoERF1MREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z"
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Sales Associate -Marijuana Collective</h4>
                                    </div>
                                    <div className="text">
                                        <span>Airfield Supply Co.</span><br></br>
                                        <span>San Jose, CA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "greenrush",
                                        title: "Sales Associate -Marijuana Collective", location: "San Jose, CA",
                                        jobdescription: "Your dream job is waiting! One of San Jose's oldest and most successful dispensaries is growing and expanding their staff. This is your shot at a great job in the California cannabis industry! The starting pay is $15 per hour unless you have a valid California Guard Card, then it is $16 per hour. You will be greeting customers and assisting them with selecting products.You will also be helping out with cleaning the shop as needed. This is a physically demanding job, and you will be busy during your entire shift.",
                                        jobreqs: "Must be positive and welcoming. Must be well educated with all medicinal products offered. Strain knowledge is required, both in the effects and strain genetics. Must be familiar with various methods of consumption. Educate members to ensure all patients are receiving the correct medication that will best help their illness and/or condition. Provide new members with a facility tour as well a full description of all medicine options offered. Ensure the cleanliness of the medicine stations and back counter. Interact with members on site as well as over the phone, collecting feedback on the goods and services provided by the collective. Package, process, roll, and trim cannabis. Complete all tasks delegated by the supervising manager.",
                                        date: "Applied on 12/20/18", img: "data:image/png;base64,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"
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Product Development Manager</h4>
                                    </div>
                                    <div className="text">
                                        <span>Green Bits</span><br></br>
                                        <span>San Jose, CA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "Green Bits",
                                        title: "Product Manager", location: "San Jose, CA",
                                        jobdescription: "Green Bits is the leading provider of retail Point of Sale solutions to the legal cannabis industry. This exciting market is rapidly growing, and Green Bits is growing with it. Unlike typical POS solutions, the number one job of a retail system is to ensure compliance with the myriad state rules and systems. Green Bits prides itself on making this daunting task easy and we are looking for a product manager to join our compliance product team as it scales to support massive growth. You'll drive the day to day prioritization, execution, and delivery of our compliance capability as we scale to support massive growth nationwide. This covers everything from managing the ever changing requirements in each state, to improving the user experience thru which store owners know where they stand and take action as needed. You'll be working directly with a cross-functional team. This position reports to the principal PM who leads our overall compliance offering.",
                                        jobreqs: "Just as we don't have fixed responsibilities, we do not stand on rigid qualifications. As guidance, people with this kind of background tend to do well: 2 years PM experience. Experience managing a backlog and creating user stories for an agile dev environment. Experience working cross-functionally, taking requirements from sales, support, major customers and distilling it to actionable stories. Sufficient technical background to engage productively with engineering on solutions, alternatives, estimations. Be comfortable using tools to get data to understand how well we're doing, such as from logs, databases, etc. Great attention to detail. Compliance is filled with many specific requirements that vary from state to state.Be great at, and excited about, the responsibilities listed above applied to the legal cannabis industry. You can bring passion and excitement to the challenge of helping these small businesses succeed. Note that prior experience with the cannabis industry is not required.",
                                        date: "Applied on 12/20/18", img: "https://www.greenbits.com/hs-fs/hubfs/GreenBitsLogo2017.png?width=600&name=GreenBitsLogo2017.png"
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Cannabis Cultivation Assistant</h4>
                                    </div>
                                    <div className="text">
                                        <span>GRG </span><br></br>
                                        <span>Omak, WA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "GRG",
                                        title: "Cannabis Cultivation Assistant", location: "Omak, WA",
                                        jobdescription: "We are I-502 Tier 3 cannabis farm, we are seeking a full-time, reliable, hard-working farmhands to assist with field prep and maintenance, planting and plant care, harvesting, and general labor. Tasks are often repetitive and entail strenuous physical work in all types of weather.",
                                        jobreqs: "An internship at the Wellness Connection is an introduction to our company and will provide you with the opportunity to effectively contribute to moving the business forward. Internship periods are about 12 weeks in duration and will be guided by department leaders. We are looking for an ambitious digital marketing student or recent graduate who is interested in growing professionally within our organization. The Part-time Digital Marketing Intern will participate in the tactical execution of social media marketing projects as well as other digital marketing initiatives.",
                                        date: "Applied on 12/17/18", img: "data:image/png;base64,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" 
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Digital Marketing Intern</h4>
                                    </div>
                                    <div className="text">
                                        <span>Wellness Connection of Maine </span><br></br>
                                        <span>United States</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "Wellness Connection of Maine",
                                        title: "Digital Marketing Intern", location: "United States",
                                        jobdescription: "Wellness Connection of Maine is a medical cannabis company operating in full compliance with state and local law. Our mission is to provide qualified Maine patients with the highest quality medical cannabis at a reasonable cost to them, to support members’ full-spectrum wellness, and to foster education about medical cannabis throughout the state.",
                                        jobreqs: "Perform all the tasks at the farm including: cleaning, cloning, transplanting, defoliation, topping, foliar and preventative sprays, trimming, packaging, waste disposal. Assisting with cannabis plants, giving each individual plant the attention it needs one at a time. Maintain a clean and organized work environment. Knowledge of Soil growing methods including micronutrients, beneficial bacteria knowledge of plant diseases, insects and fungi, as well as plant treatment options. Facility maintenance. Physical aptitude and health necessary to perform manual labor required management of the farm. Must have accountability, proactive behavior and strong attention to detail.You are at least 21 years of age",
                                        date: "Applied on 12/19/18", img: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/cannabis-logo.jpeg" 
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Marketing Assistant (Part-time)</h4>
                                    </div>
                                    <div className="text">
                                        <span>DMM </span><br></br>
                                        <span>Philadelphia, PA</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "DMM",
                                        title: "Marketing Assistant (Part-Time)", location: "Philadelphia, PA",
                                        jobdescription: "We are partnered with a recording studio in NJ, and we are in the works of partnering with more recording studios throughout the USA. We provide transportation to and from our recording studios, have great customer service, along with other perks with our company! Our sound engineer as well as our producer has phenomenal recording and production credits to well known artists in the music industry. Our new company needs clients! There is no prior experience needed for this position. Candidates must be affiliated with people in the music industry that have a consistent need to record their music. We need someone to consistently bring us these clients!!",
                                        jobreqs: "Marketing 1+ Year",
                                        date: "Applied on 12/18/18" 
                                    })}>More</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="box-part text-center">
                                    <div className="title">
                                        <h4>Software Product Manager</h4>
                                    </div>
                                    <div className="text">
                                        <span>Grodan </span><br></br>
                                        <span>United States</span>
                                    </div>
                                    <a style={{ color: "#4183D7" }} onClick={() => this.show({
                                        company: "Software Product",
                                        title: "Grodan", location: "United States",
                                        jobdescription: "Our purpose is simple and compelling: To release the natural power of stone to enrich modern living. ROCKWOOL products save energy and water and reduce CO2 emissions, protect buildings from the spread of fire; reduce waste; improve acoustic comfort, building performance and aesthetics; and enhance Precision Growing, thereby improving the efficiency of fresh food production. While the stone we use may be millions of years old, what we do with it is cutting-edge. Every day, ROCKWOOL colleagues are developing and applying new technologies to release yet more potential of stone wool to enrich modern life. Would you also be proud to enrich society like we do? now to join us as we improve modern living conditions for millions of people worldwide.",
                                        jobreqs: "Understands the customer needs, with focus on the legalised cannabis growing in NA. Acquires an in depth knowledge of the legalised Cannabis markets in North America and stays informed on newest developments and trends. Acts as the voice of the customer in the definition of e-Gro solutions. Organises and manages customer feedback through interviews, surveys, concept testing, analytics tools etc.",
                                        date: "Applied on 12/18/18", img: "http://grodan-mj.ca/wp-content/uploads/thegem-logos/logo_36a256cf0dd0aa332b77b260d6875139_1x.jpg"
                                    })}>More</a>
                                </div>
                            </div>
                            <a className="view-more" href="#">View More</a>
                            <div>
                            </div>

                        </div>
                    </div>
                {/* </div>
                <div>
                </div> */}

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
                            <img style={{ alignContent: "center" }} className="company-logos" src={this.state.img}></img>
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
