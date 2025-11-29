import { useNavigate } from "react-router-dom";

export default function InterviewList() {
  const navigate = useNavigate();

  const interviews = [
    {
      company: "TCS",
      role: "Software Engineer",
      date: "12 Nov 2025",
      status: "Selected",
    },
    {
      company: "Infosys",
      role: "System Engineer",
      date: "8 Nov 2025",
      status: "Rejected",
    },
    {
      company: "Accenture",
      role: "Associate Developer",
      date: "15 Oct 2025",
      status: "Pending",
    },
  ];

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
          className="sidebar-item"
          style={{ marginTop: "50px" }}
          onClick={() => navigate("/")}>
          ↩ Logout
        </div>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="dashboard-main">
        <h1 className="page-title">Interview History</h1>
        <p className="page-subtitle">
          Track your performance and review previous interviews.
        </p>

        {/* ---- Table Container ---- */}
        <div className="interview-table-card">
          <table className="interview-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {interviews.map((item, index) => (
                <tr key={index}>
                  <td>{item.company}</td>
                  <td className="text-light">{item.role}</td>
                  <td className="text-dim">{item.date}</td>

                  <td>
                    <span className={getStatusClass(item.status)}>
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="table-btn"
                      onClick={() => navigate("/interview-details")}>
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}
