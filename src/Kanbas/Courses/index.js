import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';



function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div>
      <div className="breadcrumb" style={{  marginLeft: '0%', width: '94vw', border: 'none', borderRadius: '0px', paddingTop: '20px', paddingBottom: '0px' }}>

            <div className="breadcrumb-item" style={{ listStyleType: 'none' }}>
              <FontAwesomeIcon icon={ faBars } style={{color: "red"}} size="xl"/>
              <a style={{ color: 'red', textDecoration: 'none', marginLeft: '20px', marginRight: '10px' }} href="#">{course.number}</a> 
              >
              <span style={{ marginLeft: '10px' }}>Assignments</span>
              <button className="rectangular-button" style={{ marginLeft: '1100px', width: '150px', height: '40px' }}>
              <FontAwesomeIcon icon={ faGlasses } /> Student View
              </button>
            </div>
      </div>

      <h4>Course {course._id}</h4>
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;