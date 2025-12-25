import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CodingEditor() {
  const { contestId } = useParams();
  const [problem, setProblem] = useState(null);

  useEffect(() => {
    API.get(`/problems/contest/${contestId}`).then(res => {
      setProblem(res.data[0]); // first problem
    });
  }, [contestId]);

  if (!problem) return <p>Loading...</p>;

  return (
    <div className="dashboard-main">
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>

      <h4>Input Format</h4>
      <pre>{problem.inputFormat}</pre>

      <h4>Output Format</h4>
      <pre>{problem.outputFormat}</pre>

      <textarea placeholder="Write your code here..." />

      <button>Run</button>
      <button>Submit</button>
    </div>
  );
}
