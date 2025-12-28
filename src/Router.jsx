import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import PostPage from "./postPage";
import JobsPage from "./jobsPage";
import Login from "./login";
import Register from "./register";
import ProtectedRoute from "./protectedRoute";
import ForgotPassword from "./forgotPassword";
import Homepage from "./homepage";
import Footer from "./footer";
import Leaderboard from "./leaderboard";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Loading from "./loading";
import Globalclass from "./globalclass";
import DailyCheckinPage from "./dailyCheckinPage";
import PostDailycheckin from "./postDailycheckin";
// import Sidebar from "./sidebar";

export function Router() {
  const location = useLocation();
  return (
    <>
      {/* <HashRouter> */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={localStorage.getItem("token") ? <Navigate to="/jobslist" /> : <Homepage />}
        />
        <Route element={<Globalclass hidethis={false} />}>
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
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dailyCheckinPage"
            element={
              <ProtectedRoute>
                <DailyCheckinPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postCheckin"
            element={
              <ProtectedRoute>
                <PostDailycheckin />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={localStorage.getItem("token") ? <Navigate to="/jobslist" /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:refcode" element={<Register />} />

        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route path="/loading" element={<Loading />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>
      <Footer />
      {/* </HashRouter> */}
    </>
  );
}
