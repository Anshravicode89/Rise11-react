import React from "react";
import "./NavigationMenu.css";
import { FaTachometerAlt, FaFolderOpen, FaCalendarAlt, FaFileAlt, FaFistRaised } from "react-icons/fa"; // Importing existing icons
import { GiHeartBeats } from "react-icons/gi"; // Importing heart beat icon

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <h2>
        <img src="logo.png" alt="logo" />
        Jur
      </h2>
      
      <ul>
        <li>
          <FaTachometerAlt className="nav-icon" /> Dashboard
        </li>
        <li>
          <FaFolderOpen className="nav-icon" /> My Cases
        </li>
        <li>
          <GiHeartBeats className="nav-icon" /> Activities
        </li>
        <li>
          <FaCalendarAlt className="nav-icon" /> Calendar
        </li>
        <li>
          <FaFileAlt className="nav-icon" /> Files
        </li>
        <li>
          <FaFistRaised className="nav-icon" /> Open a Dispute
        </li>
      </ul>
      <div className="justice-banner">
        <p>Get Justice on every Claims</p>
        <img src="justice.png" alt="Justice" />
      </div>
    </div>
  );
};

export default NavigationMenu;
