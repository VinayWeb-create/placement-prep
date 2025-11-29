import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AptitudeTest() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const question = {
    text: "What is the average of 12, 18, 24?",
    options: ["16", "18", "20", "14"],
  };

  return (
    <div className="app-layout">

      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">

        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">
          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>🏠 Dashboard</div>
          <div className="sidebar-item" onClick={() => navigate("/interviews")}>📁 Interviews</div>

          <h4 className="sidebar-heading">Practice</h4>
          <div className="sidebar-item active" onClick={() => navigate("/aptitude")}>📘 Aptitude</div>
          <div className="sidebar-item" onClick={() => navigate("/coding")}>💻 Coding</div>
          <div className="sidebar-item" onClick={() => navigate("/interviews")}>🎤 HR Practice</div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>👤 Profile</div>
        </div>

      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="dashboard-main">

        {/* BACK BUTTON HERE 🔥 */}
        <button
          className="back-btn"
          onClick={() => navigate("/aptitude")}
        >
          ← Back
        </button>

        {/* Page Title */}
        <h1 className="page-title">Aptitude Test</h1>

        {/* Header */}
        <div className="test-header">
          <span className="test-counter">Question 1 / 10</span>
          <span className="test-timer">⏳ 09:55</span>
        </div>

        {/* Question Box */}
        <div className="test-card">
          <h3 className="test-question">{question.text}</h3>

          <div className="option-list">
            {question.options.map((opt, index) => (
              <div
                key={index}
                className={`option ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
              >
                {opt}
              </div>
            ))}
          </div>

          <div className="test-footer">
            <button className="btn-grad next-btn">Next →</button>
          </div>
        </div>

      </div>
    </div>
  );
}
