// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css";
// function Register() {
//   const [name, setName] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [password, setPassword] = useState([]);
//   const navigate = useNavigate();
//   const handleRegister = () => {
//     axios
//       .post("http://3.108.238.91:3000/regpost", {
//         name: name,
//         email: email,
//         password: password,
//       })
//       .then((result) => {
//         if (result.data == "Registration Success!!!") {
//           navigate("/login");
//         } else if (result.data === "Email Already Exists") {
//           alert("email already exist");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h1 className="user-logo">GradsLink</h1>

//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Register ✨</h1>
//           <p className="subtext">Share jobs you applied — Let's grow together</p>

//           <div className="login-elements">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="login-input"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="login-input"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="text"
//               value="Engineering Freshers only"
//               readOnly
//               className="login-input readonly"
//             />
//           </div>

//           <div className="extra-links">
//             <p className="link-class account-text">Already have an account?</p>
//             <span onClick={() => navigate("/login")} className="login-link-class">
//               Login
//             </span>
//           </div>

//           <button type="submit" className="login-btn" onClick={handleRegister}>
//             Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Register;

//////////////////////////////////////////////////vercel////////////////////////////////////////
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./login.css";
// function Register() {
//   const [name, setName] = useState([]);
//   const [email, setEmail] = useState([]);
//   const [password, setPassword] = useState([]);
//   const navigate = useNavigate();
//   const handleRegister = () => {
//     axios
//       .post("https://gradslink-25.onrender.com0/regpost", {
//         name: name,
//         email: email,
//         password: password,
//       })
//       .then((result) => {
//         if (result.data == "Registration Success!!!") {
//           navigate("/login");
//         } else if (result.data === "Email Already Exists") {
//           alert("email already exist");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h1 className="user-logo">GradsLink</h1>

//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Register ✨</h1>
//           <p className="subtext">Share jobs you applied — Let's grow together</p>

//           <div className="login-elements">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="login-input"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="login-input"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="text"
//               value="Engineering Freshers only"
//               readOnly
//               className="login-input readonly"
//             />
//           </div>

//           <div className="extra-links">
//             <p className="link-class account-text">Already have an account?</p>
//             <span onClick={() => navigate("/login")} className="login-link-class">
//               Login
//             </span>
//           </div>

//           <button type="submit" className="login-btn" onClick={handleRegister}>
//             Register
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Register;

//////////////////////////////////////////////////lh/////////////////////////////////////////////////////
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useParams } from "react-router-dom";
function Register() {
  const { refcode } = useParams();
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();
  const handleRegister = () => {
    axios
      .post("https://gradslink-25.onrender.com0/regpost", {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.message == "Registration Success!!!") {
          axios.post("https://gradslink-25.onrender.com0/createrefcode", { email: email });
          axios.post("https://gradslink-25.onrender.com0/updatereferrallb", {
            refcode: refcode,
          });
          navigate("/login");
        } else if (result.data.message === "Email Already Exists") {
          alert("email already exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="user-logo">GradsLink</h1>

      <div className="login-container">
        <div className="login-wrapper">
          <h1 className="heading">Register ✨</h1>
          <p className="subtext">Share jobs you applied — Let's grow together</p>

          <div className="login-elements">
            <input
              type="text"
              placeholder="Full Name"
              className="login-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="login-elements">
            <input
              type="email"
              placeholder="Email Address"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-elements">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-elements">
            <input
              type="text"
              value="Engineering Freshers only"
              readOnly
              className="login-input readonly"
            />
          </div>

          <div className="extra-links">
            <p className="link-class account-text">Already have an account?</p>
            <span onClick={() => navigate("/login")} className="login-link-class">
              Login
            </span>
          </div>

          <button type="submit" className="login-btn" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}
export default Register;
