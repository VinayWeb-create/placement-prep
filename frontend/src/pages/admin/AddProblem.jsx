import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../../api/axios";

export default function AddProblem() {
  const { contestId } = useParams();

  const [problem, setProblem] = useState({
    title: "",
    slug: "",
    description: "",
    problemStatement: "",
    inputFormat: "",
    outputFormat: "",
    constraints: "",
    difficulty: "easy",
    functionName: "",
    sampleTests: "",
    hiddenTests: ""
  });

  const handleChange = (e) => {
    setProblem({ ...problem, [e.target.name]: e.target.value });
  };

  const submitProblem = async () => {
    try {
      await API.post("/problems", {
        ...problem,
        contestId,
        sampleTests: JSON.parse(problem.sampleTests),
        hiddenTests: JSON.parse(problem.hiddenTests),
      });

      alert("✅ Problem Added Successfully");
    } catch (err) {
      alert("❌ Failed to add problem");
    }
  };

  return (
    <div className="dashboard-main">
      <div className="create-contest-card">

        <h2>Create Coding Problem</h2>

        <input name="title" placeholder="Problem Title" onChange={handleChange} />
        <input name="slug" placeholder="problem-slug" onChange={handleChange} />

        <textarea name="description" placeholder="Short Description" onChange={handleChange} />

        <textarea name="problemStatement" placeholder="Problem Statement" onChange={handleChange} />

        <textarea name="inputFormat" placeholder="Input Format" onChange={handleChange} />
        <textarea name="outputFormat" placeholder="Output Format" onChange={handleChange} />
        <textarea name="constraints" placeholder="Constraints" onChange={handleChange} />

        <input name="functionName" placeholder="Function Name (solve)" onChange={handleChange} />

        <select name="difficulty" onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <textarea
          name="sampleTests"
          placeholder='Sample Tests JSON: [{"input":"123","output":"6"}]'
          onChange={handleChange}
        />

        <textarea
          name="hiddenTests"
          placeholder='Hidden Tests JSON'
          onChange={handleChange}
        />

        <button onClick={submitProblem}>Add Problem</button>

      </div>
    </div>
  );
}
