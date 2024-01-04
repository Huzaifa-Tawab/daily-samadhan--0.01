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

  const [Check, setcheck] = useState(false);
  // const [errorMessage, seterrorMessage] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [phoneerror, setphoneError] = useState("");
  // const [Nameerror, setnameError] = useState("");
  // const [Stateerror, setstateError] = useState("");
  // const [Textareaerror, settextareaError] = useState("");
  // const [Checkerror, setcheckError] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    textarea: "",
    check: "",
  });
  const handleClick = () => setcheck(!Check);
  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      state: "",
      textarea: "",
      check: "",
    };

    if (!Name.trim()) {
      newErrors.name = "Please enter your Name";
    } else if (!/^[A-Za-z\s]+$/.test(Name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!Email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!Phone.trim()) {
      newErrors.phone = "Please enter your Phone number";
    } else if (Phone.length ==10) {
      
    }else{
      newErrors.phone = "The number must be 10 digits";
    }

    if (!State.trim()) {
      newErrors.state = "Please enter your State";
    }

    // if (!Dispute.trim()) {
    //   newErrors.textarea = "Please describe your issue";
    // }

    if (!Check) {
      newErrors.check = "Please check the box to agree to our terms";
    }

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Your existing code for form submission
      setisLoading(true);

      try {
        const docRef = await addDoc(collection(db, "ContactsUsers"), {
          name: Name,
          portal: id,
          email: Email,
          phone: Phone,
          state: State,
          Dispute: Dispute,
          check: Check,
          time: serverTimestamp(),
        });

        navi("/thanks/" + docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setisLoading(false);
    }
  };
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
      case "in":
        setUrl("");
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
            {Url == "" ? (
              <></>
            ) : (
              <>
                <span>
                  You can visit offical{" "}
                  <a
                    className="bold-a"
                    href={Url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    website
                  </a>{" "}
                  by clicking on the text below
                </span>
                <div className="mail-div">
                  <img src={web} alt="" />
                  <a href={Url} target="_blank" rel="noopener noreferrer">
                    <h2>{id}</h2>
                  </a>
                </div>
              </>
            )}

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
            <label className="errorLabel">{errors.name}</label>
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
            <label className="errorLabel">{errors.email}</label>
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
            <label className="errorLabel">{errors.phone}</label>
          </div>
          <div className="form-state">
  <label htmlFor="state">State</label>
  <select
    id="state"
    value={State}
    onChange={(e) => setstate(e.target.value)}
  >
    <option value="">Select a State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="West Bengal">West Bengal</option>
  </select>
  <br />
  <label className="errorLabel">{errors.state}</label>
</div>
          <span>Type of Dispute</span>

          <div className="form-dispute">
            <textarea
              name=""
              id=""
              cols="33"
              rows="3"
              onChange={(e) => setdispute(e.target.value)}
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
            <label className="errorLabel">{errors.textarea}</label>
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
              I have read & agreed to the Company's Terms and Conditions,
              disclaimer and refund policy, and also ready to accept calls, sms,
              emails, etc.
            </span>
            <br />
            <label className="errorLabel">{errors.check}</label>
          </div>
          <button type="submit" onClick={handleSubmit}>
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
