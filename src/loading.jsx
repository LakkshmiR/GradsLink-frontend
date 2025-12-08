import "./loading.css";
import { useState, useEffect } from "react";
function Loading() {
  const [textindex, setTextindex] = useState(0);
  const motivationalText = [
    "🚀 Compete with freshers like you by posting jobs!",
    "📢 Post jobs. Apply faster. Grow together on GradsLink.",
    "⚡Climb Up the Leaderboard post job(10), daily streak(5), refer a frnd(25)",
    "💙 GradsLink — a place where engineering freshers connect",
    "⚡Let’s get hired faster — together!",
    "⏳ Your next opportunity is loading…",
    "🔥 Built by a fresher, for freshers.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextindex((prev) => {
        if (prev === motivationalText.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="loading-container">
        <h1 className="loading-heading">Welcome to GradsLink🚀</h1>
        <p className="loading-p">
          {motivationalText[textindex]}
          {/* If 100 freshers post just 5 jobs a day… that’s 500 real opportunities for everyone.{" "} */}
        </p>
        <p className="loading">Loading 30s...</p>
      </div>

      {/* <h1>GradsLink</h1> */}
    </>
  );
}
export default Loading;
