import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleCheck, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modules.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  return (
    <div>
      <td valign="top" className="hide-third-column" style={{width: "65%", paddingRight: "10px"}}>
      <div style={{marginLeft: "43%", marginTop: "6%"}}>
                    <button className="rectangular-button" type="button" style={{backgroundColor: "#F2F2F2"}}>Collapse All</button>    
                    <button className="rectangular-button" type="button" style={{backgroundColor: "#F2F2F2"}}>View Progress</button>
                    <div className="dropdown" style={{display:"inline-block"}}>
                        <button className="btn btn-secondary dropdown-toggle rectangular-button" style={{backgroundColor: "rgb(240, 240, 240)"}} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "green"}}/>
                            Publish All
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item selected" href="./ModuleList.js">Publish All</a></li>
                            <li><a className="dropdown-item" href="./ModuleList.js">Publish Some</a></li>
                            <li><a className="dropdown-item" href="./ModuleList.js">Don't publish</a></li>
                        </ul>
                    </div>
                    
                    <button type="button" style={{width: "90", height: "30px", padding: "3px 20px", borderRadius: "2px"}} class="btn btn-danger"><FontAwesomeIcon icon={faPlus} style={{color:"white"}} aria-hidden="true"/> Module</button> 
                    <button style={{backgroundColor: "#F2F2F2", color: "black", marginLeft: "0px", borderWidth: "1px", padding:"3px 5px", display: "inline-block", borderRadius: "0px"}}><FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} /></button>
                </div>
                <hr></hr>
        <ul className="list-group">
            <li className="list-group-item">
              <div style={{ display: 'flex',  alignItems: 'center', gap: '10px' }}>
                <button onClick={handleAddModule}>Add</button>
                <button onClick={handleUpdateModule}> Update </button>
                <input style={{height: "30px"}}
                  value={module.name}
                  onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea 
                  style={{ height: "30px" }} 
                  value={module.description}
                  onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
              </div>
            </li>
          {
            modules
              .filter((module) => module.course === courseId)
              .map((module, index) => (
                <li key={index} className="list-group-item-secondary week" style={{listStyle: "none"}}>
                  <button
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteModule(module._id)}
                  >

                    Delete
                  </button>
                <h4>{module.name}</h4>

                  <ul className="list-group sub-item">
                    <li className="list-group-item stretch-right">
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} style={{marginRight:"20px"}}/>
                      <FontAwesomeIcon icon={faPenToSquare} size={'lg'} style={{color: 'green', marginRight:"20px"}} />
                      {module.description}
                      <span className="float-end">
                      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#44ff00", marginRight:"10px"}} />
                      <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                      </span>
                    </li>
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
