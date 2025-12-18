////////////////////////////////////////lh//////////////////////////////////////
import "./postPage.css";
import Globalclass from "./globalclass";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function PostPage() {
  const [companyName, SetCompanyName] = useState("");
  const [jobrole, SetJobrole] = useState("");
  const [experience, SetExperience] = useState("");
  const [link, SetLink] = useState("");
  const navigate = useNavigate();
  const loggedinuser = localStorage.getItem("name");
  const [anonymous, setAnonymous] = useState(false);

  const handleAdd = () => {
    if (companyName == "" || jobrole == "" || experience == "" || link == "") {
      alert("Fill empty fields!!!");
      return;
    }
    if (companyName != "" && jobrole != "" && experience != "" && link != "") {
      const postedBy = anonymous ? "anonymous" : localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      axios
        .post("https://gradslink-25.onrender.com/add", {
          companyName: companyName,
          jobrole: jobrole,
          experience: experience,
          link: link,
          postedBy: postedBy,
          email: email,
          token: token,
        })
        .then((result) => {
          navigate("/jobslist");
          console.log(result);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="postpage-container">
        <div className="post-wrapper">
          <h1 className="heading">Post a Job 🚀</h1>
          <p className="subtext">Let's Reduce Job Search Time grads!!</p>

          <div className="cn">
            <input
              type="text"
              placeholder="Company Name"
              className="input-cn"
              onChange={(e) => SetCompanyName(e.target.value)}
            />
          </div>

          <div className="cn">
            <input
              type="text"
              placeholder="Job Role"
              className="input-cn"
              onChange={(e) => SetJobrole(e.target.value)}
            />
          </div>

          <div className="cn">
            <input
              type="text"
              placeholder="Experience Required"
              className="input-cn"
              onChange={(e) => SetExperience(e.target.value)}
            />
          </div>

          <div className="cn">
            <input
              type="text"
              placeholder="Application Link"
              className="input-cn"
              onChange={(e) => SetLink(e.target.value)}
            />
          </div>
          <label className="anonymous-cls">
            <input type="checkbox" onChange={() => setAnonymous(true)} />
            Post as Anonymous?
          </label>

          <br />
          <br />

          <button type="button" className="post-btn" onClick={handleAdd}>
            Post
          </button>
        </div>
      </div>
    </>
  );
}
export default PostPage;
