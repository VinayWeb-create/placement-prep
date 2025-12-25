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
    <div className="dashboard-main">
      <h1 className="page-title">{contest?.title}</h1>
      <p className="page-subtitle">{contest?.description}</p>

      <div className="form-card">
        <h3>Participant Registration</h3>

        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="College"
          value={form.college}
          onChange={(e) => setForm({ ...form, college: e.target.value })}
        />

        <input
          placeholder="Year (e.g. 3rd)"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />

        <button className="btn-grad" onClick={register}>
          Start Contest →
        </button>
      </div>
    </div>
  );
}
