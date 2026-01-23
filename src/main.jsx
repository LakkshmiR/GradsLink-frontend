import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router";

import Globalclass from "./globalclass";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
// import { io } from "socket.io-client";
// import Loading from "./loading";
import "react-toastify/dist/ReactToastify.css";
import socket from "./socket";
// const socket = io("https://grads-link-frontend.vercel.app");
socket.on("connect", () => {
  console.log("Connected to Backend:", socket.id);
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId="789816508710-pt97v4vabqar5kiea24mkhnqsbgeovhl.apps.googleusercontent.com">
        <Router />
        <ToastContainer />
      </GoogleOAuthProvider>
    </HashRouter>
  </StrictMode>
);
