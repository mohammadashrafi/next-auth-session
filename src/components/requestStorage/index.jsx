"use client"
import React from 'react'

const RequestStorage =() => {

const handelClick= async()=>{

//   // Check if Storage Access API is supported
//   if (!document.requestStorageAccess) {
//     // Storage Access API is not supported so best we can do is
//     // hope it's an older browser that doesn't block 3P cookies
//     console.log("Storage Acccess API not supported. Assume we have access.")
//     return true;
//   }

//   // Check if access has already been granted
//   if (await document.hasStorageAccess()) {
//     console.log("Cookie access already granted");
//     return true;
//   }

navigator.permissions.query({ name: "storage-access" }).then(async (result) => {
    if (result.state === "granted") {
        try {
            console.log("Cookie access allowed. Calling requestStorageAccess()");
            await document.requestStorageAccess();
            console.log("Cookie access granted");
            return true;
          } catch (error) {
            // This shouldn't really fail if access is granted
            return false;
          }
     
    } else if (result.state === "prompt") {
        console.log("Cookie access requires a prompt");
        return false
   
    }else if (result.state ==="denied"){
        console.log("Cookie access denied");
        return false;
    }
    // Don't do anything if the permission was denied.
  });



}

const handelaccessstorage=() => {
  
// Get the parent window's document object
const parentDoc = window.parent.document;

// Access the parent window's cookies
const parentCookies = parentDoc.cookie;

// Do something with the parent cookies
console.log("parentCookies",parentCookies);


}


  return (
    <div>
      <button className='m-auto bg-red-500 p-5' onClick={handelClick}>click access storage</button>
<br />
      <button className='m-auto bg-green-500 p-5' onClick={handelaccessstorage}>access localstorage</button>
    </div>
  )
}

export default RequestStorage
