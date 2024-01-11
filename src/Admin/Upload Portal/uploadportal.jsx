import { useState } from "react";
import React from 'react'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL 
} from "firebase/storage"; 
import { db, storage } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

function UploadPortal() {
    const [title, settitle] = useState();
    const [Description, setdescription] = useState();
    const [Slug, setslug] = useState();
    const [url, seturl] = useState();
    const [Image, setimage] = useState("");
    const [percent, setpercent] = useState("");

   async function UploadtoFirebase(img){
    const data = {
        tittle: title,
        desc: Description,
        slug: Slug,
        Url: url,
        image: img,
      }
        try {
            const docRef = await setDoc(doc(db, "Portals",Slug), data);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    }
    function Submit(){
        handleUpload();
    }
    function handleUpload() {
        if (!Image) {
            alert("Please choose a file first!")
        }
     
        const storageRef = ref(storage,`/portals/${Image.name}`)
        const uploadTask = uploadBytesResumable(storageRef, Image);
     
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
     
                // update progress
                setpercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    UploadtoFirebase(url);
                });
            }
        ); 
    }

  return (
   <>
    <div className="title">
        <p><label htmlFor="Icon">Icon</label></p>
        <input type="file" accept="image/*" onChange={(event)=>setimage(event.target.files[0])}/>
        
        <p><label htmlFor="Title">Title</label></p>
        <input type="text" onChange={(e)=>settitle(e.target.value)}/>
        <p><label htmlFor="Description">Description</label></p>

        <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setdescription(e.target.value)}></textarea>
        <p><label htmlFor="Slug">Slug</label></p>

        <input type="text" onChange={(e)=>setslug(e.target.value)}/>
        <p><label htmlFor="URL">URL</label></p>

        <input type="text" onChange={(e)=>seturl(e.target.value)}/>
        <button onClick={Submit}>Submit</button>
    </div>
   </>
  )
}

export default UploadPortal

 
