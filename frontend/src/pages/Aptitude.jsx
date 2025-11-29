import { useNavigate } from "react-router-dom";

export default function Aptitude() {
  const navigate = useNavigate();

  return (
    <div className="app-layout">

      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">

        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">
          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>🏠 Dashboard</div>
          <div className="sidebar-item" onClick={() => navigate("/interviews")}>📁 Interviews</div>

          {/* Practice Parent */}
       <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

        {/* Submenu */}
        <div className="submenu">
          <div className="sidebar-subitem" onClick={() => navigate("/aptitude")}>
            📘 Aptitude
          </div>
          <div className="sidebar-subitem" onClick={() => navigate("/coding")}>
             💻 Coding
          </div>
          <div className="sidebar-subitem" onClick={() => navigate("/practice-hr")}>
            🎤 HR / Behavioral
          </div>
        </div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>👤 Profile</div>
        </div>

      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="dashboard-main">

        <h1 className="page-title">Aptitude Practice</h1>
        <p className="page-subtitle">
          Select a difficulty level to start solving questions.
        </p>

        <div className="practice-grid">

          {/* EASY */}
          <div className="practice-card shadow-hover" onClick={() => navigate("/aptitude-test")}>
            <h2 className="practice-title">Easy</h2>
            <p className="practice-desc">Simple questions to warm up.</p>
            <button className="btn-grad practice-btn">Start →</button>
          </div>

          {/* MEDIUM */}
          <div className="practice-card shadow-hover" onClick={() => navigate("/aptitude-test")}>
            <h2 className="practice-title">Medium</h2>
            <p className="practice-desc">Improve your logical reasoning.</p>
            <button className="btn-grad practice-btn">Start →</button>
          </div>

          {/* HARD */}
          <div className="practice-card shadow-hover" onClick={() => navigate("/aptitude-test")}>
            <h2 className="practice-title">Hard</h2>
            <p className="practice-desc">Challenging questions for experts.</p>
            <button className="btn-grad practice-btn">Start →</button>
          </div>

        </div>
      </div>
    </div>
  );
}
