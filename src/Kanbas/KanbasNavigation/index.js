import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGauge, faBook, faCalendar, faInbox, faClock, faDisplay, faArrowRightFromBracket, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'
import neuSymbol from '../Images/neu_symbol.png';

function KanbasNavigation() {
  const linkData = [
    {
      name: "Account",
      path: "account",
      icon: faUser,
      iconColor: "grey",
    },
    {
      name: "Dashboard",
      path: "dashboard",
      icon: faGauge,
      iconColor: "#ff0000",
    },
    {
      name: "Courses",
      path: "courses",
      icon: faBook,
      iconColor: "#ff0000",
    },
    {
      name: "Calendar",
      path: "calendar",
      icon: faCalendar,
      iconColor: "#ff0000",
    },
    {
      name: "Inbox",
      path: "#",
      icon: faInbox,
      iconColor: "#ff0000",
    },
    {
      name: "History",
      path: "#",
      icon: faClock,
      iconColor: "#ff0000",
    },
    {
      name: "Studio",
      path: "#",
      icon: faDisplay,
      iconColor: "#ff0000",
    },
    {
      name: "Commons",
      path: "#",
      icon: faArrowRightFromBracket,
      iconColor: "#ff0000",
    },
    {
      name: "Help",
      path: "#",
      icon: faCircleQuestion,
      iconColor: "#ff0000",
    }
  ];

  const { pathname } = useLocation();

  return (
    <div className="list-group sidebar" style={{borderRadius: '0px'}}>
      <img src={neuSymbol} width="75" height="50" alt="NEU Symbol" style={{ display: 'block', margin: '10px auto'}}/>
      {linkData.map((data, index) => (
        <Link
          key={index}
          to={`/Kanbas/${data.path}`}
          className={`list-group-item ${pathname.includes(data.path) && "active"}`}
          style={{ height: '70px',
          borderRadius: '1px', border:'none', 
          backgroundColor: 'black' , marginTop: '-1px', marginLeft: '-1px', color:'white'}}>
          <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <FontAwesomeIcon icon={data.icon} style={{color: data.iconColor}} />
            
          </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            {data.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
