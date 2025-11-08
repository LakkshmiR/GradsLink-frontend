import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./postPage";
import JobsPage from "./jobsPage";
import Login from "./login";
import Register from "./register";
import ProtectedRoute from "./protectedRoute";
import ForgotPassword from "./forgotPassword";
import Globalclass from "./globalclass";
import Homepage from "./homepage";
export function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
