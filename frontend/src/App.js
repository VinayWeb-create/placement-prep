import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ===== Auth ===== */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* ===== Core Pages ===== */
import Dashboard from "./pages/Dashboard";
import PracticeRounds from "./pages/PracticeRounds";
import Aptitude from "./pages/Aptitude";
import AptitudeTest from "./pages/AptitudeTest";
import Coding from "./pages/Coding";
import CodingEditor from "./pages/CodingEditor";
import InterviewList from "./pages/InterviewList";
import InterviewDetails from "./pages/InterviewDetails";
import HRPractice from "./pages/HRPractice";
import Profile from "./pages/profile";
import ResumeManager from "./pages/ResumeManager";

/* ===== Contest System ===== */
import CodingContests from "./pages/coding/CodingContests";
import Leaderboard from "./pages/Leaderboard";
import ContestDetails from "./pages/contest/ContestDetails";
/* ===== Admin ===== */
import CreateContest from "./pages/admin/CreateContest";
import CreateContest from "./pages/admin/AddProblem";

/* ===== Utils ===== */
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound";

/* ===== Global Styles ===== */
import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= PRACTICE ================= */}
        <Route path="/practice" element={<PracticeRounds />} />
        <Route path="/aptitude" element={<Aptitude />} />
        <Route path="/aptitude-test" element={<AptitudeTest />} />

        {/* ================= CODING ================= */}
        <Route path="/coding" element={<Coding />} />
        <Route path="/coding-editor" element={<CodingEditor />} />
        <Route path="/coding-contests" element={<CodingContests />} />
        <Route
  path="/contest/:contestId"
  element={<ContestDetails />}
/>
<Route path="/admin/add-problem/:contestId" element={<AddProblem />} />


        {/* ================= CONTEST FLOW (CRITICAL) ================= */}
        <Route path="/contest/:contestId" element={<CodingEditor />} />
        <Route
          path="/contest/:contestId/leaderboard"
          element={<Leaderboard />}
        />

        {/* ================= ADMIN ================= */}
        <Route path="/admin/create-contest" element={<CreateContest />} />

        {/* ================= OTHER ================= */}
        <Route path="/interviews" element={<InterviewList />} />
        <Route path="/interview-details" element={<InterviewDetails />} />
        <Route path="/practice-hr" element={<HRPractice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume-manager" element={<ResumeManager />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
