import React, { useState, useEffect } from "react";
import Header from "../Nav/Header";
import "./pcomplaint.css";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import LoaderOverlay from "../../components/Loader/LoaderOverlay";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Admin() {
  const [isLoading, setisLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [user, setuser] = useState(null); // Change the initial state to null
  const navigate = useNavigate(); // Get the navigate function for redirection

  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "PoliceComplaintUsers")
        );

        const contacts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Contacts:", contacts);
        setContacts(contacts.slice().sort((a, b) => a.time - b.time));

        setisLoading(false);

        return contacts;
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
        return [];
      }
    };

    // Use onAuthStateChanged to observe changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        fetchData();
      } else {
        setuser(null);
        // Redirect to the login page if not authenticated
        navigate("/login");
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth, navigate]);

  if (isLoading || user === null) {
    return <LoaderOverlay loading={isLoading} />;
  }

  return (
    <>
      <Header />
      <LoaderOverlay loading={isLoading} />
      <div className="Admin">
        <div className="Admin-header">
          <h1>Welcome to DailySamadhan Admin Pannel</h1>
          <h1 className="res">
            {" "}
            To Access User's Data please Switch Your Screen to your Laptop or
            Dekstop.
            <br /> Sorry For Inconvenience{" "}
          </h1>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>State</th>
                  <th>Your Query</th>
                  <th>Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.state}</td>
                    <td>{contact.textarea}</td>
                    <td>
                      {contact.time ? contact.time.toDate().toString() : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
