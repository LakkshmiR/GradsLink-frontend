//////////////////////////////////aws//////////////////////////////////
// import "./jobsPage.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsTrash } from "react-icons/bs";
// import Globalclass from "./globalclass";
// function JobsPage() {
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

//   return (
//     <>
//       <Globalclass hidethis={false} />

//       <h1 className="heading-jobspage">Posted Jobs</h1>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search role here..."
//           className="search-input"
//           onChange={(e) => setSearchtext(e.target.value)}
//         />
//         <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/postjob")}>
//           Post +
//         </button>
//       </div>

//       <div className="wrapper">
//         <table>
//           <tr>
//             <th>Company</th>
//             <th>Role</th>
//             <th>Experience</th>
//             <th>Link</th>
//             <th>Posted At</th>
//             <th>Posted By</th>
//             <th>Delete</th>
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
//                     <a
//                       href={company.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="jobspage-link"
//                     >
//                       Click Here
//                     </a>
//                   </td>
//                   <td data-cell="postedat">{indianDate}</td>
//                   <td data-cell="postedby">{company.postedBy}</td>
//                   <td data-cell="delete">
//                     {company.postedBy === loggedinuser ? (
//                       <BsTrash onClick={() => handleDelete(company._id)} />
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="jobspage-wholebtn">
//         <button
//           onClick={() => setCurrentPage(currentpage - 1)}
//           disabled={currentpage === 1}
//           className="prevnext-btn"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage(currentpage + 1)}
//           disabled={currentpage === totalpages}
//           className="prevnext-btn"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }
// export default JobsPage;
// // noopener

// // Prevents the new tab from accessing your current page

// // Protects your site from a hacking technique called tabnabbing

// //  noreferrer

// // Hides your site URL from the site you are opening

// // Some ads or tracking websites don’t see where you came from

// //  Final Safe Format

//////////////////////////////////////////vercel//////////////////////////////////////////////
//VERCEL///
// import "./jobsPage.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsTrash } from "react-icons/bs";
// import Globalclass from "./globalclass";
// function JobsPage() {
//   const [companys, setcompanys] = useState([]);
//   const [jobs, setjobs] = useState([]);

