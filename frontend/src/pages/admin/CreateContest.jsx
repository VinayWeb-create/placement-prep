import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";


export default function CreateContest() {
  const navigate = useNavigate();

  const [contest, setContest] = useState({
    title: "",
    duration: "",
    startTime: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setContest({ ...contest, [e.target.name]: e.target.value });
  };

  const createContest = async () => {
    if (!contest.title || !contest.duration || !contest.startTime) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await API.post("/contests", contest);

      const contestId = res.data._id;

      const addMore = window.confirm(
        "✅ Contest created successfully!\n\nDo you want to add problems now?"
      );

      if (addMore) {
        navigate(`/admin/contest/${contestId}/problems`);
      } else {
        navigate("/coding-contests");
      }
    } catch (err) {
      setError("Failed to create contest. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-main">
      <div className="create-contest-container">
        <div className="create-contest-card">

          <span className="info-pill">Admin Panel</span>

          <h1 className="create-contest-title">Create Coding Contest</h1>
          <p className="create-contest-subtitle">
            Setup a coding contest for participants
          </p>

          <div className="create-form">
            <div>
              <label>Contest Title *</label>
              <input
                name="title"
                value={contest.title}
                onChange={handleChange}
                placeholder="Weekly Coding Contest"
              />
            </div>

            <div className="form-grid">
              <div>
                <label>Duration (minutes)</label>
                <input
                  type="number"
                  name="duration"
                  value={contest.duration}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Start Time</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  value={contest.startTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={contest.description}
                onChange={handleChange}
              />
            </div>

            {error && <p style={{ color: "#ff6a6a" }}>{error}</p>}

            <div className="create-actions">
              <button
                className="btn-dark"
                onClick={() => navigate("/coding-contests")}
              >
                Cancel
              </button>

              <button
                className="btn-grad"
                onClick={createContest}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Contest"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
