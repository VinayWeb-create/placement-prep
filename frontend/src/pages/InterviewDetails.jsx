import { useNavigate } from "react-router-dom";

export default function InterviewDetails() {
  const navigate = useNavigate();

  const interview = {
    company: "TCS",
    role: "Software Engineer",
    date: "12 Nov 2025",
    status: "Selected",
    rounds: [
      { title: "Aptitude Test", result: "Cleared", score: "85%" },
      { title: "Coding Round", result: "Cleared", score: "78%" },
      { title: "Technical Interview", result: "Strong", score: "Good" },
      { title: "HR Interview", result: "Excellent", score: "Great" },
    ],
    feedback:
      "You performed well across all rounds. Excellent communication skills and strong fundamentals helped you stand out.",
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Selected":
        return "status-pill success-pill";
      case "Rejected":
        return "status-pill fail-pill";
      default:
        return "status-pill pending-pill";
    }
  };

  return (
    <>
      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">
        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
          🏠 Dashboard
        </div>

        <div className="sidebar-item active" onClick={() => navigate("/interviews")}>
          📁 Interviews
        </div>

        <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

        <div className="sidebar-item" onClick={() => navigate("/profile")}>
          👤 Profile
        </div>

        <div
          style={{ marginTop: "50px" }}
          className="sidebar-item"
          onClick={() => navigate("/")}
        >
          ↩ Logout
        </div>
      </div>

      {/* ---------------- Main Interview Details Content ---------------- */}
      <div className="dashboard-main">

        {/* Back Button */}
        <button
          className="back-btn"
          onClick={() => navigate("/interviews")}
        >
          ← Back to List
        </button>

        {/* Page Title */}
        <h1 className="page-title">Interview Details</h1>

        {/* Main Card */}
        <div className="detail-card">
          {/* Header Row */}
          <div className="detail-header">
            <div>
              <h2 className="detail-company">{interview.company}</h2>
              <p className="detail-role">{interview.role}</p>
            </div>

            <span className={getStatusClass(interview.status)}>
              {interview.status}
            </span>
          </div>

          {/* Date */}
          <p className="detail-date">Date: {interview.date}</p>

          <hr className="detail-divider" />

          {/* Round Breakdown */}
          <h3 className="detail-section-title">Round Breakdown</h3>

          <div className="detail-rounds">
            {interview.rounds.map((round, i) => (
              <div key={i} className="round-box">
                <h4 className="round-title">{round.title}</h4>
                <p className="round-text">Result: {round.result}</p>
                <p className="round-text">Score: {round.score}</p>
              </div>
            ))}
          </div>

          <hr className="detail-divider" />

          {/* Feedback */}
          <h3 className="detail-section-title">Feedback</h3>
          <p className="detail-feedback">{interview.feedback}</p>
        </div>
      </div>
    </>
  );
}
