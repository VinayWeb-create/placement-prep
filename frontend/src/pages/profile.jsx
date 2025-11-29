import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "",
    email: "",
  };

  const [form, setForm] = useState({
    name: storedUser.name,
    email: storedUser.email,
    phone: "",
    college: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <>
      {/* ---------------- Sidebar ---------------- */}
      <div className="sidebar">
        <h2 className="sidebar-logo">PrepPortal</h2>

        <div className="sidebar-item" onClick={() => navigate("/dashboard")}>
          🏠 Dashboard
        </div>

        <div className="sidebar-item" onClick={() => navigate("/interviews")}>
          📁 Interviews
        </div>

        <div className="sidebar-item" onClick={() => navigate("/practice")}>
          🧠 Practice
        </div>

        <div className="sidebar-item active" onClick={() => navigate("/profile")}>
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

        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">
          Update your basic details and academic info.
        </p>

        {/* ---- Profile Card ---- */}
        <div className="profile-card">
          <h2 className="profile-heading">Personal Information</h2>

          {/* Inputs */}
          <div className="profile-grid">
            <div>
              <label className="profile-label">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="profile-input"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="profile-label">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="profile-input"
                placeholder="Email address"
              />
            </div>

            <div>
              <label className="profile-label">Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="profile-input"
                placeholder="Mobile number"
              />
            </div>

            <div>
              <label className="profile-label">College</label>
              <input
                name="college"
                value={form.college}
                onChange={handleChange}
                className="profile-input"
                placeholder="Your college"
              />
            </div>

            <div>
              <label className="profile-label">Branch</label>
              <input
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="profile-input"
                placeholder="CSE / IT / ECE / etc"
              />
            </div>

            <div>
              <label className="profile-label">Year</label>
              <input
                name="year"
                value={form.year}
                onChange={handleChange}
                className="profile-input"
                placeholder="Final Year / 3rd Year"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="profile-save-btn" onClick={handleSave}>
            Save Changes
          </button>
        </div>

      </div>
    </>
  );
}
