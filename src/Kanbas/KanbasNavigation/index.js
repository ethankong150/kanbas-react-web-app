import { Link, useLocation } from "react-router-dom";
import { faUser, faGauge, faBook, faCalendar, faInbox, faClock, faDisplay, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';


function KanbasNavigation() {
  // const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkData = [
    {
      name: "Account",
      path: "account", // The path corresponding to this link
      icon: "fa fa-user", // Font Awesome class for the icon
      iconColor: "grey", // Color for the icon
    },
    {
      name: "Dashboard",
      path: "dashboard",
      icon: "fa-solid fa-gauge",
      iconColor: "#ff0000",
    },
    {
      name: "Courses",
      path: "courses",
      icon: "fa-solid fa-book",
      iconColor: "#ff0000",
    },
    {
      name: "Calendar",
      path: "calendar",
      icon: "fa-solid fa-calendar",
      iconColor: "#ff0000",
    },
    {
      name: "Inbox",
      path: "#",
      icon: "fa-solid fa-inbox",
      iconColor: "#ff0000",
    },
    {
      name: "History",
      path: "#",
      icon: "fa-solid fa-clock",
      iconColor: "#ff0000",
    },
    {
      name: "Studio",
      path: "#",
      icon: "fa-solid fa-display",
      iconColor: "#ff0000",
    },
    {
      name: "Commons",
      path: "#",
      icon: "fa-solid fa-arrow-right-from-bracket",
      iconColor: "#ff0000",
    },
    {
      name: "Help",
      path: "#",
      icon: "fa-regular fa-circle-question",
      iconColor: "#ff0000",
    }
    
  ];
  const { pathname } = useLocation();

  return (
    <div className="list-group" style={{ width: 150 }}>
      {linkData.map((data, index) => (
        <Link
          key={index}
          to={`/Kanbas/${data.path}`}
          className={`list-group-item ${pathname.includes(data.path) && "active"}`}
        >
          <div>
            <i className={`${data.icon}`} style={{ color: data.iconColor }}></i>
          </div>
          {data.name}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;