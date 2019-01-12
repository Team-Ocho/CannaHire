import React from 'react';
import CompanySidebar from "./CompanySidebar";
import "../../styles/Applicants.css";

const Applicants = () => (

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
                            Marketing Manager
                            </td>
                            <td className="hidden-xs">1</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td><span className="pcoded-badge label label-warning">NEW</span></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td align="center">
                            Marketing Manager                            
                            </td>
                            <td className="hidden-xs">2</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td><span className="pcoded-badge label label-warning">NEW</span></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Project
                            </td>
                            <td className="hidden-xs">3</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Project Manager
                            </td>
                            <td className="hidden-xs">4</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Summer 2019 Finance Intern
                            </td>
                            <td className="hidden-xs">5</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">6</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">7</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">8</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">9</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">10</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a className="btn btn-default"><em className="fa fa-pencil"></em></a>
                              {/* <a className="btn btn-danger"><em className="fa fa-trash"></em></a> */}
                            </td>
                            <td className="hidden-xs">11</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
            
                        </tbody>
                </table>
            
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col col-xs-4">Page 1 of 5
                  </div>
                  <div className="col col-xs-8">
                    <ul className="pagination hidden-xs pull-right">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                    <ul className="pagination visible-xs pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

</div></div></div>
</div>


    
)

export default Applicants