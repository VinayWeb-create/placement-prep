import { useNavigate } from "react-router-dom";
import "../global.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <h2 className="sidebar-title">Placement Prep</h2>
        <p className="sidebar-sub">Welcome, {user?.name?.split(" ")[0]}</p>

        {/* MAIN ITEMS */}
        <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
          🏠 Dashboard
        </div>

        <div className="sidebar-item" onClick={() => navigate("/interviews")}>
          📁 Interviews
        </div>

        {/* Practice Parent */}
        <div className="sidebar-item">
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

        <div className="sidebar-item" onClick={() => navigate("/profile")}>
          👤 Profile
        </div>
       <div
          className="sidebar-item"
          style={{ marginTop: "50px" }}
          onClick={() => navigate("/")}
        >
          ↩ Logout
        </div>
        

      </aside>

      {/* CONTENT AREA */}
      <main className="content">

        <h1 className="page-title">Dashboard</h1>

        {/* Example Stats Section */}
        <div className="grid-3">
          <div className="card">
            <h3 className="card-title">Recent Interviews</h3>
            <p className="card-number">5</p>
          </div>

          <div className="card">
            <h3 className="card-title">Upcoming Mock</h3>
            <p className="card-number">Oct 28</p>
          </div>

          <div className="card">
            <h3 className="card-title">Latest Score</h3>
            <p className="card-number">8.5 / 10</p>
          </div>
        </div>

      </main>

    </div>
  );
}
