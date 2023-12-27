// ThankYouPage.js

import React from "react";
import { Link, useParams } from "react-router-dom";

const ThankYou = ({ props }) => {
  const { Name } = useParams();
  console.log(Name);

  return (
    <div>
      <h2>Thank You Page</h2>
      <p>Thank you for your submission! Your ID is: {Name}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ThankYou;
