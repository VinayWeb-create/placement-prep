import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function ContestDetails() {
  const { contestId } = useParams();
  const navigate = useNavigate();

  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
  });

  // 🔹 Load contest info
  useEffect(() => {
    const fetchContest = async () => {
      try {
        const res = await API.get(`/contests/${contestId}`);
        setContest(res.data);
      } catch (err) {
        setError("Contest not found");
      } finally {
        setLoading(false);
      }
    };

    fetchContest();
  }, [contestId]);

  // 🔹 Register participant
  const register = async () => {
    if (!form.name || !form.email || !form.college) {
      return alert("Please fill all required fields");
    }

    try {
      await API.post("/participants/register", {
        contestId,
        ...form,
      });

      alert("🎉 Registration Successful!");
      navigate(`/contest/${contestId}`);
    } catch (err) {
      alert(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  if (loading) {
    return <div className="dashboard-main">Loading contest...</div>;
  }

  return (
   <div className="register-wrapper">
  <div className="register-card">

    <h2 className="register-title">Participant Registration</h2>
    <p className="register-subtitle">
      Enter your details to start the contest
    </p>

    <div className="register-form">

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="text"
        placeholder="College"
        value={form.college}
        onChange={(e) => setForm({ ...form, college: e.target.value })}
      />

      <input
        type="text"
        placeholder="Year (e.g. 3rd)"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      />

      <button className="register-btn" onClick={register}>
        Start Contest →
      </button>

    </div>
  </div>
</div>

  );
}
