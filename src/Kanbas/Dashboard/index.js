import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './dashboard.css';
import db from '../Database';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  
  return (
    <div className="main-content container">
      <h2>Dashboard</h2>

      <div style={{width: '25%'}}>
        <h5>Course</h5>
        <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} >
          Add
        </button>
        <button onClick={updateCourse} >
          Update
        </button>
      </div>
     

      <hr />
      <h3 className="ml-3">Published Courses ({courses.length})</h3> 
      <hr />
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-3">
            <div className=" duotone-card card" style={{marginTop: "20px"}}>
              <div className="card-body">
                <h3 className="card-title">
                  <i className="fa-solid fa-ellipsis-vertical" style={{ color: '#ffffff', marginLeft: '200px' }}></i>
                </h3>
                <div style={{ marginTop: '80px' }}>
                  <Link to={`/Kanbas/Courses/${course._id}`} style={{ fontSize: '12px' }}>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                    {course.name}
                  </Link>
                  <div style={{ fontSize: '12px', color: 'grey' }}>
                    {course.number}
                  </div>
                  <div style={{ fontSize: '12px', color: 'grey' }}>
                    {course.startDate} - {course.endDate}
                  </div>
                  <i style={{ marginTop: '10px' }} className="fa-solid fa-pen-to-square"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
