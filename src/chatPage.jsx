import "./chatPage.css";
import socket from "./socket";
import { useEffect, useState } from "react";
function ChatPage() {
  const [roomId, setRoomId] = useState(null);
  const [msg, setMsg] = useState("  ");
  const [rec_messages, setRec_Messages] = useState([]);
  const [showTime, setShowTime] = useState(false);
  //time left for timer
  const [timeLeft, setTimeLeft] = useState(null);
  //end msg
  const [showEnd, setShowEnd] = useState(false);
  //random user id
  const [userId, setUserId] = useState(null);

  //UseEff for GradsLink random user id
  useEffect(() => {
    let id = localStorage.getItem("gradslinkRandomId");
    if (!id) {
      id = "gradslink_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("gradslinkRandomId", id);
    }
    setUserId(id);
  }, []);
  //Top Useeffect to check roomId
  useEffect(() => {
    const savedRoomId = localStorage.getItem("roomId");
    if (savedRoomId) {
      setRoomId(savedRoomId);
      if (!socket.hasRejoined) {
        socket.emit("rejoin_room", { roomId: savedRoomId });
        socket.hasRejoined = true;
      }
      socket.emit("get_time", { roomId: savedRoomId });
    }

    //timer
    const savedStartTime = localStorage.getItem("chatStartTime");
    if (savedStartTime) {
      const totalTime = 5 * 60;
      const elapsed = Math.floor((Date.now() - savedStartTime) / 1000);
      const remaining = totalTime - elapsed;
      if (remaining > 0) {
        setTimeLeft(remaining);
      } else {
        setTimeLeft(null);
        setShowTime(true);
      }
    }
  }, []);

  //Start Chat
  const handleStartChat = () => {
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
      localStorage.setItem("roomId", data.roomId);

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
    });

    return () => {
      socket.off("chat_started");
      socket.off("sync_time");
      socket.off("load_old_messages");
      socket.off("receive_msg");
      socket.off("chat_ended");
    };
  }, []);

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
  };
  return (
    <>
      {roomId ? (
        <div className="chat-container">
          <p>Chat Started and the room id is {roomId}</p>
          {/* timer */}
          {timeLeft !== null && timeLeft > 0 && (
            <p>
              {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
            </p>
          )}
          <input
            placeholder="type message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button onClick={handleSendMessage}>send</button>
          <div className="chat-content">
            {rec_messages.map((m) => (
              <div>
                <strong>{m.sender === userId ? "You" : m.sender}</strong>
                <p>{m.msg}</p>
                <br />
              </div>
            ))}
          </div>
          {showTime && <p>You can continue chatting or leave anytime</p>}
          <button onClick={handleLeaveChat}>Leave Chat</button>
        </div>
      ) : (
        <>
          <button onClick={handleStartChat}>Talk to a Fresher like me</button>
          {showEnd && <p>Chat Ended</p>}
        </>
      )}
    </>
  );
}
export default ChatPage;
