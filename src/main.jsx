import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="789816508710-pt97v4vabqar5kiea24mkhnqsbgeovhl.apps.googleusercontent.com">
      <Router />
      <ToastContainer />
    </GoogleOAuthProvider>
  </StrictMode>
);
