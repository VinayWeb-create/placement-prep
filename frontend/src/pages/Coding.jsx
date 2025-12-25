import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Coding() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("easy");

  return (
    <>
      {/* ======== SIDEBAR (unchanged) ======== */}
      <div className="sidebar">
        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">
          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </div>

          <div className="sidebar-item" onClick={() => navigate("/interviews")}>
            📁 Interviews
          </div>

          <div className="sidebar-item" onClick={() => navigate("/practice")}>
            🧠 Practice
          </div>

          <div className="submenu">
            <div className="sidebar-subitem">📘 Aptitude</div>
            <div className="sidebar-subitem active-sub">💻 Coding</div>
            <div className="sidebar-subitem">🎤 HR / Behavioral</div>
          </div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>
            👤 Profile
          </div>
        </div>
      </div>

      {/* ======== MAIN CONTENT ======== */}
      <div className="dashboard-main">
        <h1 className="page-title">Coding Section</h1>
        <p className="page-subtitle">
          Practice coding or participate in live contests.
        </p>

        <div className="practice-grid">

          {/* ================= PRACTICE MODE ================= */}
          <div className="practice-card">
            <h2 className="practice-title">🧠 Practice Mode</h2>
            <p className="practice-desc">
              Improve your coding skills by difficulty level.
            </p>

            {/* Difficulty Selector */}
            <select
              className="difficulty-select"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button
              className="practice-btn"
              onClick={() => navigate(`/coding-editor?level=${level}`)}
            >
              Start Practice →
            </button>
          </div>

          {/* ================= CONTEST MODE ================= */}
          <div className="practice-card contest-card">
            <h2 className="practice-title">🏆 Contest Mode</h2>
            <p className="practice-desc">
              Participate in real-time coding contests or create one.
            </p>

            <div className="contest-actions">
              <button
                className="practice-btn"
                onClick={() => navigate("/coding-contests")}
              >
                View Contests →
              </button>

              
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
