// ThankYouPage.js

import React from "react";
import { Link, useParams } from "react-router-dom";
import './thanks.css'

const ThankYou = ({ props }) => {
  const { Name } = useParams();
  console.log(Name);

  return (
    <div className="thanks">
      <h2>Thank You for Submitting form we will reach you soon!</h2>
      <p>Your ID is: {Name}</p>
      <Link className="link-thanks" to="/">Go to Home</Link>
    </div>
  );
};

export default ThankYou;
