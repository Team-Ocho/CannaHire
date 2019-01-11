import React from 'react';
import CompanySidebar from "./CompanySidebar";
import "../../styles/Applicants.css";

const Applicants = () => (

    <div> 
        <CompanySidebar />
        <div class="container-applicants">
    <div class="row">
    
    <p></p>
    
        <div class="col-md-10 col-md-offset-1">

            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6">
                    <h3 class="panel-title">Applicants Tracker</h3>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th>Position</th>
                        <th class="hidden-xs">ID</th>
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
                            <td class="hidden-xs">1</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td><span class="pcoded-badge label label-warning">NEW</span></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td align="center">
                            Marketing Manager                            
                            </td>
                            <td class="hidden-xs">2</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td><span class="pcoded-badge label label-warning">NEW</span></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Project
                            </td>
                            <td class="hidden-xs">3</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Project Manager
                            </td>
                            <td class="hidden-xs">4</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td><span class="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                          </tr>
                          <tr>
                            <td align="center">
                            Summer 2019 Finance Intern
                            </td>
                            <td class="hidden-xs">5</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td><span class="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">6</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">7</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">8</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">9</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">10</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              {/* <a class="btn btn-danger"><em class="fa fa-trash"></em></a> */}
                            </td>
                            <td class="hidden-xs">11</td>
                            <td>John Doe</td>
                            <td>johndoe@example.com</td>
                            <td></td>
                            <td></td>


                          </tr>
            
                        </tbody>
                </table>
            
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col col-xs-4">Page 1 of 5
                  </div>
                  <div class="col col-xs-8">
                    <ul class="pagination hidden-xs pull-right">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                    <ul class="pagination visible-xs pull-right">
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