import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../api/axios";

export default function ContestDetails() {
  const { contestId } = useParams();
  const navigate = useNavigate();

  const [contest, setContest] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
  });

  useEffect(() => {
    API.get(`/contests/${contestId}`).then(res => setContest(res.data));
  }, [contestId]);

  const register = async () => {
    await API.post("/participants/register", {
      ...form,
      contestId,
    });

    navigate(`/contest/${contestId}/start`);
  };

  return (
    <div className="dashboard-main">
      <h1>{contest?.title}</h1>
      <p>{contest?.description}</p>

      <h3>Register to Participate</h3>

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="College" onChange={e => setForm({...form, college:e.target.value})}/>
      <input placeholder="Year" onChange={e => setForm({...form, year:e.target.value})}/>

      <button onClick={register}>Start Contest</button>
    </div>
  );
}
