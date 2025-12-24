import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodingContests() {
  const navigate = useNavigate();

  // TEMP: static contests (later load from backend)
  const [contests] = useState([
    {
      id: "101",
      title: "Weekly Coding Contest",
      duration: "90 mins",
      status: "Live",
    },
    {
      id: "102",
      title: "Placement Mock Contest",
      duration: "120 mins",
      status: "Upcoming",
    },
    {
      id: "103",
      title: "DSA Marathon",
      duration: "2 Hours",
      status: "Ended",
    },
  ]);

  return (
    <div className="dashboard-main">
      {/* Header */}
      <div className="page-header-row">
        <h1 className="page-title">🏆 Coding Contests</h1>

        {/* Admin button (can protect later) */}
        <button
          className="btn-dark"
          onClick={() => navigate("/admin/create-contest")}
        >
          + Create Contest
        </button>
      </div>

      <p className="page-subtitle">
        Participate in real-time contests and track rankings.
      </p>

      {/* Contest Cards */}
      <div className="practice-grid">
        {contests.map((contest) => (
          <div key={contest.id} className="practice-card contest-card">
            <h2 className="practice-title">{contest.title}</h2>

            <p className="practice-desc">
              Duration: {contest.duration}
            </p>

            <span
              className={`status-pill ${
                contest.status === "Live"
                  ? "success-pill"
                  : contest.status === "Upcoming"
                  ? "pending-pill"
                  : "fail-pill"
              }`}
            >
              {contest.status}
            </span>

            <button
              className="practice-btn"
              disabled={contest.status === "Ended"}
              onClick={() =>
                navigate(`/contest/${contest.id}`)
              }
            >
              {contest.status === "Live"
                ? "Join Contest →"
                : contest.status === "Upcoming"
                ? "View Details →"
                : "Contest Ended"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
