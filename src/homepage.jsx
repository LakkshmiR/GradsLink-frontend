/////////////////////////////////////////////////////////////////lh///////////////////////////////////////////////////////
import Globalclass from "./globalclass";
import "./jobsPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./homepage.css";
function Homepage() {
  const [companys, setcompanys] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setcompanys(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const loggedinuser = localStorage.getItem("name");
    axios
      .delete("http://localhost:3000/delete/" + id, {
        data: { loggedinuser: loggedinuser },
      })
      .then((result) => {
        alert(result.data);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const filteredjobs = companys.filter((company) =>
    company.jobrole.toLowerCase().includes(searchtext.toLowerCase())
  );
  useEffect(() => {
    if (searchtext != "" && filteredjobs.length === 0) {
      alert("No such Jobs");
    }
  }, [searchtext]);

  //date time

  //pagination
  const [currentpage, setCurrentPage] = useState(1);
  const itemsperPage = 10;
  let startIndex = (currentpage - 1) * itemsperPage;
  let endIndex = startIndex + itemsperPage;
  const arraytoshow = searchtext ? filteredjobs : companys;
  const jobstoshow = arraytoshow.slice(startIndex, endIndex);
  const totalpages = Math.ceil(arraytoshow.length / itemsperPage);
  //logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleClick = (e) => {
    e.preventDefault(); // stop full page reload
    navigate("/login"); // navigate internally via React Router
  };

  return (
    <>
      <div className="homepage-header">
        <Globalclass hidethis={true} />
        <div className="homepage-userbtn">
          <button className="loginbtn-homepage" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="loginbtn-homepage" onClick={() => navigate("/register")}>
            signup
          </button>
        </div>
      </div>
      <h1 className="heading-homepage">Posted Jobs</h1>

      <div className="job-elements">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search role here..."
            className="search-input"
            onChange={(e) => setSearchtext(e.target.value)}
          />
        </div>
      </div>

      <div className="wrapper">
        <table className="jb-table">
          <tr className="jb-table-tr">
            <th className="jb-table-th">Company</th>
            <th className="jb-table-th">Role</th>
            <th className="jb-table-th">Experience</th>
            <th className="jb-table-th">Link</th>
            <th className="jb-table-th">Posted At</th>
          </tr>
          <tbody>
            {jobstoshow.map((company) => {
              const dateObj = new Date(company.postedAt);
              const indianDate = dateObj.toLocaleDateString("en-IN", {
                timeZone: "Asia/Kolkata",
              });
              const indianTime = dateObj.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
              });
              const loggedinuser = localStorage.getItem("name");
              return (
                <tr key={company._id} className="jb-table-tr">
                  <td data-cell="companyname" className="jb-table-td">
                    {company.companyName}
                  </td>
                  <td data-cell="role" className="jb-table-td">
                    {company.jobrole}
                  </td>
                  <td data-cell="experience" className="jb-table-td">
                    {company.experience}
                  </td>
                  <td data-cell="link" className="jb-table-td">
                    <span rel="noopener noreferrer" className="jobspage-link" onClick={handleClick}>
                      Click Here
                    </span>
                  </td>
                  <td data-cell="postedat" className="jb-table-td">
                    {indianDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="jobspage-wholebtn">
        <button onClick={() => navigate("/login")} className="prevnext-btn">
          Previous
        </button>
        <button onClick={() => navigate("/login")} className="prevnext-btn">
          Next
        </button>
        <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/login")}>
          Post +
        </button>
      </div>
    </>
  );
}
export default Homepage;
