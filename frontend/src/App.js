import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PracticeRounds from "./pages/PracticeRounds";
import AptitudeTest from "./pages/AptitudeTest";
import CodingEditor from "./pages/CodingEditor";
import CodingContests from "./pages/coding/CodingContests";
import CreateContest from "./pages/admin/CreateContest";
import InterviewList from "./pages/InterviewList";
import Aptitude from "./pages/Aptitude";
import Coding from "./pages/Coding";
import InterviewDetails from "./pages/InterviewDetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/profile";
import ResumeManager from "./pages/ResumeManager";
import HRPractice from "./pages/HRPractice";
import Leaderboard from "./pages/Leaderboard";
import ProtectedRoute from "./ProtectedRoute";
import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Practice */}
        <Route path="/practice" element={<PracticeRounds />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />

        {/* Coding */}
        <Route path="/coding" element={<Coding />} />
        <Route path="/coding-editor" element={<CodingEditor />} />
        <Route path="/coding-contests" element={<CodingContests />} />

        {/* ✅ CONTEST FLOW (CRITICAL) */}
        <Route path="/contest/:contestId" element={<CodingEditor />} />
        <Route
          path="/contest/:contestId/leaderboard"
          element={<Leaderboard />}
        />

        {/* Admin */}
        <Route path="/admin/create-contest" element={<CreateContest />} />

        {/* Other */}
        <Route path="/interviews" element={<InterviewList />} />
        <Route path="/interview-details" element={<InterviewDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-manager" element={<ResumeManager />} />
        <Route path="/practice-hr" element={<HRPractice />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
