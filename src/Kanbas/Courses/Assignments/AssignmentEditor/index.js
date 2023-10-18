import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import db from "../../../Database";
import "./assignmentEditor.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    const { courseId } = useParams();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div style={{marginTop: "20px"}}>
          <select style={{backgroundColor: "#F2F2F2", color: "black"}}>
                    <option value="EDIT" >Edit</option>
                    <option value="SPEED GRADER" selected>Speed Grader</option>
                    <option value="Duplicate">Duplicate</option>
                    <option value="Delete">Delete</option>
                    <option value="Move To">Move To...</option>
                    <option value="Send To">Send To...</option>
                    <option value="Copy To">Copy To...</option>
                    <option value="Share to Commons">Share to Commons</option>
                </select>
                <span class="float-end">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "green" }} />
                    <span style={{color: "green"}}>Published</span>
                    <button type="button" style={{backgroundColor: "#F2F2F2", border:"solid", padding: "3px 7px", color:"black"}}> <FontAwesomeIcon icon={faEllipsisVertical} /></button>
                </span>
                <hr></hr>
            <h4>Assignment Name</h4>
            <div className="form-container">
                <form onSubmit={handleSave}>
                    <div>
                        <input className="form-control" defaultValue={assignment.title} style={{ width: '75%' }} />
                    </div>
                    <textarea className="form-control" style={{ fontSize: '14px', marginTop: '15px' }} cols="90" rows="5">
                        This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
                    </textarea>
                    <div class="col-md-12" style={{marginTop: "10px"}}>
                            <div class="form-group row">
                                <label for="points" class="col-sm-4 col-form-label">Points</label>
                                <div class="col-sm-8">
                                    <input id="points" class="form-control" placeholder="100"/>
                                </div>
                            </div>
            
                            <div class="form-group row">
                                <label for="assignment-group" class="col-sm-4 col-form-label">Assignment Group</label>
                                <div class="col-sm-8">
                                    <select id="assignment-group" class="form-control">
                                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                        <option value="QUIZZES">QUIZZES</option>
                                        <option value="EXAMS">EXAMS</option>
                                        <option value="PROJECT">PROJECT</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="display-grade" class="col-sm-4 col-form-label">Display Grade as</label>
                                <div class="col-sm-8">
                                    <select class="form-control" style={{width: "30%"}}> 
                                        <option value="PERCENTAGE" selected> Percentage</option>
                                        <option value="LETTER"> Letter</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="nothing" class="col-sm-4 col-form-label"></label>
                                <div class="col-sm-8">
                                    <input type="checkbox"/> Do not count this assignment towards the final grade
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="submission-type" class="col-sm-4 col-form-label">Submission Type</label>
                                <div class="col-sm-8">
                                    <select class="form-control">
                                        <option value="ONLINE" selected> Online</option>
                                        <option value="IN-PERSON"> In-Person</option>
                                    </select>
                                    <p>
                                        <label style={{marginTop:"10px", fontWeight: "bold"}}>Online Entry Options</label><br/>
                                        <input type="checkbox" value="TEXT-ENTRY"
                                            name="entry-option" id="text-entry"/>
                                        <label for="text-entry">Text Entry</label>    <br/>
                                        <input type="checkbox" value="WEBSITE-URL"
                                            name="entry-option" id="website-url"/>
                                        <label for="website-url">Website URL</label>    <br/>
                                        <input type="checkbox" value="MEDIA-RECORDINGS"
                                            name="entry-option" id="media-recordings"/>
                                        <label for="media-recordings">Media Recordings</label> <br/>
                                        <input type="checkbox" value="STUDENT-ANNOTATION"
                                            name="entry-option" id="student-annotation"/>
                                        <label for="student-annotation">Student Annotation</label>    <br/>
                                        <input type="checkbox" value="FILE-UPLOADS"
                                            name="entry-option" id="file-uploads"/>
                                        <label for="file-uploads">File Uploads</label>
                                    </p>
                
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="attempts" class="col-sm-4 col-form-label">Submission Attempts</label>
                                <div class="col-sm-8">
                                    <select id="attempts" style={{backgroundColor: "#F2F2F2", color: "black"}}>
                                        <option value="UNLIMITED" selected> Unlimited</option>
                                        <option value="3"> 3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="plagiarism" class="col-sm-4 col-form-label">Plagiarism</label>
                                <div class="col-sm-8">
                                    <select style={{backgroundColor: "#F2F2F2", color: "black"}}>
                                        <option value="None" selected> None</option>
                                        <option value="Yes"> Yes</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="group" class="col-sm-4 col-form-label">Group Assignment</label>
                                <div class="col-sm-8">
                                    <input type="checkbox" value="YES"
                                    name="group-assignment" id="group-assignment"/>
                                <label for="group-assignment">This is a group assignment</label>    <br/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="reviews" class="col-sm-4 col-form-label">Peer Reviews</label>
                                <div class="col-sm-8">
                                    <input type="checkbox" value="YES"
                                    name="peer-review" id="peer-review"/>
                                <label for="peer-review">Require Peer Reviews</label>    <br/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="assign" class="col-sm-4 col-form-label">Assign</label>
                                <div class="col-sm-8">
                                    <label>Assign to</label><br/>
                            <input placeholder="Everyone"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="due" class="col-sm-4 col-form-label">Due</label>
                                <div class="col-sm-8">
                                    <input type="date" placeholder="01/01/2021"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="avail" class="col-sm-4 col-form-label">Available from</label>
                                <div class="col-sm-8">
                                    <input type="date" placeholder="01/01/2021"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="until" class="col-sm-4 col-form-label">Until</label>
                                <div class="col-sm-8">
                                    <input type="date" placeholder="01/01/2021"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div for="until" class="col-sm-4 col-form-label"><button style={{backgroundColor: "#F2F2F2", color: "black"}}>Cancel</button></div>
                                <div class="col-sm-8">
                                    <button style={{backgroundColor: "#F2F2F2", color: "black"}}>Save</button>
                                </div>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default AssignmentEditor;
