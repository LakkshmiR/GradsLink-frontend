// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// function ForgotPassword() {
//   const [registeremail, setRegisteremail] = useState("");
//   const [newpw, setNewpw] = useState("");
//   const navigate = useNavigate();
//   const handleReset = () => {
//     if (registeremail != "" && newpw != "") {
//       axios
//         .post("http://3.108.238.91:3000/forgotpw", { registeremail: registeremail, newpw: newpw })
//         .then((result) => {
//           alert(result.data);

//           navigate("/login");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       alert("Fill empty fields!!");
//     }
//   };

//   return (
//     <>
//       <h1 className="user-logo">GradsLink'25</h1>

//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Reset Password</h1>
//           <div className="login-elements">
//             <input
//               type="text"
//               className="login-input"
//               placeholder="registered email"
//               onChange={(e) => setRegisteremail(e.target.value)}
//             />
//           </div>
//           <div className="login-elements">
//             <input
//               type="password"
//               className="login-input"
//               placeholder="confirm new password"
//               onChange={(e) => setNewpw(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="login-btn" onClick={handleReset}>
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ForgotPassword;

//////////////////////////////////////////vercel////////////////////////////////////////////
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

function ForgotPassword() {
  const [registeremail, setRegisteremail] = useState("");
  const [newpw, setNewpw] = useState("");
  const navigate = useNavigate();
  const handleReset = () => {
    if (registeremail != "" && newpw != "") {
      axios
        .post("https://gradslink-25.onrender.com/forgotpw", {
          registeremail: registeremail,
          newpw: newpw,
        })
        .then((result) => {
          alert(result.data);

          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Fill empty fields!!");
    }
  };

  return (
    <>
      <h1 className="user-logo">GradsLink'25</h1>

      <div className="login-container">
        <div className="login-wrapper">
          <h1 className="heading">Reset Password</h1>
          <div className="login-elements">
            <input
              type="text"
              className="login-input"
              placeholder="registered email"
              onChange={(e) => setRegisteremail(e.target.value)}
            />
          </div>
          <div className="login-elements">
            <input
              type="password"
              className="login-input"
              placeholder="confirm new password"
              onChange={(e) => setNewpw(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn" onClick={handleReset}>
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}
export default ForgotPassword;

//////////////////////////////////////////////////////////lh////////////////////////////////////////////////
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// function ForgotPassword() {
//   const [registeremail, setRegisteremail] = useState("");
//   const [newpw, setNewpw] = useState("");
//   const navigate = useNavigate();
//   const handleReset = () => {
//     if (registeremail != "" && newpw != "") {
//       axios
//         .post("http://localhost:3000/forgotpw", {
//           registeremail: registeremail,
//           newpw: newpw,
//         })
//         .then((result) => {
//           alert(result.data);

//           navigate("/login");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       alert("Fill empty fields!!");
//     }
//   };

//   return (
//     <>
//       <h1 className="user-logo">GradsLink'25</h1>

//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Reset Password</h1>
//           <div className="login-elements">
//             <input
//               type="text"
//               className="login-input"
//               placeholder="registered email"
//               onChange={(e) => setRegisteremail(e.target.value)}
//             />
//           </div>
//           <div className="login-elements">
//             <input
//               type="password"
//               className="login-input"
//               placeholder="confirm new password"
//               onChange={(e) => setNewpw(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="login-btn" onClick={handleReset}>
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default ForgotPassword;