//   const [searchtext, setSearchtext] = useState("");
//   const navigate = useNavigate();
//   useEffect(() => {
//     axios
//       .get("https://gradslink-25.onrender.com0/get")
//       .then((result) => {
//         setcompanys(result.data);
//         const sortedjobs = result.data.sort((a, b) => {
//           return new Date(b.postedAt) - new Date(a.postedAt);
//         });
//         setjobs(sortedjobs);
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   const handleDelete = (id) => {
//     const loggedinuser = localStorage.getItem("name");
//     axios
//       .delete("https://gradslink-25.onrender.com0/delete/" + id, {
//         data: { loggedinuser: loggedinuser },
//       })
//       .then((result) => {
//         alert(result.data);
//         location.reload();
//       })
//       .catch((err) => console.log(err));
//   };
//   const filteredjobs = companys.filter(
//     (company) =>
//       company.jobrole.toLowerCase().includes(searchtext.toLowerCase()) ||
//       company.companyName.toLowerCase().includes(searchtext.toLowerCase())
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
//   const arraytoshow = searchtext ? filteredjobs : jobs;
//   const jobstoshow = arraytoshow.slice(startIndex, endIndex);
//   const totalpages = Math.ceil(arraytoshow.length / itemsperPage);

//   return (
//     <>
//       <Globalclass hidethis={false} />

//       <h1 className="heading-jobspage">Posted Jobs</h1>
//       <p className="jobs-subtext">Post the Jobs U Applied for!!</p>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="search-input"
//           onChange={(e) => setSearchtext(e.target.value)}
//         />
//         <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/postjob")}>
//           Post +
//         </button>
//       </div>

//       <div className="wrapper">
//         <table>
//           <tr>
//             <th>Company</th>
//             <th>Role</th>
//             <th>Experience</th>
//             <th>Link</th>
//             <th>Posted At</th>
//             <th>Posted By</th>
//             <th>Delete</th>
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
//                     <a
//                       href={company.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="jobspage-link"
//                     >
//                       Click Here
//                     </a>
//                   </td>
//                   <td data-cell="postedat">{indianDate}</td>
//                   <td data-cell="postedby">{company.postedBy}</td>
//                   <td data-cell="delete">
//                     {company.postedBy === loggedinuser ? (
//                       <BsTrash onClick={() => handleDelete(company._id)} />
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="jobspage-wholebtn">
//         <button
//           onClick={() => setCurrentPage(currentpage - 1)}
//           disabled={currentpage === 1}
//           className="prevnext-btn"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => setCurrentPage(currentpage + 1)}
//           disabled={currentpage === totalpages}
//           className="prevnext-btn"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// }
// export default JobsPage;
// noopener

// Prevents the new tab from accessing your current page

// Protects your site from a hacking technique called tabnabbing

//  noreferrer

// Hides your site URL from the site you are opening

// Some ads or tracking websites don’t see where you came from

//  Final Safe Format
/////////////////////////////////////////////////////////lh///////////////////////////////////////////////
import "./jobsPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import Globalclass from "./globalclass";
function JobsPage() {
  const [companys, setcompanys] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [searchtext, setSearchtext] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com0/get")
      .then((result) => {
        setcompanys(result.data);
        console.log(result.data);
        const sortedjobs = result.data.sort((a, b) => {
          return new Date(b.postedAt) - new Date(a.postedAt);
        });
        setJobs(sortedjobs);
      })
      .catch((err) => console.log(err));
  }, []);
  const loggedinuser = localStorage.getItem("name");

  const handleDelete = (id) => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    axios
      .delete("https://gradslink-25.onrender.com0/delete/" + id, {
        data: { loggedinuser: loggedinuser, email: email, token: token },
      })
      .then((result) => {
        alert("Deleted Successfully!!!");
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

  //LEADERBOARD CREATE - LOGGEDIN USER
  useEffect(() => {
    const loggedinEmail = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    axios.post("https://gradslink-25.onrender.com0/createlb", {
      loggedinuser: loggedinuser,
      loggedinEmail: loggedinEmail,
      token: token,
    });
  }, []);

  //LEADERBOARD UPDATE - OPEN DATE
  useEffect(() => {
    const loggedinEmail = localStorage.getItem("email");

    axios
      .post("https://gradslink-25.onrender.com0/updateStreak", {
        loggedinEmail: loggedinEmail,
        loggedinuser: loggedinuser,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);
  //get referral code
  useEffect(() => {
    const loggedinemail = localStorage.getItem("email");

    if (!loggedinemail) {
      return;
    }
    axios
      .get("https://gradslink-25.onrender.com0/getrefcode", {
        params: { loggedinemail: loggedinemail },
      })
      .then((result) => {
        if (result.data.referralcode === undefined) {
          axios.post("https://gradslink-25.onrender.com0/createrefcode", { email: loggedinemail });
        }
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Globalclass hidethis={false} />
      <div className="lb-btn-container">
        <button className="lb-btn" onClick={() => navigate("/leaderboard")}>
          LeaderBoard
        </button>
      </div>
      <h1 className="heading-jobspage">Posted Jobs</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search role here..."
          className="search-input"
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button type="submit" className="postbtn-jobspage" onClick={() => navigate("/postjob")}>
          Post +
        </button>
      </div>

      <div className="wrapper">
        <table className="jb-table">
          <tr className="jb-table-tr">
            <th className="jb-table-th">Company</th>
            <th className="jb-table-th">Role</th>
            <th className="jb-table-th">Experience</th>
            <th className="jb-table-th">Link</th>
            <th className="jb-table-th">Posted At</th>
            <th className="jb-table-th">Posted By</th>
            <th className="jb-table-th">Delete</th>
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
                  <td className="jb-table-td" data-cell="companyname">
                    {company.companyName}
                  </td>
                  <td data-cell="role" className="jb-table-td">
                    {company.jobrole}
                  </td>
                  <td data-cell="experience" className="jb-table-td">
                    {company.experience}
                  </td>
                  <td data-cell="link" className="jb-table-td">
                    <a
                      href={company.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="jobspage-link"
                    >
                      Apply
                    </a>
                  </td>
                  <td data-cell="postedat" className="jb-table-td">
                    {indianDate}
                  </td>
                  <td data-cell="postedby" className="jb-table-td">
                    {company.postedBy}
                  </td>
                  <td data-cell="delete" className="jb-table-td">
                    {company.postedBy === loggedinuser ? (
                      <BsTrash onClick={() => handleDelete(company._id)} />
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="jobspage-wholebtn">
        <button
          onClick={() => setCurrentPage(currentpage - 1)}
          disabled={currentpage === 1}
          className="prevnext-btn"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentpage + 1)}
          disabled={currentpage === totalpages}
          className="prevnext-btn"
        >
          Next
        </button>
      </div>
    </>
  );
}
export default JobsPage;
// noopener

// Prevents the new tab from accessing your current page

// Protects your site from a hacking technique called tabnabbing

//  noreferrer

// Hides your site URL from the site you are opening

// Some ads or tracking websites don’t see where you came from

//  Final Safe Format
