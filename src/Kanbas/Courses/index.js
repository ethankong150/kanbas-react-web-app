import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const location = useLocation();

  const getBreadcrumbText = (pathname) => {
    if (pathname.includes("Home")) return "Home";
    if (pathname.includes("Modules")) return "Modules";
    if (pathname.includes("Assignments")) return "Assignments";
    if (pathname.includes("Grades")) return "Grades";
    if (pathname.includes("Piazza")) return "Piazza";
    if (pathname.includes("Zoom%20Meetings")) return "Zoom Meetings";
    if (pathname.includes("Quizzes")) return "Quizzes";
    if (pathname.includes("People")) return "People";
    return "Error";
  };
  return (
    <div>
      <div className="breadcrumb" style={{  marginLeft: '0%', width: '94vw', border: 'none', borderRadius: '0px', paddingTop: '20px', paddingBottom: '0px' }}>

            <div className="breadcrumb-item" style={{ listStyleType: 'none' }}>
              <FontAwesomeIcon icon={ faBars } style={{color: "red"}} size="xl"/>
              <a style={{ color: 'red', textDecoration: 'none', marginLeft: '20px', marginRight: '10px' }} href="./index.js">{course.number}</a> 
              {">"}
              <span style={{ marginLeft: '10px' }}>{getBreadcrumbText(location.pathname)}</span>
              <button className="rectangular-button" style={{ backgroundColor: "#F2F2F2", marginLeft: '1100px', width: '150px', height: '40px' }}>
              <FontAwesomeIcon icon={ faGlasses } /> Student View
              </button>
            </div>
      </div>

      <h5 style={{marginLeft:"10px"}}>{course._id}</h5>
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll bottom-0 end-0" style={{marginLeft: "15%", marginTop:"-25%"}}>
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