import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h1 className="register-title">Create Your Account</h1>
        <p className="register-subtitle">Join us & start preparing</p>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="register-input"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="register-input"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="register-input"
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="register-input"
          onChange={handleChange}
        />

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="register-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>

      </div>
    </div>
  );
}
