import { useNavigate } from "react-router-dom";

export default function Coding() {
  const navigate = useNavigate();

  return (
    <>
      {/* ======== SIDEBAR ======== */}
      <div className="sidebar">
        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">

          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </div>

          <div className="sidebar-item" onClick={() => navigate("/interviews")}>
            📁 Interviews
          </div>

          {/* Practice Main Parent */}
          <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

          {/* Practice Submenu */}
          <div className="submenu">
            <div
              className="sidebar-subitem"
              onClick={() => navigate("/aptitude")}
            >
              📘 Aptitude
            </div>

            <div
              className="sidebar-subitem active-sub"
              onClick={() => navigate("/coding")}
            >
              💻 Coding
            </div>

            <div
              className="sidebar-subitem"
              onClick={() => navigate("/practice-hr")}
            >
              🎤 HR / Behavioral
            </div>
          </div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>
            👤 Profile
          </div>
        </div>
      </div>

      {/* ======== MAIN CONTENT ======== */}
      <div className="dashboard-main">

        {/* Page Title */}
        <h1 className="page-title">Coding Practice</h1>
        <p className="page-subtitle">
          Choose a difficulty level to start solving coding challenges.
        </p>

        {/* ===== Cards Grid ===== */}
        <div className="practice-grid">

          {/* EASY */}
          <div
            className="practice-card"
            onClick={() => navigate("/coding-editor")}
          >
            <h2 className="practice-title">Easy</h2>
            <p className="practice-desc">
              Simple coding challenges to build your foundation.
            </p>

            <button className="practice-btn">Start Coding →</button>
          </div>

          {/* MEDIUM */}
          <div
            className="practice-card"
            onClick={() => navigate("/coding-editor")}
          >
            <h2 className="practice-title">Medium</h2>
            <p className="practice-desc">
              Intermediate problems commonly asked in interviews.
            </p>

            <button className="practice-btn">Start Coding →</button>
          </div>

          {/* HARD */}
          <div
            className="practice-card"
            onClick={() => navigate("/coding-editor")}
          >
            <h2 className="practice-title">Hard</h2>
            <p className="practice-desc">
              Advanced algorithm challenges for DSA mastery.
            </p>

            <button className="practice-btn">Start Coding →</button>
          </div>

        </div>
      </div>
    </>
  );
}
