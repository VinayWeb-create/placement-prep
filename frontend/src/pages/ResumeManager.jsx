import { useState } from "react";

export default function ResumeManager() {
  const [resume, setResume] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
    }
  };

  const handleDelete = () => {
    setResume(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white p-6">

      <h2 className="text-3xl font-semibold mb-8">Resume Manager</h2>

      <div className="bg-[#111827] p-8 rounded-xl border border-gray-700 shadow max-w-xl mx-auto">

        {/* Upload Section */}
        <h3 className="text-xl font-semibold mb-3">Upload Your Resume</h3>
        <p className="text-gray-400 text-sm mb-4">
          Supported formats: PDF, DOCX — Max size: 5MB
        </p>

        {/* File Input */}
        <label className="cursor-pointer w-full block">
          <div className="bg-[#1F2937] border border-gray-600 hover:border-blue-500 rounded-lg p-4 text-center transition">
            {resume ? (
              <span className="text-blue-400">{resume.name}</span>
            ) : (
              <span className="text-gray-300">Click to select a file</span>
            )}
          </div>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleUpload}
          />
        </label>

        {/* Buttons */}
        {resume && (
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>

            <a
              href={URL.createObjectURL(resume)}
              download={resume.name}
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Download
            </a>
          </div>
        )}

        {/* No Resume */}
        {!resume && (
          <p className="text-center text-gray-500 mt-4">
            No resume uploaded yet.
          </p>
        )}
      </div>
    </div>
  );
}
