import { useNavigate } from "react-router-dom";

export default function HRPractice() {
  const navigate = useNavigate();

  return (
    <>
      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">

        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">

          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </div>

          <div className="sidebar-item" onClick={() => navigate("/interviews")}>
            📁 Interviews
          </div>

          {/* -------- Practice Parent -------- */}
          <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

          {/* -------- Submenu -------- */}
          <div className="submenu">
            <div
              className="sidebar-subitem"
              onClick={() => navigate("/aptitude")}
            >
              📘 Aptitude
            </div>

            <div
              className="sidebar-subitem"
              onClick={() => navigate("/coding")}
            >
              💻 Coding
            </div>

            <div
              className="sidebar-subitem"
              onClick={() => navigate("/practice-hr")}
              style={{ color: "#6a8bff", fontWeight: 600 }} // highlight active
            >
              🎤 HR / Behavioral
            </div>
          </div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>
            👤 Profile
          </div>

        </div>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="dashboard-main">

        <h1 className="page-title">HR & Behavioral Practice</h1>
        <p className="page-subtitle">
          Improve your communication, confidence & interview mindset.
        </p>

        {/* -------- HR Practice Grid -------- */}
        <div className="practice-grid">

          <div className="practice-card">
            <h2 className="practice-title">Tell Me About Yourself</h2>
            <p className="practice-desc">
              Learn how to introduce yourself professionally & confidently.
            </p>

            <button className="practice-btn">
              Practice Question →
            </button>
          </div>

          <div className="practice-card">
            <h2 className="practice-title">Strengths & Weaknesses</h2>
            <p className="practice-desc">
              Answer tricky HR questions with strong examples.
            </p>

            <button className="practice-btn">
              Practice Now →
            </button>
          </div>

          <div className="practice-card">
            <h2 className="practice-title">Scenario-Based Questions</h2>
            <p className="practice-desc">
              Handle pressure situations like a pro.
            </p>

            <button className="practice-btn">
              Start Practicing →
            </button>
          </div>

        </div>

      </div>
    </>
  );
}
