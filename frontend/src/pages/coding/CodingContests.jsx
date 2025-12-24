import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";

export default function CodingContests() {
  const navigate = useNavigate();
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 check admin (simple frontend check)
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    fetchContests();
  }, []);

  const fetchContests = async () => {
    try {
      const res = await API.get("/contests");
      setContests(res.data);
    } catch (err) {
      console.error("Failed to load contests", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Calculate contest status
  const getStatus = (contest) => {
    const now = new Date();
    const start = new Date(contest.startTime);
    const end = new Date(
      start.getTime() + contest.duration * 60000
    );

    if (now < start) return "Upcoming";
    if (now > end) return "Ended";
    return "Live";
  };

  if (loading) {
    return (
      <div className="dashboard-main">
        <h2>Loading contests...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-main">
      {/* ===== HEADER ===== */}
      <div className="page-header-row">
        <h1 className="page-title">🏆 Coding Contests</h1>

        {isAdmin && (
          <button
            className="btn-dark"
            onClick={() => navigate("/admin/create-contest")}
          >
            + Create Contest
          </button>
        )}
      </div>

      <p className="page-subtitle">
        Participate in real-time coding contests.
      </p>

      {/* ===== CONTEST LIST ===== */}
      <div className="practice-grid">
        {contests.length === 0 && (
          <p className="text-dim">No contests available yet.</p>
        )}

        {contests.map((contest) => {
          const status = getStatus(contest);

          return (
            <div key={contest._id} className="practice-card contest-card">
              <h2 className="practice-title">{contest.title}</h2>

              <p className="practice-desc">
                Duration: {contest.duration} mins
              </p>

              <span
                className={`status-pill ${
                  status === "Live"
                    ? "success-pill"
                    : status === "Upcoming"
                    ? "pending-pill"
                    : "fail-pill"
                }`}
              >
                {status}
              </span>

              <button
                className="practice-btn"
                disabled={status === "Ended"}
                onClick={() =>
                  navigate(`/contest/${contest._id}`)
                }
              >
                {status === "Live"
                  ? "Join Contest →"
                  : status === "Upcoming"
                  ? "View Details →"
                  : "Contest Ended"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
