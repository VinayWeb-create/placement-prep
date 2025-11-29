import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PracticeRounds from "./pages/PracticeRounds";
import AptitudeTest from "./pages/AptitudeTest";
import CodingEditor from "./pages/CodingEditor";
import InterviewList from "./pages/InterviewList";
import Aptitude from "./pages/Aptitude";
import Coding from "./pages/Coding";
import InterviewDetails from "./pages/InterviewDetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile";
import ResumeManager from "./pages/ResumeManager";
import HRPractice from "./pages/HRPractice";
import ProtectedRoute from "./ProtectedRoute";
import "./global.css";

// OPTIONAL: uncomment if you have the file
// import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Other Pages */}
        <Route path="/practice" element={<PracticeRounds />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />

        <Route path="/coding" element={<Coding />} />
        <Route path="/coding-editor" element={<CodingEditor />} />

        <Route path="/interviews" element={<InterviewList />} />
        <Route path="/interview-details" element={<InterviewDetails />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-manager" element={<ResumeManager />} />
        <Route path="/practice-hr" element={<HRPractice />} />

        {/* Optional results page */}
        {/* <Route path="/results" element={<ResultPage />} /> */}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
