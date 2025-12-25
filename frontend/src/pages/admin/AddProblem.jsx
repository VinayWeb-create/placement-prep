import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

export default function AddProblem() {
  const { contestId } = useParams();

  const [problem, setProblem] = useState({
    title: "",
    description: "",
    functionName: "",
    difficulty: "easy",
    testCases: "",
  });

  const submitProblem = async () => {
    try {
      const payload = {
        ...problem,
        contestId,
        testCases: JSON.parse(problem.testCases),
      };

      await API.post("/problems", payload);

      alert("✅ Problem added successfully!");
      setProblem({
        title: "",
        description: "",
        functionName: "",
        difficulty: "easy",
        testCases: "",
      });
    } catch (err) {
      alert("❌ Invalid test cases or server error");
    }
  };

  return (
    <div className="admin-form">
      <h1>Add Problem</h1>

      <input
        placeholder="Problem Title"
        value={problem.title}
        onChange={(e) => setProblem({ ...problem, title: e.target.value })}
      />

      <textarea
        placeholder="Problem Description"
        value={problem.description}
        onChange={(e) => setProblem({ ...problem, description: e.target.value })}
      />

      <input
        placeholder="Function Name (e.g. reverseString)"
        value={problem.functionName}
        onChange={(e) =>
          setProblem({ ...problem, functionName: e.target.value })
        }
      />

      <select
        value={problem.difficulty}
        onChange={(e) =>
          setProblem({ ...problem, difficulty: e.target.value })
        }
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <textarea
        placeholder='Test cases JSON: [{"input":"hello","output":"olleh"}]'
        value={problem.testCases}
        onChange={(e) =>
          setProblem({ ...problem, testCases: e.target.value })
        }
      />

      <button onClick={submitProblem}>Add Problem</button>
    </div>
  );
}
