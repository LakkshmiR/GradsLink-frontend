import "./leaderboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Leaderboard() {
  const [lbdatas, setlbdatas] = useState([]);
  const [refcode, setRefcode] = useState("");
  const [loggedinemail, setLoggedinemail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email);
    setLoggedinemail(email);
  }, []);

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
    if (!loggedinemail) {
      return;
    }
    axios
      .get("https://gradslink-25.onrender.com/getrefcode", {
        params: { loggedinemail: loggedinemail },
      })
      .then((result) => {
        setRefcode(result.data.referralcode);
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [loggedinemail]);

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
            <tr className="lb-table-tr">
              <th className="lb-table-th">Rank</th>
              <th className="lb-table-th">Name</th>
              <th className="hide-col lb-table-th">Job Posts(10)</th>
              <th className="hide-col lb-table-th">Daily Streak(5)</th>

              <th className="hide-col lb-table-th">Referrals(50)</th>
              <th className="lb-table-th">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {lbdatas.map((lbdata) => {
              return (
                <tr key={lbdata._id} className="lb-table-tr">
                  <td className="lb-table-td">{lbdata.rank}</td>
                  <td className="lb-table-td">{lbdata.name}</td>
                  <td className="hide-col lb-table-td">{lbdata.numJobPosts}</td>
                  <td className="hide-col lb-table-td">{lbdata.dailyStreak}</td>

                  <td className="hide-col lb-table-td">{lbdata.referrals}</td>
                  <td className="lb-table-td">
                    🪙
                    {lbdata.totalPoints}
                  </td>
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
