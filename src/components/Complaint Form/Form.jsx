import { React, useState } from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Form.css";
import delhi from "../../assets/Cities/Delhi.jpeg";
import uttarpardesh from "../../assets/Cities/Uttarpradesh.jpeg";
import haryana from "../../assets/Cities/haryana.jpeg";
import rajasthan from "../../assets/Cities/Rajasthan.jpeg";
import maharashtra from "../../assets/Cities/maharashtra.png";
import { useParams } from "react-router-dom";
import Popup from "../Modal/modal";
import { db } from "../../firebase";
import { useNavigate } from "react-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Form(props) {
  let id = props.id;
  let x = useParams();
  id = x.id;
  console.log(id);
  const navi = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [Name, setname] = useState("");
  const [Email, setemail] = useState("");
  const [Phone, setphone] = useState("");
  const [State, setstate] = useState("");
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
  async function SubmitPoliceComplaint(e) {
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
      settextareaError("Please write your query");
      return;
    }
    if (Check === false) {
      setcheckError("Please check the box to agree our terms");
      return;
    }
    // Authentication calls will be made here...
    setisLoading(true);
    try {
      const docRef = await addDoc(collection(db, "PoliceComplaintUsers"), {
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
      setisLoading(false);

      console.error("Error adding document: ", e);
    }
    setisLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="Form-main">
        <h1>{id}</h1>
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
          <span>Your Query</span>
          <div className="form-dispute">
            {/* <span>Your Query</span> */}

            <textarea
              name=""
              id=""
              cols="33"
              rows="3"
              onChange={(e) => settextarea(e.target.value)}
            ></textarea>
            <br />
            <label className="errorLabel">{Textareaerror}</label>
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
          <button type="submit" onClick={SubmitPoliceComplaint}>
            Submit
          </button>
        </div>
      </div>
      {/* Cities */}
      <div className="city-portal">
        <div class="city-Portal-card">
          <div className="con">
            <img src={delhi} />
            <div class="middle">
              <div class="text">Delhi</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={uttarpardesh} />
            <div class="middle">
              <div class="text">Uttar Pradesh</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={haryana} />
            <div class="middle">
              <div class="text">Haryana</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={rajasthan} />
            <div class="middle">
              <div class="text">Rajasthan</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Maharashtra</div>
            </div>
          </div>
        </div>
      </div>
      <div className="city-portal">
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Madhya Pradesh</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Gujarat</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Tamil Nadu</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Himachal Pradesh</div>
            </div>
          </div>
        </div>
        <div class="city-Portal-card">
          <div className="con">
            <img src={maharashtra} />
            <div class="middle">
              <div class="text">Bihar</div>
            </div>
          </div>
        </div>
      </div>
      {/* File Complaint */}
      <div className="file-complaint-fields">
        <div className="complain-file">
          <p>
            Want us to file your Complaint? <br />
            <Popup />
          </p>
        </div>
        {/* <div className="not-city">
        <p>Not Able to find your city ? <br /> give us a call on <br /> 1800 0000 0000</p>
    </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Form;
