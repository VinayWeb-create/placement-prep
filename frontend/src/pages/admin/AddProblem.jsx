import { useState } from "react";
import API from "../../api/axios";

export default function AddProblem({ contestId }) {
  const [problem, setProblem] = useState({
    title: "",
    description: "",
    functionName: "",
    difficulty: "easy",
    testCases: "",
  });

  const submitProblem = async () => {
    const payload = {
      ...problem,
      contestId,
      testCases: JSON.parse(problem.testCases),
    };

    await API.post("/problems", payload);
    alert("Problem added successfully!");
  };

  return (
    <div className="admin-form">
      <h1>Add Problem</h1>

      <input
        placeholder="Title"
        onChange={(e) =>
          setProblem({ ...problem, title: e.target.value })
        }
      />

      <textarea
        placeholder="Problem Description"
        onChange={(e) =>
          setProblem({ ...problem, description: e.target.value })
        }
      />

      <input
        placeholder="Function Name (e.g. reverseString)"
        onChange={(e) =>
          setProblem({ ...problem, functionName: e.target.value })
        }
      />

      <select
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
        onChange={(e) =>
          setProblem({ ...problem, testCases: e.target.value })
        }
      />

      <button onClick={submitProblem}>Add Problem</button>
    </div>
  );
}
