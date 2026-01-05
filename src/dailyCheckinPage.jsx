import "./dailyCheckinPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import Loading from "./loading";
import axios from "axios";
function DailyCheckinPage() {
  const navigate = useNavigate();
  const [dailyCheckindata, setDailyCheckindata] = useState([]);
  const [postidNow, setPostidNow] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);
  //getcomment
  //get Comments
  const [idCommentData, setIdCommentData] = useState([]);

  //get checkin
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/getCheckinData")
      .then((result) => {
        setDailyCheckindata(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //handle comment

  const handleComment = (id) => {
    setPostidNow(id);
    setCommentOpen(!commentOpen);
    fetchComments(id);
  };

  //comment state
  const [comments, setComments] = useState("");
  //handle post comment
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const fetchComments = (id) => {
    axios
      .get("https://gradslink-25.onrender.com/getComment/" + id)
      .then((result) => {
        console.log(result);
        setIdCommentData(result.data);
      })
      .catch((err) => console.log(err));
  };
  const handlePostComment = (id) => {
    axios
      .post("https://gradslink-25.onrender.com/postComment/" + id, { comments, name, email })
      .then((result) => {
        console.log(result);
        setComments("");
        fetchComments(id);
      })
      .catch((err) => console.log(err));
  };
  //Delete Post
  const handlePostDelete = (id) => {
    axios
      .delete("https://gradslink-25.onrender.com/postDelete/" + id, { data: { email } })
      .then((result) => {
        console.log(result);
        alert("Post Deleted Successfully");
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  //DELETE COMMENT
  const handleCommentDelete = (commentID, postID) => {
    axios
      .delete("https://gradslink-25.onrender.com/commentDelete/" + commentID, { data: { email } })
      .then((result) => {
        console.log(result);
        alert("Comment Deleted Succesfully");
        axios
          .get("https://gradslink-25.onrender.com/getComment/" + postID)
          .then((result) => {
            console.log(result);
            setIdCommentData(result.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  //sort post data
  const sortedPosts = dailyCheckindata.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));

  //handle like for post
  const [likeCount, setLikeCount] = useState(false);
  const handleLike = () => {
    setLikeCount(!likeCount);
    console.log(likeCount);
  };

  //Loading
  const [showloading, setShowloading] = useState(true);
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/health")
      .then((result) => {
        console.log(result.data);
        if (result.data.status === "ok") {
          setShowloading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="whole-dailycheckin">
        {/* {showloading && <Loading />} */}
        {/* {!showloading && ( */}
        <>
          <h1 className="dailycheckin-heading">Our Job Hunt Journey</h1>
          <div className="journey-header">
            <button
              type="button"
              onClick={() => navigate("/postCheckin")}
              className="post-journey-btn"
            >
              post journey +
            </button>
          </div>
          {sortedPosts.map((data) => {
            return (
              <div className="postcheckin-container">
                <div key={data._id}>
                  <div className="post-section">
                    <h2 className="post-section-heading">
                      {data.name} - {data.postTitle}
                    </h2>
                    <p className="post-section-content">{data.postContent}</p>
                  </div>
                  <div className="comment-btn-container">
                    <button onClick={() => handleLike()}>Like</button>
                    <p>{likeCount ? "liked" : "not liked"}</p>
                    <button
                      type="button"
                      onClick={() => handleComment(data._id)}
                      className="comment-btn"
                    >
                      comment
                    </button>

                    <p>
                      {data.email === email ? (
                        <BsTrash
                          onClick={() => handlePostDelete(data._id)}
                          className="comment-delete-icon"
                        />
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <br />
                  <br />
                  {postidNow === data._id && commentOpen && (
                    <>
                      {idCommentData.map((commentData) => {
                        return (
                          <>
                            <div key={commentData._id} className="get-comment-data">
                              <p className="commentor-name">{commentData.name}</p>
                              <div className="comment-delete">
                                <p className="comment">{commentData.comment}</p>
                                <p>
                                  {commentData.email === email ? (
                                    <BsTrash
                                      onClick={() => {
                                        handleCommentDelete(commentData._id, data._id);
                                      }}
                                      className="comment-delete-icon"
                                    />
                                  ) : (
                                    ""
                                  )}
                                </p>
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="postcomment-section">
                        <textarea
                          placeholder="share your thoughts here......"
                          className="comment-input"
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                        ></textarea>
                        <i
                          className="fa-solid fa-paper-plane postcomment-icon"
                          onClick={() => handlePostComment(data._id)}
                        ></i>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </>
        {/* )} */}
      </div>
    </>
  );
}
export default DailyCheckinPage;
