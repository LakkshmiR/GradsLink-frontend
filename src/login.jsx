// import "./login.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// function Login() {
//   const [loginemail, setloginemail] = useState([]);
//   const [loginpw, setloginpw] = useState([]);
//   const navigate = useNavigate();
//   const handleLogin = () => {
//     axios
//       .post("http://3.108.238.91:3000/login", {
//         loginemail: loginemail,
//         loginpw: loginpw,
//       })
//       .then((result) => {
//         if (result.data.message === "Login success") {
//           localStorage.setItem("token", result.data.token);
//           localStorage.setItem("name", result.data.name);
//           localStorage.setItem("email", result.data.email);
//           navigate("/jobslist");
//         } else {
//           alert(result.data);
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (

//     <>
//       <h1 className="user-logo">GradsLink</h1>
//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Welcome Back 👋</h1>
//           <p className="subtext">Please log in to your account</p>

//           <div className="login-elements">
//             <input
//               type="text"
//               placeholder="Email"
//               className="login-input"
//               onChange={(e) => setloginemail(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               onChange={(e) => setloginpw(e.target.value)}
//             />
//           </div>

//           <div className="extra-links">
//             <span
//               onClick={() => navigate("/forgotPassword")}
//               className="login-link-class"
//               style={{ cursor: "pointer" }}
//             >
//               Forgot password?
//             </span>
//             <span
//               onClick={() => navigate("/register")}
//               className="login-link-class"
//               style={{ cursor: "pointer" }}
//             >
//               Create account
//             </span>
//           </div>

//           <button type="submit" className="login-btn" onClick={handleLogin}>
//             Login
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;

/////////////////////////////////vercel//////////////////////////////////////
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  const [loginemail, setloginemail] = useState([]);
  const [loginpw, setloginpw] = useState([]);
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("https://gradslink-25.onrender.com/login", {
        loginemail: loginemail,
        loginpw: loginpw,
      })
      .then((result) => {
        if (result.data.message === "Login success") {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          navigate("/jobslist", { replace: true });
        } else {
          alert(result.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //google login
  const handleGoogleLogin = (credentialResponse) => {
    axios
      .post("https://gradslink-25.onrender.com/google", {
        credential: credentialResponse.credential,
      })
      .then((result) => {
        if (result.data.message === "Login Success") {
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          console.log("You are logged in", result.data);
          navigate("/jobslist", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="user-logo">GradsLink</h1>
      <div className="login-container">
        <div className="login-wrapper">
          <h1 className="heading">Welcome Back 👋</h1>
          <p className="subtext">Please log in to your account</p>
          <div className="login-elements">
            <input
              type="text"
              placeholder="Email"
              className="login-input"
              onChange={(e) => setloginemail(e.target.value)}
            />
          </div>
          <div className="login-elements">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => setloginpw(e.target.value)}
            />
          </div>
          <div className="extra-links">
            <span
              onClick={() => navigate("/forgotPassword")}
              className="login-link-class"
              style={{ cursor: "pointer" }}
            >
              Forgot password?
            </span>
            <span
              onClick={() => navigate("/register")}
              className="login-link-class"
              style={{ cursor: "pointer" }}
            >
              Create account
            </span>
          </div>
          <button type="submit" className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <hr />
          <div style={{ width: "300px", margin: "0 auto" }}>
            <GoogleLogin
              theme="filled_blue"
              onSuccess={handleGoogleLogin}
              onError={() => console.log("error")}
              useOneTap={false}
              auto_select={false}
              text="signin_with"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

////////////////////////////////////////////////////////////////lh/////////////////////////////////////////////////////////
// import "./login.css";
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// function Login() {
//   const [loginemail, setloginemail] = useState([]);
//   const [loginpw, setloginpw] = useState([]);
//   const navigate = useNavigate();
//   const handleLogin = () => {
//     axios
//       .post("http://localhost:3000/login", {
//         loginemail: loginemail,
//         loginpw: loginpw,
//       })
//       .then((result) => {
//         if (result.data.message === "Login success") {
//           localStorage.setItem("token", result.data.token);
//           localStorage.setItem("name", result.data.name);
//           localStorage.setItem("email", result.data.email);
//           navigate("/jobslist", { replace: true });
//         } else {
//           alert(result.data);
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const handleGoogleLogin = (credentialResponse) => {
//     axios
//       .post("http://localhost:3000/google", {
//         credential: credentialResponse.credential,
//       })
//       .then((result) => {
//         localStorage.setItem("token", result.data.token);
//         localStorage.setItem("name", result.data.name);
//         console.log("You are google logged in", result.data);
//         navigate("/jobslist", { replace: true });
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <>
//       <h1 className="user-logo">GradsLink</h1>
//       <div className="login-container">
//         <div className="login-wrapper">
//           <h1 className="heading">Welcome Back 👋</h1>
//           <p className="subtext">Please log in to your account</p>

//           <div className="login-elements">
//             <input
//               type="text"
//               placeholder="Email"
//               className="login-input"
//               onChange={(e) => setloginemail(e.target.value)}
//             />
//           </div>

//           <div className="login-elements">
//             <input
//               type="password"
//               placeholder="Password"
//               className="login-input"
//               onChange={(e) => setloginpw(e.target.value)}
//             />
//           </div>

//           <div className="extra-links">
//             <span
//               onClick={() => navigate("/forgotPassword")}
//               className="login-link-class"
//               style={{ cursor: "pointer" }}
//             >
//               Forgot password?
//             </span>
//             <span
//               onClick={() => navigate("/register")}
//               className="login-link-class"
//               style={{ cursor: "pointer" }}
//             >
//               Create account
//             </span>
//           </div>

//           <button type="submit" className="login-btn" onClick={handleLogin}>
//             Login
//           </button>
//           {/* google login */}
//           <hr />
//           <GoogleLogin
//             theme="filled_blue"
//             onSuccess={handleGoogleLogin}
//             onError={() => {
//               console.log("Login failed");
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;
