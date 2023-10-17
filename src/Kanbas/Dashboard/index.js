import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './dashboard.css';
import db from '../Database';

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="main-content container">
      <h2>Dashboard</h2>
      <hr />
      <h3 className="ml-3">Published Courses ({courses.length})</h3> 
      <hr />
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-3">
            <div className=" duotone-card card">
              <div className="card-body">
                <h3 className="card-title">
                  <i className="fa-solid fa-ellipsis-vertical" style={{ color: '#ffffff', marginLeft: '200px' }}></i>
                </h3>
                <div style={{ marginTop: '80px' }}>
                  <Link to={`/Kanbas/Courses/${course._id}`} style={{ fontSize: '12px' }}>
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
