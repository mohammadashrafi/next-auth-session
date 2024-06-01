"use client"
import React from 'react'

const RequestStorage =() => {

const handelClick= async()=>{
  var promise = document.hasStorageAccess();

console.log("start")
console.log("navigator.appCodeName",navigator.appCodeName)



// navigator.permissions.query({ name: "storage-access" }).then(async (result) => {
//     if (result.state === "granted") {
//         try {
//             console.log("Cookie access allowed. Calling requestStorageAccess()");
//             await document.requestStorageAccess();
//             console.log("Cookie access granted");
//             return true;
//           } catch (error) {
//             // This shouldn't really fail if access is granted
//             return false;
//           }
     
//     } else if (result.state === "prompt") {
//         console.log("Cookie access requires a prompt");
//         return false
   
//     }else if (result.state ==="denied"){
//         console.log("Cookie access denied");
//         return false;
//     }
//     // Don't do anything if the permission was denied.
//   });


  // API is available, proceed with the request

  promise.then(
    function (hasAccess) {
      // Boolean hasAccess says whether the document has access or not.
      if(hasAccess){
        
        document.requestStorageAccess()
        .then(() => {
          // Access granted, you can now read/write cookies
          console.log("document.cookie",document.cookie);
        })
        .catch((error) => {
          // Access denied or an error occurred
          console.error('Error requesting storage access:', error);
        });
      }else{
        console.log("not access to has access")
      }
 
    },
    function (reason) {
      console.log("Promise was rejected for some reason" + reason)
      // Promise was rejected for some reason.
    }
  );



 
 



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
      <button className='m-auto bg-red-500 p-5' onClick={handelClick}>storage</button>
<br />
      <button className='m-auto bg-green-500 p-5' onClick={handelaccessstorage}>access localstorage</button>
    </div>
  )
}

export default RequestStorage
