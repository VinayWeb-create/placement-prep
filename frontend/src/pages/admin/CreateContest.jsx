import { useState } from "react";
import API from "../../api/axios";

export default function CreateContest() {
  const [contest, setContest] = useState({
    title: "",
    duration: "",
    startTime: "",
  });

  const createContest = async () => {
    await API.post("/contests", contest);
    alert("Contest created!");
  };

  return (
    <div className="dashboard-main">
      <h1>Create Contest</h1>

      <input placeholder="Title" onChange={e =>
        setContest({ ...contest, title: e.target.value })
      } />

      <input placeholder="Duration (mins)" onChange={e =>
        setContest({ ...contest, duration: e.target.value })
      } />

      <input type="datetime-local" onChange={e =>
        setContest({ ...contest, startTime: e.target.value })
      } />

      <button onClick={createContest}>Create</button>
    </div>
  );
}
