import { Link, useParams, useLocation } from "react-router-dom";
import './courseNav.css';

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <td valign="top" className="hide-second-column">
      <div className="sidebar-2">
    <ul>
        {links.map((link, index) => (
            <li key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={`${pathname.includes(link) && "vertical-line"}`} style={{ marginLeft: '5px', marginRight: '-25px' }}></div>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className={`sidebar-2 ${pathname.includes(link) && "sidebar-2-selected"}`}>
                        {link}
                    </Link>
                </div>
            </li>
        ))}
    </ul>
</div>

    </td>
  );
}

export default CourseNavigation;
