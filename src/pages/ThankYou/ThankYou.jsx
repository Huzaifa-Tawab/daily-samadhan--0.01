// ThankYouPage.js

import React from "react";
import { Link, useParams } from "react-router-dom";

const ThankYou = ({ props }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Thank You Page</h2>
      <p>Thank you for your submission! Your ID is: {id}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ThankYou;
