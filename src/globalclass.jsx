//new
import "./globalclass.css";
import { useState } from "react";
// import { Router } from "./Router";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
function Globalclass({ hidethis }) {
  //location
  const loggedinuser = localStorage.getItem("name");
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("name");
  //   localStorage.removeItem("email");
  //   alert("You are logged out!!");
  //   // location.reload();

  //   navigate("/login", { replace: true });
  // };
  //total users
  // const [usercount, setusercount] = useState("");
  // const location = useLocation();
  // useEffect(() => {
  //   axios
  //     .get("https://grads-link-frontend.vercel.app/totalusers")
  //     .then((result) => {
  //       console.log(result);
  //       setusercount(result.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [location.pathname]);
  //three dots
  // const [openmenu, setopenmenu] = useState(false);
  //logout
  const [shrink, setShrink] = useState(false);
  console.log(shrink);

  return (
    <>
      {!hidethis && (
        <div className="grid-container">
          <div className="title-bar title-bar-grid">
            <div className="logo title">
              <i className="fa-solid fa-bars hamburger-cls" onClick={() => setShrink(!shrink)}></i>
              GradsLink
            </div>
            <div className="profileposition username">
              <p className="profile proname">{loggedinuser}</p>
              {/* <img></img> */}
            </div>
          </div>
          <div className="belowTitleBarContainer">
            <div className={`sidebarce ${shrink ? "collapsed" : ""}`}>
              <Sidebar shrink={shrink} />
            </div>
            <div className="app-main-content">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Globalclass;
