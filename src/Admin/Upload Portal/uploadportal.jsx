import { useState } from "react";
import React from 'react'
import {
    ref,
    uploadBytesResumable,
    getDownloadURL 
} from "firebase/storage"; 
import { db, storage } from "../../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import "../Upload Portal/upload.css";
import { FaCloudUploadAlt } from "react-icons/fa";

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
        <div className="form-wrap">
            <form>
            <h2 className="form-title">Upload <span className="portal">Portal</span></h2>
         <div className="form-field"> 
         
         <div class="file-wrapper">
         <div className="upload">Upload File</div>
      <div class="upload-btn-wrapper">
        
          <button class="btn upload-file font-weight-500">
          
              <span class="upload-btn">
              <FaCloudUploadAlt  className="ic"/>
                <i class="fas fa-cloud-upload-alt d-block font-50 pb-2"></i>
                
                Browse folders here
              </span>
              <span class="upload-select-button" id="blankFile">
                  Supports JPG, JPG2000 and PNG
              </span>
              <span class="success">
                <i class="far fa-check-circle text-success"></i>
              </span>
          </button>
                  
          <input type="file" name="selectfile" id="selectfile" onChange={(e)=>settitle(e.target.value)}/>
      </div>
  </div>


         <div className="form-group">
         <p><label htmlFor="Title">Title</label></p>
         <input className="inp" type="text" onChange={(e)=>settitle(e.target.value)}/>
         </div>
         
         <div className="form-group">
         <p><label htmlFor="Description">Description</label></p>
         <textarea className="inp" name="" id="" cols="30" rows="10" onChange={(e)=>setdescription(e.target.value)}></textarea>
         </div>
          
         <div className="form-group">
         <p><label htmlFor="Slug">Slug</label></p>

         <input className="inp"type="text" onChange={(e)=>setslug(e.target.value)}/>
         </div>
         <div className="form-group">
         <p><label htmlFor="URL">URL</label></p>
         <input  className="inp" type="text" onChange={(e)=>seturl(e.target.value)}/>
         </div>
         
         
         <button className="but" onClick={Submit}>Submit</button>
         </div> 
         
         </form>
    </div>
    </div>
   </>
  )
}

export default UploadPortal

 
