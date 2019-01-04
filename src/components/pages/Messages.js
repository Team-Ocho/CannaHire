import React from 'react';
import "../../styles/Messages.css";
import { Link } from "react-router-dom";


const Messages = () => (

    <div className="dashboard-main">
    <div className="w3-row">
      <div className="w3-container w3-quarter">
        <ul className="sidenav">
          <img className="dashboard-logo" src={require('../../assets/logo1.png')}></img>
          <h3 className="hi">Hi Name!</h3>
          <Link
            to="/search-jobs"
            className={
              window.location.pathname === "/search-jobs" ? "nav-link active" : "nav-link"
            }
          >
            Search Jobs
      </Link>
          <Link
            to="/dashboard"
            className={
              window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
      </Link>
          <Link
            to="/learn"
            className={
              window.location.pathname === "/learn" ? "nav-link active" : "nav-link"
            }
          >
            Learn
        </Link>
          <Link
            to="/messages"
            className={
              window.location.pathname === "/messages" ? "nav-link active" : "nav-link"
            }
          >
            Messages
      </Link>
          <Link
            to="/saved-posts"
            className={
              window.location.pathname === "/saved-posts" ? "nav-link active" : "nav-link"
            }
          >
            Saved Posts
      </Link>
          <Link
            to="/logout"
            className={
              window.location.pathname === "/logout" ? "nav-link active" : "nav-link"
            }
          >
            Logout
      </Link>
        </ul>
      </div>
    </div>
    <div class="container-messages">
      <h3 class=" text-center">Inbox</h3>
      <div class="messaging">
        <div class="inbox_msg">
          <div class="inbox_people">
            <div class="headind_srch">
              <div class="recent_heading">
                <h4>Recent</h4>
              </div>
              <div class="srch_bar">
                <div class="stylish-input-group">
                  <input type="text" class="search-bar" placeholder="Search" />
                  <span class="input-group-addon">
                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="inbox_chat">
              <div class="chat_list active_chat">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                    <p>Test, which is a new approach to have all solutions
                      astrology under one roof.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mesgs">
            <div class="msg_history">
              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test which is a new approach to have all
                      solutions</p>
                    <span class="time_date"> 11:01 AM    |    June 9</span></div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Test which is a new approach to have all
                    solutions</p>
                  <span class="time_date"> 11:01 AM    |    June 9</span> </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Apollo University, Delhi, India Test</p>
                  <span class="time_date"> 11:01 AM    |    Today</span> </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>We work directly with our designers and suppliers,
                      and sell direct to you, which means quality, exclusive
                      products, at a price anyone can afford.</p>
                    <span class="time_date"> 11:01 AM    |    Today</span></div>
                </div>
              </div>
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>


        <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>

      </div>
    </div>
  </div>
)

export default Messages