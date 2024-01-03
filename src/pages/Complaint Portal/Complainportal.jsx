import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./complaintportal.css";
import { Link } from "react-router-dom";
import police from "../../assets/portals/police.svg";
import Frame43 from "../../assets/portals/industrialdispute.svg";
import Frame42 from "../../assets/portals/ebilling.svg";
import Frame41 from "../../assets/portals/consumer.svg";
import Frame25 from "../../assets/portals/nch.svg";
import Frame24 from "../../assets/portals/cyber.svg";
import Frame23 from "../../assets/portals/women.svg";
import Frame21 from "../../assets/portals/lost.svg";
import Frame47 from "../../assets/portals/nationaltest.svg";
import Frame46 from "../../assets/portals/drone.svg";
import Frame45 from "../../assets/portals/foodsafety.svg";
import Frame44 from "../../assets/portals/telecom.svg";
import TM from "../../assets/portals/tm.svg";
import GST from "../../assets/portals/gstportal.svg";
import phblk from "../../assets/portals/blockph.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import education from "../../assets/portals/education.png";
import insurance from "../../assets/portals/insurance.png";
import photo from "../../assets/portals/photo.png";
import ama from "../../assets/portals/ama.png";
import airline from "../../assets/portals/airline.png";
import WhyChooseUs from "../../components/Why Choose Us/whychooseus";
import { useNavigate } from "react-router";
import Portals from "../../components/Complaint Portals/Portals";

function Complainportal() {
  const navi = useNavigate();
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Phone, setphone] = useState("");
  const [State, setstate] = useState("");
  const [Dispute, setdispute] = useState("");
  const [Textarea, settextarea] = useState("");
  const [Check, setcheck] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneerror, setphoneError] = useState("");
  const [Nameerror, setnameError] = useState("");
  const [Stateerror, setstateError] = useState("");
  const [Textareaerror, settextareaError] = useState("");
  const [Checkerror, setcheckError] = useState("");

  const handleClick = () => setcheck(!Check);
  async function Submitform(e) {
    e.preventDefault();
    // Set initial error values to empty
    setnameError("");
    setEmailError("");
    setphoneError("");
    setstateError("");
    settextareaError("");
    setcheckError("");

    // Check if the user has entered both fields correctly
    if ("" === Name) {
      setnameError("Please enter your Name");
      return;
    }
    if ("" === Email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    if ("" === Phone) {
      setphoneError("Please enter your Phone number");
      return;
    }

    if (Phone.length < 11) {
      setphoneError("The number must be correct");
      return;
    }
    if ("" === State) {
      setstateError("Please enter your State");
      return;
    }
    if ("" === Textarea) {
      settextareaError("Please describe your issue");
      return;
    }
    if (Check === false) {
      setcheckError("Please check the box to agree our terms");
      return;
    }
    // Authentication calls will be made here...
    try {
      const docRef = await addDoc(collection(db, "ContactsUsers"), {
        name: Name,
        email: Email,
        phone: Phone,
        state: State,
        textarea: Textarea,
        check: Check,
        time: serverTimestamp(),
      });
      // console.log("Document written with ID: ", docRef.id);
      navi("/thanks/" + docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <>
      <Navbar />
      {/* Complaint Form */}
      <div className="Form-main complaint-portal-main">
        <h1>Complaint Portal</h1>
        <div className="form-fields">
          <h3>Need Help with Filing Complaint?</h3>
          <div className="form-name">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setname(e.target.value)}
            />
            <br />
            <label className="errorLabel">{Nameerror}</label>
          </div>
          <div className="form-email">
            <span>Email</span>
            <input
              type="email"
              name=""
              id=""
              placeholder="jhonson@abc.com"
              onChange={(e) => setemail(e.target.value)}
              value={Email}
            />
            <br />
            <label className="errorLabel">{emailError}</label>
          </div>
          <div className="form-number">
            <span>Phone No</span>
            <input
              type="number"
              placeholder="x-xxx-xxxx"
              onChange={(e) => setphone(e.target.value)}
              value={Phone}
            />
            <br />
            <label className="errorLabel">{phoneerror}</label>
          </div>
          <div className="form-state">
            <span>State</span>
            <input
              type="text"
              placeholder="e.g Mumbai"
              onChange={(e) => setstate(e.target.value)}
              value={State}
            />
            <br />
            <label className="errorLabel">{Stateerror}</label>
          </div>

          <div className="form-dispute">
          <span>Type of Dispute</span>

            <textarea
              name=""
              id=""
              cols="33"
              rows="3"
              onChange={(e) => settextarea(e.target.value)}
            ></textarea>
            {/* <select
    name="dispute"
    id="abc"
    value={Dispute}
    onChange={(e) => setdispute(e.target.value)}
  >
    <option value=""></option>

    <option value="Good">Good</option>
    <option value="Best">Best</option>
    <option value="Excellent">Excellent</option>
  </select> */}
            <br />
            <label className="errorLabel">{Textareaerror}</label>
          </div>
          <div className="form-checkbox">
            <input
              type="checkbox"
              name="Terms & Conditions"
              id=""
              onChange={(e) => handleClick(e.target.value)}
              checked={Check}
            />
            <span>
              I have read & agreed to the company's Terms and Conditions,
              disclaimer and refund policy, and also ready to accept calls, SMS,
              emails, etc.
            </span>
            <br />
            <label className="errorLabel">{Checkerror}</label>
          </div>
          <button type="submit" onClick={Submitform}>
            Submit
          </button>
        </div>
      </div>

      {/* Portals */}
      <Portals />

      {/* Why Choose Us */}
      {/* <div className="header-choose choose-complaint"> */}
        {/* <h1>
          Why <span>Choose</span> Us ?
        </h1> */}
        {/* <WhyChooseUs />
      </div> */}

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Complainportal;
