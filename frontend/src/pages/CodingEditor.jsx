import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";   // ✅ FIX

export default function CodingEditor() {
  const { contestId } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await API.get(`/problems/contest/${contestId}`);
        setProblem(res.data[0]); // Load first problem
      } catch (err) {
        console.error("Failed to load problem", err);
      }
    };

    fetchProblem();
  }, [contestId]);

  if (!problem) return <p>Loading problem...</p>;

  return (
    <div className="dashboard-main">
      <h1>{problem.title}</h1>

      <p>{problem.description}</p>

      <h4>Input Format</h4>
      <pre>{problem.inputFormat}</pre>

      <h4>Output Format</h4>
      <pre>{problem.outputFormat}</pre>

      <textarea
        className="code-editor"
        placeholder="Write your code here..."
      />

      <button className="run-btn">Run</button>
      <button className="submit-btn">Submit</button>
    </div>
  );
}
