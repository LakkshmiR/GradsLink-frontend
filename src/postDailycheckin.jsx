import "./postDailycheckin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function PostDailycheckin() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const name = anonymous ? "A Job Hunter" : localStorage.getItem("name");
  const handlePostCheckin = () => {
    axios
      .post("https://gradslink-25.onrender.com/postCheckin", {
        postTitle: postTitle,
        postContent,
        email,
        name,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="postDaily-container">
        <h1 className="postdaily-heading">Share ur Job Hunt Journey</h1>

        <input
          type="text"
          placeholder="Title(optional)"
          className="postdaily-input"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Share ur day - even if nothing went right"
          className="textarea-postdaily"
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <label className="postdaily-anonymous">
          Post Anonymously?
          <input
            type="checkbox"
            onChange={() => setAnonymous(true)}
            className="post-anonymous-input"
          />
        </label>
        <button
          type="button"
          onClick={() => {
            handlePostCheckin();
            navigate("/dailyCheckinPage", { state: { refresh: true } });
          }}
          className="postdaily-postbtn "
        >
          Post Journey
        </button>
      </div>
    </>
  );
}
export default PostDailycheckin;
