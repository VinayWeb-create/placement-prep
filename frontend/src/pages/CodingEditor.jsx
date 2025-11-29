import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodingEditor() {
  const navigate = useNavigate();
  const [code, setCode] = useState("// Write your code here...");

  const problem = {
    title: "1. Reverse a String",
    description:
      "Given a string, return the reversed version of the string without using any built-in reverse functions.",
    sampleInput: `"hello"`,
    sampleOutput: `"olleh"`,
  };

  return (
    <>
      {/* ================= SIDEBAR ================= */}
      <div className="sidebar">

        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-section">
          <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </div>

          <div className="sidebar-item" onClick={() => navigate("/interviews")}>
            📁 Interviews
          </div>

          <h4 className="sidebar-heading">Practice</h4>

          <div className="sidebar-item" onClick={() => navigate("/aptitude")}>
            📘 Aptitude
          </div>

          <div className="sidebar-item active" onClick={() => navigate("/coding")}>
            💻 Coding
          </div>

          <div className="sidebar-item" onClick={() => navigate("/interviews")}>
            🎤 HR Practice
          </div>

          <div className="sidebar-item" onClick={() => navigate("/profile")}>
            👤 Profile
          </div>
        </div>

      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="dashboard-main">

        {/* Back Button */}
        <button
          className="back-btn"
          onClick={() => navigate("/coding")}
        >
          ← Back to Coding Levels
        </button>

        {/* Page Title */}
        <h1 className="page-title">Coding Challenge</h1>

        <div className="editor-grid">

          {/* ========== LEFT: PROBLEM STATEMENT ========== */}
          <div className="editor-card">
            <h2 className="editor-title">{problem.title}</h2>

            <p className="editor-desc">{problem.description}</p>

            <div className="io-box">
              <p className="io-label">Sample Input:</p>
              <div className="io-value blue">{problem.sampleInput}</div>
            </div>

            <div className="io-box">
              <p className="io-label">Sample Output:</p>
              <div className="io-value green">{problem.sampleOutput}</div>
            </div>
          </div>

          {/* ========== RIGHT: EDITOR ========== */}
          <div className="editor-card">
            <h3 className="editor-title">Your Code</h3>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="code-editor"
            />

            <div className="editor-btns">
              <button className="run-btn">Run Code</button>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>

        {/* ========== OUTPUT SECTION ========== */}
        <div className="output-card">
          <h3 className="editor-title">Output</h3>

          <div className="output-box">
            <p className="output-placeholder">Run code to see output...</p>
          </div>
        </div>

      </div>
    </>
  );
}
