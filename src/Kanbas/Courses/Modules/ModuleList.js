import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modules.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  console.log(modules)

  return (
    <div>
      <td valign="top" className="hide-third-column" style={{width: "65%", paddingRight: "10px"}}>
      <div style={{marginLeft: "45%"}}>
          {/* ... other button elements ... */}
        </div>
        <ul className="list-group">
          {
            modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                <li key={index} className="list-group-item-secondary week" style={{listStyle: "none"}}>
                  <h4>{module.name}</h4>
                  <ul className="list-group sub-item">
                    <li className="list-group-item stretch-right">
                      {module.description}
                      <span className="float-end">
                      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#44ff00",}} />
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
