import React, { Component } from 'react';
import CompanySidebar from "./CompanySidebar";
import "../../styles/Applicants.css";
import { Link } from 'react-router-dom';
import Modal, { closeStyle } from 'simple-react-modal';


class Applicants extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      location: "",
      resume: "",
      coverletter: ""
    }
  }
  show = (data) => {
    console.log("here");
    this.setState({ show: true, name: data.name, location: data.location, resume: data.resume, coverletter: data.coverletter })
  }

  close = () => {
    console.log("line22");
    this.setState({ show: false })
  }

  render() {
    return (
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
                      <tr onClick={()=> this.show({name:"Leia Burns", location:"San Jose, CA", resume:"", 
                      coverletter:"Dear Sir or Madam, I am a hard-working and determined professional seeking an opportunity to succeed in a dynamic company such as yours. I am confident that my knowledge, ability and experience allow me to deliver successful results for any company in a range of administrative positions. Please allow me to highlight my key skills: able to effectively manage my time through careful planning and organization of work activities an aptitude for identifying and resolving problems efficiently excellent communication skills that result in positive interpersonal relationships a track record of meeting deadlines and producing accurate work of a high standard proven ability to make sound decisions based on valid information the capacity to learn and and apply new information quickly and accurately strong computer skills with proficiency in MS Office I am convinced that I can be an asset in any position requiring hard work, enthusiasm and reliability and I look forward to hearing from you in the near future. The enclosed resume expands on my qualifications and experience. Thank you for your time and consideration. Sincerely, Leia Burns"})}>
                        <td align="center">
                          Marketing Manager
                          </td>
                        <td className="hidden-xs">1</td>
                        <td>Leia Burns</td>
                        <td>leiab@gmail.com</td>
                        <td><span className="pcoded-badge label label-warning">NEW</span></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td align="center">
                          Marketing Manager
                          </td>
                        <td className="hidden-xs">2</td>
                        <td>Matt Tome</td>
                        <td>matttome@gmail.com</td>
                        <td><span className="pcoded-badge label label-warning">NEW</span></td>
                        <td></td>


                      </tr>
                      <tr>
                        <td align="center">
                          Project Manager
                          </td>
                        <td className="hidden-xs">3</td>
                        <td>John Teeger</td>
                        <td>jt1108@gmail.com</td>
                        <td></td>
                        <td></td>


                      </tr>
                      <tr>
                        <td align="center">
                          Project Manager
                          </td>
                        <td className="hidden-xs">4</td>
                        <td>Mindy Cane</td>
                        <td>m.cane221@gmail.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                      </tr>
                      <tr>
                        <td align="center">
                          Summer 2019 Finance Intern
                          </td>
                        <td className="hidden-xs">5</td>
                        <td>Jacob Bennet</td>
                        <td>j.bennet02@cwru.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                      </tr>
                      <tr>
                        <td align="center">Summer 2019 Finance Intern
                          </td>
                        <td className="hidden-xs">6</td>
                        <td>Cary Garfinkel</td>
                        <td>cary.g22@gmail.com.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                      </tr>
                      <tr>
                        <td align="center">Summer 2019 Finance Intern
                          </td>
                        <td className="hidden-xs">7</td>
                        <td>Maddy Dean</td>
                        <td>maddy.dean@gmail.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>



                      </tr>
                      <tr>
                        <td align="center"> Pharmacy Manager
                          </td>
                        <td className="hidden-xs">8</td>
                        <td>Dillon Stern</td>
                        <td>d.stern@gmail.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                      </tr>
                      <tr>
                        <td align="center">Pharmacy Manager
                          </td>
                        <td className="hidden-xs">9</td>
                        <td>Thomas Defran</td>
                        <td>tmd2@gmail.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-reject label-reject label-warning-reject">REJECTED</span></td>


                      </tr>
                      <tr>
                        <td align="center">Pharmacy Manager
                          </td>
                        <td className="hidden-xs">10</td>
                        <td>Erica Cross</td>
                        <td>e.cross1134@gmail.com</td>
                        <td></td>
                        <td><span className="pcoded-badge-accept label-accept label-warning-accept">ACCEPTED</span></td>


                      </tr>
                      <tr>
                        <td align="center">Pharmacy Manager
                          </td>
                        <td className="hidden-xs">11</td>
                        <td>Marni Green</td>
                        <td>marni.green@gmail.com</td>
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
            </div>
          </div>
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
                      <h5>{this.state.name}</h5>
                      <h5>{this.state.location}</h5>
                      <h5>Resume: 
                          <span><i class="fa fa-file-text" aria-hidden="true"></i></span>
                          {this.state.resume}
                      </h5>
                      <h5>Cover Letter:</h5>
                      <p>{this.state.coverletter}</p>
                      <button>Message</button> 
          </div>
            </Modal>
    </div>
</div>


    )
  }



}


export default Applicants