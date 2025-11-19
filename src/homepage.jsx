// import Globalclass from "./globalclass";
// import "./jobsPage.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsTrash } from "react-icons/bs";
// import "./homepage.css";
// function Homepage() {
//   const [companys, setcompanys] = useState([]);
//   const [searchtext, setSearchtext] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("http://3.108.238.91:3000/get")
//       .then((result) => setcompanys(result.data))
//       .catch((err) => console.log(err));
//   }, []);
//   const handleDelete = (id) => {
//     const loggedinuser = localStorage.getItem("name");
//     axios
//       .delete("http://3.108.238.91:3000/delete/" + id, { data: { loggedinuser: loggedinuser } })
//       .then((result) => {
//         alert(result.data);
//         location.reload();
//       })
//       .catch((err) => console.log(err));
//   };
//   const filteredjobs = companys.filter((company) =>
//     company.jobrole.toLowerCase().includes(searchtext.toLowerCase())
//   );
//   useEffect(() => {
//     if (searchtext != "" && filteredjobs.length === 0) {
//       alert("No such Jobs");
//     }
//   }, [searchtext]);

//   //date time

//   //pagination
//   const [currentpage, setCurrentPage] = useState(1);
//   const itemsperPage = 10;
//   let startIndex = (currentpage - 1) * itemsperPage;
//   let endIndex = startIndex + itemsperPage;
//   const arraytoshow = searchtext ? filteredjobs : companys;
//   const jobstoshow = arraytoshow.slice(startIndex, endIndex);
//   const totalpages = Math.ceil(arraytoshow.length / itemsperPage);
//   //logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   const handleClick = (e) => {
//     e.preventDefault(); // stop full page reload
//     navigate("/login"); // navigate internally via React Router
//   };

//   return (
//     <>
//       <div className="homepage-header">
//         <Globalclass hidethis={true} />
//         <div className="homepage-userbtn">
//           <button className="loginbtn-homepage" onClick={() => navigate("/login")}>
//             Login
//           </button>
//           <button className="loginbtn-homepage" onClick={() => navigate("/register")}>
//             signup
//           </button>
//         </div>
//       </div>
//       <h1 className="heading-homepage">Posted Jobs</h1>

//       <div className="job-elements">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search role here..."
//             className="search-input"
//             onChange={(e) => setSearchtext(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="wrapper">
//         <table>
//           <tr>
//             <th>Company</th>
//             <th>Role</th>
//             <th>Experience</th>
//             <th>Link</th>
//             <th>Posted At</th>
//           </tr>
//           <tbody>
//             {jobstoshow.map((company) => {
//               const dateObj = new Date(company.postedAt);
//               const indianDate = dateObj.toLocaleDateString("en-IN", {
//                 timeZone: "Asia/Kolkata",
//               });
//               const indianTime = dateObj.toLocaleTimeString("en-IN", {
//                 timeZone: "Asia/Kolkata",
//               });
//               const loggedinuser = localStorage.getItem("name");
//               return (
//                 <tr key={company._id}>
//                   <td data-cell="companyname">{company.companyName}</td>
//                   <td data-cell="role">{company.jobrole}</td>
//                   <td data-cell="experience">{company.experience}</td>
//                   <td data-cell="link">
//                     <span rel="noopener noreferrer" className="jobspage-link" onClick={handleClick}>
//                       Click Here
//                     </span>
//                   </td>
//                   <td data-cell="postedat">{indianDate}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="jobspage-wholebtn">
//         <button onClick={() => navigate("/login")} className="prevnext-btn">
//           Previous
//         </button>
//         <button onClick={() => navigate("/login")} className="prevnext-btn">
//           Next
//         </button>
//         <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/login")}>
//           Post +
//         </button>
//       </div>
//     </>
//   );
// }
// export default Homepage;

