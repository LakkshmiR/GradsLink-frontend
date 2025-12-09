///////////////////////////////lh//////////////////////////////////////////////////////////////////////////////
import "./globalclass.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Globalclass({ hidethis }) {
  const loggedinuser = localStorage.getItem("name");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    alert("You are logged out!!");
    // location.reload();

    navigate("/login", { replace: true });
  };
  //total users
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
  //three dots
  const [openmenu, setopenmenu] = useState(false);
  //logout

  return (
    <>
      <div className="global-styles">
        <div className="global-class">
          <h1 className="logo">GradsLink</h1>
          <div>
            {!hidethis && (
              <div className="user-row">
                <h1 className="user">Hi, {loggedinuser}</h1>

                <div className="three-dots" onClick={() => setopenmenu(!openmenu)}>
                  ⋮
                </div>

                {openmenu && (
                  <div className="logout-dropdown" onClick={handleLogout}>
                    Logout
                  </div>
                )}
              </div>
            )}
            {!hidethis && <h1 className="user-count">Total Grads: {usercount}</h1>}
          </div>
        </div>
      </div>
    </>
  );
}
export default Globalclass;
