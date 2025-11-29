import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Placement Prep Portal</h1>
        <p className="login-subtitle">Login to continue your journey</p>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
        />

        <button className="btn-grad" onClick={handleLogin}>
          Login
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
