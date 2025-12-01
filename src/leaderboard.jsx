import "./leaderboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Leaderboard() {
  const [lbdatas, setlbdatas] = useState([]);
  const [refcode, setRefcode] = useState("");
  const loggedinemail = localStorage.getItem("email");

  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/getlb")
      .then((result) => {
        setlbdatas(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //get referral code
  useEffect(() => {
    axios
      .get("https://gradslink-25.onrender.com/getrefcode", {
        params: { loggedinemail: loggedinemail },
      })
      .then((result) => {
        setRefcode(result.data);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //copy link
  const copylink = () => {
    const referlink = `https://grads-link-frontend.vercel.app/#/register/${refcode}`;
    navigator.clipboard
      .writeText(referlink)
      .then(() => {
        toast.success("Link Copied!!!");
      })
      .catch(() => toast.error("Failed to copy"));
  };

  return (
    <>
      <div className="lb-header">
        <div>
          <h1 className="leaderboard-heading ">GRADSLINK LEADERBOARD</h1>
        </div>
        <br />
        <div className="refer-btn-container">
          <button onClick={copylink} className="refer-btn">
            Refer a friend
          </button>
        </div>
      </div>
      <br />

      <div className="lb-wrapper">
        <table className="lb-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Job Posts(10)</th>
              <th>Daily Streak(5)</th>

              <th>Referrals(50)</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {lbdatas.map((lbdata) => {
              return (
                <tr key={lbdata._id}>
                  <td data-cell="rank">{lbdata.rank}</td>
                  <td data-cell="name">{lbdata.name}</td>
                  <td data-cell="JobPosts">{lbdata.numJobPosts}</td>
                  <td data-cell="dailyStreak">{lbdata.dailyStreak}</td>

                  <td data-cell="referrals">{lbdata.referrals}</td>
                  <td data-cell="totalpoints">{lbdata.totalPoints}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Leaderboard;
