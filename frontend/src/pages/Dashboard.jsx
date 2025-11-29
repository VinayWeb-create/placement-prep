import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">

        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-item active" onClick={() => navigate("/dashboard")}>
          🏠 Dashboard
        </div>

        <div className="sidebar-item" onClick={() => navigate("/interviews")}>
          📁 Interviews
        </div>

        <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

        <div className="sidebar-item" onClick={() => navigate("/profile")}>
          👤 Profile
        </div>

        <div className="sidebar-item logout-button" onClick={() => navigate("/")}>
          ↩ Logout
        </div>

      </div>

      {/* ---------------- Main Dashboard Content ---------------- */}
      <div className="dashboard-main">

        {/* Welcome Section */}
        <div className="dash-header">
          <h1 className="page-title">
            Welcome, {user?.name?.split(" ")[0] || "User"} 👋
          </h1>
          <p className="page-subtitle">Your placement journey summary at a glance</p>
        </div>

        {/* ======= Stats Row (High Impact UI) ======= */}
        <div className="stat-grid">

          <div className="stat-card stat-hover">
            <p className="stat-label">Completed Tests</p>
            <h1 className="stat-value">12</h1>
            <p className="stat-footer">+3 from last week</p>
          </div>

          <div className="stat-card stat-hover">
            <p className="stat-label">Latest Score</p>
            <h1 className="stat-value" style={{ color: "#6a8bff" }}>8.5 / 10</h1>
            <p className="stat-footer">Good improvement 🎉</p>
          </div>

          <div className="stat-card stat-hover">
            <p className="stat-label">Upcoming Mock</p>
            <h1 className="stat-value">Dec 03</h1>
            <p className="stat-footer">Scheduled</p>
          </div>

        </div>

        {/* ======= Section Title ======= */}
        <h2 className="section-title">Recent Interviews</h2>

        {/* ======= Interviews List ======= */}
        <div className="interview-card">
          <div>
            <h3 className="interview-role">Software Engineer</h3>
            <p className="interview-company">Tech Innovations Inc.</p>
          </div>
          <div className="interview-status">
            <p>Nov 17</p>
            <span className="stat-success">Passed</span>
          </div>
        </div>

        <div className="interview-card">
          <div>
            <h3 className="interview-role">Data Analyst</h3>
            <p className="interview-company">Quantum Solutions</p>
          </div>
          <div className="interview-status">
            <p>Nov 11</p>
            <span className="stat-fail">Failed</span>
          </div>
        </div>

        <div className="interview-card">
          <div>
            <h3 className="interview-role">Backend Developer</h3>
            <p className="interview-company">NeuraLogic</p>
          </div>
          <div className="interview-status">
            <p>Nov 08</p>
            <span className="stat-pending">Pending</span>
          </div>
        </div>

        {/* Add Button */}
        <div className="add-button">
          + Add Interview / Save Company
        </div>

      </div>
    </>
  );
}
