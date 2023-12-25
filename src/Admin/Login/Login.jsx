import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { db, auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Error, setError] = useState(false);

  const navigate = useNavigate();

  async function onButtonClick(e) {
    e.preventDefault();
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    // Authentication calls will be made here...
    setError(false);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        // const user = userCredential.user;
        console.log(userCredential.user.uid);

        const docSnap = await getDoc(
          doc(db, "ContactsUsers", userCredential.user.uid)
        );

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().userType);
          if (docSnap.data().userType === "admin") {
            navigate("/admin");
            localStorage.setItem("name", docSnap.data().name);
          }
        } else {
          // docSnap.data() will be undefined in this case
          setError("Email/Password Not correct");
        }

        // ...
      })
      .catch((error) => {
        setError(true);
        console.log(error);
        // const errorCode = error.code;
        setError("Email/Password Not correct");
      });
  }

  return (
    <>
      <Navbar />
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Login</div>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
