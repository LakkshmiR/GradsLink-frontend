import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Sidebar({ shrink }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    alert("You are logged out!!");
    // location.reload();

    navigate("/login", { replace: true });
  };
  const [usercount, setusercount] = useState("");
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/totalusers")
      .then((result) => {
        console.log(result);
        setusercount(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
                  to="/dailyCheckinPAge"
                  className={(info) =>
                    info.isActive ? "sidebar-navlink" : "sidebar-navlink-inactive"
                  }
                >
                  <li className="sidebar-li">
                    <i className="fa-solid fa-person-walking sidebar-icon"></i>

                    <span className="sidebar-element">My Journey</span>
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
                    <span className="sidebar-element">Leaderboard</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/login"
                  className={(info) =>
                    info.isActive ? "sidebar-navlink" : "sidebar-navlink-inactive"
                  }
                >
                  <li className="sidebar-li" onClick={() => handleLogout()}>
                    <i className="fa-solid fa-right-from-bracket sidebar-icon"></i>
                    <span className="sidebar-element-logout">Logout</span>
                  </li>
                </NavLink>
                <li className="sidebar-li">
                  <span className="sidebar-element-total">Total Grads:{usercount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
