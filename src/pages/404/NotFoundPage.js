import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="fadeIn">404</h1>
      <p className="fadeIn">Oops! Page not found.</p>
      <Link to="/" className="btn-home fadeIn">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
