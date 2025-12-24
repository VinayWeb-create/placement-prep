import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Placement Prep Portal</h1>
        <p className="login-subtitle">
          Login to continue your journey
        </p>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input"
          onChange={handleChange}
          disabled={loading}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
          disabled={loading}
        />

        {/* Error Message */}
        {error && (
          <p style={{ color: "#ff6a6a", marginBottom: "10px", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <button
          className="btn-grad"
          onClick={handleLogin}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-footer">
          Don’t have an account?{" "}
          <span className="login-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
}
