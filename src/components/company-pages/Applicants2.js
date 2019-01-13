import React from 'react';
import CompanySidebar from "./CompanySidebar";
import "../../styles/Applicants.css";
import {Link} from 'react-router-dom';

const Applicants2 = () => (

    <div> 
        <CompanySidebar />
        <div className="container-applicants">
    <div className="row">
    
    <p></p>
    
        <div className="col-md-10 col-md-offset-1">

            <div className="panel panel-default panel-table">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-xs-6">
                    <h3 className="panel-title">Applicants Tracker</h3>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th>Position</th>
                        <th className="hidden-xs">ID</th>
                        <th>Name</th>
                        <th>Email</th>                        
                        <th>Status</th>
                        <th>Actions</th>

                    </tr> 
                  </thead>
                  <tbody>
                          <tr>
                            <td align="center">
                            Community Outreach Coordinator
                            </td>
                            <td className="hidden-xs">1</td>
                            <td>Luke Summer</td>
                            <td>luke.summer@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>
                          </tr>
                          <tr>
                            <td align="center">
                            Community Outreach Coordinator                            
                            </td>
                            <td className="hidden-xs">2</td>
                            <td>Mike Knight</td>
                            <td>mknight@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Community Outreach Coordinator
                            </td>
                            <td className="hidden-xs">3</td>
                            <td>Josh Liebs</td>
                            <td>joshleibs@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Community Outreach Coordinator
                            </td>
                            <td className="hidden-xs">4</td>
                            <td>Greg Stats</td>
                            <td>greg.stats@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Community Outreach Coordinator
                            </td>
                            <td className="hidden-xs">5</td>
                            <td>Marisa Ownum</td>
                            <td>marisa.ownum@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                          </tr>
                          <tr>
                            <td align="center">Community Outreach Coordinator
                            </td>
                            <td className="hidden-xs">6</td>
                            <td>Leah Kane</td>
                            <td>leahrkane@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                          </tr>
                          <tr>
                            <td align="center">Assistant Store Manager
                            </td>
                            <td className="hidden-xs">7</td>
                            <td>Michael Steef</td>
                            <td>mikesteef@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>
                            


                          </tr>
                          <tr>
                            <td align="center"> Assitant Store Manager
                            </td>
                            <td className="hidden-xs">8</td>
                            <td>Heather Gillan</td>
                            <td>heathergillan22@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">Assistant Store Manager
                            </td>
                            <td className="hidden-xs">9</td>
                            <td>Thomas Defran</td>
                            <td>tmd2@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">Assistant Store Manager
                            </td>
                            <td className="hidden-xs">10</td>
                            <td>Elise Stone</td>
                            <td>e.stone1134@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">Assistant Store Manager
                            </td>
                            <td className="hidden-xs">11</td>
                            <td>Ruby Tage </td>
                            <td>r.tage@gmail.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
            
                        </tbody>
                </table>
            
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col col-xs-4">Page 1 of 5
                  </div>
                  <div className="col col-xs-8">
                    <ul className="pagination hidden-xs">
                        <Link 
                        to="/applicants">
                      <li><a href="#">1&nbsp; </a></li>
                      </Link>
                      <Link
                      to="/applicants2">
                      <li><a href="#">2 &nbsp;</a></li>
                      </Link>
                      <li><a href="#">3 &nbsp;</a></li>
                      <li><a href="#">4 &nbsp;</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

</div></div></div>
</div>


    
)

export default Applicants2