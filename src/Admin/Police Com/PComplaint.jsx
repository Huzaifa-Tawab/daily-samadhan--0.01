import React, { useState, useEffect } from "react";
import Header from "../Nav/Header";
import "./pcomplaint.css";
import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";
import LoaderOverlay from "../../components/Loader/LoaderOverlay";

function Admin() {
  const [isLoading, setisLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "PoliceComplaintUsers"));

        // Extract data from the snapshot
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

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <LoaderOverlay loading={isLoading} />
      <div className="Admin">
        <div className="Admin-header">
          <h1>Welcome to DailySamadhan Admin Pannel</h1>
          <h1 className="res"> To Access User's Data please Switch Your Screen to your Laptop or Dekstop. <br /> Sorry For Inconvenience </h1>
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
