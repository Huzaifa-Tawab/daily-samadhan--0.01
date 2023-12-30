import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="fadeIn">404</h1>
      <p className="fadeIn">Oops! Page not found.</p>
      <Link to="/">
        <button className="go-home-button">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
