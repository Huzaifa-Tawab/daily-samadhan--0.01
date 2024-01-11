import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

function Salman() {
  const [Portal, setPortal] = useState({});
  useEffect(() => {
    getData;
  }, []);
  async function getData() {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  return <div>Salman</div>;
}

export default Salman;