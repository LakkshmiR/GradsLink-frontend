import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const [loginemail, setloginemail] = useState([]);
  const [loginpw, setloginpw] = useState([]);
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("http://localhost:3000/login", {
        loginemail: loginemail,
        loginpw: loginpw,
      })
      .then((result) => {
        if (result.data.message === "Login success") {
          localStorage.setItem("token", result.data.email);
          localStorage.setItem("name", result.data.name);
          localStorage.setItem("email", result.data.email);
          navigate("/jobslist");
        } else {
          alert(result.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <>
    //   <div className="login-wrapper">
    //     <h1 className="heading">Login</h1>
    //     <div className="login-elements">
    //       <p>Email: </p>
    //       <input
    //         type="text"
    //         className="login-input"
    //         onChange={(e) => setloginemail(e.target.value)}
    //       />
    //     </div>
    //     <div className="login-elements">
    //       <p>Password: </p>
    //       <input
    //         type="password"
    //         className="login-input"
    //         onChange={(e) => setloginpw(e.target.value)}
    //       />
    //     </div>

    //     <div className="login-elements">
    //       <a
    //         href=""
    //         onClick={() => {
    //           navigate("/forgotPassword");
    //         }}
    //         className="link-class"
    //       >
    //         forgot password?
    //       </a>
    //     </div>
    //     <div className="login-elements">
    //       <p>Create Account?</p>
    //       <a
    //         href=""
    //         onClick={() => {
    //           navigate("/register");
    //         }}
    //         className="link-class"
    //       >
    //         register
    //       </a>
    //     </div>
    //     <button type="submit" className="login-btn" onClick={handleLogin}>
    //       Login
    //     </button>
    //   </div>
    // </>
    <>
      <h1 className="user-logo">GradsLink'25</h1>
      {/* <p>A Web App to connect 2025 Graduates</p> */}
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
            <a href="#" onClick={() => navigate("/forgotPassword")} className="login-link-class">
              Forgot password?
            </a>
            <a href="#" onClick={() => navigate("/register")} className="login-link-class">
              Create account
            </a>
          </div>

          <button type="submit" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
