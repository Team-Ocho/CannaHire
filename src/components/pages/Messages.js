import React from 'react';
import "../../styles/Messages.css";
import Sidebar from "../Sidebar";


const Messages = () => (
<div>
  <Sidebar />
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
                  <div class="chat_img"> <img  className="chatimg" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Greg Smith <span class="chat_date">Dec 25</span></h5>
                    <h6>WeedCo</h6>
                    <p>Hi Liz, I saw your application and have a few questions for you.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img className="chatimg" src="https://demos.artbees.net/jupiter/wp-content/uploads/bfi_thumb/sortcode-01-mj6ligk4iz1pbv5h1pmc33m24ucrokfw7lv1i4xsek.jpg" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sarah Moet <span class="chat_date">Dec 18</span></h5>
                    <h6>Cbd4Med</h6>
                    <p>Great! My team would like to set up an intro call. We will send you a link to schedule.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img className="chatimg" src="https://upload.wikimedia.org/wikipedia/en/a/a1/NafSadh_Profile.jpg" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Sunil Rajput <span class="chat_date">Nov 29</span></h5>
                    <h6>Leaf Line</h6>
                    <p>Thanks for reaching out. We'll be in touch and get back to you within the week.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img className="chatimg" src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Ryan Brent <span class="chat_date">Sept 15</span></h5>
                    <h6>Earth Meds</h6>
                    <p>We're looking for part-time right now. Flexible schedule and possiblity of remote.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img className="chatimg" src="http://www.smiledesignnyc.com/wp-content/uploads/2018/03/prepless-veneers.jpg" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Matt Ritowski <span class="chat_date">Oct 25</span></h5>
                    <h6>Green Treats</h6>
                    <p>Hi Liz, let's set up a call with the team. We can discuss the position further then.</p>
                  </div>
                </div>
              </div>
              <div class="chat_list">
                <div class="chat_people">
                  <div class="chat_img"> <img className="chatimg" src="https://www.eikonphoto.com/wp-content/uploads/2017/03/male-headshot-tie-color-e1515795186596.jpg" alt="sunil" /> </div>
                  <div class="chat_ib">
                    <h5>Joe Trader <span class="chat_date">Oct 21</span></h5>
                    <h6>Green Co</h6>
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
                <div class="incoming_msg_img"> <img className="chatimg" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Hi Liz, I saw your application and have a few questions for you.</p>
                    <span class="time_date"> Greg     |    11:01 AM    |    Dec 24</span></div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Hi Greg, nice to meet you. Would love to chat more about the company.</p>
                  <span class="time_date">11:30 AM    |    Dec 25</span> </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img className="chatimg" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>We like your background and think you might be a good match. Would like to set up an intro call with the team.</p>
                    <span class="time_date"> Greg    |    2:15 PM    |    Yesterday</span></div>
                </div>
              </div>
              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Sure, what days work for you?</p>
                  <span class="time_date"> 9:05 AM    |    Today</span> </div>
              </div>
              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img className="chatimg" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>I'll send you a link shortly with a calendar so you can schedule what works best for you.</p>
                    <span class="time_date"> Greg   |  9:43 AM    |    Today</span></div>
                </div>
              </div>
            </div>
            <div class="type_msg">
              <div class="input_msg_write">
                <input type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn" type="button"><i className="fa fa-paper-plane" style={{color:"white"}} aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
    </div>
)

export default Messages