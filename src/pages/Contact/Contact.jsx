import { React, useState } from "react";
import "./contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import email from "../../assets/Contact/email.svg";
import loc from "../../assets/Contact/location.svg";
import web from "../../assets/Contact/web.svg";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import LoaderOverlay from "../../components/Loader/LoaderOverlay";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function Contact(props) {
  let id = props.id;
  let x = useParams();
  id = x.id;
  console.log(id);

  const navi = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [Name, setname] = useState("");
  const [Url, setUrl] = useState("");
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
    if ("" === Dispute) {
      settextareaError("Please describe your issue");
      return;
    }
    if (Check === false) {
      setcheckError("Please check the box to agree our terms");
      return;
    }
    // Authentication calls will be made here...
    setisLoading(true);
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
      setisLoading(false);

      console.error("Error adding document: ", e);
    }
    setisLoading(false);
  }
  useEffect(() => {
    switch (id) {
      case "edaakhil":
        setUrl("https://edaakhil.nic.in/");
        break;
      case "cybercrime":
        setUrl("https://cybercrime.gov.in/");
        break;
      case "consumer-help":
        setUrl("https://ncdrc.nic.in/");
        break;
      case "industrial-dispute":
        setUrl("https://samadhan.labour.gov.in/");
        break;
      case "women-helpline":
        setUrl("https://www.ncwwomenhelpline.in/");
        break;
      case "lost-and-found":
        setUrl("https://lostfound.delhipolice.gov.in/");
        break;
      case "consumer-dispute":
        setUrl("https://ncdrc.nic.in/");
        break;
      case "telecom-dispute":
        setUrl("https://tdsat.gov.in/Delhi/Delhi.php");
        break;
      case "food-safety":
        setUrl("https://fssai.gov.in/cms/grievances.php");
        break;
      case "drone-flying-license":
        setUrl("https://digitalsky.dgca.gov.in/home");
        break;
      case "national-test-house":
        setUrl("https://www.nth.gov.in/");
        break;
      case "trademark-registration":
        setUrl(
          "https://ipindiaonline.gov.in/trademarkefiling/user/frmNewRegistration.aspx"
        );
        break;
      case "gst-portal-for-filling":
        setUrl("https://services.gst.gov.in/services/login");
        break;
      case "educational-complaints":
        setUrl("https://ncte.gov.in/website/grievance.aspx");
        break;
      case "phone-block-theft":
        setUrl("https://www.ceir.gov.in/Home/index.jsp");
        break;
      case "inappropriate-photo-portal":
        setUrl("https://stopncii.org/");
        break;
      case "insurance-complaint-portal":
        setUrl("https://irdai.gov.in/igms1");
        break;
      case "online-dispute-resolution":
        setUrl("www.amalegalsolutions.com");
        break;
      case "airlines-complaint-portal":
        setUrl("https://airsewa.gov.in/grievance/grievance-redressal");
        break;

      default:
        navi("/404");
        break;
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="Form-main Contact-form">
        <div className="contact">
          <h1>
            Contact <span>Now</span>
          </h1>
          <div className="contact-box">
            <span>You can visit officail website by copying this link</span>

            <div className="mail-div">
              <img src={web} alt="" />
              <a href={Url} target="_blank" rel="noopener noreferrer">
                <h2>{Url}</h2>
              </a>
            </div>
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
          <span>Type of Dispute</span>

          <div className="form-dispute">
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
          <button type="submit" onClick={Submitform}>
            Submit
          </button>
        </div>
      </div>
      <div className="contact-button">
        <button>Contatct Us Now</button>
      </div>
      <LoaderOverlay loading={isLoading} />
      {/* <LoaderOverlay loading={true} /> */}

      <Footer />
    </>
  );
}

export default Contact;
