import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar({ shrink }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="whole-sidebar">
        <div className={`main ${shrink ? "small" : ""}`}>
          <div className="sidebar">
            <div className="menu">
              <ul>
                <NavLink
                  to="/jobslist"
                  className={(info) =>
                    info.isActive ? "sidebar-navlink" : "sidebar-navlink-inactive"
                  }
                >
                  <li className="sidebar-li">
                    <i className="fa-solid fa-briefcase sidebar-icon"></i>
                    <span className="sidebar-element">Jobs</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/postjob"
                  className={(info) =>
                    info.isActive ? "sidebar-navlink" : "sidebar-navlink-inactive"
                  }
                >
                  <li className="sidebar-li">
                    <i className="fa-solid fa-circle-plus sidebar-icon"></i>
                    <span className="sidebar-element">Post a Job</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/leaderboard"
                  className={(info) =>
                    info.isActive ? "sidebar-navlink" : "sidebar-navlink-inactive"
                  }
                >
                  <li className="sidebar-li">
                    <i className="fa-solid fa-trophy sidebar-icon"></i>
                    <span className="sidebar-element ">Leaderboard</span>
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
