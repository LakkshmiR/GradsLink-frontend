import { GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="789816508710-pt97v4vabqar5kiea24mkhnqsbgeovhl.apps.googleusercontent.com">
      <Router />
    </GoogleOAuthProvider>
  </StrictMode>
);
