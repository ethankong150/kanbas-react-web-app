import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckCircle, faFileImport, faFileExport, faBullseye, faChartSimple, faBullhorn, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons';
import ModuleList from "../Modules/ModuleList";
import './home.css';

function Home() {
    return (
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td valign="top" style={{ width: "80%", paddingRight: '0', borderRight: 'none' }}>
                <ModuleList/>
              </td>
              <td valign="top" className="hide-fourth-column" style={{ paddingLeft: '0', borderLeft: 'none' }}>
                <p style={{marginTop: "25px"}}>
                    <button className="rectangular-button" type="button" style={{ backgroundColor:"#F2F2F2", paddingRight: '0px', borderWidth: '1px' }}>
                        <FontAwesomeIcon icon={faBan} style={{ color: '#c2c2c2' }} /> Unpublish
                    </button>
                    <button className="rectangular-button" type="button" style={{ paddingLeft: '0px', borderWidth: '1px', padding: '2px 6px', backgroundColor: 'green' }}>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'rgb(255, 255, 255)' }} /> Published
                    </button>
                </p>
                  <div className="list-container">
                      <ul className="outer">
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faFileImport} /> Import Existing Content</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faFileExport} /> Import From Commons</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faBullseye} /> Choose Home Page</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faChartSimple} /> View Course Stream</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faBullhorn} /> New Announcement</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faChartSimple} /> New Analytics</a></li>
                          <li className="status-bar"><a style={{ color: 'black' }} href="./index.js"><FontAwesomeIcon icon={faBell} /> View Course Notifications</a></li>
                      </ul>
                  </div>
                  <h4>To Do</h4>
                  <hr style={{ maxWidth: '300px', marginLeft: '0px' }} />
                  <h4>Coming Up <a href="./index.js" style={{ fontSize: '14px', marginLeft: '50px', textDecoration: 'none', color: 'red' }}><FontAwesomeIcon icon={faCalendar} style={{ marginRight: '5px' }} /> View Calendar </a></h4>
                  <hr style={{ maxWidth: '300px', marginLeft: '0px' }} />
                  <ul className="coming-up-list">
                      <li className="coming-up-item">
                          <FontAwesomeIcon icon={faCalendar} />
                          <a href="./index.js" className="coming-up-link">Lecture</a>
                          <div style={{ marginLeft: '18px' }}>
                              CS4550.12631.202410
                          </div>
                          <div style={{ marginLeft: '18px' }}>
                              Sep 7 at 11:45am
                          </div>
                      </li>
                      <li className="coming-up-item">
                          <FontAwesomeIcon icon={faCalendar} />
                          <a href="./index.js" className="coming-up-link">Lecture</a>
                          <div style={{ marginLeft: '18px' }}>CS4550.12631.202410</div>
                          <div style={{ marginLeft: '18px' }}>Sep 11 at 11:45am</div>
                      </li>
                      <li className="coming-up-item">
                          <FontAwesomeIcon icon={faCalendar} />
                          <a href="./index.js" className="coming-up-link">CS5610.06.SP23</a>
                          <div style={{ marginLeft: '18px' }} className="event-time">Sep 11 at 6pm</div>
                      </li>
                  </ul>
              </td>
            </tr>
        </table>
      </div>
    );
}

export default Home;
