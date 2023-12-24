import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./complaintportal.css";
import { Link } from "react-router-dom";
import police from "../../assets/portals/police.png";
import Frame43 from "../../assets/portals/Frame 43.jpg";
import Frame42 from "../../assets/portals/Frame 42.jpg";
import Frame41 from "../../assets/portals/Frame 41.png";
import Frame25 from "../../assets/portals/Frame 25.jpg";
import Frame24 from "../../assets/portals/Frame 24.jpg";
import Frame23 from "../../assets/portals/Frame 23.jpg";
import Frame21 from "../../assets/portals/Frame 21.jpg";
import Frame47 from "../../assets/portals/Frame 47.jpg";
import Frame46 from "../../assets/portals/Frame 46.jpg";
import Frame45 from "../../assets/portals/Frame 45.jpg";
import Frame44 from "../../assets/portals/Frame 44.jpg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";



function Complainportal() {
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
  

  const handleClick = () => setcheck(!Check);
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
            <select
              name="dispute"
              id="abc"
              onChange={(e) => setdispute(e.target.value)}
              value={Dispute}
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
          <button type="submit" onClick={Submitform}>Submit</button>
        </div>
      </div>

      {/* Portals */}
      <div className="Portal complaint-portal">
        {/* <p>Online <span style={{color:"#31A049"}}>Complaint Portals</span></p> */}
        <div id="Portal-content">
          <div class="Portal-content-card">
            <Link to={"/form/Industrial Dispute"}>
              <div className="con">
                <img src={Frame43} />
                <p>Industrial Dispute</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/e-Filling Consumer Commission"}>
              <div className="con">
                <img src={Frame42} />
                <p>e-Filling Consumer Commission</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Consumer Help"}>
              <div className="con">
                <img src={Frame25} />
                <p> Consumer Help</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Cyber Crime"}>
              <div className="con">
                <img src={Frame24} />
                <p>Cyber Crime</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Women Helpline"}>
              <div className="con">
                <img src={Frame23} />
                <p>Women Helpline</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Lost & Found"}>
              <div className="con">
                <img src={Frame21} />
                <p>Lost And Found</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to="/form/Consumer Dispute">
              <div className="con">
                <img src={Frame41} />
                <p>Consumer Dispute</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Police Complaint"}>
              <div className="con">
                <img src={police} />
                <p>Police Complaint</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Telecom Dispute"}>
              <div className="con">
                <img src={Frame44} />
                <p>Telecom Dispute</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Food Safety"}>
              <div className="con">
                <img src={Frame45} />
                <p>Food Safety</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/Drone Certificate Flying License"}>
              <div className="con">
                <img src={Frame46} />
                <p>Drone Certificate Flying License</p>
              </div>
            </Link>
          </div>

          <div class="Portal-content-card">
            <Link to={"/form/National Test House"}>
              <div className="con">
                <img src={Frame47} />
                <p>National Test House</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="header-choose choose-complaint">
        <h1>
          Why <span>Choose</span> Us ?
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Complainportal;
