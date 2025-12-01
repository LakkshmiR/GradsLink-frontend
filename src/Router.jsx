import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import PostPage from "./postPage";
import JobsPage from "./jobsPage";
import Login from "./login";
import Register from "./register";
import ProtectedRoute from "./protectedRoute";
import ForgotPassword from "./forgotPassword";
import Globalclass from "./globalclass";
import Homepage from "./homepage";
import Footer from "./footer";
import Leaderboard from "./leaderboard";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export function Router() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={localStorage.getItem("token") ? <Navigate to="/jobslist" /> : <Homepage />}
          />
          <Route
            path="/postjob"
            element={
              <ProtectedRoute>
                <PostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobslist"
            element={
              <ProtectedRoute>
                <JobsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={localStorage.getItem("token") ? <Navigate to="/jobslist" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:refcode" element={<Register />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}
