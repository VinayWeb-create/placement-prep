import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-main notfound-page">

      <div className="notfound-box">

        <h1 className="nf-title">404</h1>

        <h2 className="nf-heading">Page Not Found</h2>

        <p className="nf-text">
          Oops! Looks like the page you're trying to access doesn't exist or has been moved.
        </p>

        <button className="nf-btn" onClick={() => navigate("/dashboard")}>
          Go to Home →
        </button>

      </div>

    </div>
  );
}
