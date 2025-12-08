import "./loading.css";
import { useState, useEffect } from "react";
function Loading() {
  // const motivationalText = [
  //   "🚀 Compete with freshers like you by posting jobs!",
  //   "📢 Post jobs. Apply faster. Grow together on GradsLink.",
  //   "💙 GradsLink — a place where engineering freshers connect",
  //   "⚡Let’s get hired faster — together!",
  //   "⏳ Your next opportunity is loading…",
  //   "🔥 Built by a fresher, for freshers.",
  // ];
  //   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  //   useEffect(() => {
  //     const showMessage = () => {
  //       setCurrentMessageIndex(currentMessageIndex + 1);
  //     };
  //   }, [currentMessageIndex]);
  return (
    <>
      <div className="loading-container">
        <h1 className="loading-heading">Welcome to GradsLink🚀</h1>
        <p className="loading-p">
          If 100 freshers post just 5 jobs a day… that’s 500 real opportunities for everyone.{" "}
        </p>
        <p className="loading">Loading 30s...</p>
      </div>
      {/* {motivationalText.map((msg, index) => (
        <div key={index}>
          <p>{msg}</p>
        </div>
      ))} */}
      {/* <h1>GradsLink</h1> */}
    </>
  );
}
export default Loading;
