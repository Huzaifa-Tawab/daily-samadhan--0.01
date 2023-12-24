import { React, useState } from "react";
import "./contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import email from "../../assets/Contact/email.svg";
import loc from "../../assets/Contact/location.svg";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Phone, setphone] = useState("");
  const [State, setstate] = useState("");
  const [Dispute, setdispute] = useState("");
  const [Check, setcheck] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneerror, setphoneError] = useState("");
  const [Nameerror, setnameError] = useState("");
  const [Stateerror, setstateError] = useState("");
  const [Disputeerror, setdisputeError] = useState("");
  const [Checkerror, setcheckError] = useState("");

  const handleClick = () => setcheck(!Check)
  async function Submitform (e) {
    e.preventDefault();
    // Set initial error values to empty
    setnameError("");
    setEmailError("");
    setphoneError("");
    setstateError("");
    setdisputeError("");
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
    if ("" === Dispute) {
      setdisputeError("Please select an option");
      return;
    }
    if (Check === false) {
      setcheckError("Please check the box to agree our terms");
      return;
    }
    // Authentication calls will be made here...
    try {
        const docRef = await addDoc(collection(db, "ContactsUsers"),{
            name: Name,
            email: Email,
            phone: Phone,
            state: State,
            dispute: Dispute,
            check: Check
        });
        console.log("Document written with ID: ", docRef.id);
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <Navbar />
      <div className="Form-main Contact-form">
        <div className="contact">
          <h1>
            Contact <span>Now</span>
          </h1>
          <div className="contact-box">
            <div className="mail-div">
              <img src={email} alt="" />
              <h2>info@dailysamadhan.com</h2>
            </div>
            <div className="mail-div">
              <img src={loc} alt="" />
              <h2>PAN India</h2>
            </div>
          </div>
        </div>
        <div className="form-fields">
          <h3>Need Help with Filing Complaint?</h3>
          <div className="form-name">
            <span>Name</span>
            <input
              type="text"
              value={Name}
              placeholder="Name"
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
              value={Email}
              placeholder="jhonson@abc.com"
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <label className="errorLabel">{emailError}</label>

          </div>
          <div className="form-number">
            <span>Phone No</span>
            <input
              type="number"
              value={Phone}
              placeholder="x-xxx-xxxx"
              onChange={(e) => setphone(e.target.value)}
            />
            <br />
            <label className="errorLabel">{phoneerror}</label>

          </div>
          <div className="form-state">
            <span>State</span>
            <input
              type="text"
              value={State}
              placeholder="e.g Mumbai"
              onChange={(e) => setstate(e.target.value)}
            />
            <br />
            <label className="errorLabel">{Stateerror}</label>

          </div>
          <div className="form-dispute">
            <span>Type of Dispute</span>
            <select
              name="dispute"
              id="abc"
              value={Dispute}
              onChange={(e) => setdispute(e.target.value)}
            >

              <option value=""></option>

              <option value="Good">Good</option>
              <option value="Best">Best</option>
              <option value="Excellent">Excellent</option>
            </select>
            <label className="errorLabel">{Disputeerror}</label>

          </div>
          <div className="form-checkbox">
            <input
              type="checkbox"
              name="Terms & Conditions"
              id=""
              value={Check}
              checked={Check}
              onClick={(e) => handleClick(e.target.value)}
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
      <div className="contact-button">
        <button>Contatct Us Now</button>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