// ////////////////////////////////////////////////////////////vercel///////////////////////////////////
import Globalclass from "./globalclass";
import "./jobsPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./homepage.css";
function Homepage() {
  const [companys, setcompanys] = useState([]);
  const [jobs, setjobs] = useState([]);

  const [searchtext, setSearchtext] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/get")
      .then((result) => {
        setcompanys(result.data);
        const sortedjobs = result.data.sort((a, b) => {
          return new Date(b.postedAt) - new Date(a.postedAt);
        });
        setjobs(sortedjobs);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const loggedinuser = localStorage.getItem("name");
    axios
      .delete("https://gradslink-25.onrender.com/delete/" + id, {
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
  const arraytoshow = searchtext ? filteredjobs : jobs;
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
      <p className="jobs-subtext">Post t!!</p>

      <div className="job-elements">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
            onChange={(e) => setSearchtext(e.target.value)}
          />
        </div>
      </div>

      <div className="wrapper">
        <table>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Link</th>
            <th>Posted At</th>
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
                <tr key={company._id}>
                  <td data-cell="companyname">{company.companyName}</td>
                  <td data-cell="role">{company.jobrole}</td>
                  <td data-cell="experience">{company.experience}</td>
                  <td data-cell="link">
                    <span rel="noopener noreferrer" className="jobspage-link" onClick={handleClick}>
                      Click Here
                    </span>
                  </td>
                  <td data-cell="postedat">{indianDate}</td>
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

/////////////////////////////////////////////////////////////////lh///////////////////////////////////////////////////////
// import Globalclass from "./globalclass";
// import "./jobsPage.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsTrash } from "react-icons/bs";
// import "./homepage.css";
// function Homepage() {
//   const [companys, setcompanys] = useState([]);
//   const [searchtext, setSearchtext] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/get")
//       .then((result) => setcompanys(result.data))
//       .catch((err) => console.log(err));
//   }, []);
//   const handleDelete = (id) => {
//     const loggedinuser = localStorage.getItem("name");
//     axios
//       .delete("http://localhost:3000/delete/" + id, {
//         data: { loggedinuser: loggedinuser },
//       })
//       .then((result) => {
//         alert(result.data);
//         location.reload();
//       })
//       .catch((err) => console.log(err));
//   };
//   const filteredjobs = companys.filter((company) =>
//     company.jobrole.toLowerCase().includes(searchtext.toLowerCase())
//   );
//   useEffect(() => {
//     if (searchtext != "" && filteredjobs.length === 0) {
//       alert("No such Jobs");
//     }
//   }, [searchtext]);

//   //date time

//   //pagination
//   const [currentpage, setCurrentPage] = useState(1);
//   const itemsperPage = 10;
//   let startIndex = (currentpage - 1) * itemsperPage;
//   let endIndex = startIndex + itemsperPage;
//   const arraytoshow = searchtext ? filteredjobs : companys;
//   const jobstoshow = arraytoshow.slice(startIndex, endIndex);
//   const totalpages = Math.ceil(arraytoshow.length / itemsperPage);
//   //logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   const handleClick = (e) => {
//     e.preventDefault(); // stop full page reload
//     navigate("/login"); // navigate internally via React Router
//   };

//   return (
//     <>
//       <div className="homepage-header">
//         <Globalclass hidethis={true} />
//         <div className="homepage-userbtn">
//           <button className="loginbtn-homepage" onClick={() => navigate("/login")}>
//             Login
//           </button>
//           <button className="loginbtn-homepage" onClick={() => navigate("/register")}>
//             signup
//           </button>
//         </div>
//       </div>
//       <h1 className="heading-homepage">Posted Jobs</h1>

//       <div className="job-elements">
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search role here..."
//             className="search-input"
//             onChange={(e) => setSearchtext(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="wrapper">
//         <table>
//           <tr>
//             <th>Company</th>
//             <th>Role</th>
//             <th>Experience</th>
//             <th>Link</th>
//             <th>Posted At</th>
//           </tr>
//           <tbody>
//             {jobstoshow.map((company) => {
//               const dateObj = new Date(company.postedAt);
//               const indianDate = dateObj.toLocaleDateString("en-IN", {
//                 timeZone: "Asia/Kolkata",
//               });
//               const indianTime = dateObj.toLocaleTimeString("en-IN", {
//                 timeZone: "Asia/Kolkata",
//               });
//               const loggedinuser = localStorage.getItem("name");
//               return (
//                 <tr key={company._id}>
//                   <td data-cell="companyname">{company.companyName}</td>
//                   <td data-cell="role">{company.jobrole}</td>
//                   <td data-cell="experience">{company.experience}</td>
//                   <td data-cell="link">
//                     <span rel="noopener noreferrer" className="jobspage-link" onClick={handleClick}>
//                       Click Here
//                     </span>
//                   </td>
//                   <td data-cell="postedat">{indianDate}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="jobspage-wholebtn">
//         <button onClick={() => navigate("/login")} className="prevnext-btn">
//           Previous
//         </button>
//         <button onClick={() => navigate("/login")} className="prevnext-btn">
//           Next
//         </button>
//         <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/login")}>
//           Post +
//         </button>
//       </div>
//     </>
//   );
// }
// export default Homepage;
