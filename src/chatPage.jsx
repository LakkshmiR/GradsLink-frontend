import "./chatPage.css";
import socket from "./socket";
import { useEffect, useState, useRef } from "react";
function ChatPage() {
  const [roomId, setRoomId] = useState(null);
  const [msg, setMsg] = useState("");
  const [rec_messages, setRec_Messages] = useState([]);
  const [showTime, setShowTime] = useState(false);
  //time left for timer
  const [timeLeft, setTimeLeft] = useState(null);
  //end msg
  const [showEnd, setShowEnd] = useState(false);
  //random user id
  const [userId, setUserId] = useState(null);

  //random user id for identitycheck
  const [hiddenId, setHiddenId] = useState(null);

  //pairing status
  const [pairingStatus, setPairingStatus] = useState("active");
  //UseEff for GradsLink random user id
  useEffect(() => {
    let permanentId = localStorage.getItem("gradslinkPermanentId");
    if (!permanentId) {
      permanentId = "user_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("gradslinkPermanentId", permanentId);
    }
  }, []);
  //Top Useeffect to check roomId
  useEffect(() => {
    const savedRoomId = localStorage.getItem("roomId");
    const savedchatUserId = localStorage.getItem("chatUserId");

    if (savedRoomId && savedchatUserId) {
      setRoomId(savedRoomId);
      setUserId(savedchatUserId);
      if (!socket.hasRejoined) {
        socket.emit("rejoin_room", { roomId: savedRoomId });
        socket.hasRejoined = true;
      }
      socket.emit("get_time", { roomId: savedRoomId });
    }
  }, []);
  const generateChatId = () => {
    return "gradslink_" + Math.random().toString(36).substring(2, 8);
  };
  //Start Chat
  const handleStartChat = () => {
    const chatId = generateChatId();
    setPairingStatus("pairing");
    setUserId(chatId);
    socket.emit("join_waiting_queue");
  };
  //send msg
  const handleSendMessage = () => {
    socket.emit("send_msg", { roomId, msg, userId });
    setMsg("");
  };
  useEffect(() => {
    socket.on("chat_started", (data) => {
      console.log("chat started:", data);
      setRoomId(data.roomId);
      setPairingStatus("active");
      localStorage.setItem("roomId", data.roomId);
      localStorage.setItem("chatUserId", userId);

      socket.emit("get_time", { roomId: data.roomId });
    });

    //sync time
    socket.on("sync_time", (data) => {
      setTimeLeft(data.remaining);
      setShowTime(false);
    });
    //load old msgs
    socket.on("load_old_messages", (oldMessages) => {
      console.log("Old Messages:", oldMessages);
      setRec_Messages(oldMessages);
    });

    //msg
    socket.on("receive_msg", (data) => {
      setRec_Messages((prev) => [...prev, data]);
    });

    //chat ended
    socket.on("chat_ended", () => {
      setShowEnd(true);
      setRoomId(null);
      setRec_Messages([]);
      setTimeLeft(null);
      setShowTime(false);
      localStorage.removeItem("roomId");
      localStorage.removeItem("chatStartTime");
      localStorage.removeItem("chatUserId");
    });

    return () => {
      socket.off("chat_started");
      socket.off("sync_time");
      socket.off("load_old_messages");
      socket.off("receive_msg");
      socket.off("chat_ended");
    };
  }, [userId]);

  //use Effect for timer
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft === 0) {
      setShowTime(true);
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);
  //handle Leave chat
  const handleLeaveChat = () => {
    //emit leave chat
    socket.emit("leave_chat");
    setRec_Messages([]);
  };

  //Ref for auto scroll
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);
  const [isNearBottom, setIsNearBottom] = useState(true);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const nearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setIsNearBottom(nearBottom);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isNearBottom) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [rec_messages, isNearBottom]);
  //
  useEffect(() => {
    const handleResize = () => {
      const vh = window.visualViewport.height;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handleResize(); // initial
    window.visualViewport.addEventListener("resize", handleResize);

    return () => {
      window.visualViewport.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {roomId ? (
        <div className="chat-wrapper">
          <div className="chat-header">
            <h3 className="chat-h3">🤝 Pair Chat</h3>
            <div className="timer-box">
              {timeLeft !== null && timeLeft > 0 && (
                <span className="timer">
                  ⏳ {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                </span>
              )}
              <button className="end-call-btn" onClick={handleLeaveChat}>
                {" "}
                <i className="fas fa-phone horizontal-phone"></i>
              </button>
            </div>
          </div>

          <div className="chat-content" ref={chatContainerRef}>
            {rec_messages.map((m, i) => (
              <div
                key={i}
                className={`message ${m.sender === userId ? "my-message" : "other-message"}`}
              >
                <span className="sender">{m.sender === userId ? "You" : m.sender}</span>
                <p>{m.msg}</p>
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          <div className="chat-input-area">
            <input
              placeholder="Type your message..."
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && msg.trim() !== "") {
                  handleSendMessage();
                }
              }}
            />
            <button onClick={handleSendMessage}>
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>

          {showTime && <p className="info-text">You can continue chatting or leave anytime.</p>}

          {/* <button className="leave-btn" onClick={handleLeaveChat}>
            Leave Chat
          </button> */}
        </div>
      ) : (
        <div className="start-chat-box">
          <button className="start-btn" onClick={handleStartChat}>
            💬 Talk to a Fresher like me
          </button>
          {!showEnd &&
            (pairingStatus === "pairing" ? (
              <p className="online-text">⏳ Pairing you with a fresher...</p>
            ) : (
              <p className="online-text">🟢 Freshers are active now</p>
            ))}
          {showEnd && (
            <>
              <p className="end-text">Chat Ended!! Hope You Enjoyed the Conversation! </p>
              <p className="end-text">Talk to an another fresher</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default ChatPage;
