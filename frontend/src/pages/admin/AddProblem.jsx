import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../../api/axios";


export default function AddProblem() {
  const { contestId } = useParams();

  const [problem, setProblem] = useState({
    title: "",
    description: "",
    functionName: "",
    inputFormat: "",
    outputFormat: "",
    difficulty: "easy",
    sampleTests: "",
  });

  const submitProblem = async () => {
    try {
      const payload = {
        ...problem,
        contestId,
        sampleTests: JSON.parse(problem.sampleTests),
      };

      await API.post("/problems", payload);
      alert("✅ Problem added successfully");

      setProblem({
        title: "",
        description: "",
        functionName: "",
        inputFormat: "",
        outputFormat: "",
        difficulty: "easy",
        sampleTests: "",
      });
    } catch (err) {
      alert("❌ Invalid JSON or Server Error");
    }
  };

  return (
    <div className="admin-form">
      <h1>Add Problem</h1>

      <input placeholder="Title" onChange={e => setProblem({ ...problem, title: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setProblem({ ...problem, description: e.target.value })} />
      <input placeholder="Function Name" onChange={e => setProblem({ ...problem, functionName: e.target.value })} />
      <textarea placeholder="Input Format" onChange={e => setProblem({ ...problem, inputFormat: e.target.value })} />
      <textarea placeholder="Output Format" onChange={e => setProblem({ ...problem, outputFormat: e.target.value })} />

      <select onChange={e => setProblem({ ...problem, difficulty: e.target.value })}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <textarea
        placeholder='Sample Tests JSON [{"input":"5","output":"120"}]'
        onChange={e => setProblem({ ...problem, sampleTests: e.target.value })}
      />

      <button onClick={submitProblem}>Add Problem</button>
    </div>
  );
}
