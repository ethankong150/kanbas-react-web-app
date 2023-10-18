import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPlus, faEllipsisVertical, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <div>
      <td valign="top" className="hide-third-column" style={{ width: "65%", paddingRight: "10px" }}>
        <div style={{ marginLeft: "35%", marginTop: "20px" }}>
          <button className="rectangular-button" type="button" style={{ backgroundColor: "#F2F2F2" }}>Collapse All</button>
          <button className="rectangular-button" type="button" style={{ backgroundColor: "#F2F2F2" }}>View Progress</button>
          <div className="dropdown" style={{ display: "inline-block" }}>
            <button className="btn btn-secondary dropdown-toggle rectangular-button" style={{ backgroundColor: "rgb(240, 240, 240)" }} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
              Publish All
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item selected" href="#">Publish All</a></li>
              <li><a className="dropdown-item" href="#">Publish Some</a></li>
              <li><a className="dropdown-item" href="#">Don't publish</a></li>
            </ul>
          </div>
          <button type="button" style={{ width: "90", height: "30px", padding: "3px 20px", borderRadius: "2px" }} className="btn btn-danger"><FontAwesomeIcon icon={faPlus} style={{ color: "white" }} aria-hidden="true" /> Assignment</button>
          <button style={{ backgroundColor: "#F2F2F2", color: "black", marginLeft: "0px", borderWidth: "1px", padding: "3px 5px", display: "inline-block", borderRadius: "0px" }}><FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} /></button>
        </div>
        <hr />
        <ul className="list-group">
          {courseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item-secondary week" style={{ listStyle: "none" }}>
              <h4>{assignment.title}</h4>
              <ul className="list-group sub-item">
                <li className="list-group-item stretch-right">
                  <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                  <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} style={{ marginRight: "20px" }} />
                  <FontAwesomeIcon icon={faPenToSquare} size={'l'} style={{ color: 'green', marginRight: "20px" }} />
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="">
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#44ff00", marginRight: "10px" }} />
                    <FontAwesomeIcon icon={faEllipsisVertical} size={'xl'} />
                  </span>

                  <div style={{marginLeft:"8px"}}>
                      <strong style={{marginLeft:"60px"}}>Due</strong> {assignment.due}| {assignment.pts}
                  </div>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </td>
    </div>
  );
}

export default Assignments;
