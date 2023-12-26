import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./complaintportal.css";
import { Link } from "react-router-dom";
import police from '../../assets/portals/police.svg'
import Frame43 from '../../assets/portals/industrialdispute.svg'
import Frame42 from '../../assets/portals/ebilling.svg'
import Frame41 from '../../assets/portals/consumer.svg'
import Frame25 from '../../assets/portals/nch.svg'
import Frame24 from '../../assets/portals/cyber.svg'
import Frame23 from '../../assets/portals/women.svg'
import Frame21 from '../../assets/portals/lost.svg'
import Frame47 from '../../assets/portals/nationaltest.svg'
import Frame46 from '../../assets/portals/drone.svg'
import Frame45 from '../../assets/portals/foodsafety.svg'
import Frame44 from '../../assets/portals/telecom.svg'
import TM from '../../assets/portals/tm.svg'
import GST from '../../assets/portals/gstportal.svg'
import phblk from '../../assets/portals/blockph.svg'
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
        <div id="Portal-content">
    <div class="Portal-content-card">
        <Link to={"/form/Police Complaint"}>
      <div className="con">
      
      <img src={police}/>
          <p>Police Complaint</p>
          <div class="middle-portal">
      <div class="text-links"></div>
  </div>
      </div>
      </Link>
        </div>
        
    <div class="Portal-content-card">
    <Link to={"https://samadhan.labour.gov.in/"}>
      <div className="con">
      <img src={Frame43}/>
          <p>Industrial Dispute</p>
          <div class="middle-portal">
      <div class="text-links">https://samadhan.labour.gov.in/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://edaakhil.nic.in/edaakhil"}>
      <div className="con">
      <img src={Frame42}/>
      <p>e-Filling Consumer Commission</p>
      <div class="middle-portal">
      <div class="text-links">https://edaakhil.nic.in/edaakhil</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"/contact"}>
      <div className="con">
      <img src={Frame25}/>
          <p> Consumer Help</p>
          <div class="middle-portal">
      <div class="text-links"></div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://cybercrime.gov.in/"}>
      <div className="con">
      <img src={Frame24}/>
          <p>Cyber Crime</p>
          <div class="middle-portal">
      <div class="text-links">https://cybercrime.gov.in/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://www.ncwwomenhelpline.in/"}>
      <div className="con">
      <img src={Frame23}/>
          <p>Women Helpline</p>
          <div class="middle-portal">
      <div class="text-links">https://www.ncwwomenhelpline.in/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://lostfound.delhipolice.gov.in/"}>
      <div className="con">
      <img src={Frame21}/>
          <p>Lost And Found</p>
          <div class="middle-portal">
      <div class="text-links">https://lostfound.delhipolice.gov.in/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://ncdrc.nic.in/"}>
      <div className="con">
     
      <img src={Frame41}/>
          <p>Consumer Dispute</p>
          <div class="middle-portal">
      <div class="text-links">https://ncdrc.nic.in/</div>
  </div>
          
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
    <Link to={"https://tdsat.gov.in/Delhi/Delhi.php"}>
     
      <div className="con">
      <img src={Frame44}/>
          <p>Telecom Dispute</p>
          <div class="middle-portal">
      <div class="text-links">https://tdsat.gov.in/Delhi/Delhi.php</div>
  </div>
      </div>
      </Link>
        </div>

        
        <div class="Portal-content-card">
        <Link to={"https://fssai.gov.in/cms/grievances.php"}>

      <div className="con">
      <img src={Frame45}/>
          <p>Food Safety</p>
          <div class="middle-portal">
      <div class="text-links">https://fssai.gov.in/cms/grievances.php</div>
  </div>
      </div>
      </Link>
        </div>

        
        <div class="Portal-content-card">
        <Link to={"https://digitalsky.dgca.gov.in/home"}>

      <div className="con">
      <img src={Frame46}/>
          <p>Drone Certificate Flying License</p>
          <div class="middle-portal">
      <div class="text-links">https://digitalsky.dgca.gov.in/home</div>
  </div>
      </div>
      </Link>
        </div>

        
        <div class="Portal-content-card">
        <Link to={"https://www.nth.gov.in/"}>

      <div className="con">
      <img src={Frame47}/>
          <p>National Test House</p>
          <div class="middle-portal">
      <div class="text-links">https://www.nth.gov.in/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://ipindiaonline.gov.in/trademarkefiling/user/frmNewRegistration.aspx"}>

      <div className="con">
      <img src={TM}/>
          <p>TradeMark Registration</p>
          <div class="middle-portal">
      <div class="text-links">https://ipindiaonline.gov.in/trademarkefiling/user/frmNewRegistration.aspx</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://services.gst.gov.in/services/login"}>
      <div className="con">
      <img src={GST}/>
          <p>GST Portal for Filling</p>
          <div class="middle-portal">
      <div class="text-links">https://services.gst.gov.in/services/login</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://ncte.gov.in/website/grievance.aspx"}>
      <div className="con">
      <img src={Frame47} />
          <p>Educational Complaints</p>
          <div class="middle-portal">
      <div class="text-links">https://ncte.gov.in/website/grievance.aspx</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://www.ceir.gov.in/Home/index.jsp"}>
      <div className="con">
      <img src={phblk} />
          <p>Phone Block Theft</p>
          <div class="middle-portal">
      <div class="text-links">https://www.ceir.gov.in/Home/index.jsp</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://stopncii.org/"}>
      <div className="con">
      <img src= {""} />
          <p>Inappropriate Photo Portal</p>
          <div class="middle-portal">
      <div class="text-links">https://stopncii.org/</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://irdai.gov.in/igms1"}>
      <div className="con">
      <img src= {""} />
          <p>Insurance Complaint Portal</p>
          <div class="middle-portal">
      <div class="text-links">https://irdai.gov.in/igms1</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"www.amalegalsolutions.com"}>
      <div className="con">
      <img src= {""} />
          <p>Online Dispute Resolution</p>
          <div class="middle-portal">
      <div class="text-links">www.amalegalsolutions.com</div>
  </div>
      </div>
      </Link>
        </div>

        <div class="Portal-content-card">
        <Link to={"https://airsewa.gov.in/grievance/grievance-redressal"}>
      <div className="con">
      <img src= {""} />
          <p>Airlines Complaint Portal</p>
          <div class="middle-portal">
      <div class="text-links">https://airsewa.gov.in/grievance/grievance-redressal</div>
  </div>
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
