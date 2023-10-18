import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleCheck, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modules.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <td valign="top" className="hide-third-column" style={{width: "65%", paddingRight: "10px"}}>
      <div style={{marginLeft: "43%", marginTop: "20px"}}>
                    <button className="rectangular-button" type="button" style={{backgroundColor: "#F2F2F2"}}>Collapse All</button>    
                    <button className="rectangular-button" type="button" style={{backgroundColor: "#F2F2F2"}}>View Progress</button>
                    <div className="dropdown" style={{display:"inline-block"}}>
                        <button className="btn btn-secondary dropdown-toggle rectangular-button" style={{backgroundColor: "rgb(240, 240, 240)"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "green"}}/>
                            Publish All
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item selected" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Publish Some</a></li>
                            <li><a className="dropdown-item" href="#">Don't publish</a></li>
                        </ul>
                    </div>
                    
                    <button type="button" style={{width: "90", height: "30px", padding: "3px 20px", borderRadius: "2px"}} class="btn btn-danger"><FontAwesomeIcon icon={faPlus} style={{color:"white"}} aria-hidden="true"/> Module</button> 
                    <button style={{backgroundColor: "#F2F2F2", color: "black", marginLeft: "0px", borderWidth: "1px", padding:"3px 5px", display: "inline-block", borderRadius: "0px"}}><FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} /></button>
                </div>
                <hr></hr>
        <ul className="list-group">
          {
            modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                <li key={index} className="list-group-item-secondary week" style={{listStyle: "none"}}>
                  <h4>{module.name}</h4>
                  <ul className="list-group sub-item">
                    <li className="list-group-item stretch-right">
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} style={{marginRight:"20px"}}/>
                      <FontAwesomeIcon icon={faPenToSquare} size={'l'} style={{color: 'green', marginRight:"20px"}} />
                      {module.description}
                      <span className="float-end">
                      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#44ff00", marginRight:"10px"}} />
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                      </span>
                    </li>
                    {/* ... other sub-items ... THIS IS WHERE I INTEGRATE THE REMAINDER OF THE MODULES...???*/}
                  </ul>
                </li>
            ))
          }
        </ul>
      </td>
    </div>
  );
}

export default ModuleList;
