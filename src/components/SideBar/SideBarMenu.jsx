// MainMenu.js
import React, { useState } from 'react';
import {FaHome, FaUser,FaCalendarCheck,FaRunning,FaSlidersH   } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  const [activeItem, setActiveItem] = useState('/');
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  console.log(activeItem)
  return (
   <nav className="sidebar-menu">
   <h1 className='logo'>Logo Area</h1>
   <h1 className='small-logo'>Logo</h1>
   <ul>
     <li className="nav-item">

       <Link  to="/" onClick={() => handleItemClick('/')} className={`nav-link ${activeItem === '/' ? 'active' : ''} `}>
        <FaHome />
         <span className="nav-text">Home</span>
       </Link>
     </li>

     <li className="nav-item">
       <Link  to="/profile" onClick={() => handleItemClick('profile')} className={`nav-link ${activeItem === 'profile' ? 'active' : ''} `}>
         <FaUser />
         <span className="nav-text">Profile</span>
       </Link>
     </li>

     <li className="nav-item">
       <Link  to="/schedule" onClick={() => handleItemClick('schedule')} className={`nav-link ${activeItem === 'schedule' ? 'active' : ''} `}>
       <FaCalendarCheck />
         <span className="nav-text">Schedule</span>
       </Link>
     </li>

     <li className="nav-item">
       <Link to="/activities"  onClick={() => handleItemClick('activities')} className={`nav-link ${activeItem === 'activities' ? 'active' : ''} `}>
       <FaRunning />
         <span className="nav-text">Activities</span>
       </Link>
     </li>

     <li className="nav-item">
       <Link to="/settings" onClick={() => handleItemClick('settings')} className={`nav-link ${activeItem === 'settings' ? 'active' : ''} `}>
       <FaSlidersH />
         <span className="nav-text">Settings</span>
       </Link>
     </li>
   </ul>
 </nav>
  );
};

export default SidebarMenu;
